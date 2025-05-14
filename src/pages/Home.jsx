import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    setIsLogin(!!sessionStorage.getItem("token"))
  }, [])

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <h1 className='fs-3'>Welcome to <span className='text-warning'>Meal App</span></h1>
            <p className='mt-4 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora qui eligendi minima neque aspernatur quis esse sed fuga expedita...
            </p>
            {!isLogin && (
              <Link to="/login" className="btn btn-primary px-3 py-2 mt-4">
                Get Started
              </Link>
            )}
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-4 ">
            <img
              src="https://wallpapercave.com/wp/wp8791188.jpg"
              alt="Meal"
              className="img-fluid rounded"
            />
          </div>
        </div>

        <h3 className="text-center my-5">Dishes</h3>
        <div className="row">
          {[
            "https://tse2.mm.bing.net/th?id=OIP.3YnYU-Vj8gtDb78wb_BNaAHaEJ&pid=Api&P=0&h=220",
            "https://tse3.mm.bing.net/th?id=OIP.1DMPv50uk5lSHJl_98CipQHaEJ&pid=Api&P=0&h=220",
            "https://tse3.mm.bing.net/th?id=OIP.2PYrFyzDKmM7DXizioW1sAHaE7&pid=Api&P=0&h=220"
          ].map((img, i) => (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <Card className="h-100 p-2">
                <Card.Img variant="top" src={img} className="img-fluid p-2" style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 border p-4 rounded">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h3 className='text-primary'>Simple, Fast and Powerful</h3>
                <p><strong>Play Everything:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                <p><strong>Stream Anywhere:</strong> More placeholder text for responsiveness example...</p>
                <p><strong>Customization:</strong> Extend and personalize for user experience...</p>
              </div>
              <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/LL4qFAZ3NeY"
                    title="Meal Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;
