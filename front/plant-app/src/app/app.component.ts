import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'plant-app';
  constructor(private http: HttpClient) {} // Injecte HttpClient si besoin

  ngOnInit() {
    console.log('AppComponent initialisé !');

    // Exemple : Charger Google OAuth
    this.loadGoogleAuth();
  }

  loadGoogleAuth() {
    console.log('Chargement de Google Auth...');
  }
}
