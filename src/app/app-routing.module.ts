import {NgModule, Component} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AccountComponent } from './account/account.component';
import { VerificationComponent } from './verification/verification.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { UserGroupConfigurationComponent } from './user-group-configuration/user-group-configuration.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes=[
    {path:'',component:LoginFormComponent},
    {path:'forgotpassword',component: ForgotPasswordComponent},
    {path:'account',component:AccountComponent,children:[
        {path:'accountinfomation',component:AccountInformationComponent},
        {path:'changepassword',component:ChangePasswordComponent},
    ]},
    {path:'verification',component:VerificationComponent},
    {path:'newpassword',component:NewpasswordComponent},
    {path:'usergroupconfiguration',component:UserGroupConfigurationComponent},
    
    
    
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponent=[
    LoginFormComponent,
    ForgotPasswordComponent,
    AccountComponent,
    VerificationComponent,
    NewpasswordComponent,
    AccountInformationComponent,
    UserGroupConfigurationComponent,
    ChangePasswordComponent,
    
    

]
