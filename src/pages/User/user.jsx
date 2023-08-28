import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/ItemListContainer/item/item";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  console.log("chars", chars);

  let { UserId } = useParams();

  let filteredCharacters = users.filter((user) => {
    return user.type === UserId;
  });


  useEffect(() => {
    axios("https://api.github.com/users").then((response) => {
      setChars(response.data);
  });
  }, []);

  return (
    <div className="Cards-List">
      {filteredCharacters.map((user) => {
        return (
          <div style={{ margin: 10 }} key={user.id}>
            <Item data={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserPage;
