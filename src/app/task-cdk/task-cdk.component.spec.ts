import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCdkComponent } from './task-cdk.component';

describe('TaskCdkComponent', () => {
  let component: TaskCdkComponent;
  let fixture: ComponentFixture<TaskCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCdkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
