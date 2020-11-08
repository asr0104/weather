import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public isShow = false;
  public isData = false;
  public error = false;

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  // tslint:disable-next-line:typedef
  sendToAPI(formValues) {
    const checkedData = this.apiService
      .getWeather(formValues.location).pipe(map(data => {
        if (data === null) { return throwError('null data'); }
        return data;
      }));
    checkedData.subscribe(
      (data) => {
        this.error = false;
        this.weatherData = data;
        this.displayData();
        this.toggleDisplay();
      },
      (err) => {
        this.error = true;
      }
    );
  }

  // tslint:disable-next-line:typedef
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  // tslint:disable-next-line:typedef
  displayData() {
    this.isData = true;
  }
}
