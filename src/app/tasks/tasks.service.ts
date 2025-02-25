import { Injectable } from '@angular/core';
import { type NewTData } from './task/task.model';

interface Ctask {
  Tid: string;
  Uid: string;
}
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      description: 'learn from basic to advance for internship purpose',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Learn React',
      description: 'understand core concepts and build projects',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Explore Vue.js',
      description: 'explore Vue.js ecosystem and develop apps',
      dueDate: '2025-12-31',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Improve Python Skills',
      description: 'enhance Python programming for data science',
      dueDate: '2025-12-31',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Deep Dive into Node.js',
      description: 'build REST APIs and backend services',
      dueDate: '2025-12-31',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Master TypeScript',
      description: 'get hands-on experience with TypeScript for scalability',
      dueDate: '2025-12-31',
    },
    {
      id: 't7',
      userId: 'u6',
      title: 'Master ',
      description: 'get hands-on experience with TypeScript for scalability',
      dueDate: '2025-12-31',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addUserTask(taskData: NewTData, uID: string) {
    this.tasks.unshift({
      id: 't' + String(this.tasks.length + 1),
      userId: uID,
      title: taskData.title,
      dueDate: taskData.date,
      description: taskData.detail,
    });
    this.saveTasks();
  }

  removeUserTask(thisTask: Ctask) {
    this.tasks = this.tasks.filter(
      (task) => task.id !== thisTask.Tid || task.userId !== thisTask.Uid
    );
    this.saveTasks();
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
