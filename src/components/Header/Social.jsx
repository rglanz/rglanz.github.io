import React from 'react'
import { RiLinkedinBoxLine, RiGithubLine, RiMailLine } from 'react-icons/ri'
import { nanoid } from 'nanoid'

function Social() {
    const social = [
        {
            id: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ryan-glanz-172974118/',
            icon: RiLinkedinBoxLine
        },
        {
            id: 'Github',
            url: 'https://github.com/rglanz',
            icon: RiGithubLine
        },
        {
            id: 'Email',
            url: 'mailto:glanzrm@gmail.com',
            icon: RiMailLine
        }
    ]

    const socialArray = social.map(icon => {
        return(
            <a
                key={nanoid()}
                href={icon.url}
                target='_blank'
                className="profile__social-link"
            >
                <icon.icon className="icon"/>
            </a>
        )
        
    })

    return(
        <ul className="profile__social">
            {socialArray}
        </ul>
    )
}

export default Social
