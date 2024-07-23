import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";

@Controller('/health')
export class HealthController {

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
      console.log('Healthy');
      return 'Healthy';
    }
}