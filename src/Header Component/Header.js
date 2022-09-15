import React, { useEffect, useState } from "react";
import { IoMenu, IoClose, IoCall, IoMail } from "react-icons/io5";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import SocialItems from "../SmallComponents/SocialItems";
import { getIcon } from "../Utils/Util";

export default function Header(props) {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
}

export function HeaderTop() {
  return (
    <div className="header-top" id="top">
      <div className="container">
        <ul className="contact-list">
          <li className="contact-item">
            {getIcon("mail")}
            <a href="mailto:info@example.com" className="contact-link">
              sharaddubeydubey2996@gmail.com
            </a>
          </li>
          <li className="contact-item">
            {getIcon("call")}
            <a href="tel:+9125909490" className="contact-link">
              +91-9125909491
            </a>
          </li>
        </ul>
        <div className="social-list">
          <SocialItems
            href="www.instagram.com"
            className="social-link"
            iconName="instagram"
          />
          <SocialItems
            href="www.facebook.com"
            className="social-link"
            iconName="facebook"
          />
          <SocialItems
            href="www.youtube.com"
            className="social-link"
            iconName="youtube"
          />
        </div>
      </div>
    </div>
  );
}

export function HeaderBottom() {
  const [isHiddenCrossMenu, setIsHiddenCrossMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseBookButton = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  function scrollListener() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", scrollListener);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });
  return (
    <div className={"header-bottom" + (scrollY > 100 ? " active" : "")}>
      <div className="container">
        <a href="#home" className="logo">
          Sanyam.
        </a>
        <nav
          className={"navbar container" + (isHiddenCrossMenu ? " active" : "")}
        >
          <ul className="navbar-list">
            <li className="nav-item">
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#service" className="navbar-link">
                Join our Movement
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link">
                About Us
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link">
                Contact Us
              </a>
            </li>
            <li
              className={
                "navbar-item " + isHiddenCrossMenu
                  ? "appointment-book-not-active"
                  : ""
              }
            >
              <a className="navbar-link" onClick={() => setIsOpen(true)}>
                Book Appointment
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn" onClick={() => setIsOpen(true)}>
          Book Appointment
        </button>
        <Appointment open={isOpen} handleCloseButton={handleCloseBookButton} />
        <button
          className="nav-toggle-btn"
          aria-label="Toggle menu"
          onClick={(e) => {
            setIsHiddenCrossMenu(isHiddenCrossMenu ? false : true);
          }}
        >
          {isHiddenCrossMenu ? (
            <IoClose aria-hidden={true} />
          ) : (
            <IoMenu aria-hidden={true} />
          )}
        </button>
      </div>
    </div>
  );
}

export function Appointment(props) {
  const { open, handleCloseButton } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseButton}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Fill the Below Form and Submit it.. 🙂"}
        </DialogTitle>
        <DialogContent style={{ overflow: "hidden" }}>
          <DialogContentText id="alert-dialog-description">
            <iframe
              title="Google_Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfZyikb2nJT4UcpfjCVBH_F6dFgigsLDPuBK9za-BurU1hpcA/viewform?embedded=true"
              width="auto"
              height="858"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleCloseButton}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
