import { Link } from 'react-router-dom';
import { useState } from 'react';

import  './style.css';

const Navbar = () => {
    const [style, setStyle] = useState("sidebar_1");
    const showSidebar = () => {
        setStyle("sidebar_2");
    };
    const hideSidebar = () => {
        setStyle("sidebar_1");
    };

    return ( 
        <nav className="navbar">
            <ul className={style}>
                <li onClick={hideSidebar} className="link"><svg className="item" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                <li className="link"><Link className="item" to="/blogs">Blog</Link></li>
                <li className="link"><Link className="item" to="/projects">Projects</Link></li>
            </ul>
            <ul className="list">
                <Link className="blogName" to="/">Tojiev's blog</Link>
                <li className="link hideOnMobile"><Link className="item" to="/blogs">Blog</Link></li>
                <li className="link hideOnMobile"><Link className="item" to="/projects">Projects</Link></li>
                <li onClick={showSidebar} className="link menu-item"><svg className="item" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
