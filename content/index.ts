import * as contentful
export client = contentful.createClient({
  space: proses.env.CONTENTFUL_SPACE_ID
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})
