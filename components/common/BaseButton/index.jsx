import { Button } from "@mui/material";
import styles from "./button.module.scss";

const CustomButton = ({ text, bgColor = "#a60f0c", color = "white" }) => {
  return (
    <Button
      variant="outlined"
      style={{ color: color, background: bgColor, borderColor: bgColor }}
      className={[
        bgColor != "#a60f0c" ? styles.CustomButtonHover : "",
        styles.CustomButton,
      ]}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
