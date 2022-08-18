import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { HomeComponent } from './components/home/home.component';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'dogs/:id', component: DogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }