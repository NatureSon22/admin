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
          cookie: process.env.COOKIE,
          "x-xsrf-token": process.env.XSRF,
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { fetchBots };
