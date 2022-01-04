import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position={"static"}>
      <Container>
        <Typography textAlign="center">Design by material ui</Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
