import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonSprite from "./PokemonSprite";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H6 from "@material-tailwind/react/Heading6";

const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export default function PokemonList() {
  const [post, setPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const tony = {
    name: 'Tony',
    url: 'www.google.com'
  }
  function getData() {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.results);
      })
      .catch((error) => {
        alert("Axios GET request failed");
      });
  }

  if (!post) return <p>Sorry, no results.</p>;

  return (
    <div>
      <div className="p-10">
        <input
          type="text"
          placeholder="Search Pokemon..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {post
          .filter((data) => {
            if (searchTerm == "") {
              return data;
            } else if (
              data.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            } 
          })
          .map((data, idx) => (
            <div className="p-5" key={idx}>
              <Card>
                <PokemonSprite url={data.url} />
                <CardBody>
                  <H6 color="gray">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</H6>
                </CardBody>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
