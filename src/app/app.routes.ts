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
        component: LoginComponent
    }
]

export const APP_ROUTER_PROVIDER = [
    provideRouter(routes)
]