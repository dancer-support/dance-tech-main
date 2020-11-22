require('dotenv').config()

function getValidConfig (configEnv, keys) {
  const { config, missingKeys } = keys.reduce(
    (acc, key) => {
      if (!configEnv[key]) {
        acc.missingKeys.push(key)
      } else {
        acc.config[key] = configEnv[key]
      }
      return acc
    },
    { config: {}, missingKeys: [] }
  )

  if (missingKeys.length) {
    throw new Error(`Env key is missing : ${missingKeys.join(', ')}`)
  }
  return config
}

export const getConfigForKeys = (keys) => {
  const configEnv = {
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    VUE_APP_FIREBASE_API_KEY: process.env.VUE_APP_FIREBASE_API_KEY,
    VUE_APP_FIREBASE_AUTH_DOMAIN: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    VUE_APP_FIREBASE_DATABASE_URL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    VUE_APP_FIREBASE_PROJECT_ID: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    VUE_APP_FIREBASE_STORAGE_BUCKET:
      process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    VUE_APP_FIREBASE_MESSAGING_SENDER_ID:
      process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    VUE_APP_FIREBASE_APP_ID: process.env.VUE_APP_FIREBASE_APP_ID,
    VUE_APP_FIREBASE_MEASUREMENT_ID: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
  }
  return getValidConfig(configEnv, keys)
}
