import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://icanhazdadjoke.com/";

export const GetHeaders = () => {
  const [joke, setJoke] = useState("Random Joke");

  const fetchDadJoke = async () => {
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDadJoke();
  }, []);

  return (
    <main>
      <div className="title">
        <h1>
          <span>axios</span> tutorial
        </h1>
      </div>
      <section className="section text-center">
        <button className="btn" onClick={fetchDadJoke}>
          random joke
        </button>
        <p className="dad-joke">{joke}</p>
      </section>
    </main>
  );
};
