import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./config";

function App() {

  const [showInput, setShowInput] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [alloyUserId, setAlloyUserId] = useState("");

  useEffect(() => {
  }, []);

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      let response;

      try {
        let data = { userId: event.target.value };
        try {
          response = await axios.post(`${baseUrl}/user`, data);
        } catch (err) {
          console.log(`there was an error: ${err}`);
        }

        if (response) {
          setAlloyUserId(event.target.value);
          setShowInput(false);
          setShowButton(true);
        }
      } catch (e) {
        console.log(`An error occurred: ${e}`);
      }
    }
  };

  const handleAuth = async () => {
    let response = await axios.get(
      `${baseUrl}/token/${alloyUserId}`
    );
    window.Alloy.setToken(response.data.token);
    window.Alloy.authenticate({
      app: "shopify",
      callback: (data) => {
        if (data) {
          const connectionId = data.connectionId;
          alert(`A connection was created. ConnectionId: ${connectionId}. Find more information in the console.`)
          console.log('-----------------------------')
          console.log(`connectionId: ${connectionId}`);
          console.log(data)
          console.log('-----------------------------')  
        }
      },
    });
  };

  return (
    <div>
      <div>
        <h1>Hello from Alloy!</h1>
        <p>Enter your username to create an account</p>
        {showInput && <input type="text" onKeyPress={handleKeyPress} />}
        {showButton && <button onClick={handleAuth}>Click Me</button>}
      </div>
    </div>
  );
}

export default App;
