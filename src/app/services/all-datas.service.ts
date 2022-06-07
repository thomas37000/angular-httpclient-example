import { Injectable } from '@angular/core';
import { MessageLabel } from '../model/MessageLabel';
import { Personne } from '../model/Personne';

@Injectable({
  providedIn: 'root',
})
export class AllDatasService {
  public count: number;

  public messages: MessageLabel[];

  constructor() {
    this.count = 0;

    let auteur1 = new Personne('Bob', 'Marley');
    let auteur2 = new Personne('Elvis', 'Presley');
    let message1 = new MessageLabel(auteur1, 'Salut ');
    let message2 = new MessageLabel(auteur2, 'Hello');

    this.messages = [message1, message2];
  }

  public countService(): void {
    console.log('services !');
    this.count = this.count++;
    console.log(this.count++);
  }

  public getMessages(): MessageLabel[] {
    return this.messages;
  }

  public getAuteurs(): Personne[] {
    let auteurs: Personne[];
    auteurs = [];

    for (const msg of this.messages) {
      auteurs.push(msg.auteur);
    }

    return auteurs;
  }

  public addMessage(newMsg: MessageLabel): void {
    this.messages.push(newMsg);
  }

  public searchArr(val: any): MessageLabel[] {
    // let newArr : MessageLabel[];// => je déclare un nouveau tableau
    // newArr = []; // => je l'initialise à vide

    let newArr: MessageLabel[] = []; // meilleur synthaxe

    for (const msg of this.messages) {
      // si la valeur que je cherche est dans le corps du message en cours
      if (msg.corps.search(val) !== -1) {
        // j'ajoute le message entier au nouveau tableau
        newArr.push(msg);
      }
    }

    return newArr;
  }
}
