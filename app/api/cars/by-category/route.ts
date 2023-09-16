import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const cars = await Car.find().select(
      "name slogan priceFrom slug category avatar mainInfo"
    );

    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    console.log("[CARS_BY_CATEGORY_GET", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
