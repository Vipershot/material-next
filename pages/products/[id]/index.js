import { Box, Container } from "@mui/material";
import React from "react";
import SimpleCard from "../../../src/components/molecules/SimpleCard/SimpleCard";

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    <Box sx={{ my: 0 }}>
      <Container maxWidth="lg">
        <SimpleCard data={data} />
      </Container>
    </Box>
  );
};

export default index;
