import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from './component1/component1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component1Component], //devo inserire i nomi delle classi dei componenti che voglio utilizzare
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ris: Number;
  lista: Number[];
  addizione(n1: HTMLInputElement, n2: HTMLInputElement) : boolean {
    this.ris = Number(n1.value) + Number(n2.value);
    this.stampone(Number(n1.value), Number(n2.value));
    return false
  }
  sottrazione(n1: HTMLInputElement, n2: HTMLInputElement) : boolean {
    this.ris = Number(n1.value) - Number(n2.value);
    this.stampone(Number(n1.value), Number(n2.value));
    return false
  }
  moltiplicazione(n1: HTMLInputElement, n2: HTMLInputElement) : boolean {
    this.ris = Number(n1.value) * Number(n2.value);
    this.stampone(Number(n1.value), Number(n2.value));
    return false
  }
  divisione(n1: HTMLInputElement, n2: HTMLInputElement) : boolean {
    this.ris = Number(n1.value) / Number(n2.value);
    this.stampone(Number(n1.value), Number(n2.value));
    return false
  }
  stampone(n1, n2) : boolean {
    let a = Number(n1);
    let b = Number(n2);
    for (let i = a; i <= b; i++) {
      this.lista.push(i);
    }
    return false
  }
}
