import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientTypeComponent } from './ClientType/ClientType.component';
import { DocumentTypeComponent } from './DocumentType/DocumentType.component';
import { EventTypeComponent } from './EventType/EventType.component';
import { PackageTypeComponent } from './PackageType/PackageType.component';
import { QuestionnaireTypeComponent } from './QuestionnaireType/QuestionnaireType.component';
import { SessionTypeComponent } from './SessionType/SessionType.component';
import { Types_landingComponent } from './Types_landing/Types_landing.component';


const routes: Routes = [
  {
    path: '',
    component: Types_landingComponent,
    pathMatch: 'full',
    children: [{ path: 'types-area', component: Types_landingComponent }],
  },
 { path: 'client-type', component: ClientTypeComponent},
 { path: 'document-type', component:  DocumentTypeComponent},
 { path: 'event-type', component: EventTypeComponent},
 { path: 'package-type', component: PackageTypeComponent},
 { path: 'questionnaire-type', component: QuestionnaireTypeComponent},
 { path: 'session-type', component: SessionTypeComponent},

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminsRoutingModule { }
