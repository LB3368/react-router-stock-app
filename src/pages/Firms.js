import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Firm from "../components/modals/Firm";
import { useSelector } from "react-redux";
import StockCall from "../hooks/StockCall";
import { useEffect } from "react";
import { flexCenter } from "../styles/Style";
import FirmCard from "../components/card/Firm.js";

const Firms = () => {
  const { getFirms } = StockCall();
  const [open, setOpen] = useState(false);
  const { firms } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getFirms();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(firms);
  return (
    <Box>
      <Typography variant="h3" color="primary" gutterBottom>
        Firms
      </Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>
        New Firm
      </Button>
      <Firm open={open} setOpen={setOpen} info={info} setInfo={setInfo} />
      {firms?.length > 0 && (
        <Grid container sx={flexCenter} mt={4}>
          {firms?.map((firm) => (
            <Grid item key={firm.id}>
              <FirmCard firm={firm} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;