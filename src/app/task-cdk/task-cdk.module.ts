import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCdkComponent } from './task-cdk.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { TaskComponent } from '../task/task.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    TaskCdkComponent,
    TaskComponent,
    TaskDialogComponent,
  ],
  imports: [
    DragDropModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ]
})
export class TaskCdkModule { }
