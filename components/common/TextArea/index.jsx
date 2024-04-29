import { TextField, Typography } from "@mui/material";
import styles from "./TextArea.module.scss";


const TextArea = ({ onChange , placeholder}) => {
  return (
    <div className={styles["TextAreaContainer"]}>
      <TextField
        id="description"
        className={styles["TextArea"]}
        multiline
        onChange={(event) => onChange(event.target.value)}
        label='description'
        rows={4}
        InputProps={{ placeholder: placeholder || " ", style: { height: "100px" } }}
      />
    </div>
  );
};

export default TextArea;
