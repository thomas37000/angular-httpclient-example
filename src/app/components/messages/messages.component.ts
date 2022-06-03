import { Component, OnInit } from '@angular/core';
import { MessageLabel } from 'src/app/model/MessageLabel';
import { Personne } from 'src/app/model/Personne';
import { AllDatasService } from 'src/app/services/all-datas.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // bonne pratique de mettre un "s" quand c'est un tableau []
  public messages!: MessageLabel[];

  public count: number;

  constructor(private svc: AllDatasService) {
    this.count = 0;
    this.messages = this.svc.getMessages();

    // let auteur1 = new Personne('Bob', 'Marley');
    // let auteur2 = new Personne('Elvis', 'Presley');
    // let message1 = new MessageLabel(auteur1, 'Salut ');
    // let message2 = new MessageLabel(auteur2, 'Hello');

    // this.messages = [message1, message2];
  }

  ngOnInit(): void {}

  public addCount(): void {
    this.svc.countService();
    this.count = this.count++;
    console.log(this.count++);
  }
}
