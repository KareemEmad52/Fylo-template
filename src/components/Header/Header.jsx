import React, { useEffect, useRef, useState } from 'react'
import logo from "../../Assets/logo.svg"
export default function Header() {

    const headerRef = useRef()
    let [links, setLinks] = useState(['Features', 'Team', 'Signin'])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                headerRef.current.style.background = "#0c1524";
                headerRef.current.style.padding = "20px 0";
            } else {
                headerRef.current.style.background = "transparent";
                headerRef.current.style.padding = "60px 0";
            }
        })
    }, [])
    return (
        <>
            <header ref={headerRef} className='pt-[60px] fixed top-0 left-0 w-full z-50 transition-padding duration-300'>
                <div className='container  flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row'>
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav>
                        <ul className='flex items-center gap-[50px]'>
                            {links.map((link) => (
                                <li>
                                    <a href={`/${link.toLowerCase()}`} className='text-white opacity-[0.99] hover:opacity-100 hover:underline transition-opacity duration-200'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
