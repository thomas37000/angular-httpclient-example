import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id!: number;
  name!: string;
  devLanguage!: string;
  startProgramming!: number;
  age!: number;
  avatar!: string;
  location?: string;

  constructor() {}

  ngOnInit() {
    this.id= 1;
    this.name = 'Thomas';
    this.devLanguage = 'Java';
    this.startProgramming = 2018;
    this.age = 41;
    this.location = 'Nantes';
    this.avatar =
      'https://static.wixstatic.com/media/05afef_bc7a05fc75d0448b8d64aabfa1955c07~mv2.jpg/v1/crop/x_20,y_0,w_343,h_480/fill/w_248,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_1033_JPG.jpg';
  }
}
