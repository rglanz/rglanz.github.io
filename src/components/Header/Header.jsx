import React from 'react'
import Profile from './Profile'
import Social from './Social'
import CV from './CV'
import {RiMoonLine, RiSunLine} from 'react-icons/ri'

function Header(props) {
  return(
    <header className="profile container">
      {props.isDarkMode ? (
          <RiSunLine
            className="change-theme"
            id="theme-button"
            onClick={props.onClick}
          />
        ) : (
          <RiMoonLine
            className="change-theme"
            id="theme-button"
            onClick={props.onClick}
          />
        )
      }

      <div className="profile__container grid">
        
        <div className="profile__data">
          <Profile />
          <h2 className="profile__name">Ryan Glanz</h2>
          <h3 className="profile__profession">Frontend developer</h3>
          <Social />
        </div>
        <CV />
      </div>
    </header>
  )
}

export default Header
