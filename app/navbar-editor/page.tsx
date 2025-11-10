import React, { useState } from 'react';

const NavbarEditor = () => {
    const [logoText, setLogoText] = useState('');
    const [isLogoVisible, setIsLogoVisible] = useState(true);
    const [navLinks, setNavLinks] = useState(['Home', 'About', 'Contact']);

    const handleLogoTextChange = (e) => {
        setLogoText(e.target.value);
    };

    const toggleLogoVisibility = () => {
        setIsLogoVisible(!isLogoVisible);
    };

    const handleNavLinkChange = (index, e) => {
        const newNavLinks = [...navLinks];
        newNavLinks[index] = e.target.value;
        setNavLinks(newNavLinks);
    };

    return (
        <div>
            <h1>Navbar Editor</h1>
            <div>
                <label>
                    Logo Text:
                    <input type="text" value={logoText} onChange={handleLogoTextChange} />
                </label>
                <label>
                    <input type="checkbox" checked={isLogoVisible} onChange={toggleLogoVisibility} />
                    Show Logo
                </label>
            </div>
            <div>
                <h2>Navigation Links</h2>
                {navLinks.map((link, index) => (
                    <div key={index}>
                        <input type="text" value={link} onChange={(e) => handleNavLinkChange(index, e)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavbarEditor;