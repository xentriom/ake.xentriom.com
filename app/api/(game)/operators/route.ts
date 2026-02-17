import { NextResponse } from "next/server";
import operators from "../../public/operators.json";

export const GET = async () => {
  return NextResponse.json(operators);
};
