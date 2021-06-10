import { Component, OnInit }                                              from '@angular/core';
import { faFacebookSquare , faFacebookF, faInstagramSquare , faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faMapMarkerAlt , faPhoneAlt, faHeart }                           from '@fortawesome/free-solid-svg-icons'; 
import { faEnvelope , faCalendarAlt }                                     from '@fortawesome/free-regular-svg-icons';
  
@Component({   
  selector   : 'app-footer', 
  templateUrl: './footer.component.html',  
  styleUrls  : ['./footer.component.css']    
})    
   
export class FooterComponent implements OnInit { 
  iconInstagram = faInstagramSquare; 
  iconFacebook  = faFacebookSquare;
  iconFacebookF = faFacebookF;
  iconMarker    = faMapMarkerAlt;  
  iconWhatsapp  = faWhatsapp;
  iconCalendar  = faCalendarAlt; 
  iconMail      = faEnvelope;
  iconPhone     = faPhoneAlt;
  iconHeart     = faHeart;
  
  fecha:Date = new Date(); 

  constructor() { 
  
  } 
      
  ngOnInit(): void {}    
 
}  
 