import { Module } from '@nestjs/common';
import { GalleryController } from './gallery/gallery.controller';

@Module({
  imports: [],
  controllers: [GalleryController],
  providers: [],
})
export class AppModule {}
