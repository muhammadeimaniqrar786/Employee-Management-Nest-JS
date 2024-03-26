import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Group from '../../components/shared/form/Group';
import { useState } from 'react';
import apiService from '../../utils/apiService';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await apiService.register(formData);
      console.log('Registration successful:', responseData);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return <>
    <Container fluid style={{ height: '100vh' }}>
      <Row>
        <Col md={6}>
          <Image src={require('../../assets/images/login.jpg')} alt='Login' fluid style={{ marginTop: '80px' }} />
        </Col>
        <Col md={6}>
          <Container style={{ marginTop: '40px' }}>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <h1 className='text-center'>Register</h1>
                <Form className='mt-2' onSubmit={handleSubmit}>

                  <Row>

                    <Col md={12}>
                      <Group className='mb-3' controlId='name' labelName='Name' required={true} placeholder='Name' value={formData.name} onChange={handleChange} />
                    </Col>

                    <Col md={12}>
                      <Group className='mb-3' controlId='username' labelName='Username' required={true} placeholder='Username' value={formData.username} onChange={handleChange} />
                    </Col>

                    <Col md={12}>
                      <Group className='mb-3' controlId='email' labelName='Email' required={true} placeholder='email@example.com' type='email' extraContent={<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>} value={formData.email} onChange={handleChange} />
                    </Col>

                    <Col md={12}>
                      <Group className='mb-3' controlId='password' labelName='Password' required={true} placeholder='********' type='password' value={formData.password} onChange={handleChange} />
                    </Col>

                    <Col md={12}>
                      <Group className='mb-3' controlId='confirmPassword' labelName='Confirm Password' required={true} placeholder='********' type='password' value={formData.confirmPassword} onChange={handleChange} error={formData.password !== formData.confirmPassword && "Passwords do not match"} />
                    </Col>

                    <Col xs={12}>
                      <Button variant='outline-success' type="submit" style={{ float: 'right', width: 'inherit' }}>Submit</Button>
                    </Col>
                    <Col xs={12} className='text-center mt-2'>
                      <a href='login' className='text-decoration-underline text-danger'>Do you have an account, Login here ?</a>
                    </Col>

                  </Row>

                </Form>

              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </>;
}

export default Register