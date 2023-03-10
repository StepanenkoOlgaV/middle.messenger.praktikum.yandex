declare module '*.hbs' {
    import { TemplateDelegate } from 'handlebars';

    declare const template: TemplateDelegate;
    export default template;
}

declare module 'handlebars/dist/handlebars.runtime' {
    import Handlebars from 'handlebars';

    declare const handlebars: Handlebars;
    export default handlebars;
}
