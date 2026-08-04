import { Container } from 'react-bootstrap'
import { FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <span className="small">
          © {new Date().getFullYear()} {siteConfig.nombreComunidad}. Todos los derechos reservados.
        </span>
        <div className="d-flex gap-3 fs-5">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href={siteConfig.solicitudGitUrl}
            className="text-light"
            aria-label="Solicitar acceso al repositorio"
          >
            <FaGithub />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="text-light" aria-label="Correo">
            <FaEnvelope />
          </a>
        </div>
      </Container>
    </footer>
  )
}
