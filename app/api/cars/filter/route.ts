import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { query, sortBy, limit, currentPage } = await req.json();

  let line: string[] = [];
  let price: string[] = [];
  let fuel: string[] = [];
  let seats: string[] = [];
  let kind: string[] = [];

  if (query) {
    line = query.line;
    price = query.price;
    fuel = query.fuel;
    seats = query.seats;
    kind = query.kind;
  }

  let carQuery = {} as any;

  if (line.length) {
    carQuery.name = line;
  }

  if (fuel.length) {
    carQuery["mainInfo.fuel"] = fuel;
  }

  if (seats.length) {
    const newSeats = seats.map((seat) => Number(seat));
    carQuery["mainInfo.seats"] = newSeats;
  }

  if (kind.length) {
    carQuery.category = kind;
  }

  let sortObj: {
    priceFrom?: number;
    name?: number;
    "carLines.price"?: number;
  } = {};

  if (sortBy) {
    switch (sortBy) {
      case "asc":
        sortObj.priceFrom = -1;
        break;
      case "desc":
        sortObj.priceFrom = 1;
        break;
      case "a-z":
        sortObj.name = 1;
    }
  }

  if (price.length) {
    carQuery.$or = [];
    price.forEach((item) => {
      switch (item) {
        case "Dưới 500 triệu":
          carQuery.$or = [...carQuery.$or, { priceFrom: { $lte: 500 } }];
          break;
        case "500 triệu - 700 triệu":
          carQuery.$or = [
            ...carQuery.$or,
            { priceFrom: { $gte: 500, $lte: 700 } },
          ];
          break;
        case "700 triệu - 1 tỷ":
          carQuery.$or = [
            ...carQuery.$or,
            { priceFrom: { $gte: 700, $lte: 1000 } },
          ];
          break;
        case "1 tỷ - 2 tỷ":
          carQuery.$or = [
            ...carQuery.$or,
            { priceFrom: { $gte: 1000, $lte: 2000 } },
          ];
          break;
      }
    });
  }

  await dbConnect();

  const cars = await Car.find(carQuery)
    .sort(sortObj as any)
    .select("_id name avatar carLines priceFrom slug")
    .limit(limit)
    .skip((currentPage - 1) * limit);

  const carsLength = (await Car.find(carQuery).sort(sortObj as any)).length;

  if (!cars.length) {
    return NextResponse.json("Found no cars", {
      status: 404,
    });
  }

  return NextResponse.json(
    { cars, carsLength },
    {
      status: 200,
    }
  );
}
