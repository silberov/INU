export async function postDataToPath(path, data) {
  const BASE_URL = process.env.REACT_APP_BACK_END_URL;
  const url = `${path}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
  return response.json();
}
