import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");

    await dbConnect();
    const registration = await Car.findOne({ name }).select("registration");

    return NextResponse.json(registration);
  } catch (error) {
    console.log("CAR_REGISTRATION_GET", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
