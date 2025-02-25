import {
  Component,
  computed,
  input,
  Input,
  Output,
  EventEmitter,
  output,
  
} from '@angular/core';

import { type User } from './user.model';


// type User = {
//   id : string ;  
//   avatar : string ;  
//   name : string ;
// } // can be used but we want to be more efficient 


// import { DUMMY_USERS } from '../dummy-users';

// const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [ ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomNumber]);

  // imageURL = computed(() => 'assets/' + this.selectedUser().avatar);

  @Input({required: true}) user !: User ;
  @Input({required : true }) isSelected !: boolean;

  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;

  @Output() select = new EventEmitter<string>();

  // select = output<string>(); newer approach

  // avatar = input.required<string>();
  // name = input.required<string>();
  //properties of classes !! means value will be set from outside
  ImagePath = computed(() => {
    return 'assets/' + this.user.avatar;
  });

  // get ImagePath() {
  //   return 'assets/' + this.avatar();
  // }

  onUserClick() {
    this.select.emit(this.user.id);

    //   console.log('hello');
    //   //   let newrandomNumber;
    //   //   let currentIndex = DUMMY_USERS.indexOf(this.selectedUser());
    //   //   do {
    //   //     newrandomNumber = Math.floor(Math.random() * DUMMY_USERS.length);
    //   //   } while (newrandomNumber === currentIndex);
    //   //   this.selectedUser.set(DUMMY_USERS[newrandomNumber]);
    //   //   console.log(this.selectedUser);
    //   //
  }
  // }
}
