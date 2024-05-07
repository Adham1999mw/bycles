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
    fourche: [
      {
        title: "Fourche",
        body: "Retrouvez ici le tarif concernant l'entretien de votre fourche.",
      },
    ],
    amortisseur: [
      {
        title: "Amortisseurs",
        body: "Retrouvez ici le tarif concernant l'entretien de votre amortisseur.",
      },
    ],

    forfaits: [
      {
        title: "Forfaits",
        body: "Retrouvez ici toutes les prestations concernant l'entretien de vos forfaits.",
      },
    ],
    prestations: [
      {
        title: "Détails des Prestations",
        body: "Retrouvez ici toutes les prestations concernant l'entretien de vos prestations.",
      },
    ],
  };

  const title = {
    amortisseur: {
      title: "",
      subTitle: "",
    },
  };

  const bottomData = {
    fourche: {
      title: "Les tarifs ci-dessus inclus :",
      body: [
        "- le démontage et le nettoyage des plongeurs et du jambage",
        "- le reconditionnement complet de la cartouche hydraulique et de la cartouche air (remplacement des joints)",
        "- la purge de la cartouche",
        "- le remplacement des joints spy",
        "- le contrôle des pièces",
        "- le remontage",
        "- les réglages",
      ],
    },
    amortisseur: {
      title: "Les tarifs ci-dessus inclus :",
      body: [
        "- le démontage complet de l'amortisseur",
        "- le contrôle et le remplacement des pièces d'usures",
        "- le remplacement des joints d'air et des joints hydrauliques",
        "- la purge",
        "- le graissage",
        "- le remontage",
        "- les réglages",
      ],
    },
  };

  const lastDiv = {
    fourche: [
      {
        text: "Les prix ne comprennent pas les frais de démontage de la fourche et de l'amortisseur du vélo.",
      },
      { text: "Les prix ne comprennent pas les frais d'expéditions." },
    ],
    amortisseur: [
      {
        text: "Les prix ne comprennent pas les frais de démontage de la fourche et de l'amortisseur du vélo.  ",
      },
      { text: "Les prix ne comprennent pas les frais d'expéditions.  " },
    ],
  };

  const customTable = {
    forfaits: [
      {
        title: {
          title: "Petite révision",
          subTitle: "45 € TTC",
        },
        body: {
          title: "Le tarif comprend :",
          body: [
            "Contrôle visuel complet du vélo",
            "Réglages des dérailleurs avant et arrière + vérification de l'état de l'usure",
            "Réglages des freins avant et arrière + vérification de l'état de l'usure",
            "Vérification de l'ensemble des serrages du vélo",
            "Vérification de la pression des pneus",
          ],
        },
        lsDiv: [
          {
            text: "Les prix ne comprennent pas les frais de démontage de la fourche et de l'amortisseur du vélo.",
          },
          { text: "Les prix ne comprennent pas les frais d'expéditions." },
        ],
      },
      {
        title: {
          title: "Révision de base",
          subTitle: "75 € TTC",
        },
        body: {
          title: "Le tarif comprend :",
          body: [
            "Contrôle visuel complet du vélo",
            "Réglages des dérailleurs avant et arrière + vérification de l'état de l'usure",
            "Réglages des freins avant et arrière + vérification de l'état de l'usure",
            "Vérification de l'ensemble des serrages du vélo",
            "Vérification de la pression des pneus",
            "Nettoyage et graissage du jeu de direction + vérification de l'état de l'usure",
            "Nettoyage et graissage du boitier de pédalier  + vérification de l'état de l'usure",
          ],
        },
        lsDiv: [
          {
            text: "Les prix ne comprennent pas les frais de démontage de la fourche et de l'amortisseur du vélo.",
          },
          { text: "Les prix ne comprennent pas les frais d'expéditions." },
        ],
        bgColor: "#e05e74",
      },
      {
        title: {
          title: "Révision de base plus",
          subTitle: "105 € TTC",
        },
        body: {
          title: "Le tarif comprend :",
          body: [
            "Contrôle visuel complet de votre vélo",
            "Réglage des freins avant et arrière + vérification de l'état de l'usure",
            "Réglage des dérailleurs avant et arrière + vérification de l'état de l'usure",
            "Vérification de l'ensemble des serrages du vélo",
            "Vérification de la pression des pneus",
            "Nettoyage et graissage du jeu de direction + vérification de l'état de l'usure",
            "Nettoyage et graissage du boitier de pédalier + vérification de l'état de l'usure",
            "Nettoyage de la cassette ou de la roue libre + vérification de l'état de l'usure",
            "Nettoyage et graissage des moyeux de roue",
            "Dévoilage des roues",
          ],
        },
        lsDiv: [
          {
            text: "Les prix ne comprennent pas les frais de démontage de la fourche et de l'amortisseur du vélo.",
          },
          { text: "Les prix ne comprennent pas les frais d'expéditions." },
        ],
      },
    ],
    prestations: [
      {
        title: {
          title: "ROUES",
          subTitle: "",
        },
        data: [
          { text: "Changement du corps de roue-libre ", price: "31 €​" },
          {
            text: "Changement du corps de roue-libre (complexe)",
            price: "47 €​",
          },
          { text: "Entretien d’un corps de roue-libre", price: "34 €​" },
          { text: "Entretien d’un moyeu de roue", price: "38 €​" },
          { text: "Changement des roulements de moyeu", price: "40 €​" },
          { text: "Dévoilage d'une roue", price: "21 €​" },
          { text: "Reprise en tension d'une roue", price: "31 €​" },
          { text: "Changement d'un rayon et dévoilage", price: "32 €​" },
          { text: "Montage et rayonnage d'une roue", price: "81 €​" },
          {
            text: "Changement d'une chambre à air ou d'un pneu",
            price: "15 €​",
          },
        ],
        lsDiv: [
          {
            text: "Les prix ne comprennent pas les frais de démontage de la fourche et de l'amortisseur du vélo.",
          },
          { text: "Les prix ne comprennent pas les frais d'expéditions." },
        ],
      },
      {
        title: {
          title: "​FREINAGE",
          subTitle: "",
        },
        data: [
          {
            text: "Changement des patins ou des plaquettes (avant et arrière)",
            price: "24 €​",
          },
          {
            text: "Changement des patins ou des plaquettes (par frein)",
            price: "14 €​",
          },
          { text: "Purge de frein (par frein)", price: "30 €​" },
          { text: "Montage de frein avec passage externe", price: "45 €​" },
          { text: "Montage de frein avec passage interne", price: "55 €​" },
        ],
        lsDiv: [
          {
            text: "Les prix ne comprennent pas les frais de démontage de la fourche et de l'amortisseur du vélo.",
          },
          { text: "Les prix ne comprennent pas les frais d'expéditions." },
        ],
        bgColor: "#e05e74",
      },
      {
        title: {
          title: "TRANSMISSION",
          subTitle: "",
        },
        data: [
          {
            text: "Changement d'une manette de dérailleur sur un route avec réglage",
            price: "47 €​",
          },
          {
            text: "Changement d'une manette de dérailleur sur un VTT avec réglage",
            price: "27 €​",
          },
          {
            text: "Changement d'un dérailleur avec câble et réglage",
            price: "41 €​",
          },
          { text: "Changement de(s) plateau(x)", price: "34 €​" },
          { text: "Changement des galets", price: "17 €​" },
          { text: "Indexation : Réglages des dérailleurs", price: "21 €​" },
          { text: "Dégauchissage de la patte de dérailleur ", price: "30 €​" },
          { text: "Changement de la cassette et de la chaîne", price: "51 €​" },
          { text: "Changement de la chaine avec réglage", price: "24 €​" },
          { text: "Changement du boitier de pédalier", price: "36 €​" },
        ],
        lsDiv: [
          {
            text: "Les prix ne comprennent pas les frais de démontage de la fourche et de l'amortisseur du vélo.",
          },
          { text: "Les prix ne comprennent pas les frais d'expéditions." },
        ],
      },
      {
        title: {
          title: "PERIPHERIQUES",
          subTitle: "",
        },
        data: [
          {
            text: "Changement d'un cintre route et du ruban de cintre",
            price: "62 €​",
          },
          { text: "Changement d'un ruban de cintre", price: "30 €​" },
          { text: "Changement du jeu de direction", price: "44 €​" },
          { text: "Changement de la potence", price: "30 €​" },
          {
            text: "Reprogrammation moteur BOSH / SHIMANO / BROSE / BAFANG",
            price: "39 €​",
          },
          {
            text: "Identification et enregistrement du vélo chez Paravol (étiquette d'identification inclus)",
            price: "25 €​",
          },
        ],
        lsDiv: [
          {
            text: "Les prix ne comprennent pas les frais de démontage de la fourche et de l'amortisseur du vélo.",
          },
          { text: "Les prix ne comprennent pas les frais d'expéditions." },
        ],
        bgColor: "#e05e74",
      },
    ],
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
      <h1>{titleDATA[router?.query?.serve]?.title}</h1>

      <BaseSection
        title={titleDATA[router.query?.serve]?.[0]?.title || ""}
        body={titleDATA[router.query?.serve]?.[0]?.body || ""}
        mxSIZE={50}
      />

      {router.query?.serve != "forfaits" &&
        router.query?.serve != "prestations" && (
          <Table
            data={data[`${router.query?.serve}`]}
            title={title[`${router.query?.serve}`]}
            bottomData={bottomData[`${router.query?.serve}`]}
            lastDiv={lastDiv[`${router.query?.serve}`]}
          />
        )}

      {router.query.serve &&
        customTable[`${router.query?.serve}`]?.map((ele) => {
          return (
            <Table
              title={ele.title}
              bottomData={ele.body}
              lastDiv={ele.lsDiv}
              bgColor={ele.bgColor}
              data={ele.data}
            />
          );
        })}
    </Grid>
  );
};

export default Serve;
