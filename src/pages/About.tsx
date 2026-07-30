import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaWhatsapp } from 'react-icons/fa'
import MemberCard from '../components/MemberCard'
import { siteConfig } from '../siteConfig'
import { members } from '../data/members'


export default function About() {
  return (
    <>
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h1 className="fw-bold">Quiénes somos</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: 640 }}>
              Somos un grupo de estudiantes que decidimos unir esfuerzos para aprender más rápido,
              compartir dudas y construir proyectos juntos. Esto es lo que somos, sin filtros.
            </p>
          </div>

          <Row className="g-4">
            {members.map((m) => (
              <Col key={m.nombre} xs={6} md={4} lg={2}>
                <MemberCard nombre={m.nombre} rol={m.rol} foto={m.foto || undefined} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* UNETE TU TAMBIEN */}
      <section className="py-5 bg-light">
        <Container className="text-center">
          <h2 className="section-title">Únete tú también</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: 560 }}>
            Si eres estudiante y quieres aprender en compañía, tienes un sitio aquí. Escríbenos
            por WhatsApp o solicita acceso a nuestro repositorio privado.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
              className="d-flex align-items-center gap-2"
            >
              <FaWhatsapp /> Escríbenos por WhatsApp
            </Button>
            <Button href="/contact" variant="primary">
              Ir al formulario de contacto
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
