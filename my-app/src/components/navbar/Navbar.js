import './Navbar.css';
function Navbar() {

    return (
        <div className="nav-container">
            <div className="nav-item">
                <a className="nav-fade" href="#">home</a>
            </div>
            <div className="nav-item">
                <a className="nav-fade" href="">projects</a>
            </div>
            <div className="nav-item">
                <a className="nav-fade" href="">resume</a>
            </div>
        </div>
    )

}

export default Navbar;