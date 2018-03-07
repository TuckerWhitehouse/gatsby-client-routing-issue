const express = require('express')

const app = express()
const root = __dirname

app.get('/some-custom-route', (req, res) => {
  res.sendFile('public/page1/index.html', { root })
})

app.get('/another-custom-route', (req, res) => {
  res.sendFile('public/page2/index.html', { root })
})

app.use(express.static('public'))

app.use((req, res) => res.sendFile('public/404.html', { root }))

app.listen(3000, () => console.log('Listening on port 3000'))
