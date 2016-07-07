import { provideRouter, RouterConfig } from '@angular/router';
import { MessagingAreaComponent, LoginComponent } from './shared';

export const routes: RouterConfig = [
    {
        path: 'chat',
        component: MessagingAreaComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'login',
    }
]

export const APP_ROUTER_PROVIDER = [
    provideRouter(routes)
]