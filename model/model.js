export class Model{
    table;
    form;
    title;
    template;
    fragment;

    constructor(){
        this.table = document.querySelector(".crud-table");
        this.form = document.querySelector(".crud-form");
        this.title = document.querySelector(".crud-title");
        this.template = document.getElementById("crud-template");
        this.fragment = document.querySelector();

    }

    get table() {
        return this.table;
      }
      get form() {
        return this.form;
      }
      get title() {
        return this.title;
      }
      get template() {
        return this.template;
      }
      get fragment() {
        return this.fragment;
      }
}