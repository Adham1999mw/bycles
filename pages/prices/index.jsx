import CoreSection from "@/components/common/CoreSection";
import BaseSection from "@/components/common/BaseSection";
import one from "@/assets/one.jpeg";
import { Grid, Typography } from "@mui/material";
import data from "./data.json";
import BaseCard from "@/components/common/BaseCard";

const Prices = () => {
  return (
    <>
      <BaseSection
        title={"Display"}
        body={"Envoyez nous un message pour toute information complémentaire."}
        mxSIZE={50}
      />

      <Grid spacing={2} container md={12}>
        {data.data.map((product) => {
          return (
            <Grid item md={3} xs={6}>
              <BaseCard
                title={product.text}
                body={product.body}
                price={product.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Prices;
