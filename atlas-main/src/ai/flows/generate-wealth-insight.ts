'use server';
/**
 * @fileOverview A GenAI flow for generating brief, general informational snippets about financial concepts.
 *
 * - generateWealthInsight - A function that generates a wealth insight snippet.
 * - GenerateWealthInsightInput - The input type for the generateWealthInsight function.
 * - GenerateWealthInsightOutput - The return type for the generateWealthInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWealthInsightInputSchema = z.object({
  concept: z.string().describe('A general financial concept (e.g., international trusts, diversified portfolio).'),
});
export type GenerateWealthInsightInput = z.infer<typeof GenerateWealthInsightInputSchema>;

const GenerateWealthInsightOutputSchema = z.object({
  snippet: z.string().describe('A brief, generalized informational snippet about the financial concept, suitable for a landing page demo and not offering financial advice.'),
});
export type GenerateWealthInsightOutput = z.infer<typeof GenerateWealthInsightOutputSchema>;

export async function generateWealthInsight(input: GenerateWealthInsightInput): Promise<GenerateWealthInsightOutput> {
  return generateWealthInsightFlow(input);
}

const generateWealthInsightPrompt = ai.definePrompt({
  name: 'generateWealthInsightPrompt',
  input: {schema: GenerateWealthInsightInputSchema},
  output: {schema: GenerateWealthInsightOutputSchema},
  prompt: `You are an AI assistant designed to provide very brief, general, and non-advisory informational snippets about financial concepts.

Given the financial concept, generate a concise, 1-2 sentence informational snippet that illustrates intelligent capabilities without offering specific financial advice. The snippet should be suitable for a product landing page demonstration.

Financial Concept: {{{concept}}}`,
});

const generateWealthInsightFlow = ai.defineFlow(
  {
    name: 'generateWealthInsightFlow',
    inputSchema: GenerateWealthInsightInputSchema,
    outputSchema: GenerateWealthInsightOutputSchema,
  },
  async input => {
    const {output} = await generateWealthInsightPrompt(input);
    return output!;
  }
);
