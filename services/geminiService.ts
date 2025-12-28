
import { GoogleGenAI, Type } from "@google/genai";
import { MenuSuggestion } from "../types";

export const generateMenuSuggestion = async (
  eventType: string,
  guests: number,
  additionalDetails: string
): Promise<MenuSuggestion | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Design a professional catering menu for an off-site ${eventType} with ${guests} guests. The menu must be suitable for delivery and on-site service at a temporary venue. Focus on gourmet catering presentation. Additional client requirements: ${additionalDetails}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            appetizers: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 appetizers suitable for catering service"
            },
            mainCourses: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 2-3 buffet or plated main course options"
            },
            desserts: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 2 signature catered desserts"
            },
            drinks: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 2 drink pairings or beverage station ideas"
            },
            concept: {
              type: Type.STRING,
              description: "The overall catering theme or culinary vision in 1 sentence."
            }
          },
          required: ["appetizers", "mainCourses", "desserts", "drinks", "concept"]
        }
      }
    });

    const text = response.text.trim();
    // Defensive check for markdown blocks even though responseMimeType is set
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const cleanJson = jsonMatch ? jsonMatch[0] : text;
    
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("Failed to generate menu suggestion:", error);
    return null;
  }
};
