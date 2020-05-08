import { Injectable } from '@angular/core';
import { RegisterationModel } from './registerationModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../Constants';

@Injectable()
export class RegisterationService {

    public isUserLogin = false;
    constructor(private http: HttpClient) {
    }

    public insertUser(userData: RegisterationModel): Observable<RegisterationModel[]> {
        // tslint:disable-next-line:max-line-length
        return this.http.post<RegisterationModel[]> (Constants.REGISTERATIONURL , {email: userData.getEmail() ,
                                                                    username: userData.getUserName() ,
                                                                    password : userData.getPassword()});
    }
}
