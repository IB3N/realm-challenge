import { Injectable } from '@nestjs/common';
import artData from './art-data';
import { ArtPiece } from './art-piece.interface';

@Injectable()
export class GalleryService {
  getAll(): ArtPiece[] {
    return artData;
  }

  getOne(id: string): ArtPiece {
    return artData[id];
  }
}
