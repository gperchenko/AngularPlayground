import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entity, RelationshipType } from '@app/shared/models';
import { Entity2Service } from '@app/components/entity2/entity2.service';
import { RelationshipTypeService } from '@app/components/admin/relationship-type.service';

@Component({
  selector: 'app-entity2-details',
  templateUrl: './entity2-details.component.html',
  styleUrls: ['./entity2-details.component.css']
})
export class Entity2DetailsComponent implements OnInit {

  private entity: Entity;
  private entityTypeName: string;
  private relationshipTypes: RelationshipType[];

  constructor(
    private route: ActivatedRoute,
    private entityService : Entity2Service,
    private relationshipTypeService: RelationshipTypeService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.entity = this.entityService.getById(id);
    this.entityTypeName = this.entityService.getEntityTypeName();
    this.relationshipTypes = this.relationshipTypeService.getMyTypes(this.entityTypeName);
  }

}

