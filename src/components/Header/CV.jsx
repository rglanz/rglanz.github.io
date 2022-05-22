import React from 'react'
import {RiDownloadLine, RiWhatsappLine, RiMessengerLine} from 'react-icons/ri'

function CV() {
  return(
    <div className="profile__buttons">
          <a
            download=""
            href="/pdf/Glanz_Resume.pdf"
            className="button"
          >
            Download CV
              <RiDownloadLine className="icon"/>
          </a>
    </div>
  )
}

export default CV
