import { InferGetStaticPropsType } from "next";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../configs";
import { ProductsProps } from "../../interfaces/products";
import { IndexProps } from "../../interfaces/utility";
import { getAllProducts, setProducts } from "../../redux/slices/productsSlices";
import { ProductService } from "../../services/products";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
export  const getStaticProps = async () => {
  const res = await ProductService.getAllProducts()
  const products = res.data || [];
  return {
    props: {
      products,
    },
  };
}

const Products = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useAppDispatch();
  const { availableProducts } = useAppSelector(setProducts);
  useEffect(() => {
    dispatch(getAllProducts(products));
  }, []);
  return (
   <div>
      {availableProducts.map((_elt: ProductsProps, index: IndexProps) => (
           <Card>
           <CardActionArea>
             <CardMedia
               component="img"
               alt="Contemplative Reptile"
               height="140"
               image="/static/images/cards/contemplative-reptile.jpg"
               title="Contemplative Reptile"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                 Lizard
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                 across all continents except Antarctica
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
             <Button size="small" color="primary">
               Share
             </Button>
             <Button size="small" color="primary">
               Learn More
             </Button>
           </CardActions>
         </Card>
        ))}
   </div>
  );
};
export default Products;
