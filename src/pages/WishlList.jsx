import React, { useState } from 'react'
import Header from '../components/Header'
import MealGrid from '../components/MealGrid'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function WishList() {
  // ✅ Access the wishlist state from Redux
  const wishlistArray = useSelector((state) => state.wishlistReducer || []);
  console.log('Wishlist:', wishlistArray);

  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 10;

  // ✅ Use wishlist items as the meals array
  const meals = wishlistArray;

  // Pagination Logic
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);
  const totalPages = Math.ceil(meals.length / mealsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Header />
      <div className="meal-app">
        <div className="meal-content">
          <MealGrid meals={currentMeals} isWishlist={true} />
          <Link to={'/mealhome'} className='text-danger ' style={{ textDecoration: "none" }}><FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back to Home</Link>
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishList;