import Partner from "@/components/Partner";
import BaseSection from "@/components/common/BaseSection";
import CoreSection from "@/components/common/CoreSection";
import { Grid } from "@mui/material";
import React from "react";
import secThree from "@/assets/secThree.jpeg";
import two from "@/assets/two.jpeg";
import { useRouter } from "next/router";
import ownerTwo from "@/assets/ownerTwo.jpg";

const Home = () => {
  const router = useRouter();

  return (
    <Grid>
      <BaseSection
        title={"L'ATELIER CYCLO PHIL"}
        body={
          "Votre mécanicien et vendeur de vélos multi-marques sur Chaumontel et Saint Pathus."
        }
        color={"white"}
        bgImg
        mxSIZE={50}
      />

      <CoreSection
        title={"Entretien / Réparation"}
        buttonTitle={"Nos Services"}
        handleClick={() => router.push("./services")}
        image={ownerTwo}
        data={[
          {
            title: "Entretien / Réparation",
            text: "Plusieurs services sont proposés selon vos besoins.",
          },
          // {
          //   title: "Entretien / Réparation",
          //   text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          // }
        ]}
      />
      <CoreSection
        RD
        title={"Vente de vélos"}
        buttonTitle={"Nos Vélos"}
        handleClick={() => router.push("./prices")}
        image={two}
        data={[
          {
            title: "Vente de vélos",
            text: "Envie d'un nouveau vélo? Retrouvez ici nos vélos neufs et d'occasions.",
          },
          // {
          //   title: "Vente de vélos",
          //   text : "Envie d'un nouveau vélo? Retrouvez ici nos vélos neufs et d'occasions."
          // }
        ]}
      />
      <CoreSection
        title={"Électrification"}
        buttonTitle={"Contactez-nous"}
        handleClick={() => router.push("./contact")}
        image={secThree}
        data={[
          {
            title: "Électrification",
            text: "Transformation de votre vélo en VAE avec la marque ANNAD.",
          },
          // {
          //   title: "Électrification",
          //   text : "Transformation de votre vélo en VAE avec la marque ANNAD."
          // }
        ]}
      />

      {/* <BaseSection
        title={"Keep your fleet and business rolling"}
        body={
          "Optimize your LEV fleet with our sustainable solutions. Maintenance. Management. Consultancy."
        }
        buttonTitle={"Our services"}
        bgColor={"#3565ab"}
        color={"white"}
        mxSIZE={50}
      /> */}

      {/* <BaseSection
        title={"Make the transition to sustainable micromobility"}
        buttonTitle={"Contactez Nous"}
        handleClick = { () => router.push('/contact')}
      /> */}

      <Partner />

      {/* <BasicDateCalendar />   */}
    </Grid>
  );
};

export default Home;
