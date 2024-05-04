import CoreSection from "@/components/common/CoreSection";
import BaseSection from "@/components/common/BaseSection";
import one from "@/assets/one.jpeg";

const Prices = () => {
  return (
    <>
      <BaseSection
        title={"Display"}
        body={"Envoyez nous un message pour toute information complémentaire."}
      />
      <CoreSection
        title={"Maximize uptime of your vehicles"}
        buttonTitle={"Read more"}
        image={one}
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
        image={one}
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
    </>
  );
};

export default Prices;
