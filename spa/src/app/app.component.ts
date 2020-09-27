import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test';

  routeData;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      // Retrieve the route data:
      if (event instanceof RoutesRecognized) {
        this.routeData = event.state.root.firstChild.data;
      }
    });
  }
}
