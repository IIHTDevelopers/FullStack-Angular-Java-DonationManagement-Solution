import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DonationRequestService {
  API_URL = 'http://127.0.0.1:8000/donation_request/';

  constructor(private http: HttpClient) {}

  //  getData(){
  //     return this.http.get<any>(this.API_URL);
  //   }

  postData(data: any) {
    return this.http.post<any>(this.API_URL, data);
  }
}
