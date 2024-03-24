import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRequestController } from './friend-request.controller';
import { FriendRequestService } from './friend-request.service';
import { FriendRequest } from './friend-request.entity';
import { Friend } from 'src/friends/friends.entity';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
      TypeOrmModule.forFeature([FriendRequest,Friend]),
      UsersModule,
      ],
      controllers: [FriendRequestController],
      exports:[FriendRequestService],
      providers: [FriendRequestService],
})
export class FriendRequestModule {}