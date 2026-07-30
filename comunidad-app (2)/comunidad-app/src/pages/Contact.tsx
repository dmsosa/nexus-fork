import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaSlack, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

interface FormValues {
  name: string
  subject: string
  email: string
  message: string
}

export default function Contact() {
  const [enviado, setEnviado] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  // Por ahora el formulario abre un correo prellenado (mailto) con los datos
  // enviados. Puedes sustituir onSubmit por una llamada a tu backend,
  // Formspree, Google Forms, etc.
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const asunto = encodeURIComponent(data.subject || 'Contacto desde la web')
    const cuerpo = encodeURIComponent(
      `Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`,
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${asunto}&body=${cuerpo}`
    setEnviado(true)
    reset()
  }

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="text-center fw-bold mb-2">Contáctanos</h1>
            <p className="text-center text-muted mb-4">
              Escríbenos y te responderemos lo antes posible, o encuéntranos en nuestros canales.
            </p>

            {enviado && (
              <Alert variant="success">
                ¡Listo! Se ha abierto tu cliente de correo con el mensaje rellenado.
              </Alert>
            )}

            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  isInvalid={!!errors.name}
                  {...register('name', { required: 'El nombre es obligatorio' })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Asunto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="¿Sobre qué quieres hablar?"
                  isInvalid={!!errors.subject}
                  {...register('subject', { required: 'El asunto es obligatorio' })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.subject?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  isInvalid={!!errors.email}
                  {...register('email', {
                    required: 'El correo es obligatorio',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Introduce un correo válido',
                    },
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="message">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Cuéntanos en qué podemos ayudarte"
                  isInvalid={!!errors.message}
                  {...register('message', { required: 'El mensaje es obligatorio' })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid">
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  Enviar mensaje
                </Button>
              </div>
            </Form>

            {/* CANALES DE LA COMUNIDAD */}
            <div className="d-flex justify-content-center gap-4 fs-3 my-4">
              <a
                href={siteConfig.slackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                aria-label="Slack"
              >
                <FaSlack />
              </a>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* ENLACES DE NAVEGACIÓN */}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/" className="btn btn-outline-primary">
                Volver al inicio
              </Link>
              <Link to="/about" className="btn btn-outline-primary">
                Sobre nosotros
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
