import BaseSection from "@/components/common/BaseSection";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./services.module.scss";
import { useRouter } from "next/router";
import BaseCard from "@/components/common/BaseCard";
import force from "@/assets/force.jpeg";
import servOne from "@/assets/servone.jpeg";
import sevrThree from "@/assets/sevrThree.png";
import servTwo from "@/assets/servTwo.jpeg";

const Services = () => {
  const router = useRouter();
  return (
    <>
      <BaseSection
        title={"Nos services"}
        body={
          "Retrouvez ici toutes les prestations concernant l'entretien de votre vélo, amortisseur et de votre fourche."
        }
        mxSIZE={50}
      />

      {/* <TableSercies /> */}

      {/* <div className={styles.selection}>
        <Typography
          onClick={() => setActive("first")}
          className={active == "first" ? styles.active : null}
          variant="h4"
        >
          Entretiens Fourche
        </Typography>
        <Typography
          onClick={() => setActive("second")}
          className={active == "second" ? styles.active : null}
          variant="h4"
        >
          Entretiens Amortisseur
        </Typography>
        <Typography
          onClick={() => setActive("three")}
          className={active == "three" ? styles.active : null}
          variant="h4"
        >
          three
        </Typography>
        <Typography
          onClick={() => setActive("four")}
          className={active == "four" ? styles.active : null}
          variant="h4"
        >
          four
        </Typography>
      </div> */}

      <Grid container justifyContent="center">
        <Grid container justifyContent="center" className={styles.banner}>
          <Typography variant="h4">
            Entretiens, réparations & préparations
          </Typography>
        </Grid>
      </Grid>

      <Grid
        className={styles.cards}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item xs={6} md={3}>
          <BaseCard
            handleClick={() => router.push("/services/forfaits")}
            body={
              "Retrouvez ici les tarifs des différents forfaits d'entretien de votre vélo."
            }
            title={"Forfaits"}
            productImg={servOne}
          />
        </Grid>

        <Grid item xs={6} md={3}>
          <BaseCard
            handleClick={() => router.push("/services/prestations")}
            body={
              "Retrouvez ici les differentes prestations d'entretien ou de réparation de votre vélo."
            }
            title={"Détails des Prestations"}
            productImg={servTwo}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <BaseCard
            handleClick={() => router.push("/services/amortisseur")}
            body={
              "Retrouvez ici toutes les prestations concernant l'entretien de votre amortisseur."
            }
            title={"Amortisseur"}
            productImg={sevrThree}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <BaseCard
            handleClick={() => router.push("/services/fourche")}
            body={
              "Retrouvez ici toutes les prestations concernant l'entretien de votre fourche."
            }
            title={"Fourche"}
            productImg={force}
          />
        </Grid>
      </Grid>

      {/* <TableSercies /> */}

      {/* {active == "second" && (
        <CoreSection
          title={"Entretiens Amortisseur"}
          image={one}
          handleClick={() => router.push("/Rendez")}
          custom
          buttonTitle={"Prendre rendez-vous"}
          data={[
            {
              title: "1-Entretien d'un amortisseur simple bonbonne",
              text: "price : 138 €",
            },
            {
              title: "2-Entretien d'un amortisseur simple bonbonne Cane Creek",
              text: " price : 143 €",
            },
            {
              title: "3-Entretien d’un amortisseur double bonbonne",
              text: "price : 152 €",
            },
            {
              title: "Entretien d’un amortisseur Brain",
              text: "price : 168 €",
            },
            {
              title: "5-Entretien d'un amortisseur SIDLUX A1",
              text: "price : 151 €",
            },
          ]}
        />
      )}

      {active == "first" && (
        <CoreSection
          buttonTitle={"Prendre rendez-vous"}
          handleClick={() => router.push("/Rendez")}
          custom
          title={"Entretiens Fourche"}
          image={one}
          data={[
            {
              title: "1- ​Entretien d'une fourche - Diamètre 30",
              text: "price : 131 €",
            },
            {
              title: "2- Entretien d'une fourche - Diamètre 32",
              text: "price : 138 €",
            },
            {
              title: "3- Entretien d’une fourche - Diamètre 32 TALAS",
              text: "price : 141 €",
            },
            {
              title: "4- Entretien d’une fourche - Diamètre 34",
              text: "price : 143 €",
            },
            {
              title: "5- Entretien d’une fourche - Diamètre 34 TALAS",
              text: "price : 158 €",
            },
            {
              title: "6- Entretien d'une fourche Rock Shox - Diamètre 35",
              text: "price : 151  €",
            },
            {
              title: "7- Entretien d'une fourche Cane Creek - Diamètre 35",
              text: "price : 156 €",
            },
            {
              title: "8- Entretien d'une fourche - Diamètre 36",
              text: "price : 154 €",
            },
            {
              title: "9- Entretien d'une fourche - Diamètre 36 TALAS",
              text: "price : 164 €",
            },
            {
              title: "10- Entretien d'une fourche - Diamètre 38",
              text: "price : 157 €",
            },
            {
              title: "11- Entretien d'une fourche - Diamètre 40",
              text: "price : 164 €",
            },
            {
              title: "12- Entretien d'une fourche Brain",
              text: "price : 141 €",
            },
            {
              title: "13- Entretien d'une fourche BOXXER double T",
              text: "price : 152 €",
            },
            {
              title: "14- Entretien d'une fourche RS1",
              text: "price : 143 €",
            },
          ]}
        />
      )}

      {active == "three" && (
        <CoreSection
          buttonTitle={"Prendre rendez-vous"}
          handleClick={() => router.push("/Rendez")}
          custom
          title={"Entretiens Fourche"}
          image={one}
          data={[
            {
              title: "1- ​Entretien d'une fourche - Diamètre 30",
              text: "price : 131 €",
            },
            {
              title: "2- Entretien d'une fourche - Diamètre 32",
              text: "price : 138 €",
            },
            {
              title: "3- Entretien d’une fourche - Diamètre 32 TALAS",
              text: "price : 141 €",
            },
            {
              title: "4- Entretien d’une fourche - Diamètre 34",
              text: "price : 143 €",
            },
            {
              title: "5- Entretien d’une fourche - Diamètre 34 TALAS",
              text: "price : 158 €",
            },
            {
              title: "6- Entretien d'une fourche Rock Shox - Diamètre 35",
              text: "price : 151  €",
            },
            {
              title: "7- Entretien d'une fourche Cane Creek - Diamètre 35",
              text: "price : 156 €",
            },
            {
              title: "8- Entretien d'une fourche - Diamètre 36",
              text: "price : 154 €",
            },
            {
              title: "9- Entretien d'une fourche - Diamètre 36 TALAS",
              text: "price : 164 €",
            },
            {
              title: "10- Entretien d'une fourche - Diamètre 38",
              text: "price : 157 €",
            },
            {
              title: "11- Entretien d'une fourche - Diamètre 40",
              text: "price : 164 €",
            },
            {
              title: "12- Entretien d'une fourche Brain",
              text: "price : 141 €",
            },
            {
              title: "13- Entretien d'une fourche BOXXER double T",
              text: "price : 152 €",
            },
            {
              title: "14- Entretien d'une fourche RS1",
              text: "price : 143 €",
            },
          ]}
        />
      )}

      {active == "four" && (
        <CoreSection
          buttonTitle={"Prendre rendez-vous"}
          handleClick={() => router.push("/Rendez")}
          custom
          title={"Entretiens Fourche"}
          image={one}
          data={[
            {
              title: "1- ​Entretien d'une fourche - Diamètre 30",
              text: "price : 131 €",
            },
            {
              title: "2- Entretien d'une fourche - Diamètre 32",
              text: "price : 138 €",
            },
            {
              title: "3- Entretien d’une fourche - Diamètre 32 TALAS",
              text: "price : 141 €",
            },
            {
              title: "4- Entretien d’une fourche - Diamètre 34",
              text: "price : 143 €",
            },
            {
              title: "5- Entretien d’une fourche - Diamètre 34 TALAS",
              text: "price : 158 €",
            },
            {
              title: "6- Entretien d'une fourche Rock Shox - Diamètre 35",
              text: "price : 151  €",
            },
            {
              title: "7- Entretien d'une fourche Cane Creek - Diamètre 35",
              text: "price : 156 €",
            },
            {
              title: "8- Entretien d'une fourche - Diamètre 36",
              text: "price : 154 €",
            },
            {
              title: "9- Entretien d'une fourche - Diamètre 36 TALAS",
              text: "price : 164 €",
            },
            {
              title: "10- Entretien d'une fourche - Diamètre 38",
              text: "price : 157 €",
            },
            {
              title: "11- Entretien d'une fourche - Diamètre 40",
              text: "price : 164 €",
            },
            {
              title: "12- Entretien d'une fourche Brain",
              text: "price : 141 €",
            },
            {
              title: "13- Entretien d'une fourche BOXXER double T",
              text: "price : 152 €",
            },
            {
              title: "14- Entretien d'une fourche RS1",
              text: "price : 143 €",
            },
          ]}
        />
      )} */}
    </>
  );
};

export default Services;
