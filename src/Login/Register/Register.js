import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const { createUser, updateUserProfile, varifyEmail } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                form.reset();
                console.log(user);
                handleUpdateUserProfile(name, photoURL)
                handleVerifyEmail()
                toast.success('please verify your email address')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }


    const handleUpdateUserProfile = (name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    const handleVerifyEmail = () => {
        varifyEmail()
            .then(() => {

            })
            .catch(error => {
                console.error('error', error)
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control type="photoURL" name="photo" placeholder="Your PhotoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to='/tarms'>trams and condition</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>

            </Form>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </div>
    );
};

export default Register;