import { Grid } from "@mui/material";
import bertin from "../../assets/bertin.png";
import hope from "../../assets/hope.png";
import anna from "../../assets/anna.jpg";
import Image from "next/image";
import canyon from "@/assets/canyon.png";
import bocsh from "@/assets/bocsh.jpeg";
import velo from "@/assets/velo.jpeg";

const Partner = () => {
  const data = [
    { url: canyon, redirect: "https://www.canyon.com/en-fr/" },
    { url: bertin },
    { url: hope },
    { url: anna },
    { url: bocsh },
    { url: velo },
  ];

  return (
    <Grid container spacing={5} rowGap={5}>
      {data.map((ele, index) => (
        <Grid key={index} item md={4} xs={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image
              onClick={() =>
                ele.redirect && window.open(ele.redirect, "_blank")
              }
              src={ele.url}
              width={150}
              height={150}
              layout="responsive"
              style={ele.redirect ? { cursor: "pointer" } : {}}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Partner;
