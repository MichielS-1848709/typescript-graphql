import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
class GetUsersArgs {
  @Field(() => [String])
  @IsArray()
  userId: string[];
}

export default GetUsersArgs;
