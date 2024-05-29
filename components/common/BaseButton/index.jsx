import { Button } from "@mui/material";
import styles from "./button.module.scss";

const CustomButton = ({
  text,
  bgColor = "#3565ab",
  color = "white",
  onclick,
  type,
}) => {
  const hanleClick = () => {
    if (onclick) {
      onclick();
    }
  };

  return (
    <Button
      onClick={hanleClick}
      variant="outlined"
      type={type}
      style={{ color: color, background: bgColor, borderColor: bgColor }}
      className={[
        bgColor != "#3565ab" ? styles.CustomButtonHover : "",
        styles.CustomButton,
      ]}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
