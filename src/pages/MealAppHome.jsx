import React from 'react'
import { useEffect, useState } from 'react';
import './MealAppHome.css';
import Sidebar from '../components/Sidebar';
import MealGrid from '../components/MealGrid';

import axios from 'axios';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { Button } from 'react-bootstrap';




function MealAppHome() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 6; // Display 6 meals per page
  // const [selectedMeal, setSelectedMeal] = useState(null);

  // Fetch categories
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => setCategories(res.data.categories));
  }, []);

  // Fetch meals by category
  useEffect(() => {
    if (selectedCategory) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then(res => setMeals(res.data.meals));
    }
  }, [selectedCategory]);



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


  // // Fetch meal details
  // const handleMealSelect = (idMeal) => {
  //   axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
  //     .then(res => setSelectedMeal(res.data.meals[0]));
  // };
  return (
    <>
      <Header />
      <div className="meal-app">
        <Sidebar categories={categories} onSelectCategory={setSelectedCategory} />

        <div className="meal-content">

          <MealGrid meals={currentMeals} />

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
        {/* {selectedMeal && <MealDetailModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />} */}
      </div>
    </>
  )
}

export default MealAppHome