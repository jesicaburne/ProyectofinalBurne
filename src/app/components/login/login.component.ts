import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginDail= false;
  loginUsuario! : LoginUsuario;
  nombreUsuario! : string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private AuthService:AuthService, private router: router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles =this.tokenService.getAuthorities();
    }
  }
  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
     this.AuthService.login(this.loginUsuario).subscribe(data=> {
        this.isLogged=true; 
        this.isLogginFail=false;
        this.tokenService.setToken(data.token));
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([' '])
      },err =>{
        this.isLogged =false;
        this.isLogginFail= true;
        this.errMsj =err.error.mensaje;
        console.log(this.errMsj);
      }
    

  }

