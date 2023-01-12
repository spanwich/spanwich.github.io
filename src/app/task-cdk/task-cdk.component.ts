import { Component } from '@angular/core';
import { Task } from '../task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskDialogComponent, TaskDialogData, TaskDialogResult } from '../task-dialog/task-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-cdk',
  templateUrl: './task-cdk.component.html',
  styleUrls: ['./task-cdk.component.scss']
})
export class TaskCdkComponent {
  constructor(private dialog: MatDialog) {}

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult|undefined) => {
        if (!result) {
          return;
        }
        this.todo.push(result.task);
      });
  }
  todo: Task[] = [{id:'1', title:'hahaha', description:'try this.' }];
  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void {}

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
