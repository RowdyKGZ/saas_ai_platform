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
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("Open Api Key not configurate", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Message are required", { status: 400 });
    }

    const response: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k-0613",
        messages,
      });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[Conversation_Error]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
