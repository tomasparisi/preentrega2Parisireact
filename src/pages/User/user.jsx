import axios from "axios";
import { useParams } from "react-router-dom";
import Item from "../../components/ItemListContainer/item/item";

const UserPage = () => {
  const [chars, setChars] = useState([]);

  console.log("chars", chars);

  let { UserId } = useParams();

  let filteredCharacters = chars.filter((char) => {
    return char.type === UserId;
  });


  useEffect(() => {
    axios("https://api.github.com/users").then((json) =>
      setChars(json.data.results)
    );
  }, []);

  return (
    <div className="Cards-List">
      {filteredCharacters.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <Item data={char} />
          </div>
        );
      })}
    </div>
  );
};

export default UserPage;
