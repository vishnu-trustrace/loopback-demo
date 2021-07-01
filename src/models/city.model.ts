import {Entity, model, property, belongsTo} from '@loopback/repository';
import {State} from './state.model';

@model()
export class City extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  country_id?: number;

  @property({
    type: 'string',
  })
  country_code?: string;
  @property({
    type: 'string',
  })
  state_code?: string;

  @property({
    type: 'string',
  })
  latitude?: string;

  @property({
    type: 'string',
  })
  longitude?: string;

  @belongsTo(() => State, {name: 'stateId'})
  state_id: number;

  constructor(data?: Partial<City>) {
    super(data);
  }
}

export interface CityRelations {
  // describe navigational properties here
}

export type CityWithRelations = City & CityRelations;
