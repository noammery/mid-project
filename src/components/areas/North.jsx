import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Formik } from "formik";
import "./north.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux/es/exports";
import { addEvent } from "../../store/calendarSlice";
import RegisterModal from "../button-form-components/RegisterModal";


const North = () => {
  // const [isSent, setIsSent] = useState(false);
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
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="North">
      <div className="northTop">
        <div className="northHeader">
          <h1>North region</h1>
          <h3 className="northAbout">
            In the northern region, we work in collaboration with several
            institutions specific to the north. Such as: the "Carmel" hospital,
            "MDA" in the northern district and more, thus maximizing the
            efficiency of the work.
          </h3>
        </div>
        <div className="areaImgs">
          <img
            src="https://www.kipa.co.il/wp-content/uploads/2017/04/415201525250.jpg"
            className="areaImg"
            alt=""
          />
        </div>
      </div>
      <div className="northBottom">
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
              <Typography>Volunteering with animals - Gilboa</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The association works to enforce the Animal Cruelty Law and
                regulations by units of volunteers in the field, who handle
                cases of neglect and abuse while responding to requests from the
                public.
                <p>dates: 28.09-30.09.2022</p>
                <RegisterModal newEvent={() =>
                    dispatch(
                      addEvent({
                        title: "Volunteering with animals - Gilboa",
                        start: new Date(2022, 8, 28),
                        end: new Date(2022, 8, 30),
                      })
                    )
                  }
                >
                  I will go
                </RegisterModal>
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
              <Typography>
                Support for women after childbirth in Haifa
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Willingness to listen to the needs of the new mother,
                sensitivity and lack of judgment. The volunteering is short-term
                and is done in the free time of the supporting mother, and in
                the vicinity of her residence.
                <p>dates: 08.10-19.10.2022</p>
                <RegisterModal newEvent={() =>
                    dispatch(
                      addEvent({
                        title: "Support for women after childbirth in Haifa",
                        start: new Date(2022, 9, 8),
                        end: new Date(2022, 9, 19),
                      })
                    )
                  }
                >
                  I will go
                </RegisterModal>
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
              <Typography>Magen David Adom - Northen region</Typography>
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
                <RegisterModal newEvent={() =>
                    dispatch(
                      addEvent({
                        title: "Magen David Adom - Northen region",
                        start: new Date(2022, 9, 1),
                        end: new Date(2022, 9, 31),
                      })
                    )
                  }
                >
                  I will go
                </RegisterModal>
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
              <Typography>
                Accompanying children, youth and adults with disabilities in
                cycling classes
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Giving cycling lessons to a variety of disabled people while
                being patient and supporting them.Intended only for those who
                ride a bicycle very well.
                <p>dates: 06.10-10.10.2022</p>
                <RegisterModal newEvent={() =>
                    dispatch(
                      addEvent({
                        title:
                          "Accompanying children youth and adults with disabilities in cycling classes",
                        start: new Date(2022, 9, 6),
                        end: new Date(2022, 9, 10),
                      })
                    )
                  }
                >
                  I will go
                </RegisterModal>
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
              <Typography>Help with homework in "Gordon" school</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Play with the elderly in board games of their choice. The
                volunteering is in a variety of nursing homes in the north and
                lasts only about an hour.
                <p>dates: 19.09-24.09.2022</p>
                <RegisterModal newEvent={() =>
                    dispatch(
                      addEvent({
                        title: "Help with homework in Gordon school",
                        start: new Date(2022, 8, 19),
                        end: new Date(2022, 8, 24),
                      })
                    )
                  }
                >
                  I will go
                </RegisterModal>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="section"
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6bh-content"
              id="panel1a-header"
            >
              <Typography>
                An hour of playing board games with the elderly
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Play with the elderly in board games of their choice. The
                volunteering is in a variety of nursing homes in the north and
                lasts only about an hour.
                <p>dates: 11.10-16.10.2022</p>
                <RegisterModal newEvent={() =>
                    dispatch(
                      addEvent({
                        title:
                          "An hour of playing board games with the elderly",
                        start: new Date(2022, 9, 11),
                        end: new Date(2022, 9, 16),
                      })
                    )
                  }
                >
                  I will go
                </RegisterModal>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="section"
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel7bh-content"
              id="panel1a-header"
            >
              <Typography>
                Distribution of food baskets to needy families - Tzfat
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Movement of food baskets prepared in advance for families in
                need.
                <p>dates: 05.10-06.10.2022</p>
                <RegisterModal newEvent={() =>
                    dispatch(
                      addEvent({
                        title:
                          " Distribution of food baskets to needy families - Tzfat ",
                        start: new Date(2022, 9, 5),
                        end: new Date(2022, 9, 6),
                      })
                    )
                  }
                >
                  I will go
                </RegisterModal>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="emptyDiv"></div>
      <div className="form">
        <button className="button-81" onClick={() => setIsOpen(!isOpen)}>
          Need our services?
        </button>
        {isOpen && (
          <div>
            <div className="form">
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
                        className="input"
                        type="name"
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                      />

                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                      />

                      <textarea
                        className="input"
                        type="description"
                        name="description"
                        placeholder="description"
                        onChange={handleChange}
                        value={values.description}
                        onBlur={handleBlur}
                      />

                      <button className="button-81" type="submit">
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

export default North;
