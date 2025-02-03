import React from "react";
import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Ryhn-F" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/r_xyy._/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
