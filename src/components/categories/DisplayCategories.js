import React from 'react'
import { Link } from "react-router-dom";

const DisplayCategories = (props) =>{
    return(
        <div className="jumbotron">
        <h2 className="page-header">All categories</h2>
        <ul className="list-group">
          {props.categories && props.categories.map((category) =>
            <li key={category.name} className="list-group-item">
              <Link to={`${category.path}`}>
                <b>{category.name}</b>
              </Link>
            </li>)}
        </ul>
      </div>
    );
}

export default DisplayCategories;