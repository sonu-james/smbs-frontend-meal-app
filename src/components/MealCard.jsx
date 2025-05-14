import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/slice/WishListSlice';



function MealCard({ meal, isWishlist }) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setSelectedMeal(meal); // Set the selected meal
    setShow(true); // Show the modal
  };
  console.log(selectedMeal);

  //Normalize ID using id || idMeal
  const handleWishlistAction = () => {
    const mealId = meal.id || meal.idMeal;

    if (isWishlist) {
      dispatch(removeFromWishlist(mealId));
    } else {
      dispatch(addToWishlist({ ...meal, id: mealId })); // Normalize id when adding
    }
  };


  return (
    <>
      <Card style={{ width: '100%' }} className='mt-3 p-2'>
        <Card.Img variant="top" src={meal.strMealThumb} alt={meal.strMeal} />
        <Card.Body>
          <Card.Title style={{ fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
            {meal.strMeal}
          </Card.Title>
          <div className="d-flex flex-column flex-sm-row align-items-stretch justify-content-between gap-2">
            <Button variant="primary" onClick={handleShow} className="w-100 w-sm-auto">
              View Details
            </Button>
            <Button variant="danger" onClick={handleWishlistAction} className="w-100 w-sm-auto">
              <FontAwesomeIcon icon={isWishlist ? faTrash : faHeart} />
            </Button>
          </div>

        </Card.Body>
      </Card>

      {/* Modal for displaying meal details */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMeal ? selectedMeal.strMeal : 'Meal Details'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMeal ? (
            <div>
              <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} style={{ width: '100%', marginBottom: '15px' }} />
              {/* Check if instructions exist before rendering */}
              {selectedMeal.strInstructions ? (
                <p>{selectedMeal.strInstructions}</p>
              ) : (
                <p>No instructions available for this meal.</p> // Fallback message
              )}

            </div>
          ) : (
            <p>Loading...</p>
          )}
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MealCard;

