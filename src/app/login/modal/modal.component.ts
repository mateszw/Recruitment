import { Observable } from 'rxjs';
import { ModalService } from './modal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isModalOpen$: Observable<boolean>;
  loggedInText: boolean = false;

  constructor(private ModalService: ModalService, private Router: Router) {}

  ngOnInit(): void {
    this.isModalOpen$ = this.ModalService.modalState();
  }

  loggedIn(): void {
    this.loggedInText = true;
    setTimeout(() => {
      this.loggedInText = false;
      this.ModalService.closeModal();
      this.Router.navigateByUrl('');
    }, 1500);
  }

  logInDenied(): void {
    this.ModalService.closeModal();
  }
}
