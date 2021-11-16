import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CatBreeds } from '../../../types';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css'],
})
export class BreedsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 5,
    mousewheel: true,
  };
  constructor(public api: ApiService) {}
  breeds: CatBreeds[] = [];
  ngOnInit(): void {
    this.getCatsBreeds();
  }

  getCatsBreeds() {
    this.api.getBreeds().subscribe(
      (data: any) => {
        this.breeds = data.answer;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
