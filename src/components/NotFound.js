import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <p>Click bellow to return to home page</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default NotFound;