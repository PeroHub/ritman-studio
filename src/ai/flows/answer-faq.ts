// This file contains the Genkit flow for answering FAQs.

'use server';

/**
 * @fileOverview An AI agent that answers frequently asked questions about the college.
 *
 * - answerFAQ - A function that answers a user's question about the college.
 * - AnswerFAQInput - The input type for the answerFAQ function.
 * - AnswerFAQOutput - The return type for the answerFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerFAQInputSchema = z.object({
  question: z.string().describe('The question to answer.'),
});
export type AnswerFAQInput = z.infer<typeof AnswerFAQInputSchema>;

const AnswerFAQOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AnswerFAQOutput = z.infer<typeof AnswerFAQOutputSchema>;

export async function answerFAQ(input: AnswerFAQInput): Promise<AnswerFAQOutput> {
  return answerFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerFAQPrompt',
  input: {schema: AnswerFAQInputSchema},
  output: {schema: AnswerFAQOutputSchema},
  prompt: `You are a helpful AI chatbot for Ritman College. Answer the following question about the college:\n\nQuestion: {{{question}}}`,
});

const answerFAQFlow = ai.defineFlow(
  {
    name: 'answerFAQFlow',
    inputSchema: AnswerFAQInputSchema,
    outputSchema: AnswerFAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
