import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entity, RelationshipType } from '@app/shared/models';
import { Entity1Service } from '@app/components/entity1/entity1.service';
import { RelationshipTypeService } from '@app/components/admin/relationship-type.service';

@Component({
  selector: 'app-entity1-details',
  templateUrl: './entity1-details.component.html',
  styleUrls: ['./entity1-details.component.css']
})
export class Entity1DetailsComponent implements OnInit {

  private entity: Entity;
  private entityTypeName: string;
  private relationshipTypes: RelationshipType[];

  constructor(
    private route: ActivatedRoute,
    private entityService : Entity1Service,
    private relationshipTypeService: RelationshipTypeService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.entity = this.entityService.getById(id);
    this.entityTypeName = this.entityService.getEntityTypeName();
    this.relationshipTypes = this.relationshipTypeService.getMyTypes(this.entityTypeName);
  }

}
