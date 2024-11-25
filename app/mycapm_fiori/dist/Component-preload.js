//@ui5-bundle mycapmfiori/Component-preload.js
sap.ui.require.preload({
	"mycapmfiori/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("mycapmfiori.Component",{metadata:{manifest:"json"}})});
},
	"mycapmfiori/i18n/i18n.properties":'# This is the resource bundle for mycapmfiori\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"mycapmfiori/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"mycapmfiori","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.4","toolsId":"38363814-d3b1-427f-b15a-6f07075cffbb"},"dataSources":{"mainService":{"uri":"odata/v4/CatalogService/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.130.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"mycapmfiori.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"purchaseorderList","target":"purchaseorderList"},{"pattern":"purchaseorder({key}):?query:","name":"purchaseorderObjectPage","target":"purchaseorderObjectPage"},{"pattern":"purchaseorder({key})/Items({key2}):?query:","name":"poitemsObjectPage","target":"poitemsObjectPage"}],"targets":{"purchaseorderList":{"type":"Component","id":"purchaseorderList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/purchaseorder","variantManagement":"Page","navigation":{"purchaseorder":{"detail":{"route":"purchaseorderObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"purchaseorderObjectPage":{"type":"Component","id":"purchaseorderObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/purchaseorder","navigation":{"Items":{"detail":{"route":"poitemsObjectPage"}}}}}},"poitemsObjectPage":{"type":"Component","id":"poitemsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/purchaseorder/Items"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"MyCAPMApprouter"}}'
});
//# sourceMappingURL=Component-preload.js.map