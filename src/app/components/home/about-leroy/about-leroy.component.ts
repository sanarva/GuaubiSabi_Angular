import { Component, OnInit } from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser'; //lo añadimos para usar el pipe
    
@Component({ 
  selector: 'app-about-leroy', 
  templateUrl: './about-leroy.component.html',
  styleUrls: ['./about-leroy.component.css']  
})
export class AboutLeroyComponent implements OnInit {
   
  ocultar: boolean = true;
    
  constructor() { } 
  
  ngOnInit(): void {

  }
}     
 