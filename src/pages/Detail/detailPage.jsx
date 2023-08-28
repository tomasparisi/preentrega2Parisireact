import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Item from "../../components/ItemListContainer/item/item";

const DetailPage = () => {
  const [users, setUsers] = useState([]); 

  console.log(users);

  let { id } = useParams();

  useEffect(() => {
    axios(`https://api.github.com/users`).then((response) => {
      const filteredUsers = response.data.filter((user) => user.type === "User"); 
      setUsers(filteredUsers); 
    });
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {users.map((user) => (
        <Item key={user.id} data={user} /> 
      ))}
    </div>
  );
};

export default DetailPage;
