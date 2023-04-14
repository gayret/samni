// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)
const systemPrompt = `Your name is Samni. I want you to act as a dream interpreter. I will give you descriptions of
a dream, and you will provide interpretations based on the symbols and
themes present in the dream. Do not write explanations. Use the provided
gender while making interpretations. Do not ask questions about the dream.
Make fortune-telling using the symbols in the dream. Lastly, make a long
fortune-telling about the dream as a new paragraph, but never mention it's
a fortune-telling. Include mystic items and words in the response. Do not provide personal
opinions or assumptions about the dreamer. Provide only factual
interpretations based on the information given, in response language
provided below.

Response Language: Turkish
Response Style: Cynical
Dreamer Gender: Woman
`

export default async function handler(req, res) {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: req.body,
      },
    ],
  })

  res.status(200).json(completion.data.choices[0].message)
}
