import { Grid } from "@mui/material";
import styles from "./Table.module.scss";
import CustomButton from "@/components/common/BaseButton";

const TableSercies = ({ data }) => {
  return (
    <Grid className={styles.Table}>
      {data.map((ele) => {
        return (
          <div className={styles.baseP}>
            <p>{ele.text}</p>
            <p>{ele.price}</p>
          </div>
        );
      })}

      <Grid container justifyContent='center' marginTop={5}>
        <CustomButton
          onclick={() => router.push("/Rendez")}
          bgColor="white"
          color="#a60f0c"
          text={"Rendez-vous"}
        />
      </Grid>
    </Grid>
  );
};

export default TableSercies;
