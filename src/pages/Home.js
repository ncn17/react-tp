import React from "react";
import { Navigation } from "../components/Navigation";
import { Countries } from "../components/Countries";

export default function Home() {
  return (
    <>
      <Navigation />
      <h1>Home</h1>
      <Countries />
    </>
  );
}
