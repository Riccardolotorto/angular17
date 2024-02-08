import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
  @Input() risultato: Number;
  @Input() listaNumeri: Number[];
}
