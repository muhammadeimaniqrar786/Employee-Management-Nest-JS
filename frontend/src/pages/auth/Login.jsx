import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Text from '../../components/shared/form/Text';
import Group from '../../components/shared/form/Group';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.login(formData);
        } catch (error) {
            console.error('Something went wrong: ', error);
        }
    }

    return <>
        <Container fluid style={{ height: '100vh' }}>
            <Row>
                <Col md={6}>
                    <Image src={require('../../assets/images/login.jpg')} alt='Login' fluid style={{ marginTop: '80px' }} />
                </Col>
                <Col md={6}>
                    <Container style={{ marginTop: '120px' }}>
                        <Row>
                            <Col md={{ span: 8, offset: 2 }}>
                                <h1 className='text-center'>Login</h1>
                                <Form className='mt-5' onSubmit={handleSubmit}>

                                    <Group className='mb-3' controlId='email' labelName='Email' required={true} type='email' placeholder='email@example.com' extraContent={<Text className='text-muted' message="We'll never share your email with anyone else." />} value={formData.email} onChange={handleChange} />

                                    <Group className='mb-3' controlId='password' labelName='Password' required={true} placeholder='********' type='password' value={formData.password} onChange={handleChange} />

                                    <Form.Group className='mb-3' controlId='rememberMe'>
                                        <Form.Check type='checkbox' label='Remember Me' />
                                    </Form.Group>

                                    <Row>
                                        <Col xs={12}>
                                            <Button variant='outline-success' type="submit" style={{ float: 'right', width: 'inherit' }}>Login</Button>
                                        </Col>
                                        <Col xs={12} className='text-center mt-2'>
                                            <a href='register' className='text-decoration-underline text-danger'>Don't have an account and need Signup ?</a>
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

export default Login