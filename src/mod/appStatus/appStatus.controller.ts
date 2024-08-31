import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";

@Controller('/appStatus')
export class AppStatusController {

    @Get()
    handleGet(): string {
      return this.handleRequest();
    }
  
    @Post()
    handlePost(): string {
      return this.handleRequest();
    }
  
    @Put()
    handlePut(): string {
      return this.handleRequest();
    }
  
    @Delete()
    handleDelete(): string {
      return this.handleRequest();
    }
  
    @Patch()
    handlePatch(): string {
      return this.handleRequest();
    }
  
    private handleRequest(): string {
      return 'Healthy';
    }
}