import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Box,
  Button,
  Card,
  CardActions,
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
import { limitString } from "../../helpers/StringHelpers";

export default function SpanningTable() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  let total = 0;
  cartItems.forEach((objeto) => {
    total += objeto.price;
  });
  return (
    <>
      <Container>
        {total === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
            }}
          >
            <Typography my={1} variant="h4">
              El Carrito se encuentra vacio
            </Typography>
          </Box>
        ) : (
          <>
            <Grid container>
              {cartItems.map(
                ({ image, title, category, price, id, rating }, i) => {
                  const colorChip = colorCategory(category);
                  return (
                    <Grid item my={2} xs={12} key={i}>
                      <Card
                        sx={{
                          height: "180px",
                          width: "100%",
                          margin: "5px",
                          position: "relative",
                          display: "flex",
                          padding: { md: 5, xs: 1 },
                          gap: { md: 5, xs: 0 },
                        }}
                      >
                        <Box>
                          <CardMedia
                            component="img"
                            alt="product"
                            height="100"
                            image={image}
                            sx={{ objectFit: "contain" }}
                          />
                        </Box>
                        <Box>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h7"
                              component="h4"
                            >
                              {limitString(title, 50)}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <Chip
                                size="small"
                                label={category}
                                color={colorChip}
                              />
                              <Rating
                                name="rating"
                                value={rating.rate}
                                readOnly
                              />
                            </Box>
                            <Typography
                              my={1}
                              variant="h6"
                              color="text.secondary"
                            >
                              Price: ${price}
                            </Typography>
                          </CardContent>
                        </Box>
                        <CardActions
                          sx={{
                            position: "absolute",
                            bottom: 10,
                            right: 0,
                            width: "96%",
                            justifyContent: "end",
                          }}
                        >
                          <Button
                            onClick={() => removeFromCart(id)}
                            color="error"
                            variant="contained"
                          >
                            <DeleteForeverIcon />
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                }
              )}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Typography my={1} variant="h6" color="text.secondary">
                Total: ${total}
              </Typography>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
