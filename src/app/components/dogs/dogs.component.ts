import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Dogs } from 'src/app/models/dogs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: Dogs[] = [];

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.dogsService.getDogs()
    .subscribe(dogs => this.dogs = dogs);
  }

}
