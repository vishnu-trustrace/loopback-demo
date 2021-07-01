import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {CityDataSource} from '../datasources';
import {City, CityRelations, State} from '../models';
import {StateRepository} from './state.repository';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {

  public readonly stateId: BelongsToAccessor<State, typeof City.prototype.id>;

  constructor(
    @inject('datasources.city') dataSource: CityDataSource, @repository.getter('StateRepository') protected stateRepositoryGetter: Getter<StateRepository>,
  ) {
    super(City, dataSource);
    this.stateId = this.createBelongsToAccessorFor('stateId', stateRepositoryGetter,);
    this.registerInclusionResolver('stateId', this.stateId.inclusionResolver);
  }
}
