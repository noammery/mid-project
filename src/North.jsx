import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Formik } from "formik";

const North = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="northHeader">
        <h1>Volunteering in the North</h1>
      </div>
      <h3 className="northAbout">
        Welcome to the Official site of the NON Movement Volunteers Program
        North
      </h3>
      <div className="accordion">
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Volunteering with animals</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The association works to enforce the Animal Cruelty Law and
              regulations by units of volunteers in the field, who handle cases
              of neglect and abuse while responding to requests from the public.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Support for women after childbirth</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Willingness to listen to the needs of the new mother, sensitivity
              and lack of judgment. The volunteering is short-term and is done
              in the free time of the supporting mother, and in the vicinity of
              her residence.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Magen David Adom - Northen region</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Magen David Adom, in conjunction with the Israel Experience, has
              the perfect program for you. Come make a difference in Israel! Be
              trained as an ambulance first responder (EMS) or senior first
              responder. Volunteer on ambulances throughout Israel. Where else
              in the world can you do this? Be on the forefront of emergencies
              in Israel!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              Accompanying children, youth and adults with disabilities in
              cycling classes
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Giving cycling lessons to a variety of disabled people while being
              patient and supporting them.Intended only for those who ride a
              bicycle very well.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Help with homework in schools</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Play with the elderly in board games of their choice. The
              volunteering is in a variety of nursing homes in the north and
              lasts only about an hour.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              An hour of playing board games with the elderly
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Play with the elderly in board games of their choice. The
              volunteering is in a variety of nursing homes in the north and
              lasts only about an hour.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Need our services?</button>
        {isOpen && (
          <div>
            <div className="form">
              <Formik
                initialValues={{ email: "", name: "", description: "" }}
                onSubmit={(values) => window.confirm("sent")} // what the submit button does
              >
                {({ handleSubmit, handleChange, handleBlur, values }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <div>
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
                        plholder="deiption"
                        onChange={handleChange}
                        value={values.description}
                        onBlur={handleBlur}
                      />

                      <button type="submit">send</button>
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
