import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { colorCategory } from "../../../../src/components/helpers/CategoryHelpers";
import { toUpperCase } from "../../../../src/components/helpers/StringHelpers";
import GroupCard from "../../../../src/components/molecules/GroupCard/GroupCard";

export const getServerSideProps = async ({ params }) => {
  const { category } = params;
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <Box sx={{ my: 0 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            marginTop: 2,
          }}
          color={colorCategory(category)}
          variant="h3"
        >
          {toUpperCase(category)}
        </Typography>
        <GroupCard data={data} />
      </Container>
    </Box>
  );
};

export default index;
