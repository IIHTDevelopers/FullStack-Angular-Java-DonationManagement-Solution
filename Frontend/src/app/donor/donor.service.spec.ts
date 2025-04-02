import { of } from 'rxjs';
import { DonorService } from './donor.service';
describe('DonorService', () => {
  let service: DonorService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    };
    service = new DonorService(httpClientSpy);
  });

  it('donar service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testing getData', () => {
    const res = 'some message';
    const url = 'http://127.0.0.1:8080/donation-management-system/donars/all';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res)); //of represent returns Observable
    service.getData();
    expect(httpClientSpy.get).toBeCalledTimes(1); //Testing whether get method called
    expect(httpClientSpy.get).toHaveBeenCalledWith(url); //Testing whether get passing with url or not
  });

  it('testing postData', () => {
    const data = {
      donar_id: 1,
      ngo_id: 1,
      donar_name: 'donar1',
      username: 'user1',
      password: 'pwd',
      email_id: 'donar1@yahoo.com',
      phone_number: '8596523652',
      address: 'Hyd',
    };
    const res = 'some message';
    const url = 'http://127.0.0.1:8080/donation-management-system/donars';
    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
    service.postData(data);
    expect(httpClientSpy.post).toBeCalledTimes(1);
    //expect(httpClientSpy.post).toHaveBeenCalledWith(url);
  });

  it('testing patchData', () => {
    const command1 = 1;
    const data = {
      donar_id: 1,
      ngo_id: 1,
      donar_name: 'donar1',
      username: 'user1',
      password: 'pwd',
      email_id: 'donar1@yahoo.com',
      phone_number: '8596523652',
      address: 'Hyd',
    };

    const res = 'some message';
    const url = 'http://127.0.0.1:8080/donation-management-system/donars';
    jest.spyOn(httpClientSpy, 'put').mockReturnValue(of(res));
    service.putData(command1, data);
    expect(httpClientSpy.put).toBeCalledTimes(1);
    //expect(httpClientSpy.put).toHaveBeenCalledWith(url);
  });

  it('testing deleteData', () => {
    const command = 1;
    const res = 'some message';
    const API_URL = 'http://127.0.0.1:8080/donation-management-system/donars/delete/1';
    jest.spyOn(httpClientSpy, 'delete').mockReturnValue(of(res));
    service.deleteData(command);
    expect(httpClientSpy.delete).toBeCalledTimes(1);
    expect(httpClientSpy.delete).toHaveBeenCalledWith(API_URL);
  });
});
