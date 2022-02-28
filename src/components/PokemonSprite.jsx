import axios from "axios";
import React, { useEffect, useState } from "react";
import CardImage from "@material-tailwind/react/CardImage";
import Tony from "../images/tony.jpg";

export default function PokemonList(url) {
  const [post, setPost] = useState();

  const getUpdatedImage = async (imageUrl) => {
    const response = await axios.get(imageUrl);
    setPost(response.data);
    return post;
  };
  useEffect(() => {
    getUpdatedImage(url.url);
  }, [url]);

  if (!post) return <p>Sorry, no results.</p>;
  if(post.name == "golem") {
    return (
        <div>
          <CardImage src={Tony} alt="Card Image" />
        </div>
      );
  } else {
    return (
        <div>
          <CardImage src={post.sprites.front_default} alt="Card Image" />
        </div>
      );
  }
  
}
