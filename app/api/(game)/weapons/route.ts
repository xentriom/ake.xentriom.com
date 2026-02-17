import { NextResponse } from "next/server";
import weapons from "../../../../public/weapons.json";

export const GET = async () => {
  return NextResponse.json(weapons);
};
