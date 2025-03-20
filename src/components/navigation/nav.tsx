import { Link } from "react-router-dom"

const Nav = () => {

    const router = {
        home: "/",
        mcu: "/mcu",
        gravity: "/gravity",
        newton_laws: {
            main: "/newton",
            fist: "/newton/first",
            second: "/newton/second",
            third: "/newton/third",
        },
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Calculadora</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={router.home} >Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Leyes de Newton
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={router.newton_laws.main}>Leyes de Newton</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to={router.newton_laws.fist}>Primer Ley de Newton</Link></li>
                                <li><Link className="dropdown-item" to={router.newton_laws.second}>Segunda Ley de Newton</Link></li>
                                <li><Link className="dropdown-item" to={router.newton_laws.third}>Tercera Ley de Newton</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={router.mcu}>M.C.U</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={router.gravity}>Gravitación Universal</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav