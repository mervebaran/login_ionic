import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { ApiService } from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginow',
  templateUrl: './loginow.page.html',
  styleUrls: ['./loginow.page.scss'],
})
export class LoginowPage implements OnInit {

  data: Student
  //const response = this.apiService.createItem

  constructor(private router: Router,
    public apiService: ApiService) { 
      this.data = new Student();
    }

  ngOnInit() {
  }

    logMeIn() {
      this.router.navigate(['/signup']);
    }

    submitForm() {

      this.apiService.createItem(this.data).subscribe((response) => {
        console.log(response);
  
        if(this.apiService.createItem = this.apiService.createItem){  
            this.router.navigate(['/thank']);
            console.log('buradayııııımmmm2222');
          } 
          else if(this.apiService.createItem != this.apiService.createItem) {
            this.router.navigate(['/signup']);
          }
          else {
            this.router.navigate(['/signup']);
          }
  
      });
    }
    // if(response = this.apiService.createItem){
    //   this.router.navigate(['/thank']);
    //   console.log('buradayııııımmmm');
    // } 
    // else {
    //   this.router.navigate(['/signup']);
    // }

}














// https://monsterlessons-academy.com/posts/create-a-rest-api-with-json-server  => Create a Rest API With Json Server

// https://www.youtube.com/watch?v=fY4tOjzacOM => https://github.com/techiediaries/fake-api-jwt-json-server => Setup fake json server with authentication for API testing

//https://www.freakyjolly.com/ionic-httpclient-crud-service-tutorial-to-consume-restful-server-api/

// https://medium.com/@chathurangijks/create-rest-api-with-json-server-and-consume-in-angular-5-httpclient-using-ionic-3-application-66bee52deb6e



//https://www.youtube.com/watch?v=Ib4yQZzf-ZM  =>> FireBase kullanarak login authentication yapıyor