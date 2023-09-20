import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, CardActions } from "@mui/material";
import "./item.css"

const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="340"
        image={product.avatar_url}
        alt={product.type}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.type}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{ display: "flex", justifyContent: "center" }}>
      <Button size="small" color="primary"> 
        Ver detalle
      </Button>
    </CardActions>
  </Card>
);
}

export default Item;