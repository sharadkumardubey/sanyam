import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLoginForm from "../Admin/AdminLoginForm";
import SocialItems from "../SmallComponents/SocialItems";
import { getIcon } from "../Utils/Util";

export default function Footer() {
  const [scrollY, setScrollY] = useState(0);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

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
    <>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 All Rights Reserved by Sharad Kumar Dubey.
          </p>
          <div className="social-list">
            <SocialItems
              href="www.instagram.com"
              className="social-link"
              iconName="instagram"
            />
            <SocialItems
              href="www.instagram.com"
              className="social-link"
              iconName="instagram"
            />
            <SocialItems
              href="www.youtube.com"
              className="social-link"
              iconName="youtube"
            />
          </div>
        </div>
      </div>
      <button className="float-icon login" aria-label="login" onClick={()=>setLoginModalOpen(true)}>
        {getIcon("login", true)}
      </button>
      <Dialog open={loginModalOpen} onClose={()=>setLoginModalOpen(false)}>
        <DialogTitle>Login Form</DialogTitle>
        <DialogContent>
          <AdminLoginForm />
        </DialogContent>
      </Dialog>
      <a href="#top" className={"float-icon back-top-btn" + (scrollY > 100 ? " active" : "")} aria-label="back to top">
        {getIcon("caretUp", true)}
      </a>
    </>
  );
}
