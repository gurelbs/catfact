import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

interface CatFact {
  fact: string;
  length: number;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  catName!: string
  facts: CatFact[] = []
  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getFacts()
  }

  getFacts() {
    this.api
      .getFacts()
      .subscribe((res: any) => this.facts.push(...res.data))
  }

  log() {
    console.log(this.facts)
  }
  showFact(fact: {}) {
    return JSON.stringify(fact)
  }
}