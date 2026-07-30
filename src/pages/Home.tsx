import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaGithub, FaUsers, FaCode, FaBookOpen } from 'react-icons/fa'
import MemberCard from '../components/MemberCard'
import { siteConfig } from '../siteConfig'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Container className="hero-content text-center">
          <span className="badge bg-primary mb-3">Comunidad de estudiantes</span>
          <h1 className="display-4 fw-bold mb-3">{siteConfig.nombreComunidad}</h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: 640 }}>
            Conectamos talento, ideas y oportunidades. Un espacio para
            pasar de la intención a la ejecución, construyendo proyectos reales en equipo.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
              size="lg"
              className="d-flex align-items-center gap-2"
            >
              <FaWhatsapp /> Unirme por WhatsApp
            </Button>
            <Button
              href={siteConfig.solicitudGitUrl}
              variant="outline-light"
              size="lg"
              className="d-flex align-items-center gap-2"
            >
              <FaGithub /> Solicitar acceso al repo
            </Button>
          </div>
        </Container>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="py-5">
        <Container>
          <h2 className="section-title text-center">¿Qué hacemos?</h2>
          <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: 640 }}>
            Compartimos apuntes, resolvemos dudas y trabajamos en proyectos reales para practicar
            lo que vamos aprendiendo.
          </p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <FaUsers size={32} className="text-primary mx-auto mb-3" />
                <Card.Body className="p-0">
                  <Card.Title>Comunidad</Card.Title>
                  <Card.Text className="text-muted">
                    Un espacio para conocer a otros estudiantes y ayudarnos entre todos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <FaCode size={32} className="text-primary mx-auto mb-3" />
                <Card.Body className="p-0">
                  <Card.Title>Proyectos</Card.Title>
                  <Card.Text className="text-muted">
                    Trabajamos en un repositorio privado donde practicamos en equipo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <FaBookOpen size={32} className="text-primary mx-auto mb-3" />
                <Card.Body className="p-0">
                  <Card.Title>Aprendizaje</Card.Title>
                  <Card.Text className="text-muted">
                    Compartimos recursos, dudas y avances de forma constante.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PREVIEW QUIENES SOMOS */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center">Quiénes somos</h2>
          <p className="text-center text-muted mb-5">
            Un vistazo rápido a las personas detrás de la comunidad.
          </p>
          <Row className="g-4 justify-content-center">
            <Col xs={6} md={3}>
              <MemberCard nombre="Nombre 1" rol="Estudiante" />
            </Col>
            <Col xs={6} md={3}>
              <MemberCard nombre="Nombre 2" rol="Estudiante" />
            </Col>
            <Col xs={6} md={3}>
              <MemberCard nombre="Nombre 3" rol="Estudiante" />
            </Col>
            <Col xs={6} md={3}>
              <MemberCard nombre="Nombre 4" rol="Estudiante" />
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Link to="/about" className="btn btn-outline-primary">
              Conócenos mejor
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-5">
        <Container className="text-center">
          <h2 className="section-title">¿Te unes tú también?</h2>
          <p className="text-muted mb-4">
            Pide acceso al repositorio (privado por temas burocráticos y legales) o entra
            directamente al grupo de WhatsApp.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
              className="d-flex align-items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp
            </Button>
            <Link to="/contact" className="btn btn-primary d-flex align-items-center gap-2">
              Solicitar unirme
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
