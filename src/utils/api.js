const BASE_URL = 'http://localhost:8080'

export async function postDataToPath(path, data) {
  const url = `${BASE_URL}/${path}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}