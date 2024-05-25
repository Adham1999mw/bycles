import { Grid, Typography } from "@mui/material";
import CustomButton from "../BaseButton";
import "animate.css/animate.min.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import styles from './Coresection.module.scss'
import Image from "next/image";

const CoreSection = ({ title, data, image, buttonTitle, RD, id , handleClick , custom}) => {
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
      id={id}
      container
      direction={RD ? "row-reverse" : "row"}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      position={'relative'}
      className={styles.mra}
    >

      <Grid className={`animate__animated animate__slideInUp ${custom ?  styles.custom : null}` } md={5} item>
        <animated.div ref={ref} style={props}>
          <div className={`${styles.image_CONTAINER}`}>
            {/* <img width={"100%"} src={image} alt={title} /> */}
            <Image src={image} width={480} height={480} />
          </div>
        </animated.div>
      </Grid>

      <Grid item md={6}>
        <Grid container direction="column" gap={3}>
          <Grid item>
            <Typography className={styles.title}  variant="h3" style={{ fontWeight: "bold"}}>
              {title}
            </Typography>
          </Grid>

          {data.map((ele, index) => (
            <Grid item key={index} sx={{ marginTop: 1 }}>
              <Grid container direction="column" gap={2}>
                <Grid item>
                  <Typography fontSize={20} variant="p"  color={"#a60f0c"}>{ele.title}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="span">{ele.text}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}

          {buttonTitle && (
            <Grid>
              <CustomButton onclick={handleClick} text={buttonTitle} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoreSection;
