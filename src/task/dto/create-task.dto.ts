import { IsString, Length } from "class-validator";

export class CreateTaskDto {

  @IsString({ message: 'This parametre must be string.' })
  @Length(0, 20, { message: 'This parametre must be entry 0 and 20.' })
  title: string;

  @IsString({ message: 'This parametre must be string.' })
  @Length(0, 100, { message: 'This parametre must be entry 0 and 20.' })
  description: string;
}
