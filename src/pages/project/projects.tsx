import Card from "react-bootstrap/Card";
import "./projects.css";
import { animated, useSpring } from "@react-spring/web";
import data from "../../utils/projects.json";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import MyFooter from "../../components/Footer";
import { MDBIcon } from "mdb-react-ui-kit";
const Projects = () => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  return (
    <>
      <div className="projects-container">
        <animated.div className="card-container" style={props}>
          {data.map((item, index) => (
            <Card
              className="c"
              style={{
                width: "100%",
                marginTop: "1rem",
                background: "rgba(255,255,255, 0.6)",
              }}
            >
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle>{item.subdescription}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
                {item.url && (
                  <a href={item.url} className="me-4 text-reset">
                    <MDBIcon color="secondary" fab icon="github" />
                  </a>
                )}
                {item.images && (
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <div style={{ width: "50%" }}>
                      <ImageGallery
                        items={item.images}
                        infinite={false}
                        showPlayButton={false}
                        showBullets={false}
                        showNav={false}
                        thumbnailPosition={"right"}
                        showFullscreenButton={
                          item.images.length === 0 ? false : true
                        }
                      />
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          ))}
        </animated.div>
        <MyFooter />
      </div>
    </>
  );
};

export default Projects;
