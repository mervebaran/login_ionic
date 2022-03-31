import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.initializeApp();
  }

  initializeApp(){
    // Set new Home page
    this.router.navigateByUrl("home");
    // Exit App on back button click from Home page

  }
}
