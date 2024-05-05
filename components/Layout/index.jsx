import { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import bikelOGO from "@/assets/logo.png";
import Image from "next/image";
import styles from "./header.module.scss";
import CustomButton from "../common/BaseButton";
import HeaderDrawer from "./drawer";
import { useRouter } from "next/router";

const Header = () => {
  const [pathes, setPathes] = useState([
    { text: "Accueil", active: true, link: "/" },
    { text: "Présentation", active: false, link: "/presentation" },
    { text: "Nos Services", active: false, link: "/services" },
    { text: "Rendez-vous", active: false, link: "/Rendez" },
    { text: "Display", active: false, link: "/prices" },
  ]);

  const handleLinkClick = (index) => {
    const updatedPathes = pathes.map((link, i) => {
      if (i === index) {
        return { ...link, active: true };
      } else {
        return { ...link, active: false };
      }
    });
    setPathes(updatedPathes);
  };

  const router = useRouter()

  return (
    <Grid className={styles.headerContainer}>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={styles.desktopHeader}
          direction='row'
        >
          <Grid item>
            <Image onClick={() => router.push('/')} className={styles.Imglogo}  src={bikelOGO} width={100} height={120} />
          </Grid>
          <Grid item>
            <Grid
              textAlign="center"
              className={styles.links}
              justifyContent="center"
              container
              direction="row"
              gap={4}
            >
              {pathes.map((link, index) => (
                <Link
                  className={link.active ? styles.activeLink_container : null}
                  href={link.link}
                  key={index}
                >
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "200" }}
                    onClick={() => handleLinkClick(index)}
                  >
                    {link.text}
                  </Typography>
                  <div className={link.active ? styles.activeLink : null}></div>
                </Link>
              ))}
            </Grid>
          </Grid>
          <CustomButton onclick={() => router.push('/contact')}  bgColor="white" color="#a60f0c" text={"Contactez Nous"} />
        </Grid>

        <HeaderDrawer data={pathes} />
      </Container>
    </Grid>
  );

};

export default Header;
