import { Grid, Typography } from "@mui/material";
import styles from "./Table.module.scss";
import CustomButton from "@/components/common/BaseButton";
import { useRouter } from "next/router";

const TableSercies = ({ data, title, bottomData, lastDiv, bgColor }) => {
  const router = useRouter();

  return (
    <Grid className={styles.Table} style={{ background: bgColor }}>
      {title && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems={"center"}
          marginTop={2}
        >
          <Typography color={"white"} variant="h5">
            {title.title}
          </Typography>
          <Typography color={"white"} variant="h5">
            {title.subTitle}
          </Typography>
        </Grid>
      )}

      {data &&
        data?.map((ele) => {
          return (
            <div className={styles.baseP}>
              <p>{ele.text}</p>
              <p>{ele.price}</p>
            </div>
          );
        })}

      {bottomData && (
        <Grid className={styles.bodycus}>
          <div>{bottomData.title}</div>
          {bottomData?.body.map((ele) => {
            return <div>{ele}</div>;
          })}
        </Grid>
      )}

      {lastDiv && (
        <Grid className={styles.lastDiv}>
          <Typography variant="p">
            {lastDiv.map((ele) => {
              return <div>{ele.text}</div>;
            })}
          </Typography>
        </Grid>
      )}

      <Grid container justifyContent="center" marginTop={5}>
        <CustomButton
          onclick={() => router.push("/Rendez")}
          bgColor="white"
          color="#3565ab"
          text={"Rendez-vous"}
        />
      </Grid>
    </Grid>
  );
};

export default TableSercies;
