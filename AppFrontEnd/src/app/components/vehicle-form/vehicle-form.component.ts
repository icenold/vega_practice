import { Component, OnInit } from '@angular/core';
import { MakeService } from '../../services/make.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  makes: Array<any>;
  models: Array<any>;
  vehicle:any = {};

  constructor(private makeService: MakeService) { }

  ngOnInit() {
    this.makeService.getMakes().subscribe(makes => {
      this.makes = makes;
      console.log(makes);
    });
  }

  onMakeChange(){
    var selectedMake = this.makes.find(m=>m.id == this.vehicle.make);
    this.models = selectedMake? selectedMake.models: [];
  }

}
