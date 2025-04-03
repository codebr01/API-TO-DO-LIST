import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsNegative, IsNumber } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

  @IsNumber({ allowNaN: false }, { message: 'This parametre must be number.' })
  @IsNegative({ message: 'This parametre must be integer.' })
  state?: number;
}
