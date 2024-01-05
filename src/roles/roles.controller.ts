import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleEntity } from './entities/role.entity';
import { Role } from '@prisma/client';

@ApiTags('roles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @Post()
  @ApiCreatedResponse({ type: RoleEntity })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @ApiOkResponse({ type: RoleEntity, isArray: true })
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: RoleEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const role = await this.rolesService.findOne(id);

    if (!role) {
      throw new NotFoundException(`Could not find role.`);
    }

    return role;
  }

  @Patch(':id')
  @ApiOkResponse({ type: RoleEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateRoleDto: UpdateRoleDto) {
    const role = await this.findOne(id);
    return this.rolesService.update(id, updateRoleDto, role);
  }

  @Delete(':id')
  @ApiOkResponse()
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.findOne(id);
    const deletedRole = await this.rolesService.remove(id);
    return `Role ${deletedRole.name} has been deleted successfully.`;
  }

  @Post(':roleId/assignPermissions')
  @ApiCreatedResponse({ type: RoleEntity })
  async assignPermissions(@Param('roleId', ParseIntPipe) roleId: number, @Body() permissionIds: number[]): Promise<Role> {
    return this.rolesService.assignPermissionToRole(roleId, permissionIds);
  }
}
