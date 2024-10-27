import fetchBots from "@/dummy/sample";
import { useEffect } from "react";

const DashBoard = () => {
  useEffect(() => {
    fetchBots();
  }, []);

  return <div>DashBoard</div>;
};

export default DashBoard;
