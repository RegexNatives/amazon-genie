import React, { useEffect } from "react";
import "./styles.css";
import ShopProducts from "./ShopProducts/ShopProducts";
import ChatBot from "../ChatBot/ChatBot";
const Homepage = () => {
  useEffect(() => {
    document.title = "Amazon";
  }, []);

  return (
    <>
      <ChatBot
        tryName="Try Amazon Genie"
        name="Amazon Genie"
        apiUrl={"/api/query/"}
        initialMessages={[
          { role: "assistant", message: "Hi! I'm Amazon Genie" },
          { role: "assistant", message: "How can I assist you today?" },
        ]}
      />
      <h1 className="homepage-title">Products</h1>
      <ShopProducts />
    </>
  );
};
export default Homepage;
