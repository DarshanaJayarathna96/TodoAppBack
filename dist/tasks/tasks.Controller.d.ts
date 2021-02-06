import { Task } from './Task.entity';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<Task[]>;
    findOne(id: any): Promise<Task>;
    create(task: Task): Promise<void>;
    editTask(task: Task, id: number): Promise<Task>;
    remove(id: any): void;
}
