import dbConnect from "@/lib/db";
import Contact from "@/model/Contact";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { car, carLine, content, email, name, phone, province, service } =
    await req.json();

  if (!name.trim() || !phone.trim() || !email.trim() || !province || !service)
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const contact = new Contact({
    car,
    carLine,
    content,
    email,
    name,
    phone,
    province,
    service,
  });

  await contact.save();

  return NextResponse.json(contact, {
    status: 201,
  });
}
