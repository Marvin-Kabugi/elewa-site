// NavBar.tsx
// This file defines the NavBar component, which renders a navigation bar with dynamic links for a web application.
// It takes an array of link descriptions and renders them using the React Router 'Link' component for in-app routing.
// The component is styled using the Navbar.css stylesheet.

import { Link } from 'react-router-dom';
import { LinkDescription } from '../../data';
import './Navbar.css'

/**
 * Interface for defining the structure of props expected by the NavBar component.
 * 
 * @property {LinkDescription[]} links - An array of objects describing each navigation link, including its name and path.
 */
interface MyComponentProps {
    links: LinkDescription[];
}

/**
 * The NavBar functional component.
 * It renders a navigation bar with a logo and a list of links. Each link is rendered using the `Link` component
 * from 'react-router-dom' for seamless navigation within a single-page application (SPA) context.
 *
 * @param {MyComponentProps} props - The props object containing an array of link descriptions.
 * @returns {JSX.Element} - The JSX code for rendering the NavBar component.
 */
export default function NavBar({ links }: MyComponentProps): JSX.Element {
    // URL for the logo image to be displayed in the navbar.
    let url: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg";

    return (
        <div className='main-div'>
            <div>
                {/* Link wrapping the logo should direct to the home page and have an accessible 'alt' text for the image. */}
                <a href="/">
                    <img src={url} alt="Company Logo" />
                </a>
            </div>
            <ul className='nav-links'>
                {/* Map over the links array to generate list items. The 'key' should ideally use a unique identifier rather than the index. */}
                {links.map((link, index) => (
                    <li key={index} className='nav-link-item'>
                        {/* React Router's Link component is used here for client-side routing between components. */}
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
