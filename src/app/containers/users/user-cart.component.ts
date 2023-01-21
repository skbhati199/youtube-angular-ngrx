import {Component, Input, OnInit, Output} from "@angular/core";
import {User} from "../../models/user";

@Component({
  selector: 'user-card',
  template: `
    <div class="grid grid-rows-4 grid-flow-col gap-4">
      <mat-card *ngFor="let user of users" >
        <mat-card-header>
          <mat-card-title>{{user.username}}</mat-card-title>
          <mat-card-subtitle>{{user.email}}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>{{user.address.city}}</mat-card-content>
        <mat-card-actions>
          <button mat-button>Update</button>
          <button mat-button>Delete</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [``]
})
export class UserCardComponent implements OnInit{

  @Input()
  users?: User[];

  constructor() {
  }

  ngOnInit() {
  }
}
