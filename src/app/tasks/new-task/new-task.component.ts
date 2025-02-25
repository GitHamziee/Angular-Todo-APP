import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms'; //importing this will automatically prevent the form from refreshing the page.
import { type NewTData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);

  //  traditional methods
  enteredTitle: string = '';
  enteredDetail: string = '';
  enteredDate: string = '';

  // Using Signals
  //  enteredTitle  = signal('');
  //  enteredDetail = signal('');
  //  enteredDate = signal('');
  @Input({ required: true }) userID!: string;
  @Output() close = new EventEmitter<boolean>();

  TaskCancelled() {
    this.close.emit(false);
  }

  onSubmit() {
    this.tasksService.addUserTask(
      {
        title: this.enteredTitle,
        detail: this.enteredDetail,
        date: this.enteredDate,
      },
      this.userID
    );

    this.close.emit(false);
  }
}
