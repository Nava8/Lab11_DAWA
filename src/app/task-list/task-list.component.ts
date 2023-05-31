import { Component, Input } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  getTaskStatus(task: Task): string {
    return task.completed ? ' (Completo)' : ' (Incompleto)';
  }
}
