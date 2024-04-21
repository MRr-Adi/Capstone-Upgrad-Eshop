// Importing required dependencies and styles
import "./Footer.css";
import Typography from '@mui/material/Typography';

// Functional component for the footer
const Footer = () => (
    // Footer section with copyright information
    <footer className="footer">
        {/* Container to center align content */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Typography component for copyright information */}
            <Typography variant="body2">
                {/* Copyright text with link to upGrad website */}
                Copyright © <a href="https://www.upgrad.com/" target="blank">upGrad</a>
                {/* Year */}
                2024.
            </Typography>
        </div>
    </footer>
);

// Exporting the Footer component
export default Footer;
