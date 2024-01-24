import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PermissionEntity } from './entities/permission.entity';

@ApiTags('permissions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) { }

  @Post()
  @ApiCreatedResponse({ type: PermissionEntity })
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  @ApiOkResponse({ type: PermissionEntity, isArray: true })
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PermissionEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const permission = await this.permissionsService.findOne(id);

    if (!permission) {
      throw new NotFoundException(`Could not find permission.`);
    }

    return permission;
  }

  @Patch(':id')
  @ApiOkResponse({ type: PermissionEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePermissionDto: UpdatePermissionDto) {
    const permission = await this.findOne(id);
    return this.permissionsService.update(id, updatePermissionDto, permission);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PermissionEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.findOne(id);
    return this.permissionsService.remove(id);
  }
}
