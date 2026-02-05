import { NextResponse } from "next/server";
import threats from "../../public/threats.json";

export const GET = async () => {
  return NextResponse.json(threats);
};
