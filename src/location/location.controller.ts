import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('locations')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  // Create a new location
  @Post()
  create(@Body() dto: CreateLocationDto) {
    return this.service.create(dto);
  }

  // Get all locations
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // Get a single location by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);  // Convert string to number
  }

  // Update a location by id
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateLocationDto) {
    return this.service.update(+id, dto);  // Convert string to number
  }

  // Delete a location by id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);  // Convert string to number
  }
}
