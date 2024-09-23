import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { loginUser } from '../utils/API'; // Ensure this API function is correctly defined
import Auth from '../utils/auth'; // Import your authentication utility

const LoginForm = () => {
  // State to manage user input and form validation
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false); // State for form validation
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the userFormData state with the input values
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    // Check form validity
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // If the form is valid, attempt to log in
      try {
        const response = await loginUser(userFormData);

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const { token, user } = await response.json();
        console.log(user); // For debugging purposes
        Auth.login(token); // Use your Auth utility to log in the user
      } catch (err) {
        console.error(err);
        setShowAlert(true); // Show alert if login fails
      }

      // Reset form data after submission
      setUserFormData({
        email: '', // Resetting only existing fields
        password: '',
      });
    }

    setValidated(true); // Set validated to true to trigger Bootstrap validation styles
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* Show alert on login error */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        
        {/* Email input */}
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        {/* Password input */}
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>

        {/* Submit button */}
        <Button
          disabled={!(userFormData.email && userFormData.password)} // Disable button if inputs are empty
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
