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
import { useDispatch } from "react-redux/es/exports";
import { addEvent } from "../../store/calendarSlice";
import RegisterModal from "../button-form-components/RegisterModal";




let module = require("../content-data/data");
let events = module.data.center;




const Center = () => {



    const [isOpen, setIsOpen] = useState(false);

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
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



                    {events.map(({ title, details, start, end }, index) => (
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

    )
}
export default Center;

