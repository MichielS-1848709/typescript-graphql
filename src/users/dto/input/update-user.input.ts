import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field(() => Int)
  @IsOptional()
  @IsNotEmpty()
  age?: number;

  @Field({ nullable: true })
  @IsOptional()
  isSubscribed?: boolean;
}

export default UpdateUserInput;
