import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http.//localhost:8080/auth/';


  constructor(private httpClient: HttpClient) { }

  public nuevo (nuevoUsuario: NuevoUsuario):Observable<any>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
