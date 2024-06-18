import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import logo from '../assets/img/logo.png'
import { Link ,useNavigate} from 'react-router-dom'
import { useCart } from "../Context/CartContext";
import axios from "axios";

const Header=()=>{
    const {cart}=useCart()
    const navigate = useNavigate()
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/search/keyword/${searchKeyword}`);
            console.log(response.data);
            setSearchResults(response.data);
            setSearchPerformed(true);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setSearchPerformed(true);
            setSearchResults([]);
        }
    };

    const handleTyping = async (value) => {
        setSearchKeyword(value);
        if (value.trim() !== '') {
            try {
                const response = await axios.get(`http://localhost:8080/search/suggestions/${value}`);
                setSearchSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching search suggestions:', error);
                setSearchSuggestions([]);
            }
        } else {
            setSearchSuggestions([]);
        }
    };

    const handleProductClick = (pid) => {
        navigate(`/product/${pid}`);
        setSearchKeyword(''); 
        setSearchResults([]); 
        setSearchPerformed(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        alert("You have been logged out successfully!!!")
        navigate("/")
    };
    const showSearchResults = searchKeyword && searchResults.length === 0;

    return (
        <nav>
            <div className='s1'>
                <div className="d-flex">
                    <img src={logo} alt='logo' className='logo' />
                    <h1 className="mt-1 title">GreenBasket</h1>
                </div>
                <div className='searchbar'>
                    <input type="text" placeholder="Search for products and categries" className='search' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
                    <button onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                {searchSuggestions.length > 0 && (
                <div className="search-suggestions">
                    <ul>
                        {searchSuggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => setSearchKeyword(suggestion)}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}
                <div className='right'>
                    <div className='cart'>
                        <span className='qty'>{cart.length}</span>
                        <Link to='/cart' className='stylenone'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </Link>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        {localStorage.getItem('token') && ( 
                                <>
                                <Dropdown.Item href="/user/accountsettings">Profile</Dropdown.Item>
                                <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </>
                            )}
                            {!localStorage.getItem('token') && ( 
                                <Dropdown.Item href="/loginsignup">Login/SignUp</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='s2'>
                <Link to='/'>Home</Link>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/vegetables">Fresh Vegetables</Dropdown.Item>
                        <Dropdown.Item href="/fruits">Fresh Fruits</Dropdown.Item>
                        <Dropdown.Item href="/dairy">Dairy,Bread and Eggs</Dropdown.Item>
                        <Dropdown.Item href="/rice">Rice,Atta and Dal</Dropdown.Item>
                        <Dropdown.Item href="/masalas">Masalas and Dry Fruits</Dropdown.Item>
                        <Dropdown.Item href="/oilsandghee">Edible Oils and Ghee</Dropdown.Item>
                        <Dropdown.Item href="/munchies">Munchies</Dropdown.Item>
                        <Dropdown.Item href="/sweettooth">Sweet Tooth</Dropdown.Item>
                        <Dropdown.Item href="/colddrinks">Cold Drinks and Juices</Dropdown.Item>
                        <Dropdown.Item href="/biscuits">Biscuits and Cakes</Dropdown.Item>
                        <Dropdown.Item href="/frozenfood">Instant and Frozen Food</Dropdown.Item>
                        <Dropdown.Item href="/meatandseafood">Meat and Seafood</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                        More
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/FAQ">FAQ</Dropdown.Item>
                        <Dropdown.Item href="/privacypolicy">Privacy Policy</Dropdown.Item>
                        <Dropdown.Item href="/termsandconditions">Terms & Conditions</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {searchPerformed && (
                <div className="search-results" style={{ cursor: 'pointer' }}>
                    {searchResults.length > 0 ? (
                        <div className="row">
                            {searchResults.map((product, index) => (
                                <div key={index} className="col-md-4 mb-4" onClick={() => handleProductClick(product.pid)}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.pname}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mt-4">
                            <p>No results found.</p>
                        </div>
                    )}
                </div>
            )}
        </nav>
    )
}
export default Header;