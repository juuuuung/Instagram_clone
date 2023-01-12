import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/search')
  search(@Query('year') searchingYear: number): string {
    return `we are searching for a movie with a title ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return `This will return ${id} movie`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }
}
