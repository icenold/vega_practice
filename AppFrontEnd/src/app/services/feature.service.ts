import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class FeatureService {

  constructor(private http:Http) { }
  getFeatures(){
    return this.http.get('api/features')
      .map(r=>r.json());
  }

}
