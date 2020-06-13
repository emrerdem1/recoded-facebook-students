import React from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap';

const UserItem = ({ item: { city, name, userId, imageUrl, profile } }) => {
    return (
        <Container style={{ marginBottom: '15px' }}>
            <p style={{ margin: '0' }}>{city}</p>
            <p style={{ margin: '0' }}>{name}</p>
        </Container>
    )
}

export default UserItem
