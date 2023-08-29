import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/ItemListContainer/item/item";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  console.log("Dentro")

  let { userType } = useParams();

  let filteredUsers = users.filter((user) => {
    return user.type === userType;
  });

  useEffect(() => {
    axios("https://api.github.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="Cards-List">
      {filteredUsers.map((user) => (
        <div style={{ margin: 10 }} key={user.id}>
          <Item data={user} />
        </div>
      ))}
    </div>
  );
};

export default UserPage;