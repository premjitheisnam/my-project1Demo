import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { 
  }
  ///////////////////////////
  object = {
    name: "jerry",
    age: 44
  }
  ///////////////////////////////////////
  tom =['lion','tiger','dog'];
////////////////////////////////
  jerry(){
    return "this is a function";
  }
  ///////////////////////////////
  ngOnInit(): void {
  }
  }


