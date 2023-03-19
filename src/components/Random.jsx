import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Random = () => {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {   
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  }

  return (
    <div className="container">
      <h1>Random</h1>
      <img src={gif} alt="Random Gif" width="500"/>
      <button onClick={handleClick}> Click For New </button>
    </div>
  );
};
