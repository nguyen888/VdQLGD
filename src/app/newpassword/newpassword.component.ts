import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  constructor(private router: Router,

  ) { }

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigate(['']);
  }
  onSubmit(value: any) {

    if (value.newpassword != "" && value.againpassword != ""&& value.newpassword == value.againpassword)
      {
        this.router.navigate(['account']);
      }
      else {
        alert("Lỗi, hãy nhập lại mật khẩu mới")
      }
  }
}
