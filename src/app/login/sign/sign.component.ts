import { ModalService } from './../modal/modal.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  signInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private modalService: ModalService) {}
  isModalOpen$: Observable<boolean>;

  ngOnInit(): void {
    this.isModalOpen$ = this.modalService.modalState();
  }

  openModal(): void {
    if (this.signInForm.valid) {
      this.clearInputs();
      this.modalService.openModal();
    }
  }
  private clearInputs(): void {
    this.signInForm.reset();
  }
}
