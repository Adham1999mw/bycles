import BaseSection from "@/components/common/BaseSection";

const { Grid } = require("@mui/material");

const Presentation = () => {
  return (
    <Grid>
      <BaseSection
        title={"Présentation"}
        body={
          "Après 25 années passées dans une compagnie aérienne, ma passion pour le cyclisme m’a amené à une reconversion professionnelle en tant que Mécanicien Cycles. Après l’obtention de mon diplôme à l'INCM ainsi qu’une première expérience en tant que réparateur vélo dans un magasin, j’ai créé ma société de réparation cycles à domicile. Pendant plusieurs années jai pu perfectionner mes compétences à votre service et suivi plusieurs formations pour diversifier mes prestations.J’ai ensuite eu l'opportunité de reprendre le magasin de Tof Bike Services à Chaumontel qui m’a accordé sa confiance. J’ai ainsi l’occasion d’étendre mon champ d’activité et partager ma passion. J’aspire à vous offrir les meilleurs services ainsi qu’une excellente expérience au sein de l’Atelier Cyclo Phil."
        }
      />
    </Grid>
  );
};

export default Presentation;
