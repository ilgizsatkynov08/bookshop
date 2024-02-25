import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { useProduct } from '../ProductContext/Context';
import './product.css'
const ProductList = () => {
    const { readProduct, product,deleteProduct,} = useProduct();

    useEffect(() => {
        readProduct();
    }, []);    
    return (
        <div className='container'>
            <div className="productList">
{
product.map((el:any)=>(
  <div className="listProductBlock">

    <Card style={{
      height: "400px"

    }}>
    <CardActionArea>
      <CardMedia 
      
        component="img"
        height="300"
        image={el.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {el.price}

        <Button onClick={()=>deleteProduct(el.id)}  style={{marginLeft: "3pc"}} >

<DeleteIcon/>
</Button>
        </Typography>
      </CardContent>
    </CardActionArea>


     


  </Card>
  </div>

))

}
            </div>

        </div>
    );
};

export default ProductList;