import { Injectable }        from '@angular/core';
import { FormControl } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 

@Injectable({
  providedIn: 'root'
})
export class ShowpasswordService {
  activeIcon = faEye;

  constructor() { }

  showPsw( control: FormControl ): { [s:string]: boolean } {
    console.log (control.value);
    return {
      showPsw: true
    }

    /* if ( this.activeIcon === faEye ) {
      paramReceibed.setAttribute('type', 'text');

    
    } else {
      paramReceibed.setAttribute('type', 'password');
    } */
  }

}
