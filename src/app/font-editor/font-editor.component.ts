import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-editor',
  templateUrl: './font-editor.component.html',
  styleUrls: ['./font-editor.component.css']
})
export class FontEditorComponent implements OnInit {
  fontSize = 14;

  onChange(value) {
    this.fontSize = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
