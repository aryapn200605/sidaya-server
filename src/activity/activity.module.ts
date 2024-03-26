import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AreaService } from 'src/area/area.service';
import { ActivityDetailService } from 'src/activity-detail/activity-detail.service';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService, AreaService, ActivityDetailService, PrismaService]
})
export class ActivityModule {}
