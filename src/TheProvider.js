import React, { useState, useEffect, createContext } from 'react';
import { Form, Col } from 'react-bootstrap';
export const FacebookContext = createContext();

export const TheProvider = ({ children }) => {

    const [userObject, setUserObject] = useState({
        city: 'The value in the "city" form field',
        name: 'The name in Google for the account',
        userId: 'The unique user ID (available via Google. Please dont make a user ID yourself)',
        imageUrl: ' The Google profile picture of the image (available via Google)',
        profile: 'The value of the profile form field'
    });

    return (
        <FacebookContext.Provider value={[userObject, setUserObject]}>
            {children}
        </FacebookContext.Provider>
    )
}
