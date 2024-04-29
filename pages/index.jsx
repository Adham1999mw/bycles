import Partner from "@/components/Partner";
import BaseSection from "@/components/common/BaseSection";
import CoreSection from "@/components/common/CoreSection";
import SchedulePicker from "@/components/common/DatePicker";
import BasicDateCalendar from "@/components/common/DatePicker";
import DateCalendarValue from "@/components/common/DatePicker";
import Schedule from "@/components/common/DatePicker";
import MyScheduler from "@/components/common/DatePicker";
import DatePicker from "@/components/common/DatePicker";
// import MyDatePicker from "@/components/common/DatePicker";
import { Grid, Typography } from "@mui/material";
import React, { ReactElement } from "react";

const Home = () => {
  return (
    <Grid>
      <BaseSection
        title={"L'ATELIER CYCLO PHIL"}
        body={
          "Mécanicien cycles, je vous propose mes services pour entretenir ou réparer vos vélos. Manque de temps ou difficultés à vous déplacer je peux intervenir à domicile ou sur le lieu de votre choix dans un rayon de 25 kms autour de Saint Pathus. N'hésitez pas à me contacter"
        }
        buttonTitle={"PRÉSENTATION"}
      />
      <Grid style={{ margin: "30px 0" }}>
        <img
          width="100%"
          src="https://getbikeservice.com/wp-content/uploads/2023/06/Artboard-1-copy-4@2x-1.png"
          alt=""
        />
      </Grid>

      <CoreSection
        title={"Maximize uptime of your vehicles"}
        buttonTitle={"Read more"}
        image={
          "https://getbikeservice.com/wp-content/uploads/2023/06/GBS_visual-1-1024x1024.png"
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
          "https://getbikeservice.com/wp-content/uploads/2023/06/GBS_visual-1-1024x1024.png"
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
          "https://getbikeservice.com/wp-content/uploads/2023/06/GBS_visual-1-1024x1024.png"
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
          "https://getbikeservice.com/wp-content/uploads/2023/06/GBS_visual-1-1024x1024.png"
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
      />

      <BaseSection
        title={"Make the transition to sustainable micromobility"}
        buttonTitle={"Become Partner"}
      />

      <Partner />

      <BaseSection
        title={"Keep up with us!"}
        body={"Join our newsletter"}
        buttonTitle={"Sign-up"}
      />

      {/* <BasicDateCalendar />   */}
    </Grid>
  );
};

export default Home;
