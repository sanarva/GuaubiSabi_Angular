import { Component, OnInit } from '@angular/core';
import { faBars }            from '@fortawesome/free-solid-svg-icons';
import * as jQuery           from 'jquery';//Con esto nos reconoce el símbolo del dolar de JQuery ($)
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', 
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  iconBars = faBars;

  constructor() { }
 
  ngOnInit(): void {
    //Esto es para que cuando hagamos scroll, cambie su background
    $(window).scroll(function(){
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 30);
    });
  }

}
 