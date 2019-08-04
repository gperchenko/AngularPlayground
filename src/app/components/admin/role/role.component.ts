import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RelationshipType, Role } from '@app/shared/models';
import { RelationshipTypeService } from '@app/components/admin/relationship-type.service';
import { RoleService } from '@app/components/admin/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  relationshipType: RelationshipType;
  roles: Role[];
  roleName : string;

  constructor(
    private route: ActivatedRoute,
    private relationshipTypeService: RelationshipTypeService,
    private roleService: RoleService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.relationshipType = this.relationshipTypeService.getById(id);
    this.roles = this.roleService.getRolesByType(id);
  }

  addRole() {
    let  newRole = new Role;
    newRole.name = this.roleName;
    newRole.relationshipTypeId = this.relationshipType.id;
    this.roleService.addRole(newRole);
    this.roles = this.roleService.getRolesByType(this.relationshipType.id);
    this.roleName = "";
  }

}
