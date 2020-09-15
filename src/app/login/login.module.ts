import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { SignComponent } from './sign/sign.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [SignComponent, ModalComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule]
})
export class LoginModule {}
