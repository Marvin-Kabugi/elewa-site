import { Link } from 'react-router-dom';
import { LinkDescription } from '../../data';
import './Navbar.css'

interface MyComponentProps {
    links: LinkDescription[];
} 

export default function NavBar({ links }: MyComponentProps){
    let url: string = "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"

    return (
        <>  
            <div className='main-div'>
                <div>
                    <a href="">
                        <img src={url} alt="" />
                    </a>
                </div>
                <ul className='nav-links'>
                    {links.map((link, index) => (
                        <li key={index} className='nav-link-item'>
                            {/* <a href={link.link}>{link.name}</a> */}
                            <Link to={link.link}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}