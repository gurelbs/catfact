import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatFact, CatBreeds } from '../../types';

import axios from 'axios';
import SwiperCore, {
  Swiper,
  SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import { favoriteUrl } from '../../api';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() items: CatFact[] = [];
  favoriteIconColor = '';
  shareOpen = false;
  loading = true;
  screenWidth: number = window.innerWidth;
  currentCardIndex: number = 0;
  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 5,
    mousewheel: true,
  };

  constructor(private _snackBar: MatSnackBar) {}

  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    // this.screenWidth = window.innerWidth < 600 ? 1 : 2;
    // this.config.slidesPerView = this.screenWidth;
  }
  openSnackBar(str: string, colorClass: string) {
    this._snackBar.open(str, '', {
      duration: 2000,
      panelClass: ['mat-toolbar', colorClass],
    });
  }

  onSwiper(swiper: any) {
    this.currentCardIndex = swiper.activeIndex;
  }
  onImageLoad() {
    this.loading = false;
  }
  share(fact: CatFact) {
    this.shareOpen = true;
    const url = `https://www.whatsapp.com/send?text=${fact.fact}`;
    window.open(url, '_blank');
  }
  factInFavorites(fact: string) {
    const user = JSON.parse(localStorage.getItem('user') || '');
    const { favoritesFacts } = user;
    if (!user || !favoritesFacts) return false;
    return favoritesFacts.find((f: CatFact) => f.fact === fact) ? true : false;
  }

  async addToFavorite(fact: CatFact) {
    const user = JSON.parse(localStorage.getItem('user') || '');
    try {
      const { data } = await axios.post(favoriteUrl, {
        factDetails: fact,
        user,
      });
      console.log(data);
      if (data.success) this.openSnackBar(data.success, 'mat-primary');
      if (data.warn) this.openSnackBar(data.warn, 'mat-warn');
      if (data.error) this.openSnackBar(data.error, 'mat-accent');
    } catch (error) {
      console.log(error);
    }
  }
}
