import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    surname: string;

    @Prop({ required: true })
    description: string;

    @Prop()
    proffession: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;

    @Prop()
    photo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);