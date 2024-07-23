import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/CreateUser";
import { User } from 'src/database/schema/User.schema';
import mongoose from "mongoose";
import { UpdateUserDto } from "./dtos/UpdateUser.dto";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

    @Get('/all')
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) {
            throw new HttpException('Invalid ID', 404);
        }
        const user = await this.userService.getUserById(id);
        if (!user) {
            throw new HttpException('User not found', 404);
        }
        return user;
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() updateeUserDto: UpdateUserDto): Promise<User> {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) { 
            throw new HttpException('Invalid ID', 404);
        }
        const user = await this.userService.updateUser(id, updateeUserDto);
        if (!user) {
            throw new HttpException('User not found', 404);
        }
        return user;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) { 
            throw new HttpException('Invalid ID', 404);
        }
        const deletedUser = this.userService.deleteUser(id);
        if (!deletedUser) {
            throw new HttpException('User not found', 404);
        }
        return;
    }

}