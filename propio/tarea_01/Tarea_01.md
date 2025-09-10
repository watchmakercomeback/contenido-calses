\***\*primer trabajo debo hacer una explicacion de cada uno de los utily types con tus propias palabras \*\***
**_1. Partial _**
lo que hace este tipo que este convierta el objeto a todo los valores a opcionales logrando asi tener

**_1. Readonly _**
una vez ejecutada esta utily type hace que solo pueda ser lectura haciendolo inalterable

**_1. Pick _**
permite seleccionar un subconjunto de propiedad de un tipo esto quiere decir que da opciones de eleccion ya que puede ser innecesario ambas a la vez
**_1. Omit _**
simplemente omite una ciertas propiedades de un tipo utilizando la desmas para su proposito

**_1. Record _**
apartir de un conjunto crea las claves de un objeto que se quedan para ya ser un construntor o lo que se requiera

**_1. Exlude _**
contruye un conjunto union de otros dos conjuntos exluyendo lo que se de en este utily types

**_1. Extract _**
extrae el tipo de todos los miembros que este y lo deja en un nuevo conjunto union

**_1. NonNullable _**
hace que lo que este especificado aqui no puede er de tipo nulo o indefinido

**_1. ReturnType _**
retorna el tipo de el objeto cuando se llama a este

**thistype**

Elimina el este parámetro de Tipo. Si Tipo no ha declarado explícitamente este parámetro, el resultado es simple Tipo. De lo contrario, un nuevo tipo de función sin este el parámetro se crea desde Tipo. Los genéricos se borran y solo la última firma de sobrecarga se propaga al nuevo tipo de función.
