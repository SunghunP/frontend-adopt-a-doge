import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Dog } from 'src/app/models/dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogsService: DogsService) {
    this.getDogs()
  }

  ngOnInit(): void {
    this.getDogs();
  }
  
  getDogs(): void {
    this.dogsService.getDogs()
      .subscribe(dogs => {
        this.dogs = dogs
      });
  }

}
