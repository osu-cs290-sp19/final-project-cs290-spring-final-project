(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['coverTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header>\n\n  <h1 class=\"webpage-title\">Cover Letter Template</h1>\n\n  <nav class=\"navbar\">\n      <button type=\"button\" id=\"create-resume-button\">"
    + alias4(((helper = (helper = helpers.initialMessage || (depth0 != null ? depth0.initialMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initialMessage","hash":{},"data":data}) : helper)))
    + "</button>\n  </nav>\n\n\n</header>\n\n<main>\n\n  <div class=\"intro-container\">\n\n      <div class=\"intro-text text-box\">\n        <h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n      </div>\n\n      <div class=\"intro-text text-box\">\n        <h2>"
    + alias4(((helper = (helper = helpers.streetAddress || (depth0 != null ? depth0.streetAddress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"streetAddress","hash":{},"data":data}) : helper)))
    + ",  "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ",  "
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "  "
    + alias4(((helper = (helper = helpers.zipCode || (depth0 != null ? depth0.zipCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"zipCode","hash":{},"data":data}) : helper)))
    + " </h2>\n      </div>\n\n      <div class=\"intro-text text-box\">\n        <h2>C : "
    + alias4(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + " || "
    + alias4(((helper = (helper = helpers.emailAddress || (depth0 != null ? depth0.emailAddress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"emailAddress","hash":{},"data":data}) : helper)))
    + "</h2>\n      </div>\n\n  </div>\n\n  <div class=\"line-break\">\n  </div>\n\n\n  <article class=\"org-container\">\n    <div class=\"org-text text-box\">\n      <h2>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</h2>\n    </div>\n\n    <div class=\"org-text text-box\">\n      <h2>"
    + alias4(((helper = (helper = helpers.recipientName || (depth0 != null ? depth0.recipientName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipientName","hash":{},"data":data}) : helper)))
    + "</h2>\n    </div>\n\n    <div class=\"org-text text-box\">\n      <h2>"
    + alias4(((helper = (helper = helpers.recipientTitle || (depth0 != null ? depth0.recipientTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipientTitle","hash":{},"data":data}) : helper)))
    + "</h2>\n    </div>\n\n    <div class=\"org-text text-box\">\n      <h2>"
    + alias4(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</h2>\n    </div>\n\n    <div class=\"org-text text-box\">\n      <h2>"
    + alias4(((helper = (helper = helpers.recipientAddress || (depth0 != null ? depth0.recipientAddress : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipientAddress","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.recipientCity || (depth0 != null ? depth0.recipientCity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipientCity","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.recipientState || (depth0 != null ? depth0.recipientState : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipientState","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.recipientZipCode || (depth0 != null ? depth0.recipientZipCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipientZipCode","hash":{},"data":data}) : helper)))
    + "</h2>\n    </div>\n\n    <div class=\"org-text end-text text-box\">\n      <h2>Dear "
    + alias4(((helper = (helper = helpers.recipientName || (depth0 != null ? depth0.recipientName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipientName","hash":{},"data":data}) : helper)))
    + ",</h2>\n    </div>\n\n  <div class=\"summary-container\">\n    <p>"
    + alias4(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data}) : helper)))
    + "</p>\n  </div>\n\n  <div class=\"ending-container\" >\n    <div>\n      <h2>Sincerely,</h2>\n    </div>\n\n    <div>\n      <h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n    </div>\n  </div>\n\n</main>\n";
},"useData":true});
})();