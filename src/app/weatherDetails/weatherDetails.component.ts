import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];

  exist: boolean;
  town: string = '';
  temperature: string = '';
  wind: string = '';
  humidity: string = '';
  ngOnInit() {

  }

  onTownChange(searchValue: string): void {
    console.log(searchValue);
    // let string = this.celsius;
    // let num = parseInt(string) * 9 / 5 + 32;
    // this.fahrenheit = num.toString();
    const filteredResult = this.weatherData.find((e) => e.name.toLowerCase() === searchValue.toLowerCase());
    if (filteredResult) this.exist = true; else this.exist = false;
    if (this.exist) {
      this.temperature = filteredResult.temperature;
      this.humidity = filteredResult.humidity;
      this.wind = filteredResult.wind;
    }
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}