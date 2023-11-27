import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saveFormData() {
    const form = document.getElementById('myForm') as HTMLFormElement;
    const formData = new FormData(form);

    // Accessing form data values and constructing an object
    const formValues: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formValues[key] = value as string;
    });

    // Logging form data to the console
    console.log('Form Data:', formValues);
  }
}
