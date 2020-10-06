import React from 'react';
import '../../assets/style/footer.css'
import * as constants from "../../app/constantFile"

/**
 * This will contain the items in the footer of the App
 */

function Footer() {
    return(
        <nav className="footer">
            <p> {constants.footer_Text} </p>
        </nav>
    )
}
export default Footer;