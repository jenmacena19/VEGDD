import { NextResponse } from "next/server";

export async function POST(request: Request) {
    return NextResponse.json({message: "hello world"})
}

export async function GET(request: Request) {
    return NextResponse.json({message: "hello world"})
}