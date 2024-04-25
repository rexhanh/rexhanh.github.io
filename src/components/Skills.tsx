import ListGroup from "react-bootstrap/ListGroup";

interface SkillData {
  name: string;
  level: string;
}

interface Props {
  name: string;
  data: SkillData[];
}

function Skills(props: Props) {
  return (
    <>
      <ListGroup key="xl" horizontal="xl" className="my-2">
        <ListGroup.Item
          style={{
            width: "230px",
            backgroundColor: "rgba(255,255,255,0.4)",
            boxShadow: "3px 6px 6px hsl(0deg 0% 0% / 0.5)",
          }}
        >
          <b>{props.name}</b>
          <div>Proficiency</div>
        </ListGroup.Item>
        {props.data.map((item) => (
          <ListGroup.Item
            style={{
              width: "230px",
              backgroundColor: "rgba(255,255,255,0.8)",
              boxShadow: "3px 6px 6px hsl(0deg 0% 0% / 0.3)",
            }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold" style={{ fontSize: "1.1em" }}>
                {item.name}
              </div>
              <div style={{ fontSize: "1em" }}>{item.level}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Skills;
