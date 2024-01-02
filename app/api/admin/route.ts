import { currentUserRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const currentRole = await currentUserRole();
  if (currentRole === UserRole.ADMIN)
    return new NextResponse(null, { status: 200 });
  return new NextResponse(null, { status: 403 });
}
