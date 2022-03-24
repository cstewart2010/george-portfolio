function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Student of the Arts</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Project 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Project 2
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="https://www.facebook.com/GeorgeJohnsonOffice/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="https://www.etsy.com/shop/Studentofthearts" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-etsy"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;