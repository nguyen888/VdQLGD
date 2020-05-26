import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  avatar: any= {};
 
  constructor(private router: Router,
              private loginService: LoginService
              ) { }
  ngOnInit(): void {
    this.avatar.url = 'https://i.9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-4.jpg';
   
  }
  onSubmit(value: any) {
    console.log(value);
    if(value.username=="admin"&& value.password=="123456")
    {this.loginService.SetLogin(true);
    this.router.navigate(['account']);
    }
    else{
      
      alert('Lỗi tài khoản, mật khẩu') 
      
    }
  }
 
}
