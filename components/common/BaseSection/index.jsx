import { Grid, Typography } from "@mui/material";
import CustomButton from "../BaseButton";
import styles from './BaseSection.module.scss'

const BaseSection = ({ title, body, buttonTitle }) => {
  return (
    <Grid  justifyContent='center' container>
      <Grid
        container
        direction="column"
        alignContent="center"
        justifyContent="center"
        gap={2}
        textAlign='center'
        className={styles.max}
      >
        <Grid item>
          <Typography variant="h2"  style={{fontWeight:'bold'}}>{title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{body}</Typography>
        </Grid>
        <Grid item>
          <CustomButton text={buttonTitle} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BaseSection;
