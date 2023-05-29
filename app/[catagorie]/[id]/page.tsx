import React from "react";
import PathNav from "./components/PathNav";
import Container from "../../components/Container";
import Details from "./components/Details";

export default function Page() {
  return (
    <Container>
      <PathNav />
      <Details />
    </Container>
  );
}
