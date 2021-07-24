import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyQuestionnairesComponent } from './myQuestionnaires/myQuestionnaires.component';
import { MySessionsComponent } from './MySessions/MySessions.component';
import { MytasksComponent } from './Mytasks/Mytasks.component';
import { ProfileComponent } from './Profile/Profile.component';
import { PurchasePackagesComponent } from './PurchasePackages/PurchasePackages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  
  ],
  declarations: [MyQuestionnairesComponent,MySessionsComponent,MytasksComponent,ProfileComponent,PurchasePackagesComponent]
})
export class ClientModule { }
