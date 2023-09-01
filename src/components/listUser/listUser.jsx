import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../ItemListContainer/item/item";
import "../listUser/listUser.css"

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://mocked-url.com/products").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="Cards-List">
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/details/${user.id}`}> 
            <Item data={user} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
