import { BaseEntity } from 'typeorm';
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    completed: Boolean;
}
