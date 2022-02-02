import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  public user = JSON.parse(sessionStorage.getItem('user'))

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logout(){

    sessionStorage.removeItem('user')
    this.router.navigate(["/login"])
  }
}
