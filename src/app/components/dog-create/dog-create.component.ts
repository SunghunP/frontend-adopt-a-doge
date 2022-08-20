import { Component, OnInit, NgZone } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-dog-create',
  templateUrl: './dog-create.component.html',
  styleUrls: ['./dog-create.component.css']
})

export class DogCreateComponent implements OnInit {
  submitted = false
  adopted = [true, false]
  dogForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    breed: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
    adopted: new FormControl(this.adopted[1], [Validators.required]),
  });

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private dogService: DogsService,
  ) {

  }

  ngOnInit(): void {
  }

  get myForm() {
    return this.dogForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.dogForm.valid) {
      return false
    } else {
      return this.dogService.createDog(this.dogForm.value).subscribe({
        complete: () => {
          console.log('Dog created!'),
          this.ngZone.run(
            () => this.router.navigateByUrl('/dogs')
          )
        }
      })
    }
  }

}
