import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container, Row, Col, Form, FormGroup,
} from 'reactstrap';
import {
  TextInput, Button, Heading, Paragraph, Link,
} from 'Components';
import { Sizes, FontWeight, LineHeight } from 'Styles/Theme';
import {
  fakeAsync,
} from 'Helpers';
import { LoginValidationSchema } from 'Schemas';
import { useAuthContext } from 'Hooks';

const Login = () => {
  const { userId } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    login,
  } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitLogin = () => {
    setIsLoading(true);
    fakeAsync({ asyncType: 'login' }).then(({ accessToken, refreshToken }) => {
      setIsLoading(false);

      login({
        accessToken,
        refreshToken,
      });
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    onSubmit: ({ email, password }) => {
      handleSubmitLogin({ email, password });
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (userId && location.pathname === '/login') {
      navigate('/');
    }
  }, [userId]);

  return (
    <Container className='pt-5'>
      <Row>
        <Col xl='6' className='px-3 ps-xl-0 pe-xl-3'>
          <Heading type='h2' fontSize={Sizes.xxxl} fontWeight={FontWeight.bold} lineHeight={LineHeight.xl} className='mb-5' useHorizontalSpacer>
            Login
          </Heading>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <TextInput
                label='Your email:'
                id='email'
                name='email'
                type='text'
                formik={formik}
                maxLength={256}
              />
            </FormGroup>
            <FormGroup>
              <TextInput
                label='Password:'
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                formik={formik}
                maxLength={256}
                handleShowPassword={handleClickShowPassword}
              />
            </FormGroup>
            <div>
              <Button
                type='submit'
                disabled={isLoading}
                isFullWidth={false}
              >
                <span>Login</span>
              </Button>
            </div>
            <div className='pt-3'>
              <Paragraph
                textTransform='uppercase'
                type='span'
                fontSize={Sizes.default}
                fontWeight={FontWeight.bold}
                className='pe-1'
              >
                {'Don\'t have an account yet?'}
              </Paragraph>
              <Link to='/register' textTransform='uppercase'>
                Register here
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;