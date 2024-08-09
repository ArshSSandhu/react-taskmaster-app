import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-dark text-light py-4" >
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="mb-3">My Task Master</h5>
            <p>Stay organized and keep track of your tasks with ease!</p>
          </div>
          <div className="col-md-6">
            <h5 className="mb-3">Follow Me</h5>
            <a href="https://github.com/ArshSSandhu" className="text-light mx-2">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arshpreet-singh-sandhu-ba0a14256/" className="text-light mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/arsh__sandhu2912/" className="text-light mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <hr className="my-4 border-light" />
        <p className="mb-0">
          &copy; {new Date().getFullYear()} My Task Master | Built by <a href="https://arshssandhu.github.io" className="text-light">Arshpreet S. Sandhu</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
