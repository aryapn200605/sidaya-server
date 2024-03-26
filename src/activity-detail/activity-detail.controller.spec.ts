import { Test, TestingModule } from '@nestjs/testing';
import { ActivityDetailController } from './activity-detail.controller';

describe('ActivityDetailController', () => {
  let controller: ActivityDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityDetailController],
    }).compile();

    controller = module.get<ActivityDetailController>(ActivityDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
