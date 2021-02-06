import { Repository } from 'typeorm';
import { Task } from './Task.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    getTasks(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    createTask(task: Task): Promise<void>;
    remove(id: string): Promise<void>;
    editTask(id: number, task: Task): Promise<Task>;
}
