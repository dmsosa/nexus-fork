import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig'

export default function About() {
  return (
    <>
      {/* SECCIÓN 1: PÁRRAFO GRANDE */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="fw-bold text-center mb-4">Sobre {siteConfig.nombreComunidad}</h1>
              <p className="fs-5 text-muted">
                {siteConfig.nombreComunidad} nace para conectar talento, ideas y oportunidades
                dentro del ecosistema de 42, creando una comunidad práctica donde estudiantes,
                alumni, emprendedores y perfiles externos pueden colaborar, validar ideas y
                convertir proyectos en realidades. 42 reúne perfiles con alta capacidad técnica,
                autonomía, curiosidad y mentalidad de aprendizaje, pero muchas ideas no llegan a
                desarrollarse por falta de equipo, método, confianza u orientación. Por eso no
                somos una clase ni un club pasivo de charlas: somos una comunidad de acción donde
                las personas pasan de la intención a la ejecución, aprenden construyendo,
                encuentran socios y llevan sus proyectos a la práctica junto a un equipo de
                personas con mucho potencial.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECCIÓN 2: FOTO */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              {/*
                FOTO: coloca tu imagen (foto de equipo, evento, etc.) en
                /src/assets/images/about.jpg y sustituye el src de abajo.
              */}
              <img
                src="https://placehold.co/900x500?text=Foto+de+la+comunidad"
                alt={`Comunidad de ${siteConfig.nombreComunidad}`}
                className="img-fluid rounded shadow-sm"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ENLACES FINALES */}
      <section className="py-5">
        <Container className="text-center">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/" className="btn btn-outline-primary">
              Volver al inicio
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
