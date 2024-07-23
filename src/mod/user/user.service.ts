import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/database/schema/User.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/mod/user/dtos/CreateUser';
import { UpdateUserDto } from './dtos/UpdateUser.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) {}

    createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    getUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    getUserById(id: string): Promise<User> {
        return this.userModel.findById(id);
    }

    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    }
    
    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }
}