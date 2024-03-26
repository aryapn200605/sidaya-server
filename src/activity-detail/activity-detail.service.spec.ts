import { Test, TestingModule } from '@nestjs/testing';
import { ActivityDetailService } from './activity-detail.service';

describe('ActivityDetailService', () => {
  let service: ActivityDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityDetailService],
    }).compile();

    service = module.get<ActivityDetailService>(ActivityDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
