import { IsEmail, IsString } from "class-validator";

export class ChangeUserDetailsDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  //change profile image
  @IsString()
  profileImage: string;

}
