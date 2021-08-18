import React from "react";

import { Firestore } from "../src/components/Firestore";
import { Footer } from "../src/components/Firestore";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>UTM Builder for Google Analytics</title>
          <meta content="Free URL builder to create UTM codes for all your Google Analytics campaign URLs" name="description"></meta>
          <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
        </Helmet>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;