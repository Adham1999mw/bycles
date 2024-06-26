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
  stylesCustom,
  mxSIZE
}) => {

  const createMarkup = (html) => {
    return { __html: html.replace(/<br\s*\/?>/g, "<br>") };
  };

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
        style={mxSIZE && {maxWidth:`${mxSIZE}%`}}
      >
        <Grid item>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Grid>

        {body && (
          <Grid item style={stylesCustom}>
            <Typography dangerouslySetInnerHTML={createMarkup(body)} />
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
