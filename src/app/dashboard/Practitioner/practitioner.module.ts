import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetAvailabilityComponent } from './set-availability/set-availability.component';
import { PractitionerRoutingModule } from './practitioner-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    PractitionerRoutingModule,

  ],
  declarations: [SetAvailabilityComponent],
})
export class PractitionerModule { }
