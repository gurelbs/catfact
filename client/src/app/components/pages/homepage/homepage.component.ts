import { Component, OnInit } from '@angular/core';
import { CatFact } from '../../../types';
import { ApiService } from '../../../services/api.service';
import { uuid } from 'short-uuid';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  allFacts: CatFact[] = [];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.getAllFacts();
  }

  getAllFacts() {
    this.api.getAllFacts().subscribe((res: any) => {
      let randomNum10To99 = () => Math.floor(Math.random() * 90) + 10;
      let factsList = res.data.map(
        (catFact: { fact: string; length: number }, i: number) => ({
          factNumber: ~~(Math.random() * 10000),
          fact: catFact.fact,
          length: catFact.length,
          path: `https://source.unsplash.com/4${randomNum10To99()}x2${randomNum10To99()}/?cat,cats,kitten`,
        })
      );
      this.allFacts = factsList;
    });
  }
}
