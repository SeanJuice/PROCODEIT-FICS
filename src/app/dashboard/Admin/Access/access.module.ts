import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineesComponent } from './trainees/trainees.component';
import { TrainersComponent } from './trainers/trainers.component';
import { PractitionersComponent } from './practitioners/practitioners.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TraineesComponent,TrainersComponent,PractitionersComponent,ClientsComponent]
})
export class AccessModule { }
