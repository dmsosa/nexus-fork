import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaGithub, FaUsers, FaCode, FaBookOpen } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'
import EventsCarousel from '../components/Home/EventsCarousel'

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
        <article className="container container-sm py-5">
          <h1 className='h1 text-left fw-bold'>Objetivo</h1>

          <p className='mw-80 mb-3'>
            La Liga Nexus  nace para conectar talento, ideas y oportunidades, creando una comunidad práctica donde estudiantes, trabajadores y emprendedores puedan colaborar, validar ideas y convertir proyectos en realidades.
          </p>
        <table className='table mb-5'>
                <thead>
                    <tr>
                        <th>Aspecto</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Perfil de 42</strong></td>
                        <td>Personas con alta capacidad técnica, autonomía, curiosidad y mentalidad de aprendizaje.</td>
                    </tr>
                    <tr>
                        <td><strong>Problema identificado</strong></td>
                        <td>Muchas ideas no llegan a desarrollarse por falta de equipo, método, confianza, orientación o conexión con el ecosistema emprendedor.</td>
                    </tr>
                    <tr>
                        <td><strong>Necesidades detectadas</strong></td>
                        <td>Compartir ideas sin miedo, encontrar socios compatibles, recibir feedback, aprender a convertir ideas en proyectos, conectar con referentes y evitar avanzar en solitario.</td>
                    </tr>
                    <tr>
                        <td><strong>Propósito de la Liga</strong></td>
                        <td>Crear una comunidad con ambición de construir, aprender emprendiendo y generar impacto desde la tecnología que ayude a transformar ideas en proyectos reales.</td>
                    </tr>
                </tbody>
            </table>

          <h2 className='h2 text-left fw-bold mb-3'>Qué aportamos</h2>
          <h3>🤝 Comunidad y networking</h3>
          <ul className='mb-3'>
              <li>Conocer personas con intereses y objetivos comunes.</li>
              <li>Crear conexiones entre perfiles técnicos, creativos y de negocio.</li>
              <li>Encontrar socios y colaboradores.</li>
              <li>Formar parte de una comunidad donde compartir dudas, inquietudes, dificultades y celebrar éxitos.</li>
          </ul>

          <h3>📚 Aprendizaje</h3>
          <ul className='mb-3'>
              <li>Asistir a charlas y conocer experiencias de emprendedores, alumni de 42 y startups.</li>
              <li>Aprender a generar ideas y presentarlas.</li>
              <li>Aprender a identificar problemas, diseñar soluciones y lanzar primeras versiones (MVP).</li>
              <li>Desarrollar habilidades emprendedoras:
                  <ul>
                      <li>Visión de mercado y negocio.</li>
                      <li>Creación de valor.</li>
                      <li>Gestión financiera.</li>
                      <li>Gestión de equipos.</li>
                      <li>Gestión de proyectos.</li>
                  </ul>
              </li>
          </ul>

        <h3>🚀 Desarrollo de proyectos</h3>
        <ul className='mb-3'>
            <li>Presentar ideas y recibir feedback constructivo.</li>
            <li>Participar en proyectos reales, hackathons, retos y dinámicas de innovación.</li>
            <li>Experimentar formas de trabajo más ágiles que el entorno corporativo tradicional.</li>
            <li>Construir un portfolio mediante iniciativas tangibles.</li>
            <li>Crear proyectos extraordinarios junto a equipos multidisciplinares.</li>
        </ul>
        
        </article>
      </section>

      {/* PREVIEW QUIENES SOMOS */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center">Próximos eventos</h2>
          <p className="text-center text-muted mb-5">
            Un vistazo rápido a los eventos más importantes por venir.
          </p>
          <EventsCarousel></EventsCarousel>
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
            A medio plazo, la Liga aspira a convertirse en una plataforma estable de innovación, capaz de organizar eventos, acompañar proyectos, atraer referentes del ecosistema y generar una cultura emprendedora reconocible.
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
