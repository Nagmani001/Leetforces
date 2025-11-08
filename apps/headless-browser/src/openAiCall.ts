import { openai } from ".";

export async function openAiCall(randomName: string) {

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [{
      role: "user",
      content: [
        { type: "input_text", text: "given image of this codeforces problem can you tell me the problem title , 's time limit , problem's memory limit problem's description before the test cases the actual test cases the problems's description after test" },
        //@ts-ignore
        {
          type: "input_image",
          //@ts-ignore
          image_url: `https://leetforces.s3.ap-south-1.amazonaws.com/${randomName}.png`,
        },
      ],
    }],
  });
  return response;
}
