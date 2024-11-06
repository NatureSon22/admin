import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const fetchBots = async (req, res) => {
  try {
    const response = await fetch(
      "https://getcody.ai/web/bots?includes=directories,avatar_file.url,bot_steps,bot_output_types&page=1&per_page=15",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cookie: process.env.COOKIE,
          "x-xsrf-token": process.env.XSRF,
           "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36"
        },
      }
    );

    const data = await response.json();
    res
      .status(200)
      .json({ data: data, cookie: process.env.COOKIE, xsrf: process.env.XSRF });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { fetchBots };
