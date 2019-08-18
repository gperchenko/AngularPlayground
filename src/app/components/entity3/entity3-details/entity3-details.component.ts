import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entity, RelationshipType } from '@app/shared/models';
import { Entity3Service } from '@app/components/entity3/entity3.service';
import { RelationshipTypeService } from '@app/components/admin/relationship-type.service';

@Component({
  selector: 'app-entity3-details',
  templateUrl: './entity3-details.component.html',
  styleUrls: ['./entity3-details.component.css']
})
export class Entity3DetailsComponent implements OnInit {

  private entity: Entity;
  private entityTypeName: string;
  private relationshipTypes: RelationshipType[];

  constructor(
    private route: ActivatedRoute,
    private entityService : Entity3Service,
    private relationshipTypeService: RelationshipTypeService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.entity = this.entityService.getById(id);
    this.entityTypeName = this.entityService.getEntityTypeName();
    this.relationshipTypes = this.relationshipTypeService.getMyTypes(this.entityTypeName);
  }

}
