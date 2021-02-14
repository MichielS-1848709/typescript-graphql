import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
class GetUserArgs {
  @Field()
  @IsNotEmpty()
  userId: string;
}

export default GetUserArgs;
