import { NextResponse } from "next/server";
import essence from "@/public/essence.json";

export const GET = async () => {
  return NextResponse.json(essence);
};
