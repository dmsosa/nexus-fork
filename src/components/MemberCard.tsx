interface MemberCardProps {
  nombre: string
  rol?: string
  foto?: string
}

export default function MemberCard({ nombre, rol, foto }: MemberCardProps) {
  return (
    <div className="text-center">
      <img
        src={foto ?? 'https://placehold.co/300x300?text=Foto'}
        alt={nombre}
        className="member-photo mb-2"
      />
      <h6 className="mb-0 fw-semibold">{nombre}</h6>
      {rol && <small className="text-muted">{rol}</small>}
    </div>
  )
}

