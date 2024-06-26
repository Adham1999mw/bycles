import { Grid, Typography } from "@mui/material";
import styles from "./BaseCard.module.scss";
import Image from "next/image";
import CustomButton from "../BaseButton";

const BaseCard = ({
  title,
  body,
  handleClick,
  price,
  productImg,
  className,
  custom,
}) => {
  return (
    <Grid
      item
      gap={2}
      display={"flex"}
      direction="column"
      className={styles.contaienr}
    >
      <Grid
        className={`${styles.Image_contaienr} ${
          className == "spe" ? styles.minHeight : null
        }`}
      >
        <Image src={productImg} width={276} height={204} />
      </Grid>
      <Grid className={styles.Title}>
        <Typography variant="h5">{title}</Typography>
      </Grid>

      <Grid
        spacing={5}
        display={"flex"}
        direction={"column"}
        className={styles.pad}
      >
        {body && (
          <Grid className={custom ? null : `${styles.bodyCsu}`}>
            <Typography variant="p">{body}</Typography>
          </Grid>
        )}
        <Grid
          display={"flex"}
          justifyContent="flex-end"
          className={styles.buttoncus}
        >
          <div style={{ marginTop: "8px" }}>
            {price ? (
              <Typography color={"#3565ab"} variant="h5">
                {price}
              </Typography>
            ) : (
              <CustomButton onclick={handleClick} text={"En savoir plus"} />
            )}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BaseCard;
