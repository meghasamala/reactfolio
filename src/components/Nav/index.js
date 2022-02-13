import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Link } from 'react-router-dom'

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
      } = props;
    

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
      <nav>
        <ul className="contact">
          {categories.map((category) => (
            <li
                className={`mx-1 ${
                currentCategory.name === category.name && `navActive`
                }`}
                key={category.name}
            >
              <Link to={category.link} 
              onClick={() => {setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;