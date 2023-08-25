import knex, { Knex } from 'knex';

export class ConnectionManager {
  readonly connectionPools = new Map<number, Knex>();

  constructor() {}

  getConnection(userId: number) {
    if (this.connectionPools.has(userId))
      return this.connectionPools.get(userId);

    // Fetch database URI for a user.
    const connection = knex({
      client: 'pg',
      connection: '',
      pool: { min: 2, max: 10 },
    });

    this.connectionPools.set(userId, connection);
  }

  closeConnection(userId: number) {
    if (this.connectionPools.has(userId)) {
      this.connectionPools.get(userId).destroy();
      this.connectionPools.delete(userId);
    }
  }
}
