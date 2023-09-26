import logo from './../../img/icons/logo.svg'
import './header.css'

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                        <span>Fashion</span>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a href="#!">catalogue</a>
                            </li>
                            <li>
                                <a href="#!">fashion</a>
                            </li>
                            <li>
                                <a href="#!">favourite</a>
                            </li>
                            <li>
                                <a href="#!">lifestyle</a>
                            </li>
                            <li>
                                <a className='header__nav-btn' href="#!">sign up</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}