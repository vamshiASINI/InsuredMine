import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Input() displayType: string;

  constructor(private authService: AuthService) { }

  ngOnInit()
  {
  }
  getUser() {
    return this.authService.getUser().UserId;
  }

}
