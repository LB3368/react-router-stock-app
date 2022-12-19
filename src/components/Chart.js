import { Card, Grid, Typography } from "@mui/material";
import { LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const Chart = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  //   dataFormatter fonksiyonu tremor'dan hazır aldık
  const dataFormatter = (number) =>
    `$${Intl.NumberFormat("us").format(number).toString()}`;

  const salesData = sales?.map((item) => ({
    date: item.createds,
    sales: item.price_total,
  }));
  const purchasesData = purchases?.map((item) => ({
    date: item.createds,
    purchases: item.price_total,
  }));

  return (
    <Grid container justifyContent="center" spacing={2} mt={3}>
      <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ p: 3 }} elevation={5}>
          <Typography>Daily Sales (USD)</Typography>
          <LineChart
            data={salesData}
            dataKey="date"
            categories={["sales"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Card sx={{ p: 3 }} elevation={5}>
          <Typography>Daily Purchases (USD)</Typography>
          <LineChart
            data={purchasesData}
            dataKey="date"
            categories={["purchases"]}
            colors={["red"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Chart;