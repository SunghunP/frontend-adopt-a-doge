import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogsService } from './services/dogs.service';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';
import { DogCreateComponent } from './components/dog-create/dog-create.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogsComponent,
    HeaderComponent,
    FooterComponent,
    DogDetailComponent,
    DogCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
