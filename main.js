import './style.css'
import { Configuration, OpenAIApi } from 'openai'
const config = new Configuration({
  apiKey: "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"
})
  
const openai = new OpenAIApi(configuration)
const response = await openai.createImage({
  prompt: "A cat wearing armor riding a TRex into battle",
  n: 1, //number of images requested
  size: "512x512",
})
console.log(response)

const img = document.createElement('img')
img.src = response.data.data[0].url
img.alt = "A cat wearing armor riding a TRex into battle"
document.body.appendChild(img)