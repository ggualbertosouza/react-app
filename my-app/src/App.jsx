import "./App.css";
import { useState } from "react";
import { Tweet } from "./tweet";

function App() {
  const [tweets, setTweet] = useState(["tweet 1", "tweet 2", "tweet 3"]);

  function createTweet() {
    setTweet([...tweets, "tweet 4"]);
  }
  return (
    <div>
      <Tweet text={tweets} />
      <button onClick={createTweet}>Entrar</button>
    </div>
  );
}

export default App;
