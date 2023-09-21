import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./styles.css";
import Counter from "../contador/contador";



const DetalleItem = ({ product, agregarElemento }) => {
  return (
    <div className="DetailContainer">
      <CardMedia
        component="img"
        image={product.avatar_url}
        alt={product.type}
      />

      {/* Sección de las especificaciones */}
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
              <Counter />
       
            </>
          ) : (
            <>
              <Typography>
                <li className="especificaciones">{product.enchufe}</li>
              </Typography>
              <Typography>
                <li className="especificaciones">{product.respuesta}</li>
              </Typography>
              <Counter />
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
