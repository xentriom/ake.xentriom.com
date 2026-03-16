import { NextRequest, NextResponse } from "next/server";
import { efCodes } from "@/drizzle/schema";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const codes = await db.select().from(efCodes);
  return NextResponse.json(codes);
}
