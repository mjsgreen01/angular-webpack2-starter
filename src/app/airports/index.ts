import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JgAirportAutocompleteModule } from 'common/components/airport-autocomplete/index';

import { AirportsContainer } from './airports.container';

@NgModule({
  declarations: [
    AirportsContainer
  ],
  imports: [
    CommonModule,
    JgAirportAutocompleteModule
  ]
})
export class JgAirportsModule {}
