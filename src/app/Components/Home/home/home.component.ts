import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user 
  public role 
  public calendar = faCalendarAlt;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      result => {
        console.log(result);
        sessionStorage.setItem('user', JSON.stringify(result))
        this.user = JSON.parse(sessionStorage.getItem('user'))
        this.role = JSON.parse(sessionStorage.getItem('user')).roles[0].authority;
      }
    )
  }

}
