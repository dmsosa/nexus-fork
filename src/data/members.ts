export type TMember = {
    rol: string,
    foto: string,
    nombre: string
}

// TODO: sustituye/añade aquí a cada miembro con su foto real.
// La propiedad "foto" acepta una ruta local (por ejemplo desde src/assets/images)
// o una URL. Si se deja vacía se muestra una imagen de marcador de posición.
export const members: TMember[] = [
  { nombre: 'Nombre 1', rol: 'Estudiante', foto: '' },
  { nombre: 'Nombre 2', rol: 'Estudiante', foto: '' },
  { nombre: 'Nombre 3', rol: 'Estudiante', foto: '' },
  { nombre: 'Nombre 4', rol: 'Estudiante', foto: '' },
  { nombre: 'Nombre 5', rol: 'Estudiante', foto: '' },
  { nombre: 'Nombre 6', rol: 'Estudiante', foto: '' },
]
