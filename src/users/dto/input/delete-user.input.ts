import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
class DeleteUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;
}

export default DeleteUserInput;
