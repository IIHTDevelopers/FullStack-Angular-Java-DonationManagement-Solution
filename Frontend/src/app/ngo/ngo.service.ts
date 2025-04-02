import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NgoService {
  API_URL = 'http://127.0.0.1:8080/donation-management-system/ngos';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(this.API_URL + '/all');
  }

  postData(data: any) {
    return this.http.post<any>(this.API_URL + '/register-ngo', data);
  }

  putData(data: any) {
    return this.http.put<any>(this.API_URL + '/update-ngo', data);
  }

  deleteData(id: number) {
    return this.http.delete<any>(this.API_URL + '/delete/' + id);
  }
}
