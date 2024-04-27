import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../Theme";
import Header from "@/components/Layout/index";
import { Container } from "@mui/material";
import '../public/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container >
        <Header />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
