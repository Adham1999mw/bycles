import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Table from "@/components/Table";
import BaseSection from "@/components/common/BaseSection";
import back from "@/assets/vack.svg";
import Image from "next/image";
import styles from "./serve.module.scss";

const Serve = () => {
  const router = useRouter();

  const data = {
    fourche: [
      { text: "Entretien d'une fourche - Diamètre 30", price: "131 €" },
      { text: "Entretien d'une fourche - Diamètre 32", price: "138 €" },
      { text: "Entretien d’une fourche - Diamètre 32 TALAS", price: "141 €" },
      { text: "Entretien d’une fourche - Diamètre 34", price: "143 €" },
      { text: "Entretien d’une fourche - Diamètre 34 TALAS", price: "158 €" },
      {
        text: "Entretien d'une fourche Rock Shox - Diamètre 35",
        price: "151 €",
      },
      {
        text: "Entretien d'une fourche Cane Creek - Diamètre 35",
        price: "156 €",
      },
      { text: "Entretien d'une fourche - Diamètre 36", price: "154 €" },
      { text: "Entretien d'une fourche - Diamètre 36 TALAS", price: "164 €" },
      { text: "Entretien d'une fourche - Diamètre 38", price: "157 €" },
      { text: "Entretien d'une fourche - Diamètre 40", price: "164 €" },
      { text: "Entretien d'une fourche Brain", price: "141 €" },
      { text: "Entretien d'une fourche BOXXER double T", price: "152 €" },
      { text: "Entretien d'une fourche RS1", price: "143 €" },
    ],
    amortisseur: [
      { text: "Entretien d'un amortisseur simple bonbonne", price: "138 €" },
      {
        text: "​Entretien d'un amortisseur simple bonbonne Cane Creek",
        price: "143 €",
      },
      { text: "Entretien d’un amortisseur double bonbonne", price: "152 €" },
      { text: "Entretien d’un amortisseur Brain", price: "168 €" },
      { text: "Entretien d'un amortisseur SIDLUX A1", price: "151 €" },
    ],
  };

  const titleDATA = {
    fourche: {
      title: "Fourche",
      body: "Retrouvez ici toutes les prestations concernant l'entretien de vous amortisseurs et votre fourche.",
    },
    amortisseur: {
      title: "Amortisseur",
      body: "Retrouvez ici toutes les prestations concernant l'entretien de vous amortisseurs et votre Amortisseur .",
    },
  };

  return (
    <Grid>
      <Grid
        className={styles.back}
        marginTop={2}
        onClick={() => router.push("/services")}
        display={"flex"}
        style={{ cursor: "pointer" }}
        alignItems={"center"}
      >
        <Image src={back} width={40} height={40} />
        <Typography color={"#a60f0c"} variant="h5">
          Services
        </Typography>
      </Grid>
      <BaseSection
        title={titleDATA[router.query?.serve]?.title || ""}
        body={titleDATA[router.query?.serve]?.body || ""}
        mxSIZE={50}
      />
      {router.query?.serve && <Table data={data[`${router.query?.serve}`]} />}
    </Grid>
  );
};

export default Serve;
