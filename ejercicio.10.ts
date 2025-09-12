//Cola de tareas con prioridad
//Crea una cola de tareas en donde cada tarea tiene un nombre y una prioridad.
//La operación de extracción debe devolver siempre la tarea con mayor prioridad.
class Task {
    constructor(public name: string, public priority: number) {}
}

class PriorityQueue {
    private tasks: Task[] = [];

    enqueue(task: Task): void {
        this.tasks.push(task);
        this.tasks.sort((a, b) => b.priority - a.priority);
    }

    dequeue(): Task | undefined {
        return this.tasks.shift();
    }

    peek(): Task | undefined {
        return this.tasks[0];
    }

    isEmpty(): boolean {
        return this.tasks.length === 0;
    }
}

const pq = new PriorityQueue();
pq.enqueue(new Task("Task 1", 1));
pq.enqueue(new Task("Task 2", 3));
pq.enqueue(new Task("Task 3", 2));

while (!pq.isEmpty()) {
    const task = pq.dequeue();
    console.log(`Processing ${task?.name} with priority ${task?.priority}`);
}
export {};  