import axios from "axios";
import React, { useEffect, useState } from "react";
import "./listUser.css";

import { Link } from "react-router-dom";

import Item from "../ItemListContainer/item/item";

const ListUser = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("https://api.github.com/users").then((response) => {
      setChars(response.data);
  });
  }, []);

  return (
    <div className="Cards-List">
      {chars.map((char) => {
        return (
          <div key={char.id}>
            <Link to={`/details/${char.login}`}> 
              <Item data={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListUser;
