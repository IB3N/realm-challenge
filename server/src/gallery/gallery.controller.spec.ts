import { Test, TestingModule } from '@nestjs/testing';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import artData from './art-data';

describe('GalleryController', () => {
  let controller: GalleryController;
  let service: GalleryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalleryController],
      providers: [GalleryService],
    }).compile();

    controller = module.get<GalleryController>(GalleryController);
    service = module.get<GalleryService>(GalleryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of art', () => {
      expect(controller.getAll()).toBe(artData);
    });
  });

  describe('getOne', () => {
    it('should return a piece of art', () => {
      expect(controller.getOne('0')).toBe(artData[0]);
      expect(controller.getOne('1')).toBe(artData[1]);
      expect(controller.getOne('2')).toBe(artData[2]);
      expect(controller.getOne('3')).toBe(artData[3]);
    });
  });
});
