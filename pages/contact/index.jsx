import { Grid } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import BaseTextInput from "@/components/common/BaseTextField";
import styles from "./constact.module.scss";
import CustomButton from "@/components/common/BaseButton";
import TextArea from "@/components/common/TextArea";
import loader from "../../assets/loader.svg";
import Image from "next/image";
import BaseSection from "@/components/common/BaseSection";
import useContactHook from "../../hook/contactHook/hook/contactHook";

const Contact = () => {
  const {
    handleSubmit,
    control,
    errors,
    onSubmitContact,
    onSubmitError,
    handleInputChange,
    setDataFun,
    loading,
  } = useContactHook();

  return (
    <Grid container justifyContent="center">
      <BaseSection
        title={"Contact With Us"}
        body={
          "Mécanicien cycles, je vous propose mes services pour entretenir ou réparer vos vélos."
        }
        handleClick={() => window.open('/atelier.pdf' , '_blank')}
        buttonTitle={'Fiche Atelier'}
      />
      <form
        className={`${styles.LogIn_Form} ${styles.formContainer}`}
        onSubmit={handleSubmit(onSubmitContact, onSubmitError)}
      >
        <Grid
          container
          spacing={3}
          item
          xs={12}
          md={7}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item md={12} xs={12}>
            <Controller
              render={({ field }) => (
                <BaseTextInput
                  onChange={(value) =>
                    handleInputChange(field, { name: value }, value)
                  }
                  error={!!errors.firstname}
                  value={field.value}
                  label={"Name"}
                  fullWidth
                  helperText={errors.firstname?.message}
                />
              )}
              name="firstname"
              control={control}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              render={({ field }) => (
                <BaseTextInput
                  onChange={(value) => {
                    if (!isNaN(value) && parseFloat(value) < 0) {
                      return field.onChange("");
                    } else {
                      return handleInputChange(field, { phone: value }, value);
                    }
                  }}
                  type="number"
                  error={!!errors.phone}
                  value={field.value}
                  label={"Phone"}
                  fullWidth
                  helperText={errors.phone?.message}
                />
              )}
              name="phone"
              control={control}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              render={({ field }) => (
                <BaseTextInput
                  onChange={(value) =>
                    handleInputChange(field, { email: value }, value)
                  }
                  error={!!errors.email}
                  value={field.value}
                  label={"Email"}
                  fullWidth
                  helperText={errors.email?.message}
                />
              )}
              name="email"
              control={control}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              render={({ field }) => (
                <BaseTextInput
                  onChange={(value) =>
                    handleInputChange(field, { objectInput: value }, value)
                  }
                  error={!!errors.objectInput}
                  value={field.value}
                  label={"Object"}
                  fullWidth
                  helperText={errors.objectInput?.message}
                />
              )}
              name="objectInput"
              control={control}
            />
          </Grid>

          <Grid item xs={12}>
            <TextArea
              onChange={(value) => {
                setDataFun({ desc: value });
              }}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid style={{ marginTop: "80px" }} className={styles.buttonContainer}>
          {loading ? (
            <Image src={loader} width={50} height={50} />
          ) : (
            <CustomButton type="submit" text={"Send"} />
          )}
        </Grid>
      </form>

      <div className={styles.line}></div>

      <BaseSection
        title={"Address"}
        body={
          "2 rue de la république 95270 CHAUMONTEL"
        }
      />

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0169761105712!2d31.12873221105567!3d29.978942121566952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845030fe6fc6d%3A0x73111684bd1dce03!2sPyramids%20of%20Giza!5e0!3m2!1sen!2seg!4v1714611957853!5m2!1sen!2seg" width="100%" height="450" style={{border : 0 , marginBottom:'32px' , borderRadius:"24px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Grid>
  );
};

export default Contact;
