import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task-state.enum';

@Injectable()
export class TaskService {

  constructor(

    @InjectRepository(Task)
    private taskRepository: Repository<Task>

  ) {}

  async create(createTaskDto: CreateTaskDto) {

    const task = this.taskRepository.create(createTaskDto)
    task.state = TaskStatus.Open;

    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: number) {
    return await this.taskRepository.delete(id);
  }
}
