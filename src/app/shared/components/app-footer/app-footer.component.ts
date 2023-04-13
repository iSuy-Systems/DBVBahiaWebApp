import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <div style="background-color: #fff; border-top: 1px solid #ddd; position: relative; z-index: 10; font-size: 11px; display: block !important;">
    <div class="conteiner">
      <div class="row-fluid">
        <div class="span9 span12" style="text-align: center; min-height: 20px; width: 100%;">
          <span> © Todos os direitos reservados. {{ year }} </span>
          <br>
        <label>
        <a href="mailto:contato@dbvbahia.com">contato@dbvbahia.com</a> - <a
          href="mailto:suporte@dbvbahia.com">suporte@dbvbahia.com</a>
        </label>
        </div>
      </div>
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
