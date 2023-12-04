import { Outlet, NavLink } from 'react-router-dom'
const RootLayout: React.FC = ({   }) => {
    return (
        <div className="root-layout">{}
            <header>
                <nav className="navbar">
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">Search</NavLink>
                        <NavLink className="nav-link" to="/searchresult">Result</NavLink>
                        <NavLink className="nav-link" to="/showdetails">ShowDetails</NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )

}

export default  RootLayout;