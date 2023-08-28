import axios from "axios";
import { useParams } from "react-router-dom";

import Item from "../../components/ItemListContainer/item/item";

const DetailPage = () => {
  const [char, setChar] = useState([]);

  console.log(char);

  let { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((json) =>
      setChar(json.data)
    );
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {char.id ? <Item data={char} /> : null}
    </div>
  );
};

export default DetailPage;