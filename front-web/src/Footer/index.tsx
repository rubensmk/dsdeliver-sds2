import './styles.css';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a target="_new" href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g"><YoutubeIcon />

                </a>
                <a target="_new" href="https://www.linkedin.com/school/devsuperior/"><LinkedInIcon />

                </a>
                <a target="_new" href="https://www.instagram.com/devsuperior.ig/"><InstagramIcon />

                </a>
            </div>
        </footer>
    )
}

export default Footer;