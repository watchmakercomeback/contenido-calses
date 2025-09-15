// Gestor de Biblioteca con Tipos Deducidos

//1 Tipo genérico ItemBiblioteca<T> representa un recurso de la biblioteca.

type ItemBiblioteca<T> = {
  id: string;
  titulo: string;
  disponible: boolean;
  detalles: T;
};

//2 Tipos específicos para Libro y Revista

type Libro = {
    autor: string;
    paginas: number;
};

type Revista ={
    edicion: number;
    tema: string;
}


//3 Funcion de prestamo usando utility type Omit verifica disponibilidad y devuelve el item prestado o 
// un mensaje de no disponible si disponible esta en false.

type ItemPrestado<T> = Omit<ItemBiblioteca<T>, "disponible"> & {
  disponible: false;
};

function prestamo<T>(item: ItemBiblioteca<T>): ItemPrestado<T> | string {
  if (item.disponible) {
    const prestado: ItemPrestado<T> = {
      ...item,
      disponible: false
    };
    return prestado;
  } else {
    return `El libro "${item.titulo}" no está disponible.`;
  }
}

const libroEjemplo: ItemBiblioteca<Libro> = {
  id: "i1",
  titulo: "El Principito",
  disponible: true,
  detalles: {
    autor: "Antoine de Saint-Exupéry",
    paginas: 96
  }
};

const resultado = prestamo(libroEjemplo);
console.log(resultado);

 
//4 Funcion para crear una lista de recursos que devuelva un arreglo de titulos de los que estan disponibles (true)

const recuersos: ItemBiblioteca<Libro | Revista>[] =[
{ 
    id: 1,
    titulo: "El cuento de los hermanos grimm",
    disponible: true,
    detalles: {
        autor: "Miguel de Cervantes",
        paginas: 863
    }
},
{
    id: 2,
    titulo: "Petter Pan",
    disponible: false,
    detalles: {
        edicion: 2020,
        tema: "Infantil"
    }
},
{
    id: 3,
    titulo: "El diario de Ana Frank",
    disponible: true,
    detalles: {
        autor: "Ana Frank",
        paginas: 352
    }
}
]

type Disponible<T> = Extract<ItemBiblioteca<T>, { disponible: true }>;

function filtrarDisponibles<T extends Libro | Revista>(
  items: ItemBiblioteca<T>[]
): Disponible<T>["titulo"][] {
  return items
    .filter(item => item.disponible)
    .map(item => item.titulo);
}
 
const titulosDisponibles = filtrarDisponibles(recuersos);
console.log(titulosDisponibles);

//5  Conteo por categoría Crea un enum Categoria con valores Libro y Revista. A partir de la lista de 
//items, genera un Tipo que te permita llevar el conteo de cuántos recursos de cada tipo hay en la biblioteca.

enum Categoria {
  Libro = "Libro",
  Revista = "Revista"
}

type ConteoRecursos = {
  [key in Categoria]: number;
};
