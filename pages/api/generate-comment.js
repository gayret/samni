// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)
const systemPrompt = `Sen profesyonel bir rüya yorumcususun, sana rüyamla ilgili bilgi verdiğimde bana rüyamın ne anlamlara geldiğini söylemeni istiyorum.

Yanıtların tamamı laubali, şakacı ve hatta alaycı bir dille yorumu olmalı`

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
