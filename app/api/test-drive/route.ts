import dbConnect from "@/lib/db";
import TestDrive from "@/model/TestDrive";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { date, hour, province, name, phone, email, content, car } =
    await req.json();

  if (
    !name.trim() ||
    !phone.trim() ||
    !email.trim() ||
    !province ||
    !car ||
    !date
  )
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const testDrive = new TestDrive({
    date,
    hour,
    province,
    name,
    phone,
    email,
    content,
    car,
  });

  await testDrive.save();

  return NextResponse.json(testDrive, {
    status: 201,
  });
}
