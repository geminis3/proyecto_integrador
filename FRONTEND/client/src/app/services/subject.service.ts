import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  options = {};
  headers = {};

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'api_token': sessionStorage.getItem('token') as string});
    this.options = {headers: this.headers};
  }

  get(): Promise<any>{
    return this.http.get(environment.api + 'subject', this.options).toPromise();
  }

  create(name: string, code: string, credits: number, career_id: string): Promise<any> {
    const data = { name: name, code: code, credits: credits, career_id: career_id };
    return this.http.post(environment.api + 'subject', JSON.stringify(data), this.options).toPromise();
  }

  update(id: number, name: string, code: string, credits: number, career_id: string): Promise<any> {
    const data = { id: id, name: name, code: code, credits: credits, career_id: career_id };
    return this.http.put(environment.api + 'subject', JSON.stringify(data), this.options).toPromise();
  }

  delete(id: number): Promise<any> {
    const data = { id: id };
    return this.http.delete(environment.api + 'subject', {"body": JSON.stringify(data), "headers": this.headers}).toPromise();
  }
}
