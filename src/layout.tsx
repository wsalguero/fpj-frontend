import { Outlet } from "react-router-dom"
import Nav from "./components/navigation/nav"
import Footer from "./components/footer/footer"

export const Layout = () => {
    return (
        <div>
            {/* Barra de navegacion para redireccionar a las paginas */}
            <Nav />

            {/* Contenido de la pagina*/}
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

        </div>
    )
}
