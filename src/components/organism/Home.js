import FilterListIcon from "@mui/icons-material/FilterList";
import {
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { useAxios } from "../../hooks/useAxios";
import GroupCard from "../molecules/GroupCard/GroupCard";
export default function Home() {
  const [limit, setLimit] = useState(10);
  const { data, loading, getlimit } = useAxios(`products`);
  const { cartItems } = useContext(CartContext);
  const handleLimit = (e) => {
    if (e.target.value == 0 || e.target.value < 0) {
      setLimit(1);
    } else {
      setLimit(e.target.value);
    }
  };
  return (
    <Box sx={{ my: 0 }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
              my={8}
            >
              <Typography variant="h3">Our Products</Typography>
              <Box>
                <TextField
                  id="outlined-number"
                  label="Filter Count"
                  type="number"
                  size="small"
                  value={limit}
                  onChange={handleLimit}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <IconButton
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => getlimit(limit)}
                >
                  <FilterListIcon />
                </IconButton>
              </Box>
            </Box>
            <GroupCard data={data} />
          </Container>
        </>
      )}
    </Box>
  );
}
