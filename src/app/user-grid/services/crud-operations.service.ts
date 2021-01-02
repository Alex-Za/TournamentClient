import {Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserGridConfiguration} from "../models/configurations/user-grid-configuration";
import {IUserModel} from "../models/i-user-model";
import {Observable} from "rxjs";

@Injectable()
export class CrudOperationsService {
  private readonly headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private readonly httpClient: HttpClient, @Optional() private readonly config: UserGridConfiguration) { }

  public create(item: IUserModel): Observable<IUserModel> {
    return this.httpClient.put<IUserModel>(this.config.getUserGridUrl, item, {headers: this.headers});
  }

  public get(): Observable<IUserModel[]> {
    return this.httpClient.get<IUserModel[]>(this.config.getUserGridUrl + "/get-all-players");
  }
}
