import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators,FormArray,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-phone',
  templateUrl: './create-phone.component.html',
  styleUrls: ['./create-phone.component.css']
})
export class CreatePhoneComponent implements OnInit {
  createPhoneForm = this.fb.group({

    id : [''],
    picture : [''],
    rating : [''],
    name : [''],
    screenSize : [''],
    camera : [''],
    battery:[''],
    proc : [''],
    ram : [''],
    trademark : [''],
    userRating : [''],
    operatingSystem : [''],
    simSlot : [''],
    relaseDate:[''],
    userInterface: [''],
    network: [''],


    fingerPrintSensor:[''],
    faceSensor : [''],
    otherSensors : [''],
    notiLight: [''],



    loudSpeakers : [''],
    radio :[''],
    audioJack : [''],

    procType: [''],
    procDetails : [''],
    gpu:[''],


    weight:[''],
    thickness:[''],
    phoneMat:[''],
    color:[''],

    creenType:[''],
    screenDim:[''],
    screenThickness:[''],
    screenProtection:[''],
    screenToPhoneR:[''],

    ////////////inetrnal storage details
    //storage
    addStorage:[''],
    OTG:[''],
    //////////////camera
    fCamRes:[''],
    fCamLens:[''],
    fCamImgQ:[''],
    fCamVidQ:[''],
    fCamFlash:[''],
    fCamModes:[''],

    bCamRes:[''],
    bCamLens:[''],
    bCamImgQ:[''],
    bCamVidQ:[''],
    bCamFlash:[''],
    bCamModes:[''],
    //////////////////////////battery details////////////////////
    batSize:[''],
    batType:[''],
    batUseageTime:[''],
    batReplace:[''],
    batCharType:[''],
    //////////////////////Network details///////////////
    wifi:[''],
    hotspot:[''],
    bluetooth:[''],
    netwSupport:[''],
    gps:[''],
    //sim
    networkType:[''],


    price: [''],


  aliases: this.fb.array([
  this.fb.control('')
])
});

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get aliases() {
  return this.createPhoneForm.get('aliases') as FormArray;
}
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
