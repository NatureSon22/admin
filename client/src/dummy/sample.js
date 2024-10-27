import axios from "axios";

// Set up headers from your provided data
const headers = {
  authority: "getcody.ai",
  method: "GET",
  path: "/web/bots?includes=directories,avatar_file.url,bot_steps,bot_output_types&page=1&per_page=15",
  scheme: "https",
  accept: "application/json",
  "accept-encoding": "gzip, deflate, br, zstd",
  "accept-language": "en-US,en;q=0.9",
  cookie: import.meta.env.VITE_COOKIE,
  priority: "u=1, i",
  referer: "https://getcody.ai/bots",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-xsrf-token":
    "eyJpdiI6InhsUnlEd2NxUlV2eExuOXltVHpZdkE9PSIsInZhbHVlIjoid1hLNkZORzhic3NoNFFlMUVocDh5RHdZQUU0R1ZveFpMT1JlclN4M3E0TW96enVvSGYybVVUdjNTVnlPS0w1OWVzY2xaNDkxNTJKcUZlMld4VnJld09kQ1dBcDFpdnprbThkQy9YR2ZtOXYrU3VUSU1xQ3g0eS9yaDkrUEw3UEEiLCJtYWMiOiJiODdhYmFjMjdkNzY1ZDEzZTc5MzgzMjRmODk3MmM3YzMxNWE3M2IzYjc5YmFkNTA5ZjY0MTdiNmMyNjA2ZjdmIiwidGFnIjoiIn0=",
};

const fetchBots = async () => {
  try {
    const response = await fetch(
      "https://getcody.ai/web/bots?includes=directories,avatar_file.url,bot_steps,bot_output_types&page=1&per_page=15",
      {
        method: "GET",
        credentials: "include",
        crossOrigin: "https://getcody.ai",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
          "authority": "getcody.ai",
          "method": "GET",
          "scheme": "https",
          "accept-encoding": "gzip, deflate, br, zstd",
          "accept-language": "en-US,en;q=0.9",
          priority: "u=1, i",
          referer: "https://getcody.ai/bots",
          "sec-ch-ua":
            '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.142.86 Safari/537.36",
          cookie: import.meta.env.VITE_COOKIE,
          "x-xsrf-token": import.meta.env.VITE_XSRF,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default fetchBots;
