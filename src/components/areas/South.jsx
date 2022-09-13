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
import { useDispatch } from "react-redux/es/exports";
import { addEvent } from "../../store/calendarSlice";
import RegisterModal from "../button-form-components/RegisterModal";

let module = require("../content-data/data");

let data = module.data;

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
                    {data.south.map(({ title, details, start, end }, index) => (
                        <Accordion
                            className="section"
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                        >
                            <AccordionSummary
                                aria-controls="panel1bh-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    {title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {details}
                                    <p>{`dates: ${start.toDateString()} - ${end.toDateString()}`}</p>
                                </Typography>
                                <RegisterModal newEvent={() =>
                                    dispatch(
                                        addEvent({ title, start, end })
                                    )}>

                                </RegisterModal>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
            <div className="emptyDiv"></div>
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
