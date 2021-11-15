import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatFact } from '../../types';
import axios from 'axios';
import SwiperCore, {
  Swiper,
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import { log } from 'console';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() facts: CatFact[] = [];
  loading = true;
  currentCardIndex: number = 0;
  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    mousewheel: true,
  };
  endPoint =
    process.env['NODE_ENV'] === 'production'
      ? '/api'
      : 'http://localhost:4000/api';
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  openSnackBar(str: string, colorClass: string) {
    this._snackBar.open(str, '', {
      duration: 2000,
      panelClass: ['mat-toolbar', colorClass],
    });
  }

  onSwiper(swiper: any) {
    this.currentCardIndex = swiper.activeIndex;
  }
  onSlideChange() {
    console.log('slide change');
    console.log(this.currentCardIndex);
  }
  onImageLoad() {
    this.loading = false;
  }
  async addToFavorite(fact: CatFact) {
    try {
      const { data } = await axios.post(`${this.endPoint}/favorites`, { fact });
      if (data.success) this.openSnackBar(data.success, 'mat-primary');
      if (data.warn) this.openSnackBar(data.warn, 'mat-warn');
      if (data.error) this.openSnackBar(data.error, 'mat-accent');
    } catch (error) {
      console.log(error);
    }
  }
}
