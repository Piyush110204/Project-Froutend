import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleInputBlur = () => {
        if (searchValue === '') {
            setShowSearch(false);
        }
    };
    const LinkStyle = { color: 'rgb(87, 86, 86)', textDecoration: 'none' }
    const img = 'https://i.postimg.cc/0N4mvQzt/png-transparent-ayurveda-healing-tree-art-ayurveda-therapy-medicine-hospital-panchakarma-herbal-food.png';
    return (
        <>
            <div className='topheader d-flex justify-content-around align-items-center'>
                <div><img style={{ borderRadius: '50%', height: '60px' }} src={img} className="img-fluid" alt="" /></div>
                <div>
                    <div className="input-group position-relative d-sm-block d-none d-md-block d-lg-block">
                        <input type="search" className="rounded-pill rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" style={{ borderRadius: '50rem', right: '0' }} className="seachbtn position-absolute btn btn-success" data-mdb-ripple-init><span>search</span></button>
                    </div>
                </div>
                <div>
                    <span style={{ cursor: 'pointer', fontWeight: '600' }} className="text-success"><i className="fa fa-user pe-2" style={{ fontSize: '22px' }} aria-hidden="true"></i>Login</span>
                    <span style={{ cursor: 'pointer', fontWeight: '600' }} className="text-success"><i className="fa fa-shopping-cart ps-5 pe-2" style={{ fontSize: '22px' }} aria-hidden="true"></i>Cart</span>
                </div>
            </div>
            <nav className="navbar navbar-expand-sm position-relative" style={{ backgroundColor: '#b8e78e' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars text-light ms-5"></i>
                </button>
                <div className="header collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav text-dark mr-auto w-100 d-flex justify-content-around align-items-center">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" style={LinkStyle}>Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/disease" className="nav-link" style={LinkStyle}>Disease</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/products" className="nav-link" style={LinkStyle}>Products</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/yoga" className="nav-link" style={LinkStyle}>Yoga</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/homeremedies" className="nav-link" style={LinkStyle}>Home Remedies</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/about" className="nav-link" style={LinkStyle}>About Us</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/doctorconsult" className="nav-link" style={LinkStyle}>Doctor Consult</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/contact" className="nav-link" style={LinkStyle}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="mobilesearch position-absolute d-sm-none d-block d-lg-none d-md-none " style={{ right: '5%' }}>
                    <div className="input-group position-relative ">
                        {showSearch ? (
                            <>
                                <input
                                    type="text"
                                    className="rounded-pill"
                                    placeholder="Search"
                                    onBlur={handleInputBlur}
                                    onChange={handleInputChange}
                                    value={searchValue}
                                />
                                <button type="button" style={{ borderRadius: '50rem', right: '0' }} className=" position-absolute" data-mdb-ripple-init><span>search</span></button>

                            </>
                        ) : (
                            <i className="fa fa-search" onClick={toggleSearch}></i>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
