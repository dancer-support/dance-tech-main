import * as contentful from 'contentful'

export const createClient = (config) => {
  return contentful.createClient({
    space: config.CTF_SPACE_ID,
    accessToken: config.CTF_CDA_ACCESS_TOKEN
  })
}
