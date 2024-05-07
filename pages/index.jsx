import Partner from "@/components/Partner";
import BaseSection from "@/components/common/BaseSection";
import CoreSection from "@/components/common/CoreSection";
import { Grid } from "@mui/material";
import React from "react";

import one from "@/assets/one.jpeg"
import two from "@/assets/two.jpeg"
import three from "@/assets/three.jpeg"
import { useRouter } from "next/router";

const Home = () => {

  const router = useRouter();

  return (
    <Grid>
      <BaseSection
        title={"L'ATELIER CYCLO PHIL"}
        body={
          "Votre mécanicien cycles et vendeur de vélos multi-marques sur Chaumontel."
        }
        color={'white'}
        bgImg
        mxSIZE={50}
      />

      <CoreSection
        title={"Maximize uptime of your vehicles"}
        buttonTitle={"Read more"}
        image={
          one
        }
        data={[
          {
            title: "Repair and maintenance",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
          {
            title: "Repair and maintenance",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
        ]}
      />
      <CoreSection
        RD
        title={"Maximize uptime of your vehicles"}
        buttonTitle={"Read more"}
        image={
          two
        }
        data={[
          {
            title: "Repair and maintenance",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
          {
            title: "Repair and maintenance",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
        ]}
      />
      <CoreSection
        title={"Maximize uptime of your vehicles"}
        buttonTitle={"Read more"}
        image={
          three
        }
        data={[
          {
            title: "Repair and maintenance",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
          {
            title: "Repair and maintenance",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
        ]}
      />

      <BaseSection
        title={"Keep your fleet and business rolling"}
        body={
          "Optimize your LEV fleet with our sustainable solutions. Maintenance. Management. Consultancy."
        }
        buttonTitle={"Our services"}
        bgColor={"#a60f0c"}
        color={"white"}
        mxSIZE={50}
      />

      <BaseSection
        title={"Make the transition to sustainable micromobility"}
        buttonTitle={"Contactez Nous"}
        handleClick = { () => router.push('/contact')}
      />

      <Partner />

      {/* <BasicDateCalendar />   */}
    </Grid>
  );
};

export default Home;
