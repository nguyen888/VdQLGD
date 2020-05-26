import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  avatar: any = {};
  constructor(private router: Router,
    private loginService: LoginService
  ) { }


  ngOnInit(): void {
    this.avatar.url = 'https://i.9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-4.jpg';
  }
  

  onSubmit(value: any) {
    console.log(value);
    if (value.username !="") {
      this.loginService.SetLogin(true);
      this.router.navigate(['verification']);
    }
    else{
      
      alert('Lỗi thông tin tài khoản') 
      
    }
}
  
  
  goBack() {
    this.router.navigate(['']);
  }
}
