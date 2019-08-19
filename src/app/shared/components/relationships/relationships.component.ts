import { Component, OnInit, Input} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { IEntityService } from '@app/components/interfaces/ientity-service';
import { Entity1Service } from '@app/components/entity1/entity1.service';
import { Entity2Service } from '@app/components/entity2/entity2.service';
import { Entity3Service } from '@app/components/entity3/entity3.service';
import { RelationshipTypeService } from '@app/components/admin/relationship-type.service';
import { RoleService } from '@app/components/admin/role.service';
import { RelationshipService } from '@app/shared/relationship.service';

import { AddNewRelationshipComponent } from '@app/shared/components/add-new-relationship/add-new-relationship.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})
export class RelationshipsComponent implements OnInit {
  @Input() entity: string;
  entityServiceMap: { [key: string]: IEntityService} = {};
  
  constructor(
    public dialog: MatDialog,
    private entity1Service: Entity1Service,
    private entity2Service: Entity2Service,
    private entity3Service: Entity3Service,
    private relationshipTypeService: RelationshipTypeService,
    private roleService: RoleService,
    private relationshipService: RelationshipService,
  ) { }

  ngOnInit() {
    this.entityServiceMap[this.entity1Service.getEntityTypeName()] = this.entity1Service;
    this.entityServiceMap[this.entity2Service.getEntityTypeName()] = this.entity2Service;
    this.entityServiceMap[this.entity3Service.getEntityTypeName()] = this.entity3Service;
  }

  addNewRelationship() {
    const dialogRef = this.dialog.open(AddNewRelationshipComponent, {
      width: '600px',
      data: {name: 'test'}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('The dialog was closed');
    });
  }
}
