import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private LoginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
    userModel = new User ();

    mensagem=""

    receberDados() {this.LoginService.login(this.userModel).subscribe((response) => {
        alert("Logado*****")
        // this.router.navigateByUrl("/")
      }, (respostaErro) => {
        alert(respostaErro.error)
        console.log(respostaErro.error)
        if (respostaErro.error == "Email and password are required") {
          this.mensagem = "Email e senha são obrigatórios"
        } else if (respostaErro.error == "Incorrect password") {
          this.mensagem = "senha Incorreta"
        } else {
          this.mensagem = respostaErro.error
        }
      }  )
    }
}
