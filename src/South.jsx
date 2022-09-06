import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Formik } from "formik";

const South = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="southHeader">
        <h1>Volunteering in the South</h1>
      </div>
      <h3 className="northAbout">
        Welcome to the Official site of the NON Movement Volunteers Program
        South
      </h3>
      <div className="accordion">
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Volunteering at Soroka Hospital</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Helping patients by raising morale. You can bring tasty things or
              board games or anything you think will make the patients happy.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Rehabilitation of "Darom Adom"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Helping farmers in restoring the garden. Volunteering is a little
              physical and suitable for young people.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Magen David Adom - South region</Typography>
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
            <Typography>Company hosting for older people</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Come as long as you want to host company and make them feel good.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              Accompanying new immigrants and their families in the community
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Help with the Hebrew language and hosting the families on Israeli
              holidays. You should introduce them to our customs and culture as
              much as possible
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

export default South;
