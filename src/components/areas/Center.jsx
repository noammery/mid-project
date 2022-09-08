import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Formik } from "formik";
import "./center.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Center = () => {
  // const [isSent, setIsSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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

  return (
    <div className="Center">
      <div className="centerTop">
        <div className="centerHeader">
          <h1>Centeral area</h1>
          <h3 className="northAbout">
            In the central region, we work in collaboration with several
            institutions specific to the center. Such as: "Mabrok", help for
            drug addicts and more, thus maximizing the efficiency of the work.
          </h3>
        </div>
        <div className="areaImgs">
          <img
            src="https://www.hotelscombined.co.il/rimg/dimg/65/be/5907f602-city-54749-166a780a201.jpg"
            className="areaImg"
            alt=""
          />
        </div>
      </div>
      <div className="centerBottom">
        <div className="accordion">
          <Accordion
            className="section"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1a-header"
            >
              <Typography>
                The association for the promotion of education in Tel Aviv
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The association helps and works in a variety of fields for
                underprivileged populations and has many volunteering programs
                as part of it. Volunteers with a car are currently needed to
                distribute food collected for needy families. As part of
                volunteering - taking the food from the packing center located
                on Tel Givorim Street, and distributing it to the families in
                need according to the registration.
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
                The association for the promotion of education in Jaffa
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                An association operates a project to help children from
                disadvantaged families, through mentoring for at-risk children
                aged 4-12. The volunteers are asked to serve as a kind of mature
                and significant brother figure for the child, listening
                attentively and treating, helping with studies, etc.
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
              <Typography>Magen David Adom - Central region</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Magen David Adom, in conjunction with the Israel Experience, has
                the perfect program for you. Come make a difference in Israel!
                Be trained as an ambulance first responder (EMS) or senior first
                responder. Volunteer on ambulances throughout Israel. Where else
                in the world can you do this? Be on the forefront of emergencies
                in Israel!
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
              <Typography>"Mabruk"</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                In short, Mabrok is an association that produces weddings for
                underprivileged couples. Then If you have a connection to the
                world of weddings, if you are looking for significant
                volunteering and have a crazy desire to take part in an amazing
                project - we want you!! Join us in the Mabruk family!
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
              <Typography>Singing in nursing homes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Come sing and make old people happy in nursing homes in the
                center.
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
              <Typography>Minimizing drug harm</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Volunteers are needed for a special project dealing with the
                minimization of drug damage! A harm minimization approach is a
                holistic approach, which comes down from the high tree of
                eradicating the phenomenon of addiction and chooses to see the
                person as he is. Without judging or trying to fix and with a lot
                of compassion and an open heart. The Yizhar Center supports the
                people who are in the cycle of addiction and prostitution,
                through access to food, clothing, hot showers, clean syringes
                and above all through the presence of humanity for the people
                whose life circumstances pushed them to the margins.
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
              <Typography>Food packaging for the needy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Food packaging of food donated to us and brought to the
                destination when necessary. The food is donated to people who do
                not have the financial ability to buy food for themselves.
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
                            <p style={{ fontSize: "xsmall" }}>
                              Click away to dismiss
                            </p>
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

export default Center;
