type ItemBiblioteca<T> = {
  id: number
  titulo: string
  disponible: boolean
  detalles: T
}

type Libro = {
  autor: string
  paginas: number
}

type Revista = {
  edicion: number
  tema: string
}

function prestamo<T>(item: ItemBiblioteca<T>): ItemBiblioteca<T> | string {
  if (item.disponible) {
    return { ...item, disponible: false }
  } else {
    return `El recurso "${item.titulo}" no está disponible`
  }
}

function filtrarDisponibles(items: ItemBiblioteca<Libro | Revista>[]): string[] {
  let titulos: string[] = []
  for (let i = 0; i < items.length; i++) {
    if (items[i].disponible) {
      titulos.push(items[i].titulo)
    }
  }
  return titulos
}

enum Categoria {
  Libro = "Libro",
  Revista = "Revista"
}

type ConteoPorCategoria = Record<Categoria, number>

function contarPorCategoria(items: ItemBiblioteca<Libro | Revista>[]): ConteoPorCategoria {
  let conteo: ConteoPorCategoria = {
    [Categoria.Libro]: 0,
    [Categoria.Revista]: 0
  }
  for (let i = 0; i < items.length; i++) {
    if ("autor" in items[i].detalles) {
      conteo[Categoria.Libro]++
    } else {
      conteo[Categoria.Revista]++
    }
  }
  return conteo
}

// Ejemplo
const biblioteca: ItemBiblioteca<Libro | Revista>[] = [
  { id: 1, titulo: "Libro A", disponible: true, detalles: { autor: "Autor X", paginas: 200 } },
  { id: 2, titulo: "Revista B", disponible: false, detalles: { edicion: 5, tema: "Ciencia" } },
  { id: 3, titulo: "Libro C", disponible: true, detalles: { autor: "Autor Y", paginas: 150 } }
]

const prestamo1 = prestamo(biblioteca[0])
const disponibles = filtrarDisponibles(biblioteca)
const conteo = contarPorCategoria(biblioteca)

console.log(prestamo1)
console.log(disponibles)
console.log(conteo)
