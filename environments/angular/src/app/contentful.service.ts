import { Injectable } from '@angular/core';
import { createClient } from 'contentful';

const CONFIG = {
  space: `k8iqpp6u0ior`,
  accessToken: `hO_7N0bLaCJFbu5nL3QVekwNeB_TNtg6tOCB_9qzKUw`,
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  constructor() {}

  getEntries(query?: object): Promise<string> {
    return this.cdaClient
      .getEntries()
      .then(() => '✅ Success!')
      .catch((err) => `🚫 Error: ${err.message}`);
  }
}
