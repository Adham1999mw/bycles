import { Grid } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import BaseTextInput from "@/components/common/BaseTextField";
import styles from "./constact.module.scss";
import CustomButton from "@/components/common/BaseButton";
import TextArea from "@/components/common/TextArea";
import BasicDateCalendar from "@/components/common/DatePicker";
import loader from "../../assets/loader.svg";
import Image from "next/image";
import BaseSection from "@/components/common/BaseSection";
import useContactHook from "../../hook/contactHook/hook/contactHook";

const Rendez = () => {
  const {
    handleSubmit,
    control,
    errors,
    onSubmit,
    onSubmitError,
    handleInputChange,
    setDataFun,
    loading,
  } = useContactHook();

  return (
    <Grid container justifyContent="center">
      <BaseSection
        title={"Rendez-vous"}
        body={
          "Toutes les prestations d'entretiens, de réparations ou de préparations de suspensions MTB seront réalisées dans notre atelier de Chaumontel. Avant toute dépose de suspensions ou avant tout envoi via transporteur, merci de vous assurer des disponibilités de l'atelier. Grâce à cela, nous pourrons effectuer les prestations dans les meilleurs délais. Aucune prestation ne sera effectuée sur place. Merci de votre compréhension."
        }
      />

      <BaseSection
        title={"Procédure d'envoi en Atelier"}
        body={
          "1-S'assurer de la disponibilité de l'atelier en nous contactant par email, par téléphone ou via le formulaire de contact ci-dessous. <br> 2-Remplir la fiche atelier et la joindre à vos colis suspensions. <br> 3-Envoyer le colis à l'adresse indiquée sur la fiche atelier."
        }
        bgColor={"#a60f0c"}
        color={"white"}
        handleClick={() => window.open("/atelier.pdf", "_blank")}
        buttonTitle={"Fiche Atelier"}
        stylesCustom={{ textAlign: "start" }}
      />
      <BaseSection
        title={"Demande de Rendez vous"}
      />
      <form
        className={`${styles.LogIn_Form} ${styles.formContainer}`}
        onSubmit={handleSubmit(onSubmit, onSubmitError)}
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

        <Grid item style={{ marginTop: "80px" }} xs={12}>
          <BasicDateCalendar />
        </Grid>

        <Grid className={styles.buttonContainer}>
          {loading ? (
            <Image src={loader} width={50} height={50} />
          ) : (
            <CustomButton type="submit" text={"Send"} />
          )}
        </Grid>
      </form>
    </Grid>
  );
};

export default Rendez;
