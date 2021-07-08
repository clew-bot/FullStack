/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Home = () => {
  return (
    <div className="section_container" id="home">
      <div className="hero-content">
        <div className="headline">
          <span>Hi, my name is Tanner Barcelos</span>
          <span>Software Engineer. Researcher. Creator.</span>
          <small>See some important links below to learn more about me</small>
        </div>
        <ul className="socials">
          <li>
            <a href="https://github.com/TannerBarcelos" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tanner-barcelos-695619a1/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1r_jZFhB_8bDX1FfAHpfg6mF-cN-c_VZC/view?usp=sharing"
              target="_blank"
            >
              <i className="far fa-file"></i>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@tanner.manuel.barcelos"
              target="_blank"
            >
              <i class="fab fa-medium"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
