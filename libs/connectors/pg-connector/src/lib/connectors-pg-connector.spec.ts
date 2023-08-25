import { connectorsPgConnector } from './connectors-pg-connector';

describe('connectorsPgConnector', () => {
  it('should work', () => {
    expect(connectorsPgConnector()).toEqual('connectors-pg-connector');
  });
});
