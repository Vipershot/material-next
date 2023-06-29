import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { colorCategory } from "../../helpers/CategoryHelpers";
import { limitString, toUpperCase } from "../../helpers/StringHelpers";

export default function GroupCard({ data }) {
  const { addToCart } = useContext(CartContext);
  return (
    <Grid container mt={6}>
      {data.map(
        ({ image, title, description, category, price, id, rating }, i) => {
          let colorChip = colorCategory(category);

          return (
            <Grid item key={i} md={3} sx={{ position: "relative" }}>
              <Card sx={{ height: "400px", margin: "1vh" }}>
                <CardActionArea>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    href={`/products/${id}`}
                  >
                    <CardMedia
                      component="img"
                      alt="product"
                      height="140"
                      image={image}
                      sx={{ objectFit: "contain" }}
                    />
                    <CardContent key={id}>
                      <Typography gutterBottom variant="h7" component="h3">
                        {limitString(title, 50)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          maxHeight: "100px",
                          overflow: "normal",
                          marginY: 1,
                        }}
                      >
                        {limitString(description, 100)}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Rating
                          sx={{ marginY: 1 }}
                          name="rating"
                          value={rating.rate}
                          readOnly
                        />
                        <Typography variant="body2" color="black">
                          ${price}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Link>
                </CardActionArea>
                <CardActions
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    width: "96%",
                    justifyContent: "space-between",
                  }}
                >
                  <Chip label={toUpperCase(category)} color={colorChip} />
                  <IconButton
                    onClick={() =>
                      addToCart({
                        image,
                        title,
                        description,
                        category,
                        price,
                        id,
                        rating,
                      })
                    }
                    variant="contained"
                    size="large"
                    color="success"
                    sx={{ paddingRight: 2 }}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        }
      )}
    </Grid>
  );
}
