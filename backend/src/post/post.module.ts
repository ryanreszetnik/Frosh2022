import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from 'src/entities/blogPost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
