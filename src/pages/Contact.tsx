import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

interface FormValues {
  nombre: string
  email: string
  githubUsuario: string
  mensaje: string
}

export default function Contact() {
  const [enviado, setEnviado] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  // De momento el formulario solo abre un correo prellenado (mailto)
  // con los datos de la solicitud. Puedes sustituir onSubmit por una
  // llamada a tu backend, Formspree, Google Forms, etc.
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const asunto = encodeURIComponent('Solicitud de acceso al repositorio')
    const cuerpo = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmail: ${data.email}\nUsuario de GitHub: ${data.githubUsuario}\n\nMensaje:\n${data.mensaje}`,
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
            <h1 className="text-center fw-bold mb-2">Solicita unirte</h1>
            <p className="text-center text-muted mb-4">
              Cuéntanos un poco sobre ti para darte acceso al repositorio privado. También puedes
              escribirnos directamente por WhatsApp.
            </p>

            {enviado && (
              <Alert variant="success">
                ¡Listo! Se ha abierto tu cliente de correo con la solicitud rellenada.
              </Alert>
            )}

            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  isInvalid={!!errors.nombre}
                  {...register('nombre', { required: 'El nombre es obligatorio' })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombre?.message}
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

              <Form.Group className="mb-3" controlId="githubUsuario">
                <Form.Label>Usuario de GitHub</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="tu-usuario"
                  isInvalid={!!errors.githubUsuario}
                  {...register('githubUsuario', {
                    required: 'Necesitamos tu usuario para invitarte al repo',
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.githubUsuario?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4" controlId="mensaje">
                <Form.Label>Cuéntanos un poco sobre ti</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="¿Qué estudias? ¿Por qué quieres unirte?"
                  isInvalid={!!errors.mensaje}
                  {...register('mensaje', { required: 'Cuéntanos algo sobre ti' })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mensaje?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  Enviar solicitud
                </Button>
                <Button
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-success"
                  className="d-flex align-items-center justify-content-center gap-2"
                >
                  <FaWhatsapp /> Prefiero escribir por WhatsApp
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
