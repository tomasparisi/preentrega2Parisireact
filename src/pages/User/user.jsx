import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/ItemListContainer/item/item";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  console.log("users", users);

  let { user } = useParams(); 

  useEffect(() => {
    axios("https://api.github.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  let filteredUsers = users.filter((u) => u.login === user); 

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
