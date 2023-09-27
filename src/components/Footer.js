import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { AppFooter } from "./FooterStyle"
export default function Footer(){
    return(
        <AppFooter>
        <span>
             <FontAwesomeIcon icon={faTwitter}  color="#161619" size="lg" className="fa-border fa-border-color"/>
             <FontAwesomeIcon icon={faFacebook}  color="#161619" size="lg" className="fa-border fa-border-color"/>
             <FontAwesomeIcon icon={faInstagram}  color="#161619" size="lg" className="fa-border fa-border-color"/>
             <FontAwesomeIcon icon={faGithub}  color="#161619" size="lg" className="fa-border fa-border-color"/>
        </span>
        </AppFooter>
    )
}