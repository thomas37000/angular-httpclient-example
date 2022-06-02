import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public contact!: string;
  public email!: string;

  constructor() {}

  ngOnInit(): void {
    this.contact = 'Messagerie';
    this.email = 'thomas.chalanson@gmail.com';
  }
}
