import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sample } from './sample';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SampleService],
})
export class AppComponent {
  constructor(public sampleServices: SampleService) {}

  ngOnInit() {
    this.getSample();
  }

  getSample() {
    this.sampleServices.getSamples().subscribe((res) => {
      this.sampleServices.sample = res as Sample[];
    });
  }

  postSample(sample: Sample) {
    this.sampleServices.postSamples(sample).subscribe((res) => {
      this.getSample();
      this.sampleServices.selectedSample = new Sample();
    });
  }
}
