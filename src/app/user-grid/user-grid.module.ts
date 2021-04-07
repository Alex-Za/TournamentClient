import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserGridConfiguration } from './models/configurations/user-grid-configuration';
import { UserViewComponent } from './components/user-view/user-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CrudOperationsService } from './services/crud-operations.service';
import { HttpClientModule } from '@angular/common/http';
import { UserGridRoutingModule } from './user-grid-routing.module';


@NgModule({
  declarations: [UserViewComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    UserGridRoutingModule
  ],
  exports: [
    UserViewComponent
  ],
  providers: [
    CrudOperationsService
  ]
})

export class UserGridModule {
  public static forRoot(configuration: UserGridConfiguration): ModuleWithProviders<UserGridModule> {
    return {
      ngModule: UserGridModule,
      providers: [
        { provide: UserGridConfiguration, useValue: configuration }
      ]
    };

  }
}
