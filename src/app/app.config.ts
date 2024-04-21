import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const socketConfig: SocketIoConfig = {url: 'http://localhost:4000', options: {}}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(SocketIoModule.forRoot(socketConfig))]
};
