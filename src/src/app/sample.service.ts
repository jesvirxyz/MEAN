import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Sample } from './sample';
@Injectable({
  providedIn: 'root',
})
export class SampleService {
  selectedSample: Sample;
  sample: Sample[];
  constructor(private http: HttpClient) {
    this.selectedSample = new Sample();
  }
  getSamples() {
    return this.http.get('http://localhost:3000');
  }

  postSamples(sample: Sample) {
    return this.http.post('http://localhost:3000', sample);
  }
}
