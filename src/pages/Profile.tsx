import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link, Outlet, useNavigate } from 'react-router-dom'; 

function Profile() {
    let navigate = useNavigate();

    const handleSearch = (event) => {
        if (event.target.value === "") return; 
        event.preventDefault(); 
        navigate(`/${event.target.value}/search`);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Image className="nav-image" src="https://asset.brandfetch.io/idlj8eHMU6/idx-0AQ2m_.png" style={{ width: '200px', height: '100px', marginRight: '20px' }} 
                    /> 
                    <Navbar.Text className="me-auto">Bethel Food Co.</Navbar.Text>
                    <Nav className="justify-content-end">
                        <Link to="/" className="nav-link">
                        Home
                        </Link>
                        <Link to="/about" className="nav-link">
                        About Us
                        </Link>
                        <Link to="/products" className="nav-link">
                        View All
                        </Link>
                        <Link to="/new" className="nav-link">
                        Create
                        </Link>
                    </Nav>
                </Container>
                <Form className="d-flex">
                    <FormControl
                        onChange={handleSearch}
                        type="search"
                        placeholder="Search"
                        className="me-4"
                        aria-label="Search"
                        />
                </Form>
            </Navbar>
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
            <footer id="footer">
                <p className="text-center mb-0 py-3">
                © 2024 Bethel Food Co. | All Rights Reserved.
                </p>
            </footer>
        </>
    )
}

export default Profile; 