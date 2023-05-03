import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="footer-box">

                    <div className="footer-site-map">
                        <div className="footer-logo">
                            <FontAwesomeIcon icon={faTree} />
                            <span>Forest</span>
                        </div>
                        <div className="footer-info-box">
                            <div className="footer-info-area">
                                <p className="footer-area-title">O nas</p>
                                <ul>
                                    <li>Historia</li>
                                    <li>Parki</li>
                                    <li>Opinie</li>
                                </ul>
                            </div>

                            <div className="footer-info-area">
                                <p className="footer-area-title">Nasza firma</p>
                                <ul>
                                    <li>Praca</li>
                                    <li>Kadry</li>
                                    <li>Zarząd</li>
                                </ul>
                            </div>

                            <div className="footer-info-area">
                                <p className="footer-area-title">Dokumenty</p>
                                <ul>
                                    <li>Wnioski</li>
                                    <li>Rezerwacje</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <p className="info">2021 Forest Group Company Ltd.</p>

                </div>
            </div>
        </div>
    );
}
 
export default Footer;