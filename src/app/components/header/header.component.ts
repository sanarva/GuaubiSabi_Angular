import { Component, OnInit }      from '@angular/core';    
import { Router }                 from '@angular/router';
import { faUser, faShoppingCart } from '@FortAwesome/free-solid-svg-icons'


@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  iconUser = faUser;
  iconCart = faShoppingCart;

  constructor() { }
 
  ngOnInit(): void {
    //Esto es para que cuando hagamos scroll, cambie su background
    $(window).scroll(function(){
      $('header').toggleClass('scrolled', $(this).scrollTop() > 30);
    });
  }

}
 
 