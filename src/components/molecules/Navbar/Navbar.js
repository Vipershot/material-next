import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import { colorCategory } from "../../helpers/CategoryHelpers";

export default function ButtonAppBar({ brand, listLinks }) {
  const pages = [
    {
      url: "jewelery",
      title: "Jewelery",
      type: "jewelery",
    },
    {
      url: "mens_clothing",
      title: "Men's clothing",
      type: "men's clothing",
    },
    {
      url: "electronics",
      title: "Electronics",
      type: "electronics",
    },
    {
      url: "womens_clothing",
      title: "Women's clothing",
      type: "women's clothing",
    },
  ];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { cartItems } = useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar color="primary" position="static">
        <Toolbar sx={{ justifyContent: "space-around", alignItems: "center" }}>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
            href={`/`}
          >
            <Image alt="brand" height={40} width={40} src={"/brand.png"} />
            <Typography sx={{ marginLeft: 2 }}>My Landing Store</Typography>
          </Link>
          <Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((setting, i) => (
                <Link
                  key={i}
                  style={{ textDecoration: "none" }}
                  href={`/products/category/${setting.type}`}
                >
                  |
                  <MenuItem
                    color={colorCategory(setting.type)}
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography
                      color={colorCategory(setting.type)}
                      textAlign="center"
                    >
                      {setting.title}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            <ul>
              {listLinks.map(({ url, name, dropdown, link }, i) => (
                <Button
                  key={i}
                  color="textColorPrimary"
                  variant="text"
                  onClick={dropdown === true ? handleOpenUserMenu : null}
                >
                  {link ? (
                    <Link style={{ color: "white" }} href={url}>
                      <Stack spacing={2} direction="row">
                        <Badge badgeContent={cartItems.length} color="default">
                          <ShoppingCartIcon />
                        </Badge>
                      </Stack>
                    </Link>
                  ) : (
                    name
                  )}
                </Button>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

ButtonAppBar.propTypes = {
  brand: PropTypes.string,
  option: PropTypes.string,
  option2: PropTypes.string,
};
