import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Container className="hero-content text-center">
          <span className="badge bg-primary mb-3">Comunidad de emprendimiento · 42</span>
          <h1 className="display-4 fw-bold mb-3">{siteConfig.nombreComunidad}</h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: 640 }}>
            Conectamos talento, ideas y oportunidades dentro del ecosistema de 42. Un espacio para
            pasar de la intención a la ejecución, construyendo proyectos reales en equipo.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/about" className="btn btn-outline-light btn-lg">
              Sobre nosotros
            </Link>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contáctanos
            </Link>
          </div>
        </Container>
      </section>

      {/* SECCIÓN 1: MISIÓN Y VISIÓN */}
      <section className="py-5">
        <Container>
          <Row className="g-4 text-center text-md-start">
            <Col md={6}>
              <h2 className="section-title">Misión</h2>
              <p className="text-muted">Conectar estudiantes para crear startups.</p>
            </Col>
            <Col md={6}>
              <h2 className="section-title">Visión</h2>
              <p className="text-muted">Construir la principal comunidad de emprendimiento.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECCIÓN 2: QUÉ APORTAMOS */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center">¿Qué aportamos?</h2>
          <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: 640 }}>
            Un entorno estructurado para pasar de la idea al proyecto real.
          </p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <FaLightbulb size={32} className="text-primary mx-auto mb-3" />
                <Card.Body className="p-0">
                  <Card.Title>Ideas con feedback</Card.Title>
                  <Card.Text className="text-muted">
                    Idea Clinics y Pitch Days para exponer proyectos y recibir feedback
                    constructivo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <FaHandshake size={32} className="text-primary mx-auto mb-3" />
                <Card.Body className="p-0">
                  <Card.Title>Equipo y conexiones</Card.Title>
                  <Card.Text className="text-muted">
                    Encuentra socios, colaboradores y perfiles complementarios para tu proyecto.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <FaRocket size={32} className="text-primary mx-auto mb-3" />
                <Card.Body className="p-0">
                  <Card.Title>Construcción real</Card.Title>
                  <Card.Text className="text-muted">
                    Build Sessions, Founder Talks y retos externos para llevar tu idea a la
                    práctica.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECCIÓN 3: CTA FINAL */}
      <section className="py-5">
        <Container className="text-center">
          <h2 className="section-title">¿Listo para construir algo grande?</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: 560 }}>
            Conoce quiénes somos o escríbenos directamente para sumarte a la Liga.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/about" className="btn btn-outline-primary">
              Sobre nosotros
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contáctanos
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
