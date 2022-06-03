import { Component, OnInit } from '@angular/core';
import { MessageLabel } from 'src/app/model/MessageLabel';
import { Personne } from 'src/app/model/Personne';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // bonne pratique de mettre un "s" quand c'est un tableau []
  public messages!: MessageLabel[];

  constructor() {
    let auteur1 = new Personne("Bob","Marley")
    let auteur2 = new Personne("Elvis","Presley")
    let message1 = new MessageLabel(auteur1, "Salut ")
    let message2 = new MessageLabel(auteur2, "Hello")

    this.messages = [
      message1, message2
    ];
  }

  ngOnInit(): void {}
}
