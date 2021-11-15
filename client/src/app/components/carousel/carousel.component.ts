import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import SwiperCore, {
  Swiper,
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import axios from 'axios';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface CatFact {
  fact: string;
  length: number;
  path: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  catName!: string;
  activeIndex!: number;
  facts: CatFact[] = [];
  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    // pagination: { clickable: true },
    mousewheel: true,
  };
  endPoint =
    process.env['NODE_ENV'] === 'production'
      ? '/api'
      : 'http://localhost:4000/api';
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.getFacts();
  }
  createRandomCatImage() {
    let numBetween10To99 = Math.floor(Math.random() * 90) + 10;
    return `https://source.unsplash.com/4${numBetween10To99}x2${numBetween10To99}/?cat,cats,kitten`;
  }
  getFacts(page: number = 1) {
    this.api.getFacts(page).subscribe((res: any) => {
      let factsList = res.data.map(
        (catFact: { fact: string; length: number }, i: number) => ({
          factNumber: i++,
          fact: catFact.fact,
          length: catFact.length,
          path: this.createRandomCatImage(),
        })
      );
      this.facts.push(...factsList);
    });
  }
  onSwiper(swiper: any) {
    console.log(swiper.activeIndex);
    if (swiper.activeIndex % 10 === 0) {
      console.log('fetch 10 more images');
      this.getFacts(swiper.activeIndex / 10 + 1);
    }
  }
  onSlideChange() {
    console.log('slide change');
  }
  // showFact(fact: {}) {
  //   return JSON.stringify(fact);
  // }
  async addToFavorite(fact: CatFact) {
    try {
      const { data } = await axios.post(`${this.endPoint}/favorites`, { fact });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
