import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import Cards from "../components/card/Cards";
import Chart from "../components/Chart";
import StockCall from "../hooks/StockCall";

const HomePage = () => {
  const { getPurchases, getSales } = StockCall();

  useEffect(() => {
    getSales();
    getPurchases();
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Typography variant="h3" color="primary" mb={4}>
        Dashboard
      </Typography>
      <Cards />
      <Chart />
    </Box>
  );
};

export default HomePage;