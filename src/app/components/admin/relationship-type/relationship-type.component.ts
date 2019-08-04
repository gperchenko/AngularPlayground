import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import { RelationshipType } from '@app/shared/models';
import { RelationshipTypeService } from '@app/components/admin/relationship-type.service';

@Component({
  selector: 'app-relationship-type',
  templateUrl: './relationship-type.component.html',
  styleUrls: ['./relationship-type.component.css']
})
export class RelationshipTypeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  relationshipTypes: RelationshipType [];

  constructor(
    private router: Router,
    private relationshipTypeService: RelationshipTypeService
    ) { }

  ngOnInit() {
    this.relationshipTypes = this.relationshipTypeService.getAll();
  }
  
  getRecord(type: RelationshipType)
  {
    this.router.navigate(['admin/roles', type.id])
  }
}
