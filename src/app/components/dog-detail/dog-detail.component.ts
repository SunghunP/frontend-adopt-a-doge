import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Dog } from 'src/app/models/dog';
import { DogsService } from 'src/app/services/dogs.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  dog: Dog | undefined;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dogService: DogsService,
    private location: Location,
  ) { }

  id: string = this.route.snapshot.params.id;

  ngOnInit(): void {
    this.getDog();
  }
  
  getDog(): void {
    this.dogService.getDog(this.id)
    .subscribe(dog => {
      this.dog = dog
    })
  }
  navigateToDog(): void {
    this.router.navigateByUrl(`/dogs/${this.id}`)
  }

  navigateToDogs(): void {
    this.router.navigateByUrl('/dogs')
  }

  save(): void {
    if (this.dog) {
      this.dogService.updateDog(this.id, this.dog)
        .subscribe()
      alert(`${this.dog.name} has been updated!`)
      this.navigateToDog()
      window.location.reload()
    }
  }

  delete(): void {
    if (confirm(`Are you sure to delete ${this.dog?.name}?`) == true) {
      this.dogService.deleteDog(this.id)
      .subscribe()
      this.navigateToDogs()
    }
  }
}
