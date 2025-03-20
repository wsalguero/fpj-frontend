import { Outlet } from "react-router-dom"

const Newton = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

Newton.MainView = () => {
    return (
        <div>Newton</div>
    )
}

Newton.First = () => {
    return (
        <div>First</div>
    )
}

Newton.Second = () => {
    return (
        <div>Second</div>
    )
}

Newton.Third = () => {
    return (
        <div>Third</div>
    )
}

export default Newton