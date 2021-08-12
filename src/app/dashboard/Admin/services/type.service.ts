import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

const rootURL = 'https://localhost:44332/api/Admin/';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  constructor(public http: HttpClient, private auth: AuthService) {}

  /**
   * Questionnaire Type crud
   */
  AddQuestionnaireType(questionnaire: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(
      `${rootURL}/AddQuestionnaireType/`,
      questionnaire,
      httpOptions
    );
  }

  UpdateQuestionnaireType(questionnaire, id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(
      `${rootURL}/MaintainQuestionnaireType/${id}`,
      questionnaire,
      httpOptions
    );
  }

  DeleteQuestionnaireType(id: number) {}

  /**
   * Session Type crud
   */
  AddSessionType(session: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(`${rootURL}/AddSessionType/`, session, httpOptions);
  }

  UpdateSessionType(session, id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(
      `${rootURL}/MaintainSessionType/${id}`,
      session,
      httpOptions
    );
  }

  /**
   * Document Type crud
   */
  AddDocumentType(doc: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(`${rootURL}/AddDocumentType/`, doc, httpOptions);
  }

  UpdateDocumentType(doc, id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(
      `${rootURL}/MaintainDocumentType/${id}`,
      doc,
      httpOptions
    );
  }

  /**
   * Event Type crud
   */
  AddEventType(event: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(`${rootURL}/AddEventType/`, event, httpOptions);
  }

  UpdateEventType(event, id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(
      `${rootURL}/MaintainEventType/${id}`,
      event,
      httpOptions
    );
  }

  /**
   * Package Type crud
   */
  AddPackageType(Package: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(`${rootURL}/AddPackageType/`, Package, httpOptions);
  }

  UpdatePackageType(Package, id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(
      `${rootURL}/MaintainPackageType/${id}`,
      Package,
      httpOptions
    );
  }

  /**
   * Client Type crud
   */
  AddClientType(Client: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(`${rootURL}/AddClientType/`, Client, httpOptions);
  }

  UpdateClientType(Client, id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(
      `${rootURL}/MaintainClientType/${id}`,
      Client,
      httpOptions
    );
  }
}