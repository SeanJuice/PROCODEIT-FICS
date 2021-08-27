import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetAvailabilityComponent } from './set-availability/set-availability.component';
import { PractitionerRoutingModule } from './practitioner-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SendClientTaskComponent } from './send-client-task/send-client-task.component';
import { AssignClientTaskComponent } from './send-client-task/AssignClientTask/AssignClientTask.component';




@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
     FormsModule,
    RouterModule,
    PractitionerRoutingModule,

  ],
  declarations: [SetAvailabilityComponent,SendClientTaskComponent,AssignClientTaskComponent],
})
export class PractitionerModule { }
