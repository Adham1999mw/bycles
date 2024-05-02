import BaseSection from "@/components/common/BaseSection";
import CoreSection from "@/components/common/CoreSection";
import TableSercies from "../../components/Table";
import one from "@/assets/one.jpeg"
const Services = () => {
  return (
    <>
      <BaseSection
        title={"Nos services"}
        body={
          "Mécanicien cycles, je vous propose mes services pour entretenir ou réparer vos vélos. Manque de temps ou difficultés à vous déplacer je peux intervenir à domicile ou sur le lieu de votre choix dans un rayon de 25 kms autour de Saint Pathus. N'hésitez pas à me contacter"
        }
      />

      <TableSercies />

      <CoreSection
        id="one"
        title={"test test test"}
        image={
          one
        }
        data={[
          {
            title: "Entretien d'un amortisseur simple bonbonne",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
          {
            title: "138 €",
          },
        ]}
      />
      <CoreSection
        id="two"
        RD
        title={"test test test"}
        image={
          one
        }
        data={[
          {
            title: "​Entretien d'un amortisseur simple bonbonne Cane Creek",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
          {
            title: "143 €",
          },
        ]}
      />
      <CoreSection
        id="three"
        title={"test test test"}
        image={
          one
        }
        data={[
          {
            title: "Entretien d’un amortisseur double bonbonne",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
          {
            title: "152 €",
          },
        ]}
      />
      <CoreSection
        id="four"
        RD
        title={"test test test"}
        image={
          one
        }
        data={[
          {
            title: "Entretien d’un amortisseur Brain",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
          {
            title: "168 €",
          },
        ]}
      />
      <CoreSection
        id="five"
        title={"test test test"}
        image={
          one
        }
        data={[
          {
            title: "Entretien d'un amortisseur SIDLUX A1",
            text: "Our automotive-grade repair and maintenance service ensures that your vehicles remain in top condition, minimizing downtime and maximizing productivity.",
          },
          {
            title: "151 €",
          },
        ]}
      />
    </>
  );
};

export default Services;
