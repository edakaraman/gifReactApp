import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Tag = () => {
  const [search, setSearch] = useState("dog");
  const [gif, setGif] = useState("");

  const fetchGif = async (search) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&search=${search}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(search);
  }, [search]);



  return (
    <div className="container">
      <h1>Random {search} Gif </h1>
      <img src={gif} alt="Random Gif" width="500" />
      <div className="tag-container">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
      </div>
    </div>
  );
};
