import BaseSection from "@/components/common/BaseSection";
import CoreSection from "@/components/common/CoreSection";
import TableSercies from "../../components/Table";
import one from "@/assets/one.jpeg";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./services.module.scss";

const Services = () => {
  const [active, setActive] = useState("first");

  return (
    <>
      <BaseSection
        title={"Nos services"}
        body={
          "Mécanicien cycles, je vous propose mes services pour entretenir ou réparer vos vélos. Manque de temps ou difficultés à vous déplacer je peux intervenir à domicile ou sur le lieu de votre choix dans un rayon de 25 kms autour de Saint Pathus. N'hésitez pas à me contacter"
        }
      />

      <div className={styles.selection}>
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
      </div>

      {/* <TableSercies /> */}

      {active == "second" && (
        <CoreSection
          title={"Entretiens Amortisseur"}
          image={one}
          custom
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
    </>
  );
};

export default Services;
