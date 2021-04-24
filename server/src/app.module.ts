import { Module } from '@nestjs/common';
import { GalleryController } from './gallery/gallery.controller';

@Module({ controllers: [GalleryController] })
export class AppModule {}
