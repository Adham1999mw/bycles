import { Grid, Typography } from "@mui/material";
import CustomButton from "../BaseButton";
import "animate.css/animate.min.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const CoreSection = ({ title, data, image, buttonTitle , RD }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30%)",
    config: { duration: 500 },
  });

  return (
    <Grid
      container
      direction={RD ? 'row-reverse' : 'row'}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      marginBottom={10}
    >
      <Grid className="animate__animated animate__slideInLeft" md={5} item>
        <animated.div ref={ref} style={props}>
          <img width={"100%"} src={image} alt={title} />
        </animated.div>
      </Grid>

      <Grid item md={6}>
        <Grid container direction="column" gap={3}>
          <Grid item>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>

          {data.map((ele, index) => (
            <Grid item key={index} sx={{ marginTop: 1 }}>
              <Grid container direction="column" gap={2}>
                <Grid item>
                  <Typography color={"#a60f0c"}>{ele.title}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="span">{ele.text}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}

          <Grid>
            <CustomButton text={buttonTitle} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoreSection;
