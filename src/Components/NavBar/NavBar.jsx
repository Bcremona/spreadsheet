import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function NavBar({isSubtractPressed, setIsSubtractPressed, isAddPressed, setIsAddPressed}) {

    // Handles button presses
    const selectAdd = () => {
        setIsAddPressed(!isAddPressed);
    }

    const selectSubtract = () => {
        setIsSubtractPressed(!isSubtractPressed);
    }

    // Updates buttons' styles
    useEffect(() => {}, [isAddPressed, isSubtractPressed])

    const addButtonStyle = {
        backgroundColor: isAddPressed? '#094' : '#0d6efd',
        marginRight: '1em'
    }

    const subtractButtonStyle = {
        backgroundColor: isSubtractPressed? '#900' : '#0d6efd'
    }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Effetus Spreadsheet Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button style={addButtonStyle} onClick={selectAdd}> Add </Button>
            <Button onClick={selectSubtract} style={subtractButtonStyle} > Subtract </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}