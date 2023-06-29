import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { colorCategory } from "../../helpers/CategoryHelpers";
export default function SimpleCard({ data }) {
  const { image, title, description, price, category, rating, id } = data;
  const colorChip = colorCategory(category);
  const { addToCart } = useContext(CartContext);
  return (
    <Container>
      <Grid container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <Box>
            <CardMedia
              component="img"
              alt="product"
              image={image}
              sx={{
                objectFit: "contain",
                height: "300px",
              }}
            />
          </Box>
          <Box>
            <CardContent
              sx={{
                height: "100%",
                position: "relative",
                padding: "20px",
              }}
            >
              <Typography gutterBottom variant="h4" component="h6">
                {title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Chip
                  sx={{ marginY: { md: 3, xs: 1 } }}
                  size="medium"
                  label={category}
                  color={colorChip}
                />
                <Typography
                  sx={{
                    display: { md: "none", xs: "inline" },
                  }}
                  variant="h5"
                  color="black"
                >
                  ${price}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Rating
                  size="large"
                  sx={{ marginY: { md: 3, xs: 1 } }}
                  name="rating"
                  value={rating.rate}
                  readOnly
                />
                <Button
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
                  size="small"
                  color="success"
                >
                  Add
                </Button>
              </Box>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  display: { md: "inline", xs: "none" },
                }}
                variant="h5"
                color="black"
              >
                ${price}
              </Typography>
            </CardContent>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxHeight: "100px", overflow: "normal" }}
          >
            {description}
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}
