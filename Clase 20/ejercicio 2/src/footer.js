import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { blue, red, green } from '@material-ui/core/colors';
import './index.scss';

const Footer = () => (
    <footer>
    <ul>
    <FacebookIcon fontSize="large" style={{ color: blue[800] }} />
    <TwitterIcon fontSize="large" style={{ color: blue[500] }}/>
    <YouTubeIcon fontSize="large" style={{ color: red[800] }}/>
    <MailIcon fontSize="large"/>
    <WhatsAppIcon style={{ color: green[600]}} fontSize="large" />
    </ul>
    <p>Contact us:
        <br/>
        Tel: 3415551234
        <br/>
        Mail: music@gmail.com
    </p>
    </footer> 
)

export default Footer;
