import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("Open Api Key not configurate", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Promt is required", { status: 400 });
    }

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
      quality: "standard",
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[Image_Error]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
