import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const cars = await Car.find({}, "_id name avatar carLines priceFrom slug");
    return NextResponse.json(cars);
  } catch (error) {
    console.log("[GET_CARS_PRICE_PAGE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
