import BaseSection from "@/components/common/BaseSection";
import { Grid } from "@mui/material";
import BaseCard from "@/components/common/BaseCard";
import AllData from "../../hook/data";

const Prices = () => {

  const { data } = AllData();

  return (
    <>
      <BaseSection
        title={"Display"}
        body={"Envoyez nous un message pour toute information complémentaire."}
        mxSIZE={50}
      />

      <Grid spacing={2} container  justifyContent={'center'} md={12}>
        {data.map((product) => {
          return (
            <Grid item md={3} xs={6}>
              <BaseCard
                title={product.text}
                body={product.body}
                price={product.price}
                productImg={product.productImg}
                className={product.className}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Prices;
