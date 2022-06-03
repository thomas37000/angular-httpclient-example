import { Component, OnInit } from '@angular/core';
import { AllDatasService } from 'src/app/services/all-datas.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public contact!: string;
  public email!: string;

  constructor(private svc: AllDatasService) {}

  ngOnInit(): void {
    this.contact = 'Messagerie';
    this.email = 'thomas.chalanson@gmail.com';
  }

  public addCount(): void {
    this.svc.countService();
  }
}
