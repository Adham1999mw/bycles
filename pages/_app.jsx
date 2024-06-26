import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../Theme";
import Header from "@/components/Layout/index";
import { Container } from "@mui/material";
import "../public/global.scss";
import Footer from "@/components/common/Footer";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        variant="error"
        anchorOrigin={{
          vertical: "left",
          horizontal: "bottom",
        }}
      >
        <Container>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
