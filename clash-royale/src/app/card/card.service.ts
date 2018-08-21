import { Injectable } from '@angular/core';
import { AppSettings } from '../config/app-settings';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CardService {

  private url: string = AppSettings.API_ENDPOINT + '/constants';

  constructor(private http: HttpClient) { }

  getCards() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': AppSettings.API_TOKEN
      })
    };

    return this.http.get(this.url, httpOptions);
  }

}
