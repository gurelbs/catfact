import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

interface CatFact {
  fact: string;
  length: number;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  catName!: string;
  facts: CatFact[] = [];
  images: { path: string }[] = [];
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.getFacts();
  }
  createRandomCatImage() {
    let numBetween10To99 = Math.floor(Math.random() * 90) + 10;
    return {
      path: `https://source.unsplash.com/600x3${numBetween10To99}/?cat,cats`,
    };
  }
  getFacts() {
    this.api.getFacts().subscribe((res: any) => {
      this.facts = res.data;
      this.images = this.facts.map(this.createRandomCatImage);
    });
  }

  showFact(fact: {}) {
    return JSON.stringify(fact);
  }
}
