import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <div class="layout-footer text-center">
      <div class="card clearfix" style="font-size: 11px;">
        <span> Copyright © {{ year }} </span>
        <label>
        <a href="mailto:contato@dbvbahia.com">contato@dbvbahia.com</a> - <a
          href="mailto:suporte@dbvbahia.com">suporte@dbvbahia.com</a>
        </label>
      </div>
    </div>
  `,
})
export class AppFooterComponent {
  year: number;
  constructor() {
    this.year = new Date().getFullYear();
  }
}
