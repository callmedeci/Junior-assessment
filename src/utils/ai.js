import { GoogleGenAI } from '@google/genai';

export const ai = new GoogleGenAI({
  apiKey: 'AIzaSyB1wZ83KEdGKvHPytlCGF2EMOYgECgk5p4',
});

export async function generateContext(content) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: content,
  });

  return response;
}
