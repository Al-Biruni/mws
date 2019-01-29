import { Component, OnInit } from '@angular/core';
import {Phone} from '../phone';
import {PhoneService } from '../phone.service';
import {Comparison} from '../comparison'
@Component({
  selector: 'app-popular-com',
  templateUrl: './popular-com.component.html',
  styleUrls: ['./popular-com.component.css']
})
export class PopularComComponent implements OnInit {
com=[];
  constructor(private  phoneService: PhoneService) { }

  ngOnInit() {
    this.getPopularComp();
  }

  getPopularComp():void{
    this.phoneService.getPopularComp()
      .subscribe(
        (res:any) => this.com= res.data
    );
  }

}
