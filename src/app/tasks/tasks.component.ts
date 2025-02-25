import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input() name?: string | undefined;
  // private TasksService = new TasksService();
  // this down below is called dependency injection , for utilizing the one instance in multiple states
  constructor(private TasksService: TasksService) {}

  isAddingTask: boolean = false;

  @Output() dummy = new EventEmitter<string>();
  // @Input() completeThis ?: Ctask;

  get selectedUserTasks() {
    return this.TasksService.getUserTasks(this.userId);
  }

  addTaskStatus() {
    this.isAddingTask = true;
  }

  onCloseAddTask(status: boolean) {
    this.isAddingTask = status;
  }
}
