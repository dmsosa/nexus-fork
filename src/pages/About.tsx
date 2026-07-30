import { Container, Button } from 'react-bootstrap'
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'


export default function About() {
  return (
    <>
      <section className="py-5">
        <Container>
    <div className="text-center mb-5">
        <h2>Sobre La Liga</h2>
        <p className="lead">
            Una comunidad para transformar ideas en proyectos reales.
        </p>
    </div>

    <div className="row g-5">

        <div className="col-lg-6">
            <h3>Nuestra misión</h3>

            <p>
                La Liga nace para conectar personas con inquietud emprendedora y
                convertir el talento técnico de 42 en proyectos con impacto. Creemos
                que las mejores ideas surgen cuando perfiles diversos colaboran,
                experimentan y aprenden construyendo.
            </p>

            <p>
                Nuestro objetivo es crear un entorno donde cualquier estudiante pueda
                compartir una idea, encontrar un equipo, recibir feedback y desarrollar
                soluciones reales desde sus primeras versiones hasta proyectos con
                potencial de crecimiento.
            </p>
        </div>

        <div className="col-lg-6">
            <h3>¿Qué nos hace diferentes?</h3>

            <ul>
                <li>💡 Compartimos ideas en un entorno seguro y constructivo.</li>
                <li>🤝 Conectamos perfiles técnicos, creativos y de negocio.</li>
                <li>🚀 Aprendemos haciendo, no solo escuchando teoría.</li>
                <li>🎤 Recibimos feedback para mejorar proyectos y habilidades.</li>
                <li>🌍 Colaboramos con startups, alumni y profesionales del ecosistema.</li>
                <li>🏆 Participamos en hackathons, retos y proyectos reales.</li>
            </ul>
        </div>

    </div>

    <hr className="my-5"></hr>

    <div className="row text-center">

        <div className="col-md-4 mb-4">
            <h2>100+</h2>
            <h5>Ideas por descubrir</h5>
            <p>
                Queremos que ninguna buena idea se quede sin explorar por falta de
                equipo o apoyo.
            </p>
        </div>

        <div className="col-md-4 mb-4">
            <h2>∞</h2>
            <h5>Colaboración</h5>
            <p>
                Fomentamos una comunidad donde compartir conocimiento, aprender de
                otros y crecer juntos.
            </p>
        </div>

        <div className="col-md-4 mb-4">
            <h2>1</h2>
            <h5>Comunidad</h5>
            <p>
                Personas con talento, curiosidad y ganas de construir soluciones que
                generen un impacto real.
            </p>
        </div>

    </div>

    <div className="text-center mt-5">

        <h3>Nuestra visión</h3>

        <p className="mx-auto">
            Aspiramos a que 42 sea reconocido no solo como un lugar donde se aprende
            a programar, sino también como un espacio donde nacen startups, se forman
            equipos extraordinarios y las ideas encuentran el apoyo necesario para
            convertirse en proyectos que transformen el futuro.
        </p>

    </div>
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
