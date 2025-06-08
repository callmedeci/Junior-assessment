import { GoogleGenAI } from '@google/genai';

/**
 * @module aiService
 * @description This module initializes the Google Gemini AI client and provides
 * a function to generate content using the Gemini 2.0 Flash model.
 */

/**
 * Initializes the Google Generative AI client.
 * This instance is used to interact with various Gemini models.
 */
export const ai = new GoogleGenAI({
  apiKey: 'AIzaSyB1wZ83KEdGKvHPytlCGF2EMOYgECgk5p4',
});

/**
 * @module aiService
 * @description This module initializes the Google Gemini AI client and provides
 * a function to generate content using the Gemini 2.0 Flash model.
 */

/**
 * Initializes the Google Generative AI client.
 * This instance is used to interact with various Gemini models.
 */
export async function generateContext(content) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: content,
  });

  return response;
}
