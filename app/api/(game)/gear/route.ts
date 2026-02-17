import { NextResponse } from "next/server";
import gear from "../../public/gear.json";

export const GET = async () => {
  return NextResponse.json(gear);
};
