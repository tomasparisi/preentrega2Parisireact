import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./styles.css";


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
        {product.type === 'Notebook' || product.type === 'Desktop' || product.type === 'Consola' ? (
          <div id="detalleContainer">
            <Typography gutterBottom variant="h2" component="div">
              {product.login}
            </Typography>
            <Typography variant="body1" color="text.secondary" fontSize="30px">
              Especificaciones:
            </Typography>
            
            <Typography>
              <li className="especificaciones">{product.modelo}</li>
            </Typography>
            <Typography>
            <li className="especificaciones">{product.ram}</li>
            </Typography>
            <Typography>
              <li className="especificaciones">{product.almacenamiento}</li>
            </Typography>
            <button onClick={agregarElemento}>Agregar al carrito</button> 
            <Typography fontSize="15px">
              {product.descripcion}
            </Typography>
          </div>
          
        ) : (
          <div id="detalleContainer">
          <Typography gutterBottom variant="h2" component="div">
            {product.login}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontSize="30px">
            Especificaciones:
          </Typography>
          
          <Typography>
            <li className="especificaciones">{product.enchufe}</li>
          </Typography>
          <li className="especificaciones">{product.respuesta}</li>
          <Typography>
            <li className="especificaciones">{product.rgb}</li>
          </Typography>
          <Typography fontSize="15px">
            {product.descripcion}
          </Typography>
          <button onClick={agregarElemento}>Agregar al carrito</button> 
        </div>
        )}
      </div>
    </div>
  );
}

export default DetalleItem;

  