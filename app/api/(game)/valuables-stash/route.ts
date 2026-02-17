import { NextResponse } from "next/server";
import valuablesStash from "../../../../public/stash.json";

export const GET = async () => {
  return NextResponse.json(valuablesStash);
};
