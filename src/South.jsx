import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Formik } from "formik";
import "./south.css";

const South = () => {
  const [isWrite, setIsWrite] = useState(false);
  const [isWrite3, setIsWrite3] = useState(false);
  const [isWrite2, setIsWrite2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
          />
        </div>
      </div>
      <div className="southBottom">
        <div className="accordionContainer">
          <Accordion className="section">
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Volunteering at Soroka Hospital</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Helping patients by raising morale. You can bring tasty things
                or board games or anything you think will make the patients
                happy.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="section">
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Rehabilitation of "Darom Adom"</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Helping farmers in restoring the garden. Volunteering is a
                little physical and suitable for young people.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="section">
            <AccordionSummary
              aria-controls="panel1a-content"
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
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="section">
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Company hosting for older people</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Come as long as you want to host company and make them feel
                good.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="section">
            <AccordionSummary
              aria-controls="panel1a-content"
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
                culture as much as possible
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
                onSubmit={(values) => window.confirm("sent")} // what the submit button does
              >
                {({ handleSubmit, handleChange, handleBlur, values }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="inputContainer">
                      <input
                        onClick={() =>
                          isWrite === false
                            ? setIsWrite(true)
                            : setIsWrite(false)
                        }
                        className={`input ${isWrite}`}
                        type="name"
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                      />

                      <input
                        onClick={() =>
                          isWrite2 === false
                            ? setIsWrite2(true)
                            : setIsWrite2(false)
                        }
                        className={`input ${isWrite2}`}
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                      />

                      <textarea
                        onClick={() =>
                          isWrite3 === false
                            ? setIsWrite3(true)
                            : setIsWrite3(false)
                        }
                        className={`input ${isWrite3}`}
                        type="description"
                        name="description"
                        placeholder="description"
                        onChange={handleChange}
                        value={values.description}
                        onBlur={handleBlur}
                      />

                      <button
                        className="submitButton, button-81"
                        type="submit"
                        role="button"
                      >
                        send
                      </button>
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
