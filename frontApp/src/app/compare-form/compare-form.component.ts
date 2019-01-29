import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';

import {Phone} from '../phone';
import {PhoneService } from '../phone.service';
@Component({
  selector: 'app-compare-form',
  templateUrl: './compare-form.component.html',
  styleUrls: ['./compare-form.component.css']
})
export class CompareFormComponent implements OnInit {
compareBox = new FormGroup({
  firstPhone : new FormControl('', Validators.required),
  secondPhone : new FormControl('', Validators.required),
  thirdPhone : new FormControl(''),
  forthPhone : new FormControl(''),
});
  constructor(private phoneService: PhoneService) { }
phones =[];
filteredPhones=[];
phonesData=[];




  comparePhones():void{
    console.log(this.compareBox.value);
  this.phoneService.comparePhones(this.compareBox.value).subscribe(
    (res:any)=>this.phonesData = res.data
  );


  }

  getPhones(reg:string):void{
 this.phoneService.getPhones(reg)
              .subscribe(
                (res:any) => this.phones = res.data

 );
}
lookUpPhones(value:string):void{
  if(value!="")
  this.phoneService.getPhones(value)
               .subscribe(
                 (res:any) => this.phones = res.data

  );
}
ngOnInit() {

}
}
