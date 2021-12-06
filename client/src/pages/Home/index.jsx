import { Fragment } from "react";

// LIB IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// COMPONENT IMPORTS
import {
  Characters,
  Features,
  Hero,
  JoinUS,
  PrizePool,
  Subscribe,
} from "../../template";

import { Header, Footer } from "../../template";

import { NotificationModal } from "../../template";

function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <PrizePool />
        <Characters />
        <Features />
        <JoinUS />
        <Subscribe />
      </main>
      <Footer />
      <NotificationModal />

      <div class="bottomtotop">
        <i>
          <FontAwesomeIcon icon={faChevronRight} />
        </i>
      </div>
    </Fragment>
  );
}

export default Home;
