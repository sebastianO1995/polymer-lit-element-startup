define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.Headers=Headers;_exports.Request=Request;_exports.Response=Response;_exports.fetch=fetch;_exports.insertNodeIntoTemplate=insertNodeIntoTemplate;_exports.property$1=_exports.property=property;_exports.query$1=_exports.query=query;_exports.queryAll$1=_exports.queryAll=queryAll;_exports.removeNodesFromTemplate=removeNodesFromTemplate;_exports.templateFactory$1=_exports.templateFactory=templateFactory;_exports.supportsAdoptingStyleSheets=_exports.reparentNodes$1=_exports.reparentNodes=_exports.render$1=_exports.render$2=_exports.render=_exports.removeNodes$1=_exports.removeNodes=_exports.parts$1=_exports.parts=_exports.nothing$1=_exports.nothing=_exports.notEqual$1=_exports.notEqual=_exports.nodeMarker=_exports.noChange$1=_exports.noChange=_exports.markerRegex=_exports.marker=_exports.lastAttributeNameRegex=_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=_exports.isPrimitive$1=_exports.isPrimitive=_exports.isIterable$1=_exports.isIterable=_exports.isDirective$1=_exports.isDirective=_exports.isCEPolyfill=_exports.html$2=_exports.html$1=_exports.html=_exports.eventOptions$1=_exports.eventOptions=_exports.directive$1=_exports.directive=_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=_exports.defaultConverter$1=_exports.defaultConverter=_exports.customElement$1=_exports.customElement=_exports.css$1=_exports.css=_exports.createMarker$1=_exports.createMarker=_exports.boundAttributeSuffix=_exports.UpdatingElement$1=_exports.UpdatingElement=_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=_exports.TemplateInstance$1=_exports.TemplateInstance=_exports.Template$1=_exports.Template=_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=_exports.PropertyPart$1=_exports.PropertyPart=_exports.PropertyCommitter$1=_exports.PropertyCommitter=_exports.NodePart$1=_exports.NodePart=_exports.MainApplication=_exports.LitElement=_exports.EventPart$1=_exports.EventPart=_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=_exports.DOMException=_exports.CSSResult$1=_exports.CSSResult=_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=_exports.AttributePart$1=_exports.AttributePart=_exports.AttributeCommitter$1=_exports.AttributeCommitter=_exports.$updatingElement=_exports.$templateResult=_exports.$templateInstance=_exports.$templateFactory=_exports.$template=_exports.$shadyRender=_exports.$render=_exports.$parts=_exports.$part=_exports.$modifyTemplate=_exports.$mainApplication=_exports.$litHtml=_exports.$litElement=_exports.$fetch=_exports.$dom=_exports.$directive=_exports.$defaultTemplateProcessor=_exports.$decorators=_exports.$cssTag=void 0;_exports.unsafeCSS$1=_exports.unsafeCSS=_exports.templateCaches$1=_exports.templateCaches=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.supportsAdoptingStyleSheets$1=void 0;function _templateObject_a99056e09b6211e9a9a50147b18125ce(){var data=babelHelpers.taggedTemplateLiteral(["\n      <h1>This is a polymer lit-element project</h1>\n      <section>\n        <div>\n          <my-title sub-text=\"I am a prop being passed down from the main app\" .myData=\"","\"></my-title>\n        <div>\n      </section>\n    "]);_templateObject_a99056e09b6211e9a9a50147b18125ce=function _templateObject_a99056e09b6211e9a9a50147b18125ce(){return data};return data}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var supportsAdoptingStyleSheets="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets;var constructionToken=Symbol(),CSSResult=/*#__PURE__*/function(){function CSSResult(cssText,safeToken){babelHelpers.classCallCheck(this,CSSResult);if(safeToken!==constructionToken){throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")}this.cssText=cssText}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
babelHelpers.createClass(CSSResult,[{key:"toString",value:function toString(){return this.cssText}},{key:"styleSheet",get:function get(){if(this._styleSheet===void 0){// Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
// is constructable.
if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet;this._styleSheet.replaceSync(this.cssText)}else{this._styleSheet=null}}return this._styleSheet}}]);return CSSResult}();_exports.CSSResult$1=_exports.CSSResult=CSSResult;/**
   * Wrap a value for interpolation in a css tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */var unsafeCSS=function unsafeCSS(value){return new CSSResult(value+"",constructionToken)};_exports.unsafeCSS$1=_exports.unsafeCSS=unsafeCSS;var textFromCSSResult=function textFromCSSResult(value){if(babelHelpers.instanceof(value,CSSResult)){return value.cssText}else if("number"===typeof value){return value}else{throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))}},css=function css(strings){for(var _len=arguments.length,values=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++){values[_key-1]=arguments[_key]}var cssText=values.reduce(function(acc,v,idx){return acc+textFromCSSResult(v)+strings[idx+1]},strings[0]);return new CSSResult(cssText,constructionToken)};/**
    * Template tag which which can be used with LitElement's `style` property to
    * set element styles. For security reasons, only literal string values may be
    * used. To incorporate non-literal values `unsafeCSS` may be used inside a
    * template string part.
    */_exports.css$1=_exports.css=css;var cssTag={supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$cssTag=cssTag;var legacyCustomElement=function legacyCustomElement(tagName,clazz){window.customElements.define(tagName,clazz);// Cast as any because TS doesn't recognize the return type as being a
// subtype of the decorated class when clazz is typed as
// `Constructor<HTMLElement>` for some reason.
// `Constructor<HTMLElement>` is helpful to make sure the decorator is
// applied to elements however.
// tslint:disable-next-line:no-any
return clazz},standardCustomElement=function standardCustomElement(tagName,descriptor){var kind=descriptor.kind,elements=descriptor.elements;return{kind:kind,elements:elements,// This callback is called once the class is otherwise fully defined
finisher:function finisher(clazz){window.customElements.define(tagName,clazz)}}},customElement=function customElement(tagName){return function(classOrDescriptor){return"function"===typeof classOrDescriptor?legacyCustomElement(tagName,classOrDescriptor):standardCustomElement(tagName,classOrDescriptor)}};_exports.customElement$1=_exports.customElement=customElement;var standardProperty=function standardProperty(options,element){// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
if("method"===element.kind&&element.descriptor&&!("value"in element.descriptor)){return Object.assign({},element,{finisher:function finisher(clazz){clazz.createProperty(element.key,options)}})}else{// createProperty() takes care of defining the property, but we still
// must return some kind of descriptor, so return a descriptor for an
// unused prototype field. The finisher calls createProperty().
return{kind:"field",key:Symbol(),placement:"own",descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
initializer:function initializer(){if("function"===typeof element.initializer){this[element.key]=element.initializer.call(this)}},finisher:function finisher(clazz){clazz.createProperty(element.key,options)}}}},legacyProperty=function legacyProperty(options,proto,name){proto.constructor.createProperty(name,options)};/**
    * A property decorator which creates a LitElement property which reflects a
    * corresponding attribute value. A `PropertyDeclaration` may optionally be
    * supplied to configure property features.
    *
    * @ExportDecoratedItems
    */function property(options){// tslint:disable-next-line:no-any decorator
return function(protoOrDescriptor,name){return name!==void 0?legacyProperty(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}}/**
   * A property decorator that converts a class property into a getter that
   * executes a querySelector on the element's renderRoot.
   *
   * @ExportDecoratedItems
   */function query(selector){return function(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name){var descriptor={get:function get(){return this.renderRoot.querySelector(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}/**
   * A property decorator that converts a class property into a getter
   * that executes a querySelectorAll on the element's renderRoot.
   *
   * @ExportDecoratedItems
   */function queryAll(selector){return function(protoOrDescriptor,// tslint:disable-next-line:no-any decorator
name){var descriptor={get:function get(){return this.renderRoot.querySelectorAll(selector)},enumerable:!0,configurable:!0};return name!==void 0?legacyQuery(descriptor,protoOrDescriptor,name):standardQuery(descriptor,protoOrDescriptor)}}var legacyQuery=function legacyQuery(descriptor,proto,name){Object.defineProperty(proto,name,descriptor)},standardQuery=function standardQuery(descriptor,element){return{kind:"method",placement:"prototype",key:element.key,descriptor:descriptor}},standardEventOptions=function standardEventOptions(options,element){return Object.assign({},element,{finisher:function finisher(clazz){Object.assign(clazz.prototype[element.key],options)}})},legacyEventOptions=// tslint:disable-next-line:no-any legacy decorator
function legacyEventOptions(options,proto,name){Object.assign(proto[name],options)},eventOptions=function eventOptions(options){return(// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
function(protoOrDescriptor,name){return name!==void 0?legacyEventOptions(options,protoOrDescriptor,name):standardEventOptions(options,protoOrDescriptor)})};_exports.eventOptions$1=_exports.eventOptions=eventOptions;var decorators={customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
        * replaced at compile time by the munged name for object[property]. We cannot
        * alias this function, so we have to use a small shim that has the same
        * behavior when not compiling.
        */_exports.$decorators=decorators;window.JSCompiler_renameProperty=function(prop,_obj){return prop};var defaultConverter={toAttribute:function toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:// if the value is `null` or `undefined` pass this through
// to allow removing/no change behavior.
return null==value?value:JSON.stringify(value);}return value},fromAttribute:function fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:+value;case Object:case Array:return JSON.parse(value);}return value}};/**
    * Change function that returns true if `value` is different from `oldValue`.
    * This method is used as the default for a property's `hasChanged` function.
    */_exports.defaultConverter$1=_exports.defaultConverter=defaultConverter;var notEqual=function notEqual(value,old){// This ensures (old==NaN, value==NaN) always returns false
return old!==value&&(old===old||value===value)};_exports.notEqual$1=_exports.notEqual=notEqual;var defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},microtaskPromise=Promise.resolve(!0),STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING_TO_ATTRIBUTE=1<<3,STATE_IS_REFLECTING_TO_PROPERTY=1<<4,STATE_HAS_CONNECTED=1<<5,UpdatingElement=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(UpdatingElement,_HTMLElement);function UpdatingElement(){var _this;babelHelpers.classCallCheck(this,UpdatingElement);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(UpdatingElement).call(this));_this._updateState=0;_this._instanceProperties=void 0;_this._updatePromise=microtaskPromise;_this._hasConnectedResolver=void 0;/**
                                             * Map with keys for any properties that have changed since the last
                                             * update cycle with previous values.
                                             */_this._changedProperties=new Map;/**
                                          * Map with keys of properties that should be reflected when updated.
                                          */_this._reflectingProperties=void 0;_this.initialize();return _this}/**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */babelHelpers.createClass(UpdatingElement,[{key:"initialize",/**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */value:function initialize(){this._saveInstanceProperties();// ensures first update will be caught by an early access of
// `updateComplete`
this._requestUpdate()}/**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */},{key:"_saveInstanceProperties",value:function _saveInstanceProperties(){var _this2=this;// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this.constructor._classProperties.forEach(function(_v,p){if(_this2.hasOwnProperty(p)){var value=_this2[p];delete _this2[p];if(!_this2._instanceProperties){_this2._instanceProperties=new Map}_this2._instanceProperties.set(p,value)}})}/**
     * Applies previously saved instance properties.
     */},{key:"_applyInstanceProperties",value:function _applyInstanceProperties(){var _this3=this;// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
// tslint:disable-next-line:no-any
this._instanceProperties.forEach(function(v,p){return _this3[p]=v});this._instanceProperties=void 0}},{key:"connectedCallback",value:function connectedCallback(){this._updateState=this._updateState|STATE_HAS_CONNECTED;// Ensure first connection completes an update. Updates cannot complete
// before connection and if one is pending connection the
// `_hasConnectionResolver` will exist. If so, resolve it to complete the
// update, otherwise requestUpdate.
if(this._hasConnectedResolver){this._hasConnectedResolver();this._hasConnectedResolver=void 0}}/**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){}/**
                             * Synchronizes property values when attributes change.
                             */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}},{key:"_propertyToAttribute",value:function _propertyToAttribute(name,value){var options=2<arguments.length&&arguments[2]!==void 0?arguments[2]:defaultPropertyDeclaration,ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){var attrValue=ctor._propertyValueToAttribute(value,options);// an undefined value does not change the attribute.
if(attrValue===void 0){return}// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(null==attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}},{key:"_attributeToProperty",value:function _attributeToProperty(name,value){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE){return}var ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);if(propName!==void 0){var options=ctor._classProperties.get(propName)||defaultPropertyDeclaration;// mark state reflecting
this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[propName]=// tslint:disable-next-line:no-any
ctor._propertyValueFromAttribute(value,options);// mark state not reflecting
this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}/**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */},{key:"_requestUpdate",value:function _requestUpdate(name,oldValue){var shouldRequestUpdate=!0;// If we have a property key, perform property update steps.
if(name!==void 0){var ctor=this.constructor,options=ctor._classProperties.get(name)||defaultPropertyDeclaration;if(ctor._valueHasChanged(this[name],oldValue,options.hasChanged)){if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}// Add to reflecting properties set.
// Note, it's important that every change has a chance to add the
// property to `_reflectingProperties`. This ensures setting
// attribute + property reflects correctly.
if(!0===options.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}}else{// Abort the request if the property should not be considered changed.
shouldRequestUpdate=!1}}if(!this._hasRequestedUpdate&&shouldRequestUpdate){this._enqueueUpdate()}}/**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */},{key:"requestUpdate",value:function requestUpdate(name,oldValue){this._requestUpdate(name,oldValue);return this.updateComplete}/**
     * Sets up the element to asynchronously update.
     */},{key:"_enqueueUpdate",value:function(){var _enqueueUpdate2=babelHelpers.asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _this4=this,resolve,reject,previousUpdatePromise,result;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:// Mark state updating...
this._updateState=this._updateState|STATE_UPDATE_REQUESTED;previousUpdatePromise=this._updatePromise;this._updatePromise=new Promise(function(res,rej){resolve=res;reject=rej});_context.prev=3;_context.next=6;return previousUpdatePromise;case 6:_context.next=10;break;case 8:_context.prev=8;_context.t0=_context["catch"](3);case 10:if(this._hasConnected){_context.next=13;break}_context.next=13;return new Promise(function(res){return _this4._hasConnectedResolver=res});case 13:_context.prev=13;result=this.performUpdate();// If `performUpdate` returns a Promise, we await it. This is done to
// enable coordinating updates with a scheduler. Note, the result is
// checked to avoid delaying an additional microtask unless we need to.
if(!(null!=result)){_context.next=18;break}_context.next=18;return result;case 18:_context.next=23;break;case 20:_context.prev=20;_context.t1=_context["catch"](13);reject(_context.t1);case 23:resolve(!this._hasRequestedUpdate);case 24:case"end":return _context.stop();}}},_callee,this,[[3,8],[13,20]])}));function _enqueueUpdate(){return _enqueueUpdate2.apply(this,arguments)}return _enqueueUpdate}()},{key:"performUpdate",/**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */value:function performUpdate(){// Mixin instance properties once, if they exist.
if(this._instanceProperties){this._applyInstanceProperties()}var shouldUpdate=!1,changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties);if(shouldUpdate){this.update(changedProperties)}}catch(e){// Prevent `firstUpdated` and `updated` from running when there's an
// update exception.
shouldUpdate=!1;throw e}finally{// Ensure element can accept additional updates after an exception.
this._markUpdated()}if(shouldUpdate){if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}}},{key:"_markUpdated",value:function _markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}/**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update. This getter can be implemented to
     * await additional state. For example, it is sometimes useful to await a
     * rendered element before fulfilling this Promise. To do this, first await
     * `super.updateComplete` then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */},{key:"shouldUpdate",/**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */value:function shouldUpdate(_changedProperties){return!0}/**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */},{key:"update",value:function update(_changedProperties){var _this5=this;if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){// Use forEach so this works even if for/of loops are compiled to for
// loops expecting arrays
this._reflectingProperties.forEach(function(v,k){return _this5._propertyToAttribute(k,_this5[k],v)});this._reflectingProperties=void 0}}/**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */},{key:"updated",value:function updated(_changedProperties){}/**
                                  * Invoked when the element is first updated. Implement to perform one time
                                  * work on the element after update.
                                  *
                                  * Setting properties inside this method will trigger the element to update
                                  * again after this update cycle completes.
                                  *
                                  * * @param _changedProperties Map of changed properties with old values
                                  */},{key:"firstUpdated",value:function firstUpdated(_changedProperties){}},{key:"_hasConnected",get:function get(){return this._updateState&STATE_HAS_CONNECTED}},{key:"_hasRequestedUpdate",get:function get(){return this._updateState&STATE_UPDATE_REQUESTED}},{key:"hasUpdated",get:function get(){return this._updateState&STATE_HAS_UPDATED}},{key:"updateComplete",get:function get(){return this._updatePromise}}],[{key:"_ensureClassProperties",/**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */value:function _ensureClassProperties(){var _this6=this;// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;// NOTE: Workaround IE11 not supporting Map constructor argument.
var superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach(function(v,k){return _this6._classProperties.set(k,v)})}}}/**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */},{key:"createProperty",value:function createProperty(name){var options=1<arguments.length&&arguments[1]!==void 0?arguments[1]:defaultPropertyDeclaration;// Note, since this can be called by the `@property` decorator which
// is called before `finalize`, we ensure storage exists for property
// metadata.
this._ensureClassProperties();this._classProperties.set(name,options);// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(options.noAccessor||this.prototype.hasOwnProperty(name)){return}var key="symbol"===babelHelpers.typeof(name)?Symbol():"__".concat(name);Object.defineProperty(this.prototype,name,{// tslint:disable-next-line:no-any no symbol in index
get:function get(){return this[key]},set:function set(value){var oldValue=this[name];this[key]=value;this._requestUpdate(name,oldValue)},configurable:!0,enumerable:!0})}/**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */},{key:"finalize",value:function finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized){return}// finalize any superclasses
var superCtor=Object.getPrototypeOf(this);if("function"===typeof superCtor.finalize){superCtor.finalize()}this.finalized=!0;this._ensureClassProperties();// initialize Map populated in observedAttributes
this._attributeToPropertyMap=new Map;// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if(this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var props=this.properties,propKeys=[].concat(babelHelpers.toConsumableArray(Object.getOwnPropertyNames(props)),babelHelpers.toConsumableArray("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;// support symbols in properties (IE11 does not support this)
try{// This for/of is ok because propKeys is an array
for(var _iterator=propKeys[Symbol.iterator](),_step,p;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){p=_step.value;// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
this.createProperty(p,props[p])}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}}/**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */},{key:"_attributeNameForProperty",value:function _attributeNameForProperty(name,options){var attribute=options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}/**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */},{key:"_valueHasChanged",value:function _valueHasChanged(value,old){var hasChanged=2<arguments.length&&arguments[2]!==void 0?arguments[2]:notEqual;return hasChanged(value,old)}/**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */},{key:"_propertyValueFromAttribute",value:function _propertyValueFromAttribute(value,options){var type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"===typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}/**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */},{key:"_propertyValueToAttribute",value:function _propertyValueToAttribute(value,options){if(options.reflect===void 0){return}var type=options.type,converter=options.converter,toAttribute=converter&&converter.toAttribute||defaultConverter.toAttribute;return toAttribute(value,type)}},{key:"observedAttributes",get:function get(){var _this7=this;// note: piggy backing on this to ensure we're finalized.
this.finalize();var attributes=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
this._classProperties.forEach(function(v,p){var attr=_this7._attributeNameForProperty(p,v);if(attr!==void 0){_this7._attributeToPropertyMap.set(attr,p);attributes.push(attr)}});return attributes}}]);return UpdatingElement}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.UpdatingElement$1=_exports.UpdatingElement=UpdatingElement;/**
   * Marks class as having finished creating properties.
   */UpdatingElement.finalized=!0;var updatingElement={defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */_exports.$updatingElement=updatingElement;var directives=new WeakMap,directive=function directive(f){return function(){var d=f.apply(void 0,arguments);directives.set(d,!0);return d}};/**
                                   * Brands a function as a directive factory function so that lit-html will call
                                   * the function during template rendering, rather than passing as a value.
                                   *
                                   * A _directive_ is a function that takes a Part as an argument. It has the
                                   * signature: `(part: Part) => void`.
                                   *
                                   * A directive _factory_ is a function that takes arguments for data and
                                   * configuration and returns a directive. Users of directive usually refer to
                                   * the directive factory as the directive. For example, "The repeat directive".
                                   *
                                   * Usually a template author will invoke a directive factory in their template
                                   * with relevant arguments, which will then return a directive function.
                                   *
                                   * Here's an example of using the `repeat()` directive factory that takes an
                                   * array and a function to render an item:
                                   *
                                   * ```js
                                   * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
                                   * ```
                                   *
                                   * When `repeat` is invoked, it returns a directive function that closes over
                                   * `items` and the template function. When the outer template is rendered, the
                                   * return directive function is called with the Part for the expression.
                                   * `repeat` then performs it's custom logic to render multiple items.
                                   *
                                   * @param f The directive factory function. Must be a function that returns a
                                   * function of the signature `(part: Part) => void`. The returned function will
                                   * be called with the part object.
                                   *
                                   * @example
                                   *
                                   * import {directive, html} from 'lit-html';
                                   *
                                   * const immutable = directive((v) => (part) => {
                                   *   if (part.value !== v) {
                                   *     part.setValue(v)
                                   *   }
                                   * });
                                   */_exports.directive$1=_exports.directive=directive;var isDirective=function isDirective(o){return"function"===typeof o&&directives.has(o)};_exports.isDirective$1=_exports.isDirective=isDirective;var directive$1={directive:directive,isDirective:isDirective};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * True if the custom elements polyfill is in use.
        */_exports.$directive=directive$1;var isCEPolyfill=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0;/**
                                                                                                                                   * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
                                                                                                                                   * into another container (could be the same container), before `before`. If
                                                                                                                                   * `before` is null, it appends the nodes to the container.
                                                                                                                                   */_exports.isCEPolyfill=isCEPolyfill;var reparentNodes=function reparentNodes(container,start){var end=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,before=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;while(start!==end){var n=start.nextSibling;container.insertBefore(start,before);start=n}};/**
    * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
    * `container`.
    */_exports.reparentNodes$1=_exports.reparentNodes=reparentNodes;var removeNodes=function removeNodes(container,start){var end=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;while(start!==end){var n=start.nextSibling;container.removeChild(start);start=n}};_exports.removeNodes$1=_exports.removeNodes=removeNodes;var dom={isCEPolyfill:isCEPolyfill,reparentNodes:reparentNodes,removeNodes:removeNodes};/**
    * @license
    * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * A sentinel value that signals that a value was handled by a directive and
        * should not be written to the DOM.
        */_exports.$dom=dom;var noChange={};/**
                             * A sentinel value that signals a NodePart to fully clear its content.
                             */_exports.noChange$1=_exports.noChange=noChange;var nothing={};_exports.nothing$1=_exports.nothing=nothing;var part={noChange:noChange,nothing:nothing};/**
    * @license
    * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    * This code may only be used under the BSD style license found at
    * http://polymer.github.io/LICENSE.txt
    * The complete set of authors may be found at
    * http://polymer.github.io/AUTHORS.txt
    * The complete set of contributors may be found at
    * http://polymer.github.io/CONTRIBUTORS.txt
    * Code distributed by Google as part of the polymer project is also
    * subject to an additional IP rights grant found at
    * http://polymer.github.io/PATENTS.txt
    */ /**
        * An expression marker with embedded unique key to avoid collision with
        * possible text in templates.
        */_exports.$part=part;var marker="{{lit-".concat((Math.random()+"").slice(2),"}}");/**
                                                                    * An expression marker used text-positions, multi-binding attributes, and
                                                                    * attributes with markup-like text values.
                                                                    */_exports.marker=marker;var nodeMarker="<!--".concat(marker,"-->");_exports.nodeMarker=nodeMarker;var markerRegex=new RegExp("".concat(marker,"|").concat(nodeMarker));/**
                                                                   * Suffix appended to all bound attribute names.
                                                                   */_exports.markerRegex=markerRegex;var boundAttributeSuffix="$lit$";/**
                                              * An updateable Template that tracks the location of dynamic parts.
                                              */_exports.boundAttributeSuffix=boundAttributeSuffix;var Template=function Template(result,element){babelHelpers.classCallCheck(this,Template);this.parts=[];this.element=element;var nodesToRemove=[],stack=[],walker=document.createTreeWalker(element.content,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1),lastPartIndex=0,index=-1,partIndex=0,strings=result.strings,length=result.values.length;while(partIndex<length){var node=walker.nextNode();if(null===node){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();continue}index++;if(1===node.nodeType/* Node.ELEMENT_NODE */){if(node.hasAttributes()){for(var attributes=node.attributes,_length=attributes.length,count=0,i=0;i<_length;i++){if(endsWith(attributes[i].name,boundAttributeSuffix)){count++}}while(0<count--){// Get the template literal section leading up to the first
// expression in this attribute
var stringForPart=strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+boundAttributeSuffix,attributeValue=node.getAttribute(attributeLookupName);// Find the attribute name
node.removeAttribute(attributeLookupName);var statics=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index:index,name:name,strings:statics});partIndex+=statics.length-1}}if("TEMPLATE"===node.tagName){stack.push(node);walker.currentNode=node.content}}else if(3===node.nodeType/* Node.TEXT_NODE */){var data=node.data;if(0<=data.indexOf(marker)){// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(var parent=node.parentNode,_strings=data.split(markerRegex),lastIndex=_strings.length-1,_i=0;_i<lastIndex;_i++){var insert=void 0,s=_strings[_i];if(""===s){insert=createMarker()}else{var match=lastAttributeNameRegex.exec(s);if(null!==match&&endsWith(match[2],boundAttributeSuffix)){s=s.slice(0,match.index)+match[1]+match[2].slice(0,-boundAttributeSuffix.length)+match[3]}insert=document.createTextNode(s)}parent.insertBefore(insert,node);this.parts.push({type:"node",index:++index})}// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
if(""===_strings[lastIndex]){parent.insertBefore(createMarker(),node);nodesToRemove.push(node)}else{node.data=_strings[lastIndex]}// We have a part for each match found
partIndex+=lastIndex}}else if(8===node.nodeType/* Node.COMMENT_NODE */){if(node.data===marker){var _parent=node.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
if(null===node.previousSibling||index===lastPartIndex){index++;_parent.insertBefore(createMarker(),node)}lastPartIndex=index;this.parts.push({type:"node",index:index});// If we don't have a nextSibling, keep this node so we have an end.
// Else, we can remove it to save future costs.
if(null===node.nextSibling){node.data=""}else{nodesToRemove.push(node);index--}partIndex++}else{var _i2=-1;while(-1!==(_i2=node.data.indexOf(marker,_i2+1))){// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
this.parts.push({type:"node",index:-1});partIndex++}}}}// Remove text binding nodes after the walk to not disturb the TreeWalker
for(var _i3=0,_nodesToRemove=nodesToRemove,n;_i3<_nodesToRemove.length;_i3++){n=_nodesToRemove[_i3];n.parentNode.removeChild(n)}};_exports.Template$1=_exports.Template=Template;var endsWith=function endsWith(str,suffix){var index=str.length-suffix.length;return 0<=index&&str.slice(index)===suffix},isTemplatePartActive=function isTemplatePartActive(part){return-1!==part.index};_exports.isTemplatePartActive$1=_exports.isTemplatePartActive=isTemplatePartActive;// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
var createMarker=function createMarker(){return document.createComment("")};/**
                                                               * This regex extracts the attribute name preceding an attribute-position
                                                               * expression. It does this by matching the syntax allowed for attributes
                                                               * against the string literal directly preceding the expression, assuming that
                                                               * the expression is in an attribute-value position.
                                                               *
                                                               * See attributes in the HTML spec:
                                                               * https://www.w3.org/TR/html5/syntax.html#elements-attributes
                                                               *
                                                               * " \x09\x0a\x0c\x0d" are HTML space characters:
                                                               * https://www.w3.org/TR/html5/infrastructure.html#space-characters
                                                               *
                                                               * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
                                                               * space character except " ".
                                                               *
                                                               * So an attribute is:
                                                               *  * The name: any character except a control character, space character, ('),
                                                               *    ("), ">", "=", or "/"
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by "="
                                                               *  * Followed by zero or more space characters
                                                               *  * Followed by:
                                                               *    * Any character except space, ('), ("), "<", ">", "=", (`), or
                                                               *    * (") then any non-("), or
                                                               *    * (') then any non-(')
                                                               */_exports.createMarker$1=_exports.createMarker=createMarker;var lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;_exports.lastAttributeNameRegex=lastAttributeNameRegex;var template={marker:marker,nodeMarker:nodeMarker,markerRegex:markerRegex,boundAttributeSuffix:boundAttributeSuffix,Template:Template,isTemplatePartActive:isTemplatePartActive,createMarker:createMarker,lastAttributeNameRegex:lastAttributeNameRegex};_exports.$template=template;var TemplateInstance=/*#__PURE__*/function(){function TemplateInstance(template,processor,options){babelHelpers.classCallCheck(this,TemplateInstance);this.__parts=[];this.template=template;this.processor=processor;this.options=options}babelHelpers.createClass(TemplateInstance,[{key:"update",value:function update(values){var i=0,_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _iterator2=this.__parts[Symbol.iterator](),_step2,_part;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){_part=_step2.value;if(_part!==void 0){_part.setValue(values[i])}i++}}catch(err){_didIteratorError2=!0;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&null!=_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}var _iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _iterator3=this.__parts[Symbol.iterator](),_step3,_part2;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0){_part2=_step3.value;if(_part2!==void 0){_part2.commit()}}}catch(err){_didIteratorError3=!0;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&null!=_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}}},{key:"_clone",value:function _clone(){// There are a number of steps in the lifecycle of a template instance's
// DOM fragment:
//  1. Clone - create the instance fragment
//  2. Adopt - adopt into the main document
//  3. Process - find part markers and create parts
//  4. Upgrade - upgrade custom elements
//  5. Update - set node, attribute, property, etc., values
//  6. Connect - connect to the document. Optional and outside of this
//     method.
//
// We have a few constraints on the ordering of these steps:
//  * We need to upgrade before updating, so that property values will pass
//    through any property setters.
//  * We would like to process before upgrading so that we're sure that the
//    cloned fragment is inert and not disturbed by self-modifying DOM.
//  * We want custom elements to upgrade even in disconnected fragments.
//
// Given these constraints, with full custom elements support we would
// prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
//
// But Safari dooes not implement CustomElementRegistry#upgrade, so we
// can not implement that order and still have upgrade-before-update and
// upgrade disconnected fragments. So we instead sacrifice the
// process-before-upgrade constraint, since in Custom Elements v1 elements
// must not modify their light DOM in the constructor. We still have issues
// when co-existing with CEv0 elements like Polymer 1, and with polyfills
// that don't strictly adhere to the no-modification rule because shadow
// DOM, which may be created in the constructor, is emulated by being placed
// in the light DOM.
//
// The resulting order is on native is: Clone, Adopt, Upgrade, Process,
// Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
// in one step.
//
// The Custom Elements v1 polyfill supports upgrade(), so the order when
// polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
// Connect.
var fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),stack=[],parts=this.template.parts,walker=document.createTreeWalker(fragment,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1),partIndex=0,nodeIndex=0,part,node=walker.nextNode();// Loop through all the nodes and parts of a template
while(partIndex<parts.length){part=parts[partIndex];if(!isTemplatePartActive(part)){this.__parts.push(void 0);partIndex++;continue}// Progress the tree walker until we find our next part's node.
// Note that multiple parts may share the same node (attribute parts
// on a single element), so this loop may not run at all.
while(nodeIndex<part.index){nodeIndex++;if("TEMPLATE"===node.nodeName){stack.push(node);walker.currentNode=node.content}if(null===(node=walker.nextNode())){// We've exhausted the content inside a nested template element.
// Because we still have parts (the outer for-loop), we know:
// - There is a template in the stack
// - The walker will find a nextNode outside the template
walker.currentNode=stack.pop();node=walker.nextNode()}}// We've arrived at our part's node.
if("node"===part.type){var _part3=this.processor.handleTextExpression(this.options);_part3.insertAfterNode(node.previousSibling);this.__parts.push(_part3)}else{var _this$__parts;(_this$__parts=this.__parts).push.apply(_this$__parts,babelHelpers.toConsumableArray(this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options)))}partIndex++}if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}]);return TemplateInstance}();_exports.TemplateInstance$1=_exports.TemplateInstance=TemplateInstance;var templateInstance={TemplateInstance:TemplateInstance};_exports.$templateInstance=templateInstance;var TemplateResult=/*#__PURE__*/function(){function TemplateResult(strings,values,type,processor){babelHelpers.classCallCheck(this,TemplateResult);this.strings=strings;this.values=values;this.type=type;this.processor=processor}/**
     * Returns a string of HTML used to create a `<template>` element.
     */babelHelpers.createClass(TemplateResult,[{key:"getHTML",value:function getHTML(){for(var l=this.strings.length-1,html="",isCommentBinding=!1,i=0;i<l;i++){var s=this.strings[i],commentOpen=s.lastIndexOf("<!--");// For each binding we want to determine the kind of marker to insert
// into the template source before it's parsed by the browser's HTML
// parser. The marker type is based on whether the expression is in an
// attribute, text, or comment poisition.
//   * For node-position bindings we insert a comment with the marker
//     sentinel as its text content, like <!--{{lit-guid}}-->.
//   * For attribute bindings we insert just the marker sentinel for the
//     first binding, so that we support unquoted attribute bindings.
//     Subsequent bindings can use a comment marker because multi-binding
//     attributes must be quoted.
//   * For comment bindings we insert just the marker sentinel so we don't
//     close the comment.
//
// The following code scans the template source, but is *not* an HTML
// parser. We don't need to track the tree structure of the HTML, only
// whether a binding is inside a comment, and if not, if it appears to be
// the first binding in an attribute.
// We're in comment position if we have a comment open with no following
// comment close. Because <-- can appear in an attribute value there can
// be false positives.
isCommentBinding=(-1<commentOpen||isCommentBinding)&&-1===s.indexOf("-->",commentOpen+1);// Check to see if we have an attribute-like sequence preceeding the
// expression. This can match "name=value" like structures in text,
// comments, and attribute values, so there can be false-positives.
var attributeMatch=lastAttributeNameRegex.exec(s);if(null===attributeMatch){// We're only in this branch if we don't have a attribute-like
// preceeding sequence. For comments, this guards against unusual
// attribute values like <div foo="<!--${'bar'}">. Cases like
// <!-- foo=${'bar'}--> are handled correctly in the attribute branch
// below.
html+=s+(isCommentBinding?marker:nodeMarker)}else{// For attributes we use just a marker sentinel, and also append a
// $lit$ suffix to the name to opt-out of attribute-specific parsing
// that IE and Edge do for style and certain SVG attributes.
html+=s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+boundAttributeSuffix+attributeMatch[3]+marker}}html+=this.strings[l];return html}},{key:"getTemplateElement",value:function getTemplateElement(){var template=document.createElement("template");template.innerHTML=this.getHTML();return template}}]);return TemplateResult}();/**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */_exports.TemplateResult$3=_exports.TemplateResult$2=_exports.TemplateResult$1=_exports.TemplateResult=TemplateResult;var SVGTemplateResult=/*#__PURE__*/function(_TemplateResult){babelHelpers.inherits(SVGTemplateResult,_TemplateResult);function SVGTemplateResult(){babelHelpers.classCallCheck(this,SVGTemplateResult);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SVGTemplateResult).apply(this,arguments))}babelHelpers.createClass(SVGTemplateResult,[{key:"getHTML",value:function getHTML(){return"<svg>".concat(babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype),"getHTML",this).call(this),"</svg>")}},{key:"getTemplateElement",value:function getTemplateElement(){var template=babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype),"getTemplateElement",this).call(this),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}]);return SVGTemplateResult}(TemplateResult);_exports.SVGTemplateResult$2=_exports.SVGTemplateResult$1=_exports.SVGTemplateResult=SVGTemplateResult;var templateResult={TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult};_exports.$templateResult=templateResult;var isPrimitive=function isPrimitive(value){return null===value||!("object"===babelHelpers.typeof(value)||"function"===typeof value)};_exports.isPrimitive$1=_exports.isPrimitive=isPrimitive;var isIterable=function isIterable(value){return Array.isArray(value)||// tslint:disable-next-line:no-any
!!(value&&value[Symbol.iterator])};/**
    * Writes attribute values to the DOM for a group of AttributeParts bound to a
    * single attibute. The value is only set once even if there are multiple parts
    * for an attribute.
    */_exports.isIterable$1=_exports.isIterable=isIterable;var AttributeCommitter=/*#__PURE__*/function(){function AttributeCommitter(element,name,strings){babelHelpers.classCallCheck(this,AttributeCommitter);this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(var i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}/**
     * Creates a single part. Override this to create a differnt type of part.
     */babelHelpers.createClass(AttributeCommitter,[{key:"_createPart",value:function _createPart(){return new AttributePart(this)}},{key:"_getValue",value:function _getValue(){for(var strings=this.strings,l=strings.length-1,text="",i=0;i<l;i++){text+=strings[i];var _part4=this.parts[i];if(_part4!==void 0){var v=_part4.value;if(isPrimitive(v)||!isIterable(v)){text+="string"===typeof v?v:v+""}else{var _iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0;try{for(var _iterator4=v[Symbol.iterator](),_step4,t;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0){t=_step4.value;text+="string"===typeof t?t:t+""}}catch(err){_didIteratorError4=!0;_iteratorError4=err}finally{try{if(!_iteratorNormalCompletion4&&null!=_iterator4.return){_iterator4.return()}}finally{if(_didIteratorError4){throw _iteratorError4}}}}}}text+=strings[l];return text}},{key:"commit",value:function commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}]);return AttributeCommitter}();/**
   * A Part that controls all or part of an attribute value.
   */_exports.AttributeCommitter$1=_exports.AttributeCommitter=AttributeCommitter;var AttributePart=/*#__PURE__*/function(){function AttributePart(committer){babelHelpers.classCallCheck(this,AttributePart);this.value=void 0;this.committer=committer}babelHelpers.createClass(AttributePart,[{key:"setValue",value:function setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;// If the value is a not a directive, dirty the committer so that it'll
// call setAttribute. If the value is a directive, it'll dirty the
// committer if it calls setValue().
if(!isDirective(value)){this.committer.dirty=!0}}}},{key:"commit",value:function commit(){while(isDirective(this.value)){var _directive=this.value;this.value=noChange;_directive(this)}if(this.value===noChange){return}this.committer.commit()}}]);return AttributePart}();/**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */_exports.AttributePart$1=_exports.AttributePart=AttributePart;var NodePart=/*#__PURE__*/function(){function NodePart(options){babelHelpers.classCallCheck(this,NodePart);this.value=void 0;this.__pendingValue=void 0;this.options=options}/**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */babelHelpers.createClass(NodePart,[{key:"appendInto",value:function appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}/**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */},{key:"insertAfterNode",value:function insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}/**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */},{key:"appendIntoPart",value:function appendIntoPart(part){part.__insert(this.startNode=createMarker());part.__insert(this.endNode=createMarker())}/**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */},{key:"insertAfterPart",value:function insertAfterPart(ref){ref.__insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}},{key:"setValue",value:function setValue(value){this.__pendingValue=value}},{key:"commit",value:function commit(){while(isDirective(this.__pendingValue)){var _directive2=this.__pendingValue;this.__pendingValue=noChange;_directive2(this)}var value=this.__pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this.__commitText(value)}}else if(babelHelpers.instanceof(value,TemplateResult)){this.__commitTemplateResult(value)}else if(babelHelpers.instanceof(value,Node)){this.__commitNode(value)}else if(isIterable(value)){this.__commitIterable(value)}else if(value===nothing){this.value=nothing;this.clear()}else{// Fallback, will render the string representation
this.__commitText(value)}}},{key:"__insert",value:function __insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}},{key:"__commitNode",value:function __commitNode(value){if(this.value===value){return}this.clear();this.__insert(value);this.value=value}},{key:"__commitText",value:function __commitText(value){var node=this.startNode.nextSibling;value=null==value?"":value;if(node===this.endNode.previousSibling&&3===node.nodeType/* Node.TEXT_NODE */){// If we only have a single text node between the markers, we can just
// set its value, rather than replacing it.
// TODO(justinfagnani): Can we just check if this.value is primitive?
node.data=value}else{this.__commitNode(document.createTextNode("string"===typeof value?value:value+""))}this.value=value}},{key:"__commitTemplateResult",value:function __commitTemplateResult(value){var template=this.options.templateFactory(value);if(babelHelpers.instanceof(this.value,TemplateInstance)&&this.value.template===template){this.value.update(value.values)}else{// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
var instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this.__commitNode(fragment);this.value=instance}}},{key:"__commitIterable",value:function __commitIterable(value){// For an Iterable, we create a new InstancePart per item, then set its
// value to the item. This is a little bit of overhead for every item in
// an Iterable, but it lets us recurse easily and efficiently update Arrays
// of TemplateResults that will be commonly returned from expressions like:
// array.map((i) => html`${i}`), by reusing existing TemplateInstances.
// If _value is an array, then the previous render was of an
// iterable and _value will contain the NodeParts from the previous
// render. If _value is not an array, clear this part and make a new
// array for NodeParts.
if(!Array.isArray(this.value)){this.value=[];this.clear()}// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
var itemParts=this.value,partIndex=0,itemPart,_iteratorNormalCompletion5=!0,_didIteratorError5=!1,_iteratorError5=void 0;try{for(var _iterator5=value[Symbol.iterator](),_step5,item;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=!0){item=_step5.value;// Try to reuse an existing part
itemPart=itemParts[partIndex];// If no existing part, create a new one
if(itemPart===void 0){itemPart=new NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}}catch(err){_didIteratorError5=!0;_iteratorError5=err}finally{try{if(!_iteratorNormalCompletion5&&null!=_iterator5.return){_iterator5.return()}}finally{if(_didIteratorError5){throw _iteratorError5}}}if(partIndex<itemParts.length){// Truncate the parts array so _value reflects the current state
itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}},{key:"clear",value:function clear(){var startNode=0<arguments.length&&arguments[0]!==void 0?arguments[0]:this.startNode;removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}]);return NodePart}();/**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */_exports.NodePart$1=_exports.NodePart=NodePart;var BooleanAttributePart=/*#__PURE__*/function(){function BooleanAttributePart(element,name,strings){babelHelpers.classCallCheck(this,BooleanAttributePart);this.value=void 0;this.__pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}babelHelpers.createClass(BooleanAttributePart,[{key:"setValue",value:function setValue(value){this.__pendingValue=value}},{key:"commit",value:function commit(){while(isDirective(this.__pendingValue)){var _directive3=this.__pendingValue;this.__pendingValue=noChange;_directive3(this)}if(this.__pendingValue===noChange){return}var value=!!this.__pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}this.value=value}this.__pendingValue=noChange}}]);return BooleanAttributePart}();/**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */_exports.BooleanAttributePart$1=_exports.BooleanAttributePart=BooleanAttributePart;var PropertyCommitter=/*#__PURE__*/function(_AttributeCommitter){babelHelpers.inherits(PropertyCommitter,_AttributeCommitter);function PropertyCommitter(element,name,strings){var _this8;babelHelpers.classCallCheck(this,PropertyCommitter);_this8=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyCommitter).call(this,element,name,strings));_this8.single=2===strings.length&&""===strings[0]&&""===strings[1];return _this8}babelHelpers.createClass(PropertyCommitter,[{key:"_createPart",value:function _createPart(){return new PropertyPart(this)}},{key:"_getValue",value:function _getValue(){if(this.single){return this.parts[0].value}return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyCommitter.prototype),"_getValue",this).call(this)}},{key:"commit",value:function commit(){if(this.dirty){this.dirty=!1;// tslint:disable-next-line:no-any
this.element[this.name]=this._getValue()}}}]);return PropertyCommitter}(AttributeCommitter);_exports.PropertyCommitter$1=_exports.PropertyCommitter=PropertyCommitter;var PropertyPart=/*#__PURE__*/function(_AttributePart){babelHelpers.inherits(PropertyPart,_AttributePart);function PropertyPart(){babelHelpers.classCallCheck(this,PropertyPart);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyPart).apply(this,arguments))}return PropertyPart}(AttributePart);// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
_exports.PropertyPart$1=_exports.PropertyPart=PropertyPart;var eventOptionsSupported=!1;try{var options={get capture(){eventOptionsSupported=!0;return!1}};// tslint:disable-next-line:no-any
window.addEventListener("test",options,options);// tslint:disable-next-line:no-any
window.removeEventListener("test",options,options)}catch(_e){}var EventPart=/*#__PURE__*/function(){function EventPart(element,eventName,eventContext){var _this9=this;babelHelpers.classCallCheck(this,EventPart);this.value=void 0;this.__pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext;this.__boundHandleEvent=function(e){return _this9.handleEvent(e)}}babelHelpers.createClass(EventPart,[{key:"setValue",value:function setValue(value){this.__pendingValue=value}},{key:"commit",value:function commit(){while(isDirective(this.__pendingValue)){var _directive4=this.__pendingValue;this.__pendingValue=noChange;_directive4(this)}if(this.__pendingValue===noChange){return}var newListener=this.__pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options)}if(shouldAddListener){this.__options=getOptions(newListener);this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)}this.value=newListener;this.__pendingValue=noChange}},{key:"handleEvent",value:function handleEvent(event){if("function"===typeof this.value){this.value.call(this.eventContext||this.element,event)}else{this.value.handleEvent(event)}}}]);return EventPart}();// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
_exports.EventPart$1=_exports.EventPart=EventPart;var getOptions=function getOptions(o){return o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture)},parts={isPrimitive:isPrimitive,isIterable:isIterable,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,NodePart:NodePart,BooleanAttributePart:BooleanAttributePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,EventPart:EventPart};_exports.$parts=parts;var DefaultTemplateProcessor=/*#__PURE__*/function(){function DefaultTemplateProcessor(){babelHelpers.classCallCheck(this,DefaultTemplateProcessor)}babelHelpers.createClass(DefaultTemplateProcessor,[{key:"handleAttributeExpressions",/**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */value:function handleAttributeExpressions(element,name,strings,options){var prefix=name[0];if("."===prefix){var _committer=new PropertyCommitter(element,name.slice(1),strings);return _committer.parts}if("@"===prefix){return[new EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new BooleanAttributePart(element,name.slice(1),strings)]}var committer=new AttributeCommitter(element,name,strings);return committer.parts}/**
     * Create parts for a text-position binding.
     * @param templateFactory
     */},{key:"handleTextExpression",value:function handleTextExpression(options){return new NodePart(options)}}]);return DefaultTemplateProcessor}();_exports.DefaultTemplateProcessor$1=_exports.DefaultTemplateProcessor=DefaultTemplateProcessor;var defaultTemplateProcessor=new DefaultTemplateProcessor;_exports.defaultTemplateProcessor$1=_exports.defaultTemplateProcessor=defaultTemplateProcessor;var defaultTemplateProcessor$1={DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor};_exports.$defaultTemplateProcessor=defaultTemplateProcessor$1;function templateFactory(result){var templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(result.type,templateCache)}var template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
