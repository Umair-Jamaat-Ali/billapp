import { prisma } from "@/config/dbPrisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const body = await req.json();

        console.log("body", body);

        const response = await prisma.bills.create({
            data: {
              customerNumber: body.customerNumber,
              address: body.address,
              units: body.units,
              status: body.status
          }})
          console.log("response", response);
          return NextResponse.json({message: "Bills successfully posted"})

    } catch (error) {
        return NextResponse.json({message: "something went wrong", error: JSON.stringify(error)})
    }
}

export const DELETE = async (req) => {
    try {
        const body = await req.json();

        console.log("body", body);

        const response = await prisma.bills.delete({
            where: { id: body.id }
            })
          console.log("response", response);
          return NextResponse.json({message: "Bills successfully delete"})

    } catch (error) {
        return NextResponse.json({message: "something went wrong", error: JSON.stringify(error)})
    }
}


export const PUT = async (req) => {
    try {
        const body = await req.json();

        console.log("body", body);

        const response = await prisma.bills.update({
            where: { id: body.id },
            data: { status: true }
            })
          console.log("response", response);
          return NextResponse.json({message: "Bills successfully update"})

    } catch (error) {
        return NextResponse.json({message: "something went wrong", error: JSON.stringify(error)})
    }
}