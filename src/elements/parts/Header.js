import React from 'react'
import Button from 'elements/Button'
import BrandIcon from './IconText'

export default function Header(props) {

    const getNavLinkClass = path => {
        return window.location.pathname === path ? " active" : "";
    }

  return (

    <header className='spacing-sm'>
        <div className='container'>

            <nav class="navbar navbar-expand-lg navbar-light">
                <BrandIcon />

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class={`nav-item${getNavLinkClass("/")}`}>
                            <Button className='nav-link' type='link' href='/'>Home</Button>
                        </li>
                        <li class={`nav-item${getNavLinkClass("/browse-by")}`}>
                            <Button className='nav-link' type='link' href='/browse-by'>Browse By</Button>
                        </li>
                        <li class={`nav-item${getNavLinkClass("/stories")}`}>
                            <Button className='nav-link' type='link' href='/stories'>Stories</Button>
                        </li>
                        <li class={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className='nav-link' type='link' href='/agents'>Agents</Button>
                        </li>

                    </ul>
                </div>
            </nav>
                        
        </div>
    </header>

  )
}