var key=result.strings.join(marker);// Check if we already have a Template for this key
template=templateCache.keyString.get(key);if(template===void 0){// If we have not seen this key before, create a new Template
template=new Template(result,result.getTemplateElement());// Cache the Template for this key
templateCache.keyString.set(key,template)}// Cache all future queries for this TemplateStringsArray
templateCache.stringsArray.set(result.strings,template);return template}var templateCaches=new Map;_exports.templateCaches$1=_exports.templateCaches=templateCaches;var templateFactory$1={templateFactory:templateFactory,templateCaches:templateCaches};_exports.$templateFactory=templateFactory$1;var parts$1=new WeakMap;/**
                                     * Renders a template to a container.
                                     *
                                     * To update a container with new values, reevaluate the template literal and
                                     * call `render` with the new result.
                                     *
                                     * @param result a TemplateResult created by evaluating a template tag like
                                     *     `html` or `svg`.
                                     * @param container A DOM parent to render to. The entire contents are either
                                     *     replaced, or efficiently updated if the same result type was previous
                                     *     rendered there.
                                     * @param options RenderOptions for the entire render tree rendered to this
                                     *     container. Render options must *not* change between renders to the same
                                     *     container, as those changes will not effect previously rendered DOM.
                                     */_exports.parts$1=_exports.parts=parts$1;var render=function render(result,container,options){var part=parts$1.get(container);if(part===void 0){removeNodes(container,container.firstChild);parts$1.set(container,part=new NodePart(Object.assign({templateFactory:templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()};_exports.render$2=_exports.render=render;var render$1={parts:parts$1,render:render};// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
_exports.$render=render$1;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");/**
                                                                                * Interprets a template literal as an HTML template that can efficiently
                                                                                * render to and update a container.
                                                                                */var html=function html(strings){for(var _len2=arguments.length,values=Array(1<_len2?_len2-1:0),_key2=1;_key2<_len2;_key2++){values[_key2-1]=arguments[_key2]}return new TemplateResult(strings,values,"html",defaultTemplateProcessor)};/**
                                                                                                                    * Interprets a template literal as an SVG template that can efficiently
                                                                                                                    * render to and update a container.
                                                                                                                    */_exports.html$2=_exports.html$1=_exports.html=html;var svg=function svg(strings){for(var _len3=arguments.length,values=Array(1<_len3?_len3-1:0),_key3=1;_key3<_len3;_key3++){values[_key3-1]=arguments[_key3]}return new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor)};_exports.svg$2=_exports.svg$1=_exports.svg=svg;var litHtml={html:html,svg:svg,DefaultTemplateProcessor:DefaultTemplateProcessor,defaultTemplateProcessor:defaultTemplateProcessor,directive:directive,isDirective:isDirective,removeNodes:removeNodes,reparentNodes:reparentNodes,noChange:noChange,nothing:nothing,AttributeCommitter:AttributeCommitter,AttributePart:AttributePart,BooleanAttributePart:BooleanAttributePart,EventPart:EventPart,isIterable:isIterable,isPrimitive:isPrimitive,NodePart:NodePart,PropertyCommitter:PropertyCommitter,PropertyPart:PropertyPart,parts:parts$1,render:render,templateCaches:templateCaches,templateFactory:templateFactory,TemplateInstance:TemplateInstance,SVGTemplateResult:SVGTemplateResult,TemplateResult:TemplateResult,createMarker:createMarker,isTemplatePartActive:isTemplatePartActive,Template:Template};_exports.$litHtml=litHtml;var walkerNodeFilter=133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;/**
                                                                            * Removes the list of nodes from a Template safely. In addition to removing
                                                                            * nodes from the Template, the Template part indices are updated to match
                                                                            * the mutated Template DOM.
                                                                            *
                                                                            * As the template is walked the removal state is tracked and
                                                                            * part indices are adjusted as needed.
                                                                            *
                                                                            * div
                                                                            *   div#1 (remove) <-- start removing (removing node is div#1)
                                                                            *     div
                                                                            *       div#2 (remove)  <-- continue removing (removing node is still div#1)
                                                                            *         div
                                                                            * div <-- stop removing since previous sibling is the removing node (div#1,
                                                                            * removed 4 nodes)
                                                                            */function removeNodesFromTemplate(template,nodesToRemove){var content=template.element.content,parts=template.parts,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1),partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0,nodesToRemoveInTemplate=[],currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;var node=walker.currentNode;// End removal if stepped past the removing node
if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}// A node to remove was found in the template
if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);// Track node we're removing
if(null===currentRemovingNode){currentRemovingNode=node}}// When removing, increment count by which to adjust subsequent part indices
if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
part.index=null!==currentRemovingNode?-1:part.index-removeCount;// go to the next active part.
partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(function(n){return n.parentNode.removeChild(n)})}var countNodes=function countNodes(node){var count=11===node.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */?0:1,walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=function nextActiveIndexInTemplateParts(parts){for(var startIndex=1<arguments.length&&arguments[1]!==void 0?arguments[1]:-1,i=startIndex+1,_part5;i<parts.length;i++){_part5=parts[i];if(isTemplatePartActive(_part5)){return i}}return-1};/**
    * Inserts the given node into the Template, optionally before the given
    * refNode. In addition to inserting the node into the Template, the Template
    * part indices are updated to match the mutated Template DOM.
    */function insertNodeIntoTemplate(template,node){var refNode=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,content=template.element.content,parts=template.parts;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(null===refNode||refNode===void 0){content.appendChild(node);return}var walker=document.createTreeWalker(content,walkerNodeFilter,null,!1),partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;var walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){// If we've inserted the node, simply adjust all subsequent parts
if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}var modifyTemplate={removeNodesFromTemplate:removeNodesFromTemplate,insertNodeIntoTemplate:insertNodeIntoTemplate};_exports.$modifyTemplate=modifyTemplate;var getTemplateCacheKey=function getTemplateCacheKey(type,scopeName){return"".concat(type,"--").concat(scopeName)},compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn("Incompatible ShadyCSS version detected. "+"Please update to at least @webcomponents/webcomponentsjs@2.0.2 and "+"@webcomponents/shadycss@1.3.1.");compatibleShadyCSSVersion=!1}/**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */var shadyTemplateFactory=function shadyTemplateFactory(scopeName){return function(result){var cacheKey=getTemplateCacheKey(result.type,scopeName),templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache={stringsArray:new WeakMap,keyString:new Map};templateCaches.set(cacheKey,templateCache)}var template=templateCache.stringsArray.get(result.strings);if(template!==void 0){return template}var key=result.strings.join(marker);template=templateCache.keyString.get(key);if(template===void 0){var element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.keyString.set(key,template)}templateCache.stringsArray.set(result.strings,template);return template}},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=function removeStylesFromLitTemplates(scopeName){TEMPLATE_TYPES.forEach(function(type){var templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.keyString.forEach(function(template){var content=template.element.content,styles=new Set;// IE 11 doesn't support the iterable param Set constructor
Array.from(content.querySelectorAll("style")).forEach(function(s){styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=function prepareTemplateStyles(renderedDOM,template,scopeName){shadyRenderSet.add(scopeName);// Move styles out of rendered DOM and store.
var styles=renderedDOM.querySelectorAll("style"),length=styles.length;// If there are no styles, skip unnecessary work
if(0===length){// Ensure prepareTemplateStyles is called to support adding
// styles via `prepareAdoptedCssText` since that requires that
// `prepareTemplateStyles` is called.
window.ShadyCSS.prepareTemplateStyles(template.element,scopeName);return}// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(var condensedStyle=document.createElement("style"),i=0,_style;i<length;i++){_style=styles[i];_style.parentNode.removeChild(_style);condensedStyle.textContent+=_style.textContent}// Remove styles from nested templates in this scope.
removeStylesFromLitTemplates(scopeName);// And then put the condensed style into the "root" template passed in as
// `template`.
var content=template.element.content;insertNodeIntoTemplate(template,condensedStyle,content.firstChild);// Note, it's important that ShadyCSS gets the template that `lit-html`
// will actually render so that it can update the style inside when
// needed (e.g. @apply native Shadow DOM case).
window.ShadyCSS.prepareTemplateStyles(template.element,scopeName);var style=content.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==style){// When in native Shadow DOM, ensure the style created by ShadyCSS is
// included in initially rendered output (`renderedDOM`).
renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else{// When no style is left in the template, parts will be broken as a
// result. To fix this, we put back the style node ShadyCSS removed
// and then tell lit to remove that node from the template.
// There can be no style in the template in 2 cases (1) when Shady DOM
// is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
// is in use ShadyCSS removes the style if it contains no content.
// NOTE, ShadyCSS creates its own style so we can safely add/remove
// `condensedStyle` here.
content.insertBefore(condensedStyle,content.firstChild);var removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},render$2=function render$2(result,container,options){var scopeName=options.scopeName,hasRendered=parts$1.has(container),needsScoping=compatibleShadyCSSVersion&&11===container.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */&&!!container.host&&babelHelpers.instanceof(result,TemplateResult),firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;render(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(firstScopeRender){var _part6=parts$1.get(renderContainer);parts$1.delete(renderContainer);if(babelHelpers.instanceof(_part6.value,TemplateInstance)){prepareTemplateStyles(renderContainer,_part6.value.template,scopeName)}removeNodes(container,container.firstChild);container.appendChild(renderContainer);parts$1.set(container,_part6)}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSSS.styleElement`
// for dynamic changes.
if(!hasRendered&&needsScoping){window.ShadyCSS.styleElement(container.host)}};_exports.render$1=render$2;var shadyRender={render:render$2,html:html,svg:svg,TemplateResult:TemplateResult};// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
_exports.$shadyRender=shadyRender;(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");/**
                                                                                      * Minimal implementation of Array.prototype.flat
                                                                                      * @param arr the array to flatten
                                                                                      * @param result the accumlated result
                                                                                      */function arrayFlat(styles){for(var result=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],i=0,_length2=styles.length,value;i<_length2;i++){value=styles[i];if(Array.isArray(value)){arrayFlat(value,result)}else{result.push(value)}}return result}/** Deeply flattens styles array. Uses native flat if available. */var flattenStyles=function flattenStyles(styles){return styles.flat?styles.flat(1/0):arrayFlat(styles)},LitElement=/*#__PURE__*/function(_UpdatingElement){babelHelpers.inherits(LitElement,_UpdatingElement);function LitElement(){babelHelpers.classCallCheck(this,LitElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LitElement).apply(this,arguments))}babelHelpers.createClass(LitElement,[{key:"initialize",/**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */value:function initialize(){babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"initialize",this).call(this);this.renderRoot=this.createRenderRoot();// Note, if renderRoot is not a shadowRoot, styles would/could apply to the
// element's getRootNode(). While this could be done, we're choosing not to
// support this now since it would require different logic around de-duping.
if(window.ShadowRoot&&babelHelpers.instanceof(this.renderRoot,window.ShadowRoot)){this.adoptStyles()}}/**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */},{key:"createRenderRoot",value:function createRenderRoot(){return this.attachShadow({mode:"open"})}/**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */},{key:"adoptStyles",value:function adoptStyles(){var styles=this.constructor._styles;if(0===styles.length){return}// There are three separate cases here based on Shadow DOM support.
// (1) shadowRoot polyfilled: use ShadyCSS
// (2) shadowRoot.adoptedStyleSheets available: use it.
// (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
// rendering
if(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow){window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function(s){return s.cssText}),this.localName)}else if(supportsAdoptingStyleSheets){this.renderRoot.adoptedStyleSheets=styles.map(function(s){return s.styleSheet})}else{// This must be done after rendering so the actual style insertion is done
// in `update`.
this._needsShimAdoptedStyleSheets=!0}}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"connectedCallback",this).call(this);// Note, first update/render handles styleElement so we only call this if
// connected after first update.
if(this.hasUpdated&&window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}/**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */},{key:"update",value:function update(changedProperties){var _this10=this;babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype),"update",this).call(this,changedProperties);var templateResult=this.render();if(babelHelpers.instanceof(templateResult,TemplateResult)){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}// When native Shadow DOM is used but adoptedStyles are not supported,
// insert styling after rendering to ensure adoptedStyles have highest
// priority.
if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=!1;this.constructor._styles.forEach(function(s){var style=document.createElement("style");style.textContent=s.cssText;_this10.renderRoot.appendChild(style)})}}/**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */},{key:"render",value:function render(){}}],[{key:"finalize",/** @nocollapse */value:function finalize(){babelHelpers.get(babelHelpers.getPrototypeOf(LitElement),"finalize",this).call(this);// Prepare styling that is stamped at first render time. Styling
// is built from user provided `styles` or is inherited from the superclass.
this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}/** @nocollapse */},{key:"_getUniqueStyles",value:function _getUniqueStyles(){// Take care not to call `this.styles` multiple times since this generates
// new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
var userStyles=this.styles,styles=[];if(Array.isArray(userStyles)){var flatStyles=flattenStyles(userStyles),styleSet=flatStyles.reduceRight(function(set,s){set.add(s);// on IE set.add does not return the set.
return set},new Set);// As a performance optimization to avoid duplicated styling that can
// occur especially when composing via subclassing, de-duplicate styles
// preserving the last item in the list. The last item is kept to
// try to preserve cascade order with the assumption that it's most
// important that last added styles override previous styles.
// Array.from does not work on Set in IE
styleSet.forEach(function(v){return styles.unshift(v)})}else if(userStyles){styles.push(userStyles)}return styles}}]);return LitElement}(UpdatingElement);_exports.LitElement=LitElement;/**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   */LitElement.finalized=!0;/**
                              * Render method used to render the lit-html TemplateResult to the element's
                              * DOM.
                              * @param {TemplateResult} Template to render.
                              * @param {Element|DocumentFragment} Node into which to render.
                              * @param {String} Element name.
                              * @nocollapse
                              */LitElement.render=render$2;var litElement={LitElement:LitElement,defaultConverter:defaultConverter,notEqual:notEqual,UpdatingElement:UpdatingElement,customElement:customElement,property:property,query:query,queryAll:queryAll,eventOptions:eventOptions,html:html,svg:svg,TemplateResult:TemplateResult,SVGTemplateResult:SVGTemplateResult,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,CSSResult:CSSResult,unsafeCSS:unsafeCSS,css:css};_exports.$litElement=litElement;var support={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{new Blob;return!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};function isDataView(obj){return obj&&DataView.prototype.isPrototypeOf(obj)}if(support.arrayBuffer){var viewClasses=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],isArrayBufferView=ArrayBuffer.isView||function(obj){return obj&&-1<viewClasses.indexOf(Object.prototype.toString.call(obj))}}function normalizeName(name){if("string"!==typeof name){name=name+""}if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)){throw new TypeError("Invalid character in header field name")}return name.toLowerCase()}function normalizeValue(value){if("string"!==typeof value){value=value+""}return value}// Build a destructive iterator for the value list
function iteratorFor(items){var iterator={next:function next(){var value=items.shift();return{done:value===void 0,value:value}}};if(support.iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}function Headers(headers){this.map={};if(babelHelpers.instanceof(headers,Headers)){headers.forEach(function(value,name){this.append(name,value)},this)}else if(Array.isArray(headers)){headers.forEach(function(header){this.append(header[0],header[1])},this)}else if(headers){Object.getOwnPropertyNames(headers).forEach(function(name){this.append(name,headers[name])},this)}}Headers.prototype.append=function(name,value){name=normalizeName(name);value=normalizeValue(value);var oldValue=this.map[name];this.map[name]=oldValue?oldValue+", "+value:value};Headers.prototype["delete"]=function(name){delete this.map[normalizeName(name)]};Headers.prototype.get=function(name){name=normalizeName(name);return this.has(name)?this.map[name]:null};Headers.prototype.has=function(name){return this.map.hasOwnProperty(normalizeName(name))};Headers.prototype.set=function(name,value){this.map[normalizeName(name)]=normalizeValue(value)};Headers.prototype.forEach=function(callback,thisArg){for(var name in this.map){if(this.map.hasOwnProperty(name)){callback.call(thisArg,this.map[name],name,this)}}};Headers.prototype.keys=function(){var items=[];this.forEach(function(value,name){items.push(name)});return iteratorFor(items)};Headers.prototype.values=function(){var items=[];this.forEach(function(value){items.push(value)});return iteratorFor(items)};Headers.prototype.entries=function(){var items=[];this.forEach(function(value,name){items.push([name,value])});return iteratorFor(items)};if(support.iterable){Headers.prototype[Symbol.iterator]=Headers.prototype.entries}function consumed(body){if(body.bodyUsed){return Promise.reject(new TypeError("Already read"))}body.bodyUsed=!0}function fileReaderReady(reader){return new Promise(function(resolve,reject){reader.onload=function(){resolve(reader.result)};reader.onerror=function(){reject(reader.error)}})}function readBlobAsArrayBuffer(blob){var reader=new FileReader,promise=fileReaderReady(reader);reader.readAsArrayBuffer(blob);return promise}function readBlobAsText(blob){var reader=new FileReader,promise=fileReaderReady(reader);reader.readAsText(blob);return promise}function readArrayBufferAsText(buf){for(var view=new Uint8Array(buf),chars=Array(view.length),i=0;i<view.length;i++){chars[i]=String.fromCharCode(view[i])}return chars.join("")}function bufferClone(buf){if(buf.slice){return buf.slice(0)}else{var view=new Uint8Array(buf.byteLength);view.set(new Uint8Array(buf));return view.buffer}}function Body(){this.bodyUsed=!1;this._initBody=function(body){this._bodyInit=body;if(!body){this._bodyText=""}else if("string"===typeof body){this._bodyText=body}else if(support.blob&&Blob.prototype.isPrototypeOf(body)){this._bodyBlob=body}else if(support.formData&&FormData.prototype.isPrototypeOf(body)){this._bodyFormData=body}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){this._bodyText=body.toString()}else if(support.arrayBuffer&&support.blob&&isDataView(body)){this._bodyArrayBuffer=bufferClone(body.buffer);// IE 10-11 can't handle a DataView body.
this._bodyInit=new Blob([this._bodyArrayBuffer])}else if(support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(body)||isArrayBufferView(body))){this._bodyArrayBuffer=bufferClone(body)}else{this._bodyText=body=Object.prototype.toString.call(body)}if(!this.headers.get("content-type")){if("string"===typeof body){this.headers.set("content-type","text/plain;charset=UTF-8")}else if(this._bodyBlob&&this._bodyBlob.type){this.headers.set("content-type",this._bodyBlob.type)}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8")}}};if(support.blob){this.blob=function(){var rejected=consumed(this);if(rejected){return rejected}if(this._bodyBlob){return Promise.resolve(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(new Blob([this._bodyArrayBuffer]))}else if(this._bodyFormData){throw new Error("could not read FormData body as blob")}else{return Promise.resolve(new Blob([this._bodyText]))}};this.arrayBuffer=function(){if(this._bodyArrayBuffer){return consumed(this)||Promise.resolve(this._bodyArrayBuffer)}else{return this.blob().then(readBlobAsArrayBuffer)}}}this.text=function(){var rejected=consumed(this);if(rejected){return rejected}if(this._bodyBlob){return readBlobAsText(this._bodyBlob)}else if(this._bodyArrayBuffer){return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))}else if(this._bodyFormData){throw new Error("could not read FormData body as text")}else{return Promise.resolve(this._bodyText)}};if(support.formData){this.formData=function(){return this.text().then(decode)}}this.json=function(){return this.text().then(JSON.parse)};return this}// HTTP methods whose capitalization should be normalized
var methods=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function normalizeMethod(method){var upcased=method.toUpperCase();return-1<methods.indexOf(upcased)?upcased:method}function Request(input,options){options=options||{};var body=options.body;if(babelHelpers.instanceof(input,Request)){if(input.bodyUsed){throw new TypeError("Already read")}this.url=input.url;this.credentials=input.credentials;if(!options.headers){this.headers=new Headers(input.headers)}this.method=input.method;this.mode=input.mode;this.signal=input.signal;if(!body&&null!=input._bodyInit){body=input._bodyInit;input.bodyUsed=!0}}else{this.url=input+""}this.credentials=options.credentials||this.credentials||"same-origin";if(options.headers||!this.headers){this.headers=new Headers(options.headers)}this.method=normalizeMethod(options.method||this.method||"GET");this.mode=options.mode||this.mode||null;this.signal=options.signal||this.signal;this.referrer=null;if(("GET"===this.method||"HEAD"===this.method)&&body){throw new TypeError("Body not allowed for GET or HEAD requests")}this._initBody(body)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})};function decode(body){var form=new FormData;body.trim().split("&").forEach(function(bytes){if(bytes){var split=bytes.split("="),name=split.shift().replace(/\+/g," "),value=split.join("=").replace(/\+/g," ");form.append(decodeURIComponent(name),decodeURIComponent(value))}});return form}function parseHeaders(rawHeaders){var headers=new Headers,preProcessedHeaders=rawHeaders.replace(/\r?\n[\t ]+/g," ");// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
// https://tools.ietf.org/html/rfc7230#section-3.2
preProcessedHeaders.split(/\r?\n/).forEach(function(line){var parts=line.split(":"),key=parts.shift().trim();if(key){var value=parts.join(":").trim();headers.append(key,value)}});return headers}Body.call(Request.prototype);function Response(bodyInit,options){if(!options){options={}}this.type="default";this.status=options.status===void 0?200:options.status;this.ok=200<=this.status&&300>this.status;this.statusText="statusText"in options?options.statusText:"OK";this.headers=new Headers(options.headers);this.url=options.url||"";this._initBody(bodyInit)}Body.call(Response.prototype);Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})};Response.error=function(){var response=new Response(null,{status:0,statusText:""});response.type="error";return response};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(url,status){if(-1===redirectStatuses.indexOf(status)){throw new RangeError("Invalid status code")}return new Response(null,{status:status,headers:{location:url}})};var DOMException=self.DOMException;_exports.DOMException=DOMException;try{new DOMException}catch(err){_exports.DOMException=DOMException=function DOMException(message,name){this.message=message;this.name=name;var error=Error(message);this.stack=error.stack};DOMException.prototype=Object.create(Error.prototype);DOMException.prototype.constructor=DOMException}function fetch(input,init){return new Promise(function(resolve,reject){var request=new Request(input,init);if(request.signal&&request.signal.aborted){return reject(new DOMException("Aborted","AbortError"))}var xhr=new XMLHttpRequest;function abortXhr(){xhr.abort()}xhr.onload=function(){var options={status:xhr.status,statusText:xhr.statusText,headers:parseHeaders(xhr.getAllResponseHeaders()||"")};options.url="responseURL"in xhr?xhr.responseURL:options.headers.get("X-Request-URL");var body="response"in xhr?xhr.response:xhr.responseText;resolve(new Response(body,options))};xhr.onerror=function(){reject(new TypeError("Network request failed"))};xhr.ontimeout=function(){reject(new TypeError("Network request failed"))};xhr.onabort=function(){reject(new DOMException("Aborted","AbortError"))};xhr.open(request.method,request.url,!0);if("include"===request.credentials){xhr.withCredentials=!0}else if("omit"===request.credentials){xhr.withCredentials=!1}if("responseType"in xhr&&support.blob){xhr.responseType="blob"}request.headers.forEach(function(value,name){xhr.setRequestHeader(name,value)});if(request.signal){request.signal.addEventListener("abort",abortXhr);xhr.onreadystatechange=function(){// DONE (success or failure)
if(4===xhr.readyState){request.signal.removeEventListener("abort",abortXhr)}}}xhr.send("undefined"===typeof request._bodyInit?null:request._bodyInit)})}fetch.polyfill=!0;if(!self.fetch){self.fetch=fetch;self.Headers=Headers;self.Request=Request;self.Response=Response}var fetch$1={Headers:Headers,Request:Request,Response:Response,get DOMException(){return DOMException},fetch:fetch};_exports.$fetch=fetch$1;var MainApplication=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(MainApplication,_LitElement);function MainApplication(){var _this11;babelHelpers.classCallCheck(this,MainApplication);_this11=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MainApplication).call(this));_this11.data={};return _this11}babelHelpers.createClass(MainApplication,[{key:"getData",value:function getData(){var _this12=this;window.fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(response){return response.json()}).then(function(json){_this12.data=json}).catch(function(error){return console.log(error)})}},{key:"render",value:function render(){return html(_templateObject_a99056e09b6211e9a9a50147b18125ce(),this.data)}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(MainApplication.prototype),"connectedCallback",this).call(this);this.getData()}},{key:"createRenderRoot",value:function createRenderRoot(){return this}}],[{key:"properties",get:function get(){return{data:{type:Object}}}}]);return MainApplication}(LitElement);_exports.MainApplication=MainApplication;customElements.define("main-application",MainApplication);var mainApplication={MainApplication:MainApplication};_exports.$mainApplication=mainApplication});