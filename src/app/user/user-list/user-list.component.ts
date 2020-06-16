import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/Shared/services/user.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { urlPath } from 'src/app/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['email', 'first_name', 'last_name', 'avatar'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  userList: any = [];
  noUserData: boolean = false;
  errMessage: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUserList().subscribe((res: any) => {
      if (res.length > 0) {
        this.userList = new MatTableDataSource < any > (res);
        this.userList.paginator = this.paginator;
        this.userList.sort = this.sort;
      } else {
        this.noUserData = true;
      }
    }, (err) => {
      this.errMessage = true;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userList.filter = filterValue.trim().toLowerCase();
  }

  userDetails(userDetail) {
    this.router.navigate([urlPath.userDetail], { state: { data: { userDetail } } });
    sessionStorage.setItem('userDetail', JSON.stringify(userDetail))
  }

  logout() {
    this.router.navigate(['/']);
    localStorage.clear();
  }
}
