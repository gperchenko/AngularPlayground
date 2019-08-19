import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-relationship',
  templateUrl: './add-new-relationship.component.html',
  styleUrls: ['./add-new-relationship.component.css']
})
export class AddNewRelationshipComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddNewRelationshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
