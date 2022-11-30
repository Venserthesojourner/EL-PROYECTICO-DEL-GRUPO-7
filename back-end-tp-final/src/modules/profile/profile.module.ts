import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { ProfileProviders } from './providers/profile.providers';

@Module({
  imports: [HttpModule, DatabaseModule],
  providers: [ProfileService, ...ProfileProviders],
  controllers: [ProfileController]
})
export class ProfileModule { }
