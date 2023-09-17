import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    await dbConnect();
    const car = await Car.findOne({ slug });

    return NextResponse.json(car);
  } catch (error) {
    console.log("CAR_GET", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get("secret");

    if (!secret || secret !== process.env.API_SECRET_KEY)
      return NextResponse.json(
        { error: "Unauthorized request!" },
        {
          status: 403,
        }
      );

    const {
      name,
      slogan,
      priceFrom,
      slug,
      category,
      tier,
      avatar,
      colors,
      mainInfo,
      carLines,
    } = await req.json();

    if (
      !name ||
      !name.trim() ||
      !slug ||
      !slug.trim() ||
      !priceFrom ||
      !avatar ||
      !category ||
      !carLines.length ||
      !colors.length
    )
      return NextResponse.json(
        { error: "Invalid request body!" },
        {
          status: 422,
        }
      );

    await dbConnect();

    const car = new Car({
      name,
      slogan,
      priceFrom,
      slug,
      category,
      tier,
      avatar,
      colors,
      mainInfo,
      carLines,
    });

    await car.save();

    return NextResponse.json(car, {
      status: 201,
    });
  } catch (error) {
    console.log("CAR_POST", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
