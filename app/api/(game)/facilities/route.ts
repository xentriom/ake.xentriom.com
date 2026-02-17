import { NextResponse } from "next/server";
import facilities from "@/public/facilities.json";

export const GET = async () => {
  return NextResponse.json(facilities);
};
