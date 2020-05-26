import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router: Router,

    ) { }
  
    ngOnInit(): void {
    }
    goBack() {
      this.router.navigate(['']);
    }
    onSubmit(value: any) {
  
      if (value.inputNewpassword != "" && value.inputAgainpassword != ""&&value.inputNewpassword == value.inputAgainpassword)
        {
          this.router.navigate(['account']);
        }
        else {
          alert("Lỗi, hãy nhập lại mật khẩu mới")
        }
    }

}
