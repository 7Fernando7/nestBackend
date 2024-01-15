import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class RegisterUser {

    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ minlength: 6, required: true })
    password?: string;


}

export const UserSchema = SchemaFactory.createForClass( RegisterUser );