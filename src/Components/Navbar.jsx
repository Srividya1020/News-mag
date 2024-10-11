import React from 'react'
import { useState} from 'react';


const Navbar = ({setCategory}) => {
    const [selectedCategory, setSelectedCategory] = useState("technology"); // Default category

//   const setCategory = (category) => {
//     setSelectedCategory(category);
//     // You can also add logic to load the category content here
//   };
const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update the local state for highlighting the active link
    setCategory(category); // Call the parent component's setCategory function
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark" >
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsMag</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item fc-white">
            <div className={`nav-link cursor-pointer ${selectedCategory === 'technology' ? 'active' : ''}`}
            onClick={()=>handleCategoryChange("technology")}>Technology</div>
          </li>
          
          <li className="nav-item">
            <div className={`nav-link cursor-pointer ${selectedCategory === 'business' ? 'active' : ''}`}
            onClick={()=>handleCategoryChange("business")}>Business</div>
          </li>
          <li className="nav-item">
            <div className={`nav-link cursor-pointer ${selectedCategory === 'health' ? 'active' : ''}`}
            onClick={()=>handleCategoryChange("health")}>Health</div>
          </li>
          <li className="nav-item">
            <div className={`nav-link cursor-pointer ${selectedCategory === 'sports' ? 'active' : ''}`}
            onClick={()=>handleCategoryChange("sports")}>Sports</div>
          </li>
          <li className="nav-item">
            <div className={`nav-link cursor-pointer ${selectedCategory === 'science' ? 'active' : ''}`}
            onClick={()=>handleCategoryChange("science")}>Science</div>
          </li>
          <li className="nav-item">
            <div className={`nav-link cursor-pointer ${selectedCategory === 'entertainment' ? 'active' : ''}`}
            onClick={()=>handleCategoryChange("entertainment")}>Entertainment</div>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar