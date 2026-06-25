const BASE_URL = "https://dummyjson.com/products";

export async function getLandingData() {
  const response = await fetch(`${BASE_URL}?limit=5`);

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}