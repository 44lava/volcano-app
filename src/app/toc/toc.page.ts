import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | Statement",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Notes.0",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | Notes.1",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | Notes.2",
      url: "/chapter4"
    },
    {
      title: "Chapter 5 | Notes.3",
      url: "/chapter5"
    },
    {
      title: "Chapter 6 | Closing Statement",
      url: "/chapter6"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
