import Cookies from 'cookies'

export default function (req, res, next) {
  const cookies = new Cookies(req, res)

  const loadingPage = req.url === '/_loading/sse'
  const PageLogin = req.url === '/'
  const token = cookies.get('token')

  if (!loadingPage && !PageLogin && !token && req.url !== '/settoken') {
    res.writeHead(301, { Location: '/' })
    res.end()
  }

  if (!loadingPage && PageLogin && token) {
    res.writeHead(301, { Location: '/dashboard' })
    res.end()
  }

  if (req.url === '/settoken' && req.url !== '/_loading/sse') {
    cookies.set('token', 'Bearer TOKEN', {
      maxAge: 3600000 * 12,
      httpOnly: true // true by default
    })
  }

  next()
}
