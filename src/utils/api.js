export async function postDataToPath(path, data) {
  const BASE_URL = process.env.REACT_APP_BACK_END_URL;
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, {
    method: "POST",
    credentials:"include", // send cookies to server
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response)
  return response.json();
}
