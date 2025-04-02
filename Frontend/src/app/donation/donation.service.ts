import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  API_URL = 'http://127.0.0.1:8080/donation-management-system/donations';

  constructor(private http: HttpClient) {}
  
  getDonation() {
    return this.http.get<any>(this.API_URL + '/all');
  }

  postDonation(data: any) {
    return this.http.post<any>(this.API_URL + '/add-donation', data);
  }

  putDonation(id: number, data: any) {
    return this.http.put<any>(this.API_URL + '/update-donation', data);
  }

  deleteDonation(id: number) {
    return this.http.delete<any>(this.API_URL + '/delete/' + id);
  }
}
