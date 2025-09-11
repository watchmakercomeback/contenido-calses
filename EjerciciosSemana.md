# Taller de Repaso – Estructuras de Datos y Arreglos en TypeScript

### Instrucciones:

Resuelve los siguientes ejercicios en TypeScript. Cada problema requiere pensar en cómo almacenar, manipular y procesar la información de manera eficiente.

---

## Ejercicios Generales

### 1. Invertir una cadena

Crea una función que reciba un string y devuelva ese mismo string invertido.

```ts
// Ejemplo:
// Entrada: "typescript"
// Salida: "tpircsytpe"
```

---

### 2. Verificar paréntesis balanceados

Implementa una función que determine si una expresión matemática tiene los paréntesis correctamente balanceados.

```ts
// Ejemplo:
// "(a+b)"  -> true
// "(a+b))" -> false
```

---

### 3. Cola de impresión

Simula una cola de impresión en la que llegan documentos y se imprimen en orden. Debes poder agregar, retirar y contar documentos.

---

### 4. Primera letra no repetida

Dado un string, encuentra la primera letra que no se repite.

```ts
// Ejemplo:
// Entrada: "swiss"
// Salida: "w"
```

---

### 5. Eliminar duplicados de un arreglo

Escribe una función que elimine los duplicados de un arreglo.

```ts
// Entrada: [1, 2, 2, 3, 4, 4, 5]
// Salida: [1, 2, 3, 4, 5]
```

---

### 6. Rotación de un arreglo

Dado un arreglo y un número `k`, rota el arreglo hacia la derecha `k` veces.

```ts
// Entrada: [1,2,3,4,5], k=2
// Salida: [4,5,1,2,3]
```

---

### 7. Historial de navegador

Simula el historial de un navegador con las siguientes operaciones:

- `visit(url)`: visitar una nueva página.
- `back()`: regresar a la página anterior.
- `forward()`: avanzar a la página siguiente.

---

### 8. Contador de palabras

Dado un párrafo, cuenta cuántas veces aparece cada palabra.

```ts
// Entrada: "hola mundo hola typescript"
// Salida: { "hola": 2, "mundo": 1, "typescript": 1 }
```

---

### 9. Agrupar anagramas

Dado un arreglo de palabras, agrúpalas en listas de anagramas.

```ts
// Entrada: ["eat", "tea", "tan", "ate", "nat", "bat"]
# Salida: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

---

### 10. Cola de tareas con prioridad

Crea una cola de tareas en donde cada tarea tiene un `nombre` y una `prioridad`.  
La operación de extracción debe devolver siempre la tarea con mayor prioridad.

```ts
// Ejemplo:
// enqueue({nombre: "Tarea A", prioridad: 1})
// enqueue({nombre: "Tarea B", prioridad: 5})
// dequeue() -> {nombre: "Tarea B", prioridad: 5}
```

---

## Ejercicios Extra de Arreglos

### 11. Doblar los números

Dado un arreglo de números, devuelve un nuevo arreglo con cada número multiplicado por 2.

```ts
// Entrada: [1, 2, 3, 4]
// Salida: [2, 4, 6, 8]
```

---

### 12. Filtrar mayores a un valor

Dado un arreglo de números y un valor `n`, devuelve solo los números mayores que `n`.

```ts
// Entrada: [1, 5, 8, 3, 10], n=5
// Salida: [8, 10]
```

---

### 13. Ordenar palabras por longitud

Dado un arreglo de strings, ordénalos de menor a mayor según su longitud.

```ts
// Entrada: ["sol", "mar", "estrella", "luz"]
# Salida: ["sol", "mar", "luz", "estrella"]
```

---

### 14. Calcular promedio

Dado un arreglo de números, calcula el promedio de todos sus valores.

```ts
// Entrada: [4, 8, 6, 10]
// Salida: 7
```

---

### 15. Encontrar el número más frecuente

Dado un arreglo de números, encuentra el número que más veces se repite.

```ts
// Entrada: [1, 3, 2, 3, 4, 3, 5, 2]
// Salida: 3
```
