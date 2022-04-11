import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss'],
})
export class OutletComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  websocket() {
    this.router.navigate(['websocket']);
  }

  home() {
    this.router.navigate(['/']);
  }
}
