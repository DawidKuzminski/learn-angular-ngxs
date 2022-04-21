import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { RemoveTutorial } from '../actions/tutorial.actions';
import { Tutorial } from '../models/tutorial.model';
import { TutorialState } from '../state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
@Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]> | undefined

  constructor(private store: Store) {
   }

   deleteTutorial(name: string) {
     this.store.dispatch(new RemoveTutorial(name));
   }

  ngOnInit(): void {
  }

}
