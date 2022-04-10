#!/usr/bin/env node

const request = require('request')
const { google } = require('googleapis')
const fs = require('fs')
const readline = require('readline')
const { join } = require('path')
const yaml = require('js-yaml')

const CWD = process.cwd()

try {
  const hexo = yaml.load(fs.readFileSync(join(CWD, '_config.yml'), 'utf8'))

  const UrlsFile = join(CWD, hexo.public_dir, 'google.txt')
  const [client_email, private_key] = process.argv.splice(2)

  function readFileToArr(fReadName) {
    return new Promise((resolve, reject) => {
      try {
        const fRead = fs.createReadStream(fReadName, 'utf8')
        const objReadline = readline.createInterface({ input: fRead })
        const arr = new Array()
        objReadline.on('line', (line) => arr.push(line))
        objReadline.on('close', () => resolve(arr))
      } catch (error) {
        reject(error)
      }
    })
  }

  const jwtClient = new google.auth.JWT(
    client_email,
    null,
    private_key.replace(/(\\|\\\\)n/g, '\n'),
    ['https://www.googleapis.com/auth/indexing'],
    null
  )

  jwtClient
    .authorize()
    .then((tokens) => {
      readFileToArr(UrlsFile)
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            const options = {
              url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              auth: { bearer: tokens.access_token },
              json: {
                url: data[i],
                type: 'URL_UPDATED'
              }
            }
            request(options, function (error, response, body) {
              console.log('Google response: ', body)
            })
          }
        })
        .catch((error) => console.error(error))
    })
    .catch((error) => console.error(error))
} catch (error) {
  console.error(error)
}
