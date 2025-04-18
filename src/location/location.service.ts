// location.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepo: Repository<Location>,
  ) {}

  findAll() {
    return this.locationRepo.find({ relations: ['parent', 'children'] });
  }

  findTree() {
    // Updated `parent` to handle `id: undefined` instead of `null`
    return this.locationRepo.find({
      where: { parent: { id: undefined } },  // `undefined` is more appropriate here
      relations: ['children', 'children.children', 'children.children.children'],
    });
  }

  create(data: Partial<Location>) {
    const loc = this.locationRepo.create(data);
    return this.locationRepo.save(loc);
  }

  findOne(id: number) {
    return this.locationRepo.findOne({ where: { id }, relations: ['parent', 'children'] });
  }

  update(id: number, data: Partial<Location>) {
    return this.locationRepo.update(id, data);
  }

  remove(id: number) {
    return this.locationRepo.delete(id);
  }
}
