import { Component, OnInit } from '@angular/core';
import {IUserModel} from "../../models/i-user-model";
import {CrudOperationsService} from "../../services/crud-operations.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  public userModels: IUserModel[];

  constructor(private readonly crudService: CrudOperationsService) {
    crudService.get().subscribe(models => this.userModels = models);
  }

  firstName: string;
  lastName: string;
  age: number;
  playerId: number;

  public displayColumns = ['firstName', 'lastName', 'age'];

  ngOnInit(): void {

  }

}
