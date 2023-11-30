import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { useSpring, animated } from 'react-spring';
import '../css/admin.css';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('Login realizado com sucesso!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container fluid className="p-3 my-5">
      <Row className="justify-content-center align-items-start">
        {/* Coluna para a imagem */}
        <Col xs={12} md={6} className="mb-4">
          <animated.div style={fadeIn}>
            <Image
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Imagem login"
            />
          </animated.div>
        </Col>

        {/* Coluna para o formulário */}
        <Col xs={12} md={6}>
          <animated.div style={fadeIn}>
            <h2 className="text-center mb-4">Administrador</h2>
          </animated.div>

          <animated.div style={fadeIn}>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail" className='mb-4'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={email.length > 0 && !/^\S+@\S+\.\S+$/.test(email)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Insira um endereço de email válido.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className='mb-4'>
                <Form.Label>Senha:</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={password.length > 0 && password.length < 6}
                    required
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={togglePasswordVisibility}
                    className="input-group-append"
                  >
                    {showPassword ? <EyeSlashFill /> : <EyeFill />}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    A senha deve ter pelo menos 6 caracteres.
                  </Form.Control.Feedback>
                </div>
              </Form.Group>

              <div className="d-flex align-items-center justify-content-center">
              <Button variant="dark" type="submit" className="w-50 text-center mb-4">
                Login
              </Button>
              </div>

            </Form>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
