import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Formik } from "formik";
import "./south.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux/es/exports";
import { addEvent } from "../../store/calendarSlice";

const South = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="South">
      <div className="southTop">
        <div className="southHeader">
          <h1>Southern region</h1>
          <h3 className="northAbout">
            In the southern region, we work in collaboration with several
            institutions specific to the south. Such as: the "Soroka" hospital,
            "Darom-Adom" festival, and more, thus maximizing the efficiency of
            the work.
          </h3>
        </div>
        <div className="areaImgs">
          <img
            src="https://www.gov.il/BlobFolder/generalpage/beer_sheva_cyber_capital/he/%D7%91%D7%90%D7%A8%20%D7%A9%D7%91%D7%A2%20%D7%90%D7%97%D7%A8%D7%99%20600800.jpg"
            className="areaImg"
            alt=""
          />
        </div>
      </div>
      <div className="southBottom">
        <div className="accordionContainer">
          <Accordion
            className="section"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1a-header"
            >
              <Typography>Volunteering at Soroka Hospital</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Helping patients by raising morale. You can bring tasty things
                or board games or anything you think will make the patients
                happy.
                <p>dates: 25.09-04.10.2022</p>
                <Button
                  onClick={() =>
                    dispatch(
                      addEvent({
                        title: "Volunteering at Soroka Hospital",
                        start: new Date(2022, 8, 25),
                        end: new Date(2022, 9, 4),
                      })
                    )
                  }
                >
                  I will go
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="section"
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2bh-content"
              id="panel1a-header"
            >
              <Typography>Rehabilitation of "Darom Adom"</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Helping farmers in restoring the garden. Volunteering is a
                little physical and suitable for young people.
                <p>dates: 21.09-22.09.2022</p>
                <Button
                  onClick={() =>
                    dispatch(
                      addEvent({
                        title: "Rehabilitation of Darom Adom",
                        start: new Date(2022, 8, 21),
                        end: new Date(2022, 8, 22),
                      })
                    )
                  }
                >
                  I will go
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="section"
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3bh-content"
              id="panel1a-header"
            >
              <Typography>Magen David Adom - South region</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Magen David Adom, in conjunction with the Israel Experience, has
                the perfect program for you. Come make a difference in Israel!
                Be trained as an ambulance first responder (EMS) or senior first
                responder. Volunteer on ambulances throughout Israel. Where else
                in the world can you do this? Be on the forefront of emergencies
                in Israel!
                <p>dates: 01.10-31.10.2022</p>
                <Button
                  onClick={() =>
                    dispatch(
                      addEvent({
                        title: "Magen David Adom - South region",
                        start: new Date(2022, 9, 1),
                        end: new Date(2022, 9, 31),
                      })
                    )
                  }
                >
                  I will go
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="section"
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4bh-content"
              id="panel1a-header"
            >
              <Typography>Company hosting for older people</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Come as long as you want to host company and make them feel
                good.
                <p>date: 15.11.2022</p>
                <Button
                  onClick={() =>
                    dispatch(
                      addEvent({
                        title: "Company hosting for older people",
                        start: new Date(2022, 10, 15),
                        end: new Date(2022, 10, 15),
                      })
                    )
                  }
                >
                  I will go
                </Button>{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="section"
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5bh-content"
              id="panel1a-header"
            >
              <Typography>
                Accompanying new immigrants and their families in the community
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Help with the Hebrew language and hosting the families on
                Israeli holidays. You should introduce them to our customs and
                culture as much as possible.
                <p>dates: 18.10-27.10.2022</p>
                <Button
                  onClick={() =>
                    dispatch(
                      addEvent({
                        title:
                          " Accompanying new immigrants and their families in the community",
                        start: new Date(2022, 9, 18),
                        end: new Date(2022, 9, 27),
                      })
                    )
                  }
                >
                  I will go
                </Button>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="form">
        <button className="button-81" onClick={() => setIsOpen(!isOpen)}>
          Need our services?
        </button>
        {isOpen && (
          <div>
            <div>
              <Formik
                initialValues={{ email: "", name: "", description: "" }}
                onSubmit={(values) => {
                  if (
                    window.confirm(
                      "Are you sure you want to send this request?"
                    )
                  ) {
                    handleOpen();
                  }
                }} // what the submit button does
              >
                {({ handleSubmit, handleChange, handleBlur, values }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="inputContainer">
                      <input
                        className={`input `}
                        type="name"
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                      />

                      <input
                        className={`input`}
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                      />

                      <textarea
                        className={`input`}
                        type="description"
                        name="description"
                        placeholder="description"
                        onChange={handleChange}
                        value={values.description}
                        onBlur={handleBlur}
                      />

                      <button className="submitButton, button-81" type="submit">
                        send
                      </button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Congratulations!
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            Your request has been sent!
                          </Typography>
                        </Box>
                      </Modal>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default South;
