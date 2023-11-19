import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import HeroLayout from "../mui/Layout";

export default function Hero() {
  return (
    <HeroLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        $49
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)"
      >
        Nest Mini. Maxim Demo.
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        A descriptive secondary text placeholder. Use it to explain your
        business offer better.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          my: 2,
          flexWrap: "wrap",
          "& > *": { flex: "auto" },
        }}
      >
        <Input sx={{ fontSize: "md" }} size="lg" placeholder="Enter your email to pay" />
        <Button
          size="lg"
          endDecorator={<ArrowForward sx={{ fontSize: "md" }} />}
        >
          Pay with Maxim
        </Button>
      </Box>
      <Box
        sx={(theme: { breakpoints: { up: (arg0: number) => any } }) => ({
          display: "flex",
          textAlign: "center",
          alignSelf: "stretch",
          columnGap: 4.5,
          "& > *": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flex: 1,
          },
          [theme.breakpoints.up(834)]: {
            textAlign: "left",
            "& > *": {
              flexDirection: "row",
              gap: 1.5,
              justifyContent: "initial",
              flexWrap: "nowrap",
              flex: "none",
            },
          },
        })}
      >
        <div>
          <Typography textColor="text.secondary">
            Over <b>5k</b> positive <br /> customer reviews.
          </Typography>
        </div>
        <div>
          <Typography fontSize="xl4" fontWeight="lg">
            2M
          </Typography>
          <Typography textColor="text.secondary">
            Global <br /> Transactions.
          </Typography>
        </div>
      </Box>
      <Typography
        level="body-xs"
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Maxim
      </Typography>
    </HeroLayout>
  );
}
