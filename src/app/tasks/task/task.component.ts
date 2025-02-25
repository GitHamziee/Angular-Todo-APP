import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TData } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private TasksService = inject(TasksService);

  @Input({ required: true }) data!: TData;
  @Output() select = new EventEmitter<string>();

  completeTask() {
    this.TasksService.removeUserTask({
      Tid: this.data.id,
      Uid: this.data.userId,
    });
  }
}
