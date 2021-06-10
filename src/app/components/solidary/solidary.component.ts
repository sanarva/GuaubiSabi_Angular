import { Component, OnInit } from '@angular/core';
import { faBone , faPaw }                           from '@fortawesome/free-solid-svg-icons'; 

@Component({ 
  selector: 'app-solidary', 
  templateUrl: './solidary.component.html',
  styleUrls: ['./solidary.component.css']
})
export class SolidaryComponent implements OnInit {
  iconBone = faBone;
  iconPaw = faPaw;
   
  constructor() { } 

  ngOnInit(): void { 
  }

}
