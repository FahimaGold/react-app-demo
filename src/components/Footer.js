import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { AppFooter, FooterIcon } from "./FooterStyle"

export default function Footer(){
    return(
        <AppFooter>
        <span>
             <FontAwesomeIcon icon={faTwitter} size="lg" className="fa-border fa-border-color"/>
             <FontAwesomeIcon icon={faFacebook}   size="lg" className="fa-border fa-border-color"/>
             <FontAwesomeIcon icon={faInstagram}   size="lg" className="fa-border fa-border-color"/>
             <FontAwesomeIcon icon={faGithub}   size="lg" className="fa-border fa-border-color"/>
        </span>
        </AppFooter>
    )
}