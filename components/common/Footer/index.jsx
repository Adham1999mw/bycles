const { Grid, Typography } = require("@mui/material");
import styles from "./Footer.module.scss";
import insta from "@/assets/insta.svg";
import face from "@/assets/face.svg";
import Image from "next/image";
import CustomButton from "@/components/common/BaseButton";

const Footer = () => {
  return (
    <Grid
      className={styles.Footer_container}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={6}
    >
      <div item className={styles.title}>
        <p>L'ATELIER CYCLO PHIL</p>
      </div>
      <Grid item flex={1} width={"60%"}>
        <Grid
          container
          gap={2}
          justifyContent="space-between"
          textAlign={"center"}
        >
          <Grid md={4} xs={12} item>
            <Typography component="div" variant="span">
              Lundi : Fermé{" "}
            </Typography>
            <Typography component="div" variant="span">
              Mardi : 9h30 - 18h30
            </Typography>
            <Typography component="div" variant="span">
              Mercredi : 9h30 - 18h30
            </Typography>
            <Typography component="div" variant="span">
              Jeudi : 9h30 - 18h30
            </Typography>
            <Typography component="div" variant="span">
              Vendredi : 9h30 - 18h30
            </Typography>
            <Typography component="div" variant="span">
              Samedi : 9h30 - 12h30
            </Typography>
            <Typography component="div" variant="span">
              Dimanche : Fermé
            </Typography>
          </Grid>
          <Grid>
            <div className={styles.line}></div>
          </Grid>

          <div className={styles.lineresponsive}></div>
          <Grid md={4} xs={12} item gap={1} container>
            <Grid>
              <Typography variant="span" component="div">
                tel : +33 (0)7 68 82 81 84
              </Typography>
              <Typography component="div" variant="span">
                tel : +33 (0)9 75 46 29 35
              </Typography>
              <Typography component="div" variant="span">
                Email : lateliercyclophil@gmail.com
              </Typography>
              <Typography component="div" variant="span">
                Address : 2 rue de la république 95270 CHAUMONTEL
              </Typography>

              <Grid className={styles.aLink} style={{ marginTop: 20 }}>
                <CustomButton
                  onclick={() => {
                    window.open("/terms.pdf", "_blank");
                  }}
                  text={"Conditions Générales de Vente"}
                  bgColor="white"
                  color="#a60f0c"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid container className={styles.social} gap={1}>
            <Grid item>
              <a
                href="https://www.facebook.com/lateliercyclophil"
                target="_blank"
              >
                <Image src={face} width={35} height={35} />
              </a>
            </Grid>

            <Grid item>
              <a
                href="https://www.instagram.com/phildothis/?igsh=MWoza2huMjMzaTdpNA%3D%3D"
                target="_blank"
              >
                <Image src={insta} width={35} height={35} />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
