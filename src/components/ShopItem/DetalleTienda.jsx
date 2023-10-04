import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./detalle.css";

const MuestraProducto = ({ carrito }) => {
  
    return (
      <div className="product-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={carrito.elemento.img}

          />

            <Typography gutterBottom variant="h5" component="div">
              {carrito.elemento.nombre}
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
              {carrito.elemento.tipo}
              </Typography>
              <Typography gutterBottom variant="h8" component="div">
              ${carrito.elemento.precio}
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
              unidades: {carrito.elemento.cantidad}
            </Typography>
            

        </CardActionArea>
      </Card>
      </div>
      
    );
    
  }
export default MuestraProducto;