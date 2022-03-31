import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { ApiService } from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  data: Student
  //const response = this.apiService.createItem

  constructor(private router: Router,
    public apiService: ApiService) { 
      this.data = new Student();
    }

  ngOnInit() {
  }

  logMeIn() {
    this.router.navigate(['/loginow']);
  }

  submitForm() {

    this.apiService.createItem(this.data).subscribe((response) => {
      console.log(response);

      if(this.apiService.createItem = this.apiService.createItem){
          this.router.navigate(['/loginow']);
          console.log('buradayııııımmmm');
        } 
        else {
          this.router.navigate(['/signup']);
        }
        
    });
  }


}
