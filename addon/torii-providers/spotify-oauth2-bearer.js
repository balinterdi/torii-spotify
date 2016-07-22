import OAuth2Bearer from 'torii/providers/oauth2-bearer';
import { configurable } from 'torii/configuration';

export default OAuth2Bearer.extend({
  name:    'spotify',
  baseUrl: 'https://accounts.spotify.com/authorize',

  // additional params that this provider requires
  optionalUrlParams: ['scope', 'request_visible_actions'],

  requestVisibleActions: configurable('requestVisibleActions', ''),

  responseParams: ['access_token'],

  scope: configurable('scope', 'user-read-email'),
  redirectUri: configurable('redirectUri', 'http://localhost:4200'),

});
