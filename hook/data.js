import ownerTwo from "@/assets/ownerTwo.jpg";
import one from "@/assets/NosVelo/one.png"
import two from "@/assets/NosVelo/two.png"
import three from "@/assets/NosVelo/three.png"

const AllData = () => {
  return {
    data: [
      {
        text: "VAE Urban Comfort",
        body: "Retrouvez ici toutes les prestations concernant l'entretien de vos amortisseurs.",
        price: "2199 €",
        productImg: one,
        className : "spe"
      },
      {
        text: "VAE E-Travel",
        body: "Retrouvez ici toutes les prestations concernant l'entretien de vos amortisseurs.",
        price: "1499 €",
        productImg: two,
        className : "spe"

      },
      {
        text: "VTT Carbon C20",
        body: "Retrouvez ici toutes les prestations concernant l'entretien de vos amortisseurs.",
        price: "1299 €",
        productImg: three,
        className : "spe"

      },

    ],
  };
};

export default AllData;
