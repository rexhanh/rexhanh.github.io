import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";
function MyFooter() {
  return (
    <>
      <MDBFooter
        bgColor="transparent"
        className="text-center text-lg-start text-muted"
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block"></div>
          <div>
            <a
              href="https://www.linkedin.com/in/rexhanh/"
              className="me-4 text-reset"
            >
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="https://github.com/rexhanh" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
            <a href="mailto:rex.han@berkeley.edu" className="me-4 text-reset">
              <MDBIcon far icon="envelope" />
            </a>
          </div>
        </section>
      </MDBFooter>
    </>
  );
}

export default MyFooter;
