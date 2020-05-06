import { Injectable } from '@angular/core';
import { RegisterationModel } from './registerationModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterationService {
    private userUrl: string;
    public isUserLogin = false;
    constructor(private http: HttpClient) {
    }

    public insertUser(userData: RegisterationModel): Observable<RegisterationModel> {
        // tslint:disable-next-line:max-line-length
        return this.http.post<RegisterationModel> (this.userUrl , {'email': userData.getEmail() ,
                                                                    'username': userData.getUserName() ,
                                                                    'password' : userData.getPassword()});
    }
}
