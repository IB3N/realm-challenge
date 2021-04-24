import { Controller, Get, Param } from '@nestjs/common';
import artData from './art-data';
import { ArtPiece } from './art-piece.interface';

@Controller('gallery')
export class GalleryController {
  @Get()
  getAll(): ArtPiece[] {
    return artData;
  }

  @Get(':id')
  getOne(@Param('id') id: string): ArtPiece {
    return artData[id];
  }
}
