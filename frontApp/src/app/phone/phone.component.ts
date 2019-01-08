import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
@Input()phone :Phone;

  constructor(
    private   phoneService : PhoneService,
              private route: ActivatedRoute,
               private location: Location
             ) {}



 ngOnInit():void {
                 this.getPhone();
               }
  getPhone(): void{
    const id = +this.route.snapshot.paramMap.get('id');
  this.phoneService.getPhone(id)
    .subscribe(phone => this.phone = phone);
  }




  goBack(): void {
  this.location.back();
}
}
