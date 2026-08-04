import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const slides = [
    {
      title: "🚀 Lanzamiento de La Liga",
      subtitle: "Septiembre 2026",
      description:
          "Presentación oficial al alumnado de 42 para atraer miembros, activar proyectos y consolidar la comunidad fundadora.",
      button: "Únete",
    },
    {
      title: "💡 Idea Clinics",
      subtitle: "Comparte tu idea",
      description:
          "Sesiones abiertas donde cualquier miembro puede presentar una idea y recibir feedback constructivo del grupo.",
      button: "Participar",
    },
    {
      title: "🎤 Pitch Days",
      subtitle: "Entrena tu comunicación",
      description:
          "Aprende a presentar y defender tu proyecto en pocos minutos ante personas con diferentes perfiles.",
      button: "Inscribirse",
    },
    {
      title: "🛠️ Build Sessions",
      subtitle: "Construye en equipo",
      description:
          "Espacios de trabajo colaborativo para avanzar MVPs, prototipos e iniciativas reales.",
      button: "Ver calendario",
    },
    {
      title: "🌍 Founder Talks",
      subtitle: "Aprende de la experiencia",
      description:
          "Charlas con emprendedores, alumni de 42, startups e incubadoras para compartir aprendizajes reales.",
      button: "Próximas charlas",
    },
    {
      title: "🏆 Hackathons y Retos",
      subtitle: "Pon a prueba tus habilidades",
      description:
          "Participación en hackathons, concursos y retos reales propuestos por empresas y organizaciones.",
      button: "Explorar retos",
    },
];

export default function EventsCarousel() {
    return (
      <Carousel fade interval={6000}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
                <div
                  className="d-flex align-items-center justify-content-center text-center text-white"
                  style={{
                      height: "500px",
                      background:
                        "linear-gradient(135deg, #424242, #660bbb)",
                  }}
                >
                  <div className="container">
                      <h5 className="text-uppercase text-warning">
                        {slide.subtitle}
                      </h5>

                      <h1 className="display-4 fw-bold mb-4">
                        {slide.title}
                      </h1>

                      <p
                        className="lead mx-auto mb-4"
                        style={{ maxWidth: "50%" }}
                      >
                        {slide.description}
                      </p>

                      <Button variant="warning" size="lg">
                        {slide.button}
                      </Button>
                  </div>
                </div>
            </Carousel.Item>
          ))}
      </Carousel>
    );
}