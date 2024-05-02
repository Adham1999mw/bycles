import { Grid } from "@mui/material";
import styles from "./Table.module.scss";

const TableSercies = () => {
  return (
    <Grid className={styles.Table}>
      <a href="#one">
        <div className={styles.baseP}>
          <p>Entretien d'un amortisseur simple bonbonne</p>
          <p className={styles.line}>...............................</p>
          <p>138 €</p>
        </div>
      </a>
      <a href="#two">
        <div className={styles.baseP}>
          <p>​Entretien d'un amortisseur simple bonbonne Cane Creek</p>
          <p className={styles.line}>...............................</p>
          <p>143 €</p>
        </div>
      </a>
      <a href="#three">
        <div className={styles.baseP}>
          <p>Entretien d’un amortisseur double bonbonne</p>
          <p className={styles.line}>...............................</p>
          <p>152 €</p>
        </div>
      </a>
      <a href="#four">
        <div className={styles.baseP}>
          <p>Entretien d’un amortisseur Brain</p>
          <p className={styles.line}>...............................</p>
          <p>168 €</p>
        </div>
      </a>
      <a href="#five">
        <div className={styles.baseP}>
          <p>Entretien d'un amortisseur SIDLUX A1</p>
          <p className={styles.line}>...............................</p>
          <p>151 €</p>
        </div>
      </a>
    </Grid>
  );
};

export default TableSercies;
