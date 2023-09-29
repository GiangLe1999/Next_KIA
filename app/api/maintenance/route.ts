import dbConnect from "@/lib/db";
import Maintenance from "@/model/Maintenance";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { date, hour, province, name, phone, email, content } =
    await req.json();

  if (!name.trim() || !phone.trim() || !email.trim() || !province || !date)
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const maintenance = new Maintenance({
    date,
    hour,
    province,
    name,
    phone,
    email,
    content,
  });

  await maintenance.save();

  return NextResponse.json(maintenance, {
    status: 201,
  });
}
