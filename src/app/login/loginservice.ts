import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './model';
import { Observable } from 'rxjs';
import { Constants } from '../Constants';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {

    }

    public loginUser(loginData: Model): Observable<Model[]> {
        return this.http.post<Model[]>(Constants.LOGINURL , {email: loginData.getEmail() , password: loginData.getPassword()});
    }
}
