import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  name="";
  cookieValue ="";
  cookieExists: boolean=false;

  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
  }

setItem(value:string){
  this.cookieService.set('name', value);
}
getItem(){
  this.cookieValue = this.cookieService.get('name');
}
clearItem(){
  this.cookieService.delete('name');
}

checkNameCookie(){
  this.cookieExists =this.cookieService.check('name');
}


}
