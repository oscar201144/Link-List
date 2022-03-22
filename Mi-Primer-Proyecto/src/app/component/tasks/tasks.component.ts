import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import {Task} from '../../Task'



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    // Like promise
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    })
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(()=>{
      this.tasks = this.tasks.filter ( t => t.id !== task.id)
    })
  }
}