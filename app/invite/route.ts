import { redirect } from "next/navigation";

export function GET() {
  redirect("https://discord.com/oauth2/authorize?client_id=1463987008157389005");
}
