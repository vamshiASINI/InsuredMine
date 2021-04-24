import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:any
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }
  user() {
    this.username=this.authService.getUser();
  }
  ngOnInit() {
this.user()
  }

  onLogout() {

        this.authService.setLoginStatus(0);
        this.router.navigate(['/auth/login']);
        this.authService.removeProfile();

    }
}
