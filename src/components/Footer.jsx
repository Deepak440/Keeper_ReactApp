import React from 'react';

function Footer()
{
    const CureentYear = new Date().getFullYear();
    return <footer>
        <p> Copyright © {CureentYear} </p>
    </footer>
}

export default Footer;