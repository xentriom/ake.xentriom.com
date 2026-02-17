import { NextResponse } from "next/server";
import itemFiles from "@/public/items.json";

export const GET = async () => {
  return NextResponse.json(itemFiles);
};
