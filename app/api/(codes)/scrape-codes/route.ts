import { sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { efCodes } from "@/drizzle/schema";
import { db } from "@/lib/db";
import type { Code } from "./utils/parser";
import { sourceConfigs } from "./utils/sources";

export async function GET(req: NextRequest) {
  // Authorize the request using a secret token
  // https://vercel.com/docs/cron-jobs/manage-cron-jobs
  const authHeader = req.headers.get("Authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const mergedByCode = new Map<string, Code>();

  for (const source of sourceConfigs) {
    try {
      const res = await fetch(source.url);
      if (!res.ok) continue;

      const html = await res.text();
      const codes = source.parser(html);

      for (const incoming of codes) {
        const key = incoming.code;
        const existing = mergedByCode.get(key);

        if (!existing) {
          mergedByCode.set(key, incoming);
          continue;
        }

        if (existing.rewards.length === 0 && incoming.rewards.length > 0) {
          existing.rewards = incoming.rewards;
        }

        if (existing.notes.length === 0 && incoming.notes.length > 0) {
          existing.notes = incoming.notes;
        }
      }
    } catch {
      continue;
    }
  }

  const codes = Array.from(mergedByCode.values());
  if (codes.length > 0) {
    try {
      await db
        .insert(efCodes)
        .values(
          codes.map((c) => ({
            code: c.code,
            rewards: c.rewards,
            notes: c.notes,
          })),
        )
        .onConflictDoUpdate({
          target: efCodes.code,
          set: {
            rewards: sql`EXCLUDED.rewards`,
            notes: sql`EXCLUDED.notes`,
          },
        });
    } catch (error: any) {
      return NextResponse.json(
        { message: "Failed to update codes", error: error.message },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({ message: "Codes scraped successfully" });
}
