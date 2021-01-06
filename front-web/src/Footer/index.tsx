import './styles.css';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a target="_new"><YoutubeIcon />

                </a>
                <a target="_new"><LinkedInIcon />

                </a>
                <a target="_new"><InstagramIcon />

                </a>
            </div>
        </footer>
    )
}

export default Footer;