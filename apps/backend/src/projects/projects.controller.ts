import { Controller, Get, Post, Put, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from '@prisma/client';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() data: { name: string; description?: string }): Promise<Project> {
    return this.projectsService.create(data);
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Project | null> {
    return this.projectsService.findOne(id);
  }

//   @Put(':id')
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: { name?: string; description?: string },
  ): Promise<Project> {
    return this.projectsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Project> {
    return this.projectsService.delete(id);
  }
}