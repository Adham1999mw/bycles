import { Button } from "@mui/material";
import styles from "./button.module.scss";

const CustomButton = ({ text }) => {
  return <Button variant="outlined"  className={styles.CustomButton}>{text}</Button>;
};

export default CustomButton;
