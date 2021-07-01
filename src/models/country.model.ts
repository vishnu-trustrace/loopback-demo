import {Entity, model, property, hasMany} from '@loopback/repository';
import {State} from './state.model';

@model()
export class Country extends Entity {
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
    type: 'string',
    required: true,
  })
  iso3: string;

  @property({
    type: 'string',
    required: true,
  })
  iso2: string;

  @property({
    type: 'string',
  })
  phone_code?: string;

  @property({
    type: 'string',
    required: true,
  })
  capital: string;

  @property({
    type: 'string',
  })
  currency?: string;

  @property({
    type: 'string',
  })
  latitude?: string;

  @property({
    type: 'string',
  })
  longitude?: string;

  @property({
    type: 'string',
  })
  emojiU?: string;

  @property({
    type: 'string',
  })
  region?: string;

  @property({
    type: 'object',
  })
  translation?: object;

  @hasMany(() => State, {keyTo: 'country_id'})
  states: State[];

  constructor(data?: Partial<Country>) {
    super(data);
  }
}

export interface CountryRelations {
  // describe navigational properties here
}

export type CountryWithRelations = Country & CountryRelations;
