import React, { useState } from 'react';
import MealCard from './MealCard';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function MealGrid({ meals, isWishlist }) {
  const [randomMeal, setRandomMeal] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  const handleRandomMeal = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setRandomMeal(data.meals[0]);
      }
    } catch (error) {
      console.error('Failed to fetch random meal:', error);
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-between flex-wrap">
        {!isWishlist && (
          <Col xs={12} md={6} className="mb-4">
            <div className="d-flex flex-column align-items-start">
              <Button variant="primary" className="rounded mb-3" onClick={handleRandomMeal}>
                Random Meal
              </Button>

              <div className="meal-grid1 w-50">
                {randomMeal && (
                  <MealCard
                    key={randomMeal.idMeal}
                    meal={randomMeal}
                    isWishlist={isWishlist}
                  />
                )}
              </div>
            </div>
          </Col>
        )}

   <Col xs={12} md={6} className="mb-4">
  <div className="position-relative mt-3 w-100">
    <input
      type="text"
      placeholder="Search by item name"
      className="form-control fs-5 pe-5"
      onChange={(e) => setSearchKey(e.target.value)}
    />
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      flip="horizontal"
      className="text-secondary position-absolute"
      style={{
        right: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }}
    />
  </div>
</Col>

      </Row>

      <Row className="meal-grid">
        {meals
          .filter((meal) => meal.strMeal.toLowerCase().includes(searchKey.toLowerCase()))
          .map((meal) => (
            <Col key={meal.idMeal} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <MealCard meal={meal} isWishlist={isWishlist} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default MealGrid;
