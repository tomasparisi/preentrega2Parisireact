import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

import Item from "../../components/ItemListContainer/item/item";

const DetailPage = () => {
  const [user, setUser] = useState([]); 

  console.log(user);

  let { id } = useParams();

  useEffect(() => {
    axios("https://api.github.com/users").then((response) => {
      setChars(response.data);
  });
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {user.id ? <Item data={user} /> : null}
    </div>
  );
};

export default DetailPage;
