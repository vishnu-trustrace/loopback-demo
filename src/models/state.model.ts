import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Country} from './country.model';
import {City} from './city.model';

@model()
export class State extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;
  @property({
    type: 'string',
  })
  country_code?: string;

  @property({
    type: 'string',
    required: true,
  })
  state_code: string;

  @property({
    type: 'string',
    required: true,
  })
  latitude: string;

  @property({
    type: 'string',
    required: true,
  })
  longitude: string;

  @belongsTo(() => Country, {name: 'countryId'})
  country_id: number;

  @hasMany(() => City, {keyTo: 'state_id'})
  cities: City[];

  constructor(data?: Partial<State>) {
    super(data);
  }
}

export interface StateRelations {
  // describe navigational properties here
}

export type StateWithRelations = State & StateRelations;
