import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return <Typography>{title}</Typography>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
};
