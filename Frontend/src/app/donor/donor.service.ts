import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DonorService {
  API_URL = 'http://127.0.0.1:8080/donation-management-system/donars';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(this.API_URL + '/all');
  }

  postData(data: any) {
    return this.http.post<any>(this.API_URL + '/register-donar', data);
  }

  putData(id: number, data: any) {
    return this.http.put<any>(this.API_URL + '/update-donar', data);
  }

  deleteData(id: number) {
    return this.http.delete<any>(this.API_URL + '/delete/' + id);
  }
}
