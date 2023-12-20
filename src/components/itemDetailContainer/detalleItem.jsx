import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./styles.css";
import Counter from "../Contador/Contador";



const DetalleItem = ({ product, agregarElemento, count, setCount }) => {
  return (
    <div className="DetailContainer">
      <CardMedia
        component="img"
        image={product.avatar_url}
        alt={product.type}
      />

      <div className="medio">
        <div id="detalleContainer">
          <Typography gutterBottom variant="h2" component="div">
            {product.login}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontSize="30px">
            Especificaciones:
          </Typography>

          {product.type === 'Notebook' || product.type === 'Desktop' || product.type === 'Consola' ? (
            <>
              <Typography>
                <li className="especificaciones">{product.modelo}</li>
              </Typography>
              <Typography>
                <li className="especificaciones">{product.ram}</li>
              </Typography>
              <Typography>
                <li className="especificaciones">{product.almacenamiento}</li>
              </Typography>
              <Typography variant="body1" color="text.primary" fontSize="20px" className="precio">
              ${product.precio * count}
              </Typography>
              <Counter count={count} setCount={setCount}/>
       
            </> 
          ) : (
            <>
              <Typography>
                <li className="especificaciones">{product.enchufe}</li>
              </Typography>
              <Typography>
                <li className="especificaciones">{product.respuesta}</li>
              </Typography>
              <Typography variant="body1" color="text.primary" fontSize="20px" className="precio">
              ${product.precio * count}
              </Typography>
              <Counter count={count} setCount={setCount}/>
            </>
          )}
          <button className="B" onClick={() => agregarElemento(product)}>Agregar al carrito</button>
        </div>
      </div>
      <Typography className="descripcion" fontSize="15px">
        {product.descripcion}
      </Typography>
    </div>
  );
};

export default DetalleItem;
