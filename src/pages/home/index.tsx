import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";

import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";

import ColorSchemeToggle from "../../components/mui/ColorSchemeToggle";
import framesxTheme from "../../theme";
import Hero from "../../components/hero-section";

export default function Home() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <ColorSchemeToggle />
      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          "& > div": {
            scrollSnapAlign: "start",
          },
        }}
      >
        <Hero />
      </Box>



      
    </CssVarsProvider>
  );
}
