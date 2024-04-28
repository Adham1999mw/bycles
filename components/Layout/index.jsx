import { useEffect, useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import bikelOGO from "@/assets/bike.svg";
import Image from "next/image";
import styles from "./header.module.scss";
import CustomButton from "../common/BaseButton";
import HeaderDrawer from "./drawer";

const Header = () => {
  const [pathes, setPathes] = useState([
    { text: "Home", active: true, link: "/" },
    { text: "contact", active: false, link: "/" },
    { text: "prices", active: false, link: "/" },
    { text: "buy", active: false, link: "/" },
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

  return (
    <Grid className={styles.headerContainer}>
      <Container>
        <Grid
          container
          md={12}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid>
            <Image src={bikelOGO} width={80} height={80} />
          </Grid>
          <Grid flex={1}>
            <Grid
              textAlign="center"
              className={styles.links}
              justifyContent="center"
              container
              direction="row"
              gap={4}
              flex={1}
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
          <CustomButton text={"contact us"} />
        </Grid>

        <HeaderDrawer data={pathes} />
      </Container>
    </Grid>
  );
};

export default Header;
