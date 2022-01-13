import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container, Grid, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../configs";
import { ProductsProps } from "../../interfaces/products";
import { IndexProps } from "../../interfaces/utility";
import { getAllProducts, setProducts } from "../../redux/slices/productsSlices";
import { ProductService } from "../../services/products";
import FilterComponent from "./components/filterComponent";
import PaginationSize from "./components/pagination";

//call api and return
export const getStaticProps = async () => {
  const res = await ProductService.getAllProducts();
  const products = res.data || [];
  return {
    props: {
      products,
    },
  };
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Products = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useAppDispatch();
  const { availableProducts } = useAppSelector(setProducts);
  const handleAddToCart = (item: ProductsProps) => {
    let products = JSON.parse(localStorage['products'] || "[]");
    let productFind = products.findIndex((_elt: any) => _elt.id === item.id);
    if (products[productFind] !== undefined) {
      products[productFind].price++;
      alert("Thêm vào giỏ hàng thành công");
    } else {
      products.push(item);
      alert("Thêm vào giỏ hàng thành công");
    }
    localStorage.setItem("products", JSON.stringify(products));
  };
  useEffect(() => {
    dispatch(getAllProducts(products));
  }, []);
  return (
    <Container>
      <Grid container spacing={2}>
        {/* //left  */}
        <Grid item xs={12} md={2}>
          <Typography textAlign={"left"}>Bộ lọc</Typography>
          <FilterComponent />
        </Grid>
        {/* right */}
        <Grid item xs={12} md={10}>
          <Grid container spacing={3} rowSpacing={2}>
            {availableProducts.map((_elt: ProductsProps, index: IndexProps) => (
              <Grid container item xs={6} sm={3} md={3} lg={3} key={index}>
                <Link href={`/products/${_elt.id}`}>
                  <a>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Image src={_elt.image} layout="fill" />
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={_elt.image}
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {_elt.name}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <Tooltip title="Yêu thích">
                          <FavoriteIcon />
                          </Tooltip>
                        </IconButton>
                        <IconButton
                          aria-label="share"
                          onClick={() => handleAddToCart(_elt)}
                        >
                          <Tooltip title="Thêm vào giỏ hàng">
                          <AddShoppingCartIcon />
                          </Tooltip>
                        </IconButton>
                        <IconButton
                          aria-label="share"
                          // onClick={() => handleAddToCart(_elt)}
                        >
                          <Tooltip title="Mua ngay">
                          <ShoppingCartIcon />
                          </Tooltip>
                        </IconButton>
                      </CardActions>
                    </Card>
                  </a>
                </Link>
              </Grid>
            ))}
            <PaginationSize />
          </Grid>
        </Grid>
      </Grid>

      
    </Container>
  );
};
export default Products;
