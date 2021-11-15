import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CatFact } from '../../../types';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  favorites: CatFact[] = [];
  constructor(public api: ApiService) {}

  ngOnInit() {
    this.getFavoritesFacts();
  }

  getFavoritesFacts() {
    this.api.getFavorites().subscribe((facts: any) => {
      this.favorites = facts;
    });
  }
}
