import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faBars } from '@fortawesome/free-solid-svg-icons'

const handleNav = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

const Nav = () => {
    return (
        <div className="nav">
            <div className="wrapper">
                <div className="nav-box">

                    <div className="logo">
                        <FontAwesomeIcon icon={faTree} />
                        <span>Logo</span>
                    </div>

                    <div className="menu">
                        <a href="/" className="menu-link">Home</a>
                        <a href="/" className="menu-link">O nas</a>
                        <a href="/" className="menu-link">Oferta</a>
                        <a href="/" className="menu-link">Kontakt</a>
                    </div>

                    <button className="burger-btn" onClick={handleNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                </div>
            </div>
        </div>
    );
}
 
export default Nav;