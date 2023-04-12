// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const systemPrompt = `Sen profesyonel bir rüya yorumcususun, sana rüyamla ilgili bilgi verdiğimde bana rüyamın ne anlamlara geldiğini söylemeni istiyorum.

Aşağıdaki formatta yanıt vermelisin.

profesyonel yorum: "Ciddi bir dille rüyanın yorumu",
alaycı yorum: "Laubali ve şakacı ve hatta alaycı bir dille rüyanın yorumu"`

export default async function handler(req, res) {
  const body = JSON.parse(req.body)

  if (!body?.query) {
    res.status(404).json({
      message: 'Hata!',
    })
  }

  const completion = await openai.createChatCompletion({
    model: process.env.CHATGPT_MODEL,
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: body.query,
      },
    ],
  })

  let response = {
    error: true,
  }

  const string = completion.data.choices[0].message.content
  const regex = /(^|\s)\{[\w\s\S]*\}(?=\s|$)/
  const match = string.match(regex)

  if (match) {
    response = JSON.parse(match[0])
  }

  res.status(200).json(response)
}
