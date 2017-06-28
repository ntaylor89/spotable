function getQueryString (url = window.location.href) {
  return url.slice(url.indexOf('?') + 1)
}

function getQueryParams (url = window.location.href) {
  const paramPairs = getQueryString(url).split('&')

  const params = {}
  paramPairs.forEach(p => {
    const [k, v] = p.split('=')
    params[k] = v
  })
  return params
}

function getQueryParam (name) {
  return getQueryParams()[name]
}

export { getQueryString, getQueryParams, getQueryParam }
