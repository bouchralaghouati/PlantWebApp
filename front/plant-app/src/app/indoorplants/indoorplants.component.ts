import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  



@Component({
  selector: 'app-indoorplants',
  imports: [],
  templateUrl: './indoorplants.component.html',
  styleUrl: './indoorplants.component.css'
})
export class IndoorplantsComponent {
    // Initialiser un état pour savoir si la carte est ouverte
    isOpen = false;

    // Fonction pour inverser l'état (ouvrir/fermer la carte)
    toggleCard() {
      this.isOpen = !this.isOpen;
    }
}
