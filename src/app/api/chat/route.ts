import { anthropic } from "@ai-sdk/anthropic";
import {
  streamText,
  createUIMessageStreamResponse,
  convertToModelMessages,
  type UIMessage,
} from "ai";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: UIMessage[] };
  const modelMessages = await convertToModelMessages(messages);

  return createUIMessageStreamResponse({
    stream: streamText({
      model: anthropic("claude-sonnet-4-20250514"),
      system: SYSTEM_PROMPT,
      messages: modelMessages,
    }).toUIMessageStream(),
  });
}
