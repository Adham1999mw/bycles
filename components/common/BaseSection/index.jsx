import { Grid, Typography } from "@mui/material";
import CustomButton from "../BaseButton";
import styles from "./BaseSection.module.scss";

const BaseSection = ({
  title,
  body,
  buttonTitle,
  bgColor,
  color,
  bgImg,
  handleClick,
}) => {
  return (
    <Grid
      className={`${styles.fullwidthcontainer} ${bgImg ? styles.imgSPE : ""}`}
      justifyContent="center"
      style={{ background: bgColor, color: color }}
      container
    >
      <Grid
        container
        direction="column"
        alignContent="center"
        justifyContent="center"
        gap={2}
        textAlign="center"
        className={styles.max}
      >
        <Grid item>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Grid>

        {body && (
          <Grid item>
            <Typography>{body}</Typography>
          </Grid>
        )}

        {buttonTitle && (
          <Grid item>
            <CustomButton
              onclick={handleClick}
              bgColor={color}
              color={bgColor}
              text={buttonTitle}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default BaseSection;
