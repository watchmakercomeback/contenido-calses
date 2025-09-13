/*Cola de tareas con prioridad
Crea una cola de tareas en donde cada tarea tiene un `nombre` y una `prioridad`.  
La operación de extracción debe devolver siempre la tarea con mayor prioridad.*/

interface Task {
  name: string;
  priority: number;
}

class PriorityQueue {
  private tasks: Task[] = [];

  // Insertar manteniendo orden
  enqueue(task: Task): void {
    if (this.isEmpty()) {
      this.tasks.push(task);
    } else {
      let added = false;

      for (let i = 0; i < this.tasks.length; i++) {
        if (task.priority > this.tasks[i]!.priority) {
          this.tasks.splice(i, 0, task); // Insertar en la posición correcta
          added = true;
          break;
        }
      }

      if (!added) {
        this.tasks.push(task); // si es la menor prioridad, va al final
      }
    }
  }

  // Sacar la de mayor prioridad (está en la posición 0)
  dequeue(): Task | undefined {
    return this.tasks.shift();
  }

  isEmpty(): boolean {
    return this.tasks.length === 0;
  }

  print(): void {
    console.log(this.tasks.map(t => `${t.name}(${t.priority})`).join(" -> "));
  }
}

const queue = new PriorityQueue();

queue.enqueue({ name: "Enviar correo", priority: 2 });
queue.enqueue({ name: "Preparar informe", priority: 5 });
queue.enqueue({ name: "Tomar café", priority: 1 });
queue.enqueue({ name: "Reunión", priority: 4 });

queue.print(); 

console.log("Sacando:", queue.dequeue()); 

queue.print();
