import { Component, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.scss']
})
export class PedidoCardComponent {



  constructor() { }
  abrirPanel(panel:MatExpansionPanel){
    panel.expanded=!panel.expanded;

  }

}
