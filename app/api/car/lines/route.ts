import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();
    let cars = await Car.find().select("name carLines");

    return NextResponse.json(cars);
  } catch (error) {
    console.log("GET_CAR_LINES", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
