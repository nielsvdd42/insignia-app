import { Fragment } from "react";
import Heading from "./Heading";
import MyScouts from "./MyScouts";
import MeritBadgesInfo from "./MeritBagesInfo";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <Fragment>
      <Heading />
      <MyScouts />
      <MeritBadgesInfo />
      <Button>Click me</Button>
    </Fragment>
  );
}

export default Home;
