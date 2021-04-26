import { Controller, Get, Param } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { ArtPiece } from './art-piece.interface';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  getAll(): ArtPiece[] {
    return this.galleryService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): ArtPiece {
    return this.galleryService.getOne(id);
  }
}
