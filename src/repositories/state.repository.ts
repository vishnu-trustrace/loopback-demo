import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {StateDataSource} from '../datasources';
import {State, StateRelations, Country, City} from '../models';
import {CountryRepository} from './country.repository';
import {CityRepository} from './city.repository';

export class StateRepository extends DefaultCrudRepository<
  State,
  typeof State.prototype.id,
  StateRelations
> {

  public readonly countryId: BelongsToAccessor<Country, typeof State.prototype.id>;

  public readonly cities: HasManyRepositoryFactory<City, typeof State.prototype.id>;

  constructor(
    @inject('datasources.state') dataSource: StateDataSource, @repository.getter('CountryRepository') protected countryRepositoryGetter: Getter<CountryRepository>, @repository.getter('CityRepository') protected cityRepositoryGetter: Getter<CityRepository>,
  ) {
    super(State, dataSource);
    this.cities = this.createHasManyRepositoryFactoryFor('cities', cityRepositoryGetter,);
    this.registerInclusionResolver('cities', this.cities.inclusionResolver);
    this.countryId = this.createBelongsToAccessorFor('countryId', countryRepositoryGetter,);
    this.registerInclusionResolver('countryId', this.countryId.inclusionResolver);
  }
}
