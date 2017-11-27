import {Component, OnInit, TemplateRef} from '@angular/core';
import {DatabaseService} from './services/database.service';
import {AuthService} from './services/auth.service';
import {Litter} from './models/litter';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {GeolocationService} from './services/geolocation.service';
import {SafeHtml} from '@angular/platform-browser';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pick of the Litter!';
  location: {};
  litters: Litter[];
  currentLitter: Litter;
  address: string;
  closeResult: string;
  constructor(private geoService: GeolocationService, private dbService: DatabaseService,
              private authService: AuthService, private modalService: NgbModal) {}



   ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.dbService.getLitter(4000, position.coords.latitude, position.coords.longitude, 0).then(results => {
          this.litters = results as Litter[];
          const timer = Observable.timer(2000, 1000);
          timer.subscribe(t => {
            if (t % 30 === 0) {
              this.currentLitter = this.litters[Math.floor(Math.random() * this.litters.length - 1) + 1];
            }
          });
        });
      }, error => {
          console.log(error.message);
      });
    }
   }
   getAddress(litter: Litter) {
      this.geoService.getCityFromLatLng(litter.litter_location_lat, litter.litter_location_long).then(result => {
        this.address = result.results[0].formatted_address;
        console.log(this.address);
      });
   }



  open(content, litter: Litter) {
    this.currentLitter = litter;
    this.getAddress(litter);
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
   private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

}
