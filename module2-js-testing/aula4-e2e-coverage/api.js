const http = require('http')
const DEFAULT_USER = { username: "olaviolacerda", password: '123' }
const routes = {
  '/contact:get': (req, res) => {
    res.write('contact us page')
    return res.end()
  },

  '/login:post': async (req, res) => {
    // response eh um iterator
    for await (const data of req) {
      const user = JSON.parse(data)
      if (
        user.username !== DEFAULT_USER.username ||
        user.password !== DEFAULT_USER.password
      ) {
        res.writeHead(401)
        res.write('Logging failed!')
        return res.end()
      }
    }
    res.write('Logging has succeeded!')
    return res.end()
  },

  default: (req, res) => {
    res.write('Hello world!')
    return res.end()
  }
}

const handler = function (req, res) {
  const { url, method } = req
  const routeKey = `${url}:${method.toLowerCase()}`
  const chosen = routes[routeKey] || routes.default
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  return chosen(req, res)
}

const PORT = 3000

const app = http.createServer(handler)
  .listen(PORT, () => console.log('app running at', PORT))

module.exports = app