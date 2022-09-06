import "./navigation.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
function Navigation(props) {
  return (
    <div className={`Navigation ${props.isShown}`}>
      <h1>Explore our site!</h1>
      <div className="navaccordion">
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Areas we work in </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a href="">North</a>
              <hr />
              <a href="">Center</a>
              <hr />
              <a href="">South</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="navlastlinks">
        <p>
          <a href="">Donate to "NON"</a>
        </p>
        <a href="">Calendar</a>
      </div>
    </div>
  );
}

export default Navigation;
