import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  permiteNewsLetter = false;
  textoNewsletter = "Você pode receber os melhores descontos!";

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.permiteNewsLetter = true;

    }, 5000);
  }

}
