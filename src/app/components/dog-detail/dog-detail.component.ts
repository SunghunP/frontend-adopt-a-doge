import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dog } from 'src/app/models/dog';
import { DogsService } from 'src/app/services/dogs.service';


@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  dog: Dog | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private dogService: DogsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDog();
  }

  getDog(): void {
    const id = this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.dogService.getDog(id)
          .subscribe({
            next: (dog) => {
              this.dog = dog
            }
          })
        }
      }
    })
  }
}
