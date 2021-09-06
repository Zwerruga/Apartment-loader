import React, { memo } from 'react'

export default memo(function Nav() {
    return (
        <nav>
            <div className='nav-wrapper'>
                <a href='#logo' className='brand-logo'>
                    Logo
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#contacts'>Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
})
