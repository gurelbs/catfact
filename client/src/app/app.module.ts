import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
// material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DragScrollModule } from 'ngx-drag-scroll';
import { SwiperModule } from 'swiper/angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

//  components
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FavoriteComponent } from './components/pages/favorite/favorite.component';
import { MainComponent } from './components/pages/main/main.component';
import { DialogComponent } from './components/dialog/dialog.component';
// For MDB Angular Free
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    HomepageComponent,
    FavoriteComponent,
    MainComponent,
    DialogComponent,
  ],
  imports: [
    // App
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    // Material
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    NgxSkeletonLoaderModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    // Carousel
    DragScrollModule,
    SwiperModule,
    // type effect
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
