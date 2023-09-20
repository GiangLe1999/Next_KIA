import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();
    let cars = [];

    cars = await Car.find();
    return NextResponse.json(cars);
  } catch (error) {
    console.log("[GET_CARS]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
