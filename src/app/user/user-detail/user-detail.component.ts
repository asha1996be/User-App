import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/services/user.service';
import { Router } from '@angular/router';
import { urlPath } from 'src/app/constants/constants';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userDetail: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    if (history.state.data !== undefined) {
      this.userDetail = history.state.data.userDetail;
    } else if (sessionStorage.getItem('userDetail')) {
      this.userDetail = JSON.parse(sessionStorage.getItem('userDetail'));
    }
    // this.userService.getUserDetail(this.userId).subscribe((res: any) => {
    //   if (res.data) {
    //     this.userDetail = res.data;
    //   }
    // });
  }
  getUserList() {
    this.router.navigate([urlPath.userList]);
  }

}
