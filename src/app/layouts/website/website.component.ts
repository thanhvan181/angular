// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-website',
//   templateUrl: './website.component.html',
//   styleUrls: ['./website.component.css']
// })
// export class WebsiteComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
})
export class WebsiteComponent implements OnInit {
  menuHandler: boolean = true;
    mdOptions: boolean = true;
    search: boolean = true;
    menuHandlerBtn() {
        this.menuHandler = !this.menuHandler;
    }
    mdOptionsToggle() {
        this.mdOptions = !this.mdOptions;
    }
    searchToggle() {
        this.search = !this.search;
    }
    constructor() {}

    ngOnInit(): void {}
}
