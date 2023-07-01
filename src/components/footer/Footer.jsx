import React from "react";
import "./footer.css"

const Footer =() =>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Sahil</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>
                <div className="footer__social">
                <a href=" https://github.com/sahil26k " className="footer__social-link" target="_blank">
                    <i class="bx bxl-github"></i>
                    </a>
                    <a href=" www.linkedin.com/in/sahil-kashyap-0809a0135" className="footer__social-link" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href=" https://www.instagram.com/__sahil_k_/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                    </a>  
                </div>
                <span className="footer__copy">&#169; Sahil. All rigths reserved</span>
            </div>  
        </footer>
    )
}

export default Footer;