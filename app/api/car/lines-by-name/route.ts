import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const car = searchParams.get("car");

    await dbConnect();
    const cars = await Car.findOne({ name: car }).select("carLines -_id");

    const carLinesNameArr = cars.carLines.map((line: any) => line.name);

    return NextResponse.json(carLinesNameArr);
  } catch (error) {
    console.log("GET_CAR_LINES_BY_NAME", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
