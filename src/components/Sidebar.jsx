import React from 'react'
import './Sidebar.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ categories, onSelectCategory }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">

        <h3>Categories</h3>
      </div>
      <ul className="category-list">
        {categories.map(cat => (
          <li
            key={cat.idCategory}
            className="category-item"
            onClick={() => onSelectCategory(cat.strCategory)}
          >
            {cat.strCategory}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar