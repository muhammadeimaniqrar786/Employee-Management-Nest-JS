import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.usersService.create(createUserDto);
    return this.usersService.findOne(user.id);
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException(`User not found.`);
    }

    return user;
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findOne(id);
    return this.usersService.update(id, updateUserDto, user);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    await this.findOne(id);
    const deletedUser = await this.usersService.delete(id);
    return `User ${deletedUser.name} has been deleted successfully.`;
  }
}
