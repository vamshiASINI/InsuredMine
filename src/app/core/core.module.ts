
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { HttpService } from './../Services/http.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AuthService } from '../Services/auth.service';

import 'hammerjs';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth-interceptor.service';;
import { AuthGuard } from '../core/guards/auth-guard.module';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.module';

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule,
        HttpClientModule,
    ],
    declarations: [
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        BsDropdownModule,
        AccordionModule,
    ],
    providers: [
        AuthGuard,
        CanDeactivateGuard,
        AuthService,
        HttpService,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }
