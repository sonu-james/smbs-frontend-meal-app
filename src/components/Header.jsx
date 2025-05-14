import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPowerOff, faUtensils, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Header() {
  const wishlistArray = useSelector((state) => state.wishlistReducer || []);
  const wishlistCount = wishlistArray.length;

  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    toast.success("Successfully logged out");
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
    <Navbar className="bg-transparent border">
      <Container className="d-flex justify-content-between align-items-center">

        {/* Brand on the left */}
        <Navbar.Brand className="d-flex align-items-center">
          <FontAwesomeIcon icon={faUtensils} beat style={{ color: "#051a3d" }} />
          <span className="text-primary ms-3 fs-5 fw-bold">Meal-app</span>
        </Navbar.Brand>

        {token && (
          // Buttons on the right
          <div className="d-flex align-items-center ms-auto">
            <Link to="/wishlist">
              <Button variant="outline-primary" className="rounded me-2">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#e0061c" }} className="me-2" />
                Wish List
                <Badge bg="secondary" className="ms-1">{wishlistCount}</Badge>
              </Button>
            </Link>

            <Button variant="primary" className="rounded" onClick={handleLogout}>
              <FontAwesomeIcon icon={faPowerOff} className="me-2" />
              Log Out
            </Button>
          </div>
        )}

        <ToastContainer position='top-center' theme='colored' />
      </Container>
    </Navbar>
  )
}

export default Header