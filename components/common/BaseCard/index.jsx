import { Grid, Typography } from "@mui/material";
import styles from "./BaseCard.module.scss";
import Image from "next/image";
import one from "../../../assets/one.jpeg";
import CustomButton from "../BaseButton";

const BaseCard = ({ title, body, handleClick, price }) => {
  return (
    <Grid
      item
      gap={2}
      display={"flex"}
      direction="column"
      className={styles.contaienr}
    >
      <Grid className={styles.Image_contaienr}>
        <img
          src={
            "https://static.wixstatic.com/media/fa3c54_23814654685b4b3da81cb33f29ed34ee~mv2.jpg/v1/crop/x_0,y_0,w_4896,h_3616/fill/w_383,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Tof-Bike-Services-articles%20(9).jpg"
          }
          alt=""
        />
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
        <Grid className={styles.bodyCsu}>
          <Typography variant="p">{body}</Typography>
        </Grid>
        <Grid
          display={"flex"}
          justifyContent="flex-end"
          className={styles.buttoncus}
        >
          {price ? (
            <Typography color={"#a60f0c"} variant="h5">
              {price}
            </Typography>
          ) : (
            <CustomButton onclick={handleClick} text={"details"} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BaseCard;
