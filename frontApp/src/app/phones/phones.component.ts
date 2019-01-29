import { Component, OnInit } from '@angular/core';
import {Phone} from '../phone';
import {PhoneService } from '../phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phones =[];

  constructor(private phoneService: PhoneService) { }

  getPhones():void{
 this.phoneService.getAllPhones()
              .subscribe(
                (res:any) => this.phones = res.data

 );
  }

  ngOnInit() {
    this.getPhones();
  }

}
