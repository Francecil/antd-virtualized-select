(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/_util/getPrefixCls.ts":function(e,t,n){"use strict";function i(e,t){var n=this.props.prefixCls,i=void 0===n?"ant-virtualized":n;return t||(e?"".concat(i,"-").concat(e):i)}n.d(t,"a",function(){return i}),i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPrefixCls",filename:"src\\_util\\getPrefixCls.ts"}})},"./src/tree/Tree.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),o=n("react"),d=n.n(o),c=n("./node_modules/react-window/dist/index.esm.js"),h=n("./node_modules/antd/lib/config-provider/renderEmpty.js"),u=n.n(h),f=n("./src/_util/getPrefixCls.ts"),p=n("./src/tree/TreeNode.tsx"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");"undefined"!==typeof ITreeNodeOptions&&ITreeNodeOptions&&ITreeNodeOptions===Object(ITreeNodeOptions)&&Object.isExtensible(ITreeNodeOptions)&&Object.defineProperty(ITreeNodeOptions,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ITreeNodeOptions",filename:"src\\tree\\store\\tree-node.ts"}});var m=["_level","_filterVisible","_parent","_loading","_loaded","_remote","_keyField","children","setChildren"];"undefined"!==typeof Indexable&&Indexable&&Indexable===Object(Indexable)&&Object.isExtensible(Indexable)&&Object.defineProperty(Indexable,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Indexable",filename:"src\\tree\\store\\tree-node.ts"}});var v,y=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];for(var s in Object(i.a)(this,e),this._keyField=a,this._remote=r,this._level=0,this.checked=!1,this.selected=!1,this.indeterminate=!1,this.disabled=!1,this.expand=!1,this.visible=!0,this._filterVisible=!0,this._parent=null,this.children=[],this.isLeaf=!1,this._loading=!1,this._loaded=!1,this.render=void 0,t)-1===m.indexOf(s)&&(this[s]=t[s]);null==this[a]&&(this[a]=Math.random().toString(36).substring(2)),this._parent=n,this._parent&&(this._level=this._parent._level+1),this.visible=null===this._parent||this._parent.expand&&this._parent.visible,Array.isArray(t.children)&&this.setChildren(t.children),this.children.length&&(this._loaded=!0),this._remote||(this.isLeaf=!this.children.length)}return Object(s.a)(e,[{key:"setChildren",value:function(t){var n=this;this.children=t.map(function(t){return new e(Object.assign({},t),n,n._keyField,n._remote)})}}]),e}();"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeNode",filename:"src\\tree\\store\\tree-node.ts"}}),"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeNode",filename:"src\\tree\\store\\tree-node.ts"}}),function(e){e.none="none",e.parents="parents",e.children="children"}(v||(v={})),"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ignoreEnum",filename:"src\\tree\\const\\index.ts"}}),"undefined"!==typeof Parameters&&Parameters&&Parameters===Object(Parameters)&&Object.isExtensible(Parameters)&&Object.defineProperty(Parameters,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Parameters",filename:"src\\tree\\const\\index.ts"}}),"undefined"!==typeof IgnoreType&&IgnoreType&&IgnoreType===Object(IgnoreType)&&Object.isExtensible(IgnoreType)&&Object.defineProperty(IgnoreType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IgnoreType",filename:"src\\tree\\const\\index.ts"}}),"undefined"!==typeof TreeNodeKeyType&&TreeNodeKeyType&&TreeNodeKeyType===Object(TreeNodeKeyType)&&Object.isExtensible(TreeNodeKeyType)&&Object.defineProperty(TreeNodeKeyType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeNodeKeyType",filename:"src\\tree\\const\\index.ts"}}),"undefined"!==typeof RenderTreeNodeType&&RenderTreeNodeType&&RenderTreeNodeType===Object(RenderTreeNodeType)&&Object.isExtensible(RenderTreeNodeType)&&Object.defineProperty(RenderTreeNodeType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RenderTreeNodeType",filename:"src\\tree\\const\\index.ts"}}),"undefined"!==typeof IEventNames&&IEventNames&&IEventNames===Object(IEventNames)&&Object.isExtensible(IEventNames)&&Object.defineProperty(IEventNames,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IEventNames",filename:"src\\tree\\store\\tree-store.ts"}}),"undefined"!==typeof ListenerType&&ListenerType&&ListenerType===Object(ListenerType)&&Object.isExtensible(ListenerType)&&Object.defineProperty(ListenerType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListenerType",filename:"src\\tree\\store\\tree-store.ts"}}),"undefined"!==typeof FilterFunctionType&&FilterFunctionType&&FilterFunctionType===Object(FilterFunctionType)&&Object.isExtensible(FilterFunctionType)&&Object.defineProperty(FilterFunctionType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FilterFunctionType",filename:"src\\tree\\store\\tree-store.ts"}});var g=function(){function e(t){Object(i.a)(this,e),this.options=t,this.data=[],this.flatData=[],this.mapData=Object.create(null),this.unloadCheckedKeys=[],this.unloadSelectedKey=null,this.currentSelectedKey=null,this.listenersMap={},console.log("tree-store init")}return Object(s.a)(e,[{key:"setData",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(var a in this.data=e.map(function(e){return new y(e,null,t.options.keyField,!!t.options.load)}),this.mapData)delete this.mapData[a];this.currentSelectedKey=null,this.flatData=this.flattenData(this.data),this.setUnloadCheckedKeys(i||[]),n&&(this.currentSelectedKey=null,this.setUnloadSelectedKey(n)),this.emit("visible-data-change"),this.emit("set-data")}},{key:"setChecked",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=this.mapData[e];if(!r)return this.setUnloadChecked(e,t,n,i);r.disabled||r.checked&&t||(r.checked||r.indeterminate||t)&&(this.options.cascade?(this.checkNodeDownward(r,t,a),this.checkNodeUpward(r)):r.checked=t,n&&(r.checked?this.emit("check",r):this.emit("uncheck",r)),this.triggerCheckedChange(n,i))}},{key:"setUnloadChecked",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=this.findIndex(e,this.unloadCheckedKeys);t?-1===a&&this.unloadCheckedKeys.push(e):-1!==a&&this.unloadCheckedKeys.splice(a,1),this.triggerCheckedChange(n,i)}},{key:"setCheckedKeys",value:function(e,t){var n=this,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e.forEach(function(e){n.setChecked(e,t,!1,!1)}),this.triggerCheckedChange(i,a)}},{key:"checkAll",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.options.cascade){!function t(n){n.forEach(function(n){n.disabled?t(n.children):e.setChecked(n[e.options.keyField],!0,!1,!1)})}(this.data)}else for(var i=this.flatData.length,a=0;a<i;a++){var r=this.flatData[a];this.setChecked(r[this.options.keyField],!0,!1,!1)}this.triggerCheckedChange(t,n)}},{key:"clearChecked",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.getCheckedNodes().forEach(function(t){e.setChecked(t[e.options.keyField],!1,!1,!1)}),this.unloadCheckedKeys=[],this.triggerCheckedChange(t,n)}},{key:"triggerCheckedChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e&&this.emit("checked-change",this.getCheckedNodes(),this.getCheckedKeys()),t&&this.emit("render-data-change")}},{key:"setSelected",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=this.mapData[e];if(!a)return this.setUnloadSelected(e,t,n,i);a.disabled||a.selected!==t&&(e===this.currentSelectedKey?t||(a.selected=t,this.currentSelectedKey=null):t&&(null===this.currentSelectedKey?(a.selected=t,this.currentSelectedKey=a[this.options.keyField]):(this.mapData[this.currentSelectedKey]&&(this.mapData[this.currentSelectedKey].selected=!1),a.selected=t,this.currentSelectedKey=a[this.options.keyField])),n&&(a.selected?this.emit("select",a):this.emit("unselect",a),this.emit("selected-change",this.getSelectedNode(),this.getSelectedKey())),i&&this.emit("render-data-change"))}},{key:"setUnloadSelected",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];t?(this.currentSelectedKey&&this.setSelected(this.currentSelectedKey,!1,!1,!1),this.unloadSelectedKey=e):this.unloadSelectedKey===e&&(this.unloadSelectedKey=null),n&&this.emit("selected-change",this.getSelectedNode(),this.getSelectedKey()),i&&this.emit("render-data-change")}},{key:"clearSelected",value:function(){this.currentSelectedKey&&this.mapData[this.currentSelectedKey]&&this.setSelected(this.currentSelectedKey,!1)}},{key:"setExpand",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=this.mapData[e];if(s&&(i||!s.isLeaf)&&s.expand!==t){if(!s.isLeaf){if("function"===typeof this.options.load){if(!s._loaded&&!s._loading&&t)return s._loading=!0,r&&this.emit("visible-data-change"),void new Promise(function(e,t){(0,n.options.load)(s,e,t)}).then(function(e){if(Array.isArray(e)){var i,a=n.findIndex(s);if(-1===a)return;s._loaded=!0,s.expand=t,s.setChildren(e);var r=n.getCheckedKeys(),l=n.flattenData(s.children,null===n.getSelectedKey);(i=n.flatData).splice.apply(i,[a+1,0].concat(Object(b.a)(l))),n.setUnloadCheckedKeys(r),n.unloadSelectedKey&&n.setUnloadSelectedKey(n.unloadSelectedKey),n.emit("set-data")}}).catch(function(e){var t=e;e instanceof Error||(t=new Error(e)),console.error(t)}).then(function(){s._loading=!1,a&&n.emit("expand",s),r&&n.emit("visible-data-change")});if(s._loading)return}s.expand=t;for(var l=Object(b.a)(s.children);l.length;)l[0].expand&&l[0].children.length&&l.push.apply(l,Object(b.a)(l[0].children)),!1===l[0]._filterVisible?l[0].visible=!1:l[0].visible=null===l[0]._parent||l[0]._parent.expand&&l[0]._parent.visible,l.shift();a&&this.emit("expand",s),r&&this.emit("visible-data-change")}i&&s._parent&&t&&this.setExpand(s._parent[this.options.keyField],t,i,!1,r)}}},{key:"setExpandKeys",value:function(e,t){var n=this,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e.forEach(function(e){n.setExpand(e,t,!1,!1,!1)}),i&&this.emit("visible-data-change")}},{key:"setExpandAll",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.flatData.forEach(function(n){t.options.load&&!n._loaded||t.setExpand(n[t.options.keyField],e,!1,!1,!1)}),n&&this.emit("visible-data-change")}},{key:"getCheckedNodes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.ignoreMode;if(e===v.children){var t=[];return function e(n){n.forEach(function(n){n.checked?t.push(n):!n.isLeaf&&n.indeterminate&&e(n.children)})}(this.data),t}return this.flatData.filter(function(t){return e===v.parents?t.checked&&t.isLeaf:t.checked})}},{key:"getCheckedKeys",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.ignoreMode;return this.getCheckedNodes(t).map(function(t){return t[e.options.keyField]}).concat(this.unloadCheckedKeys)}},{key:"getIndeterminateNodes",value:function(){return this.flatData.filter(function(e){return e.indeterminate})}},{key:"getSelectedNode",value:function(){return null===this.currentSelectedKey?null:this.mapData[this.currentSelectedKey]||null}},{key:"getSelectedKey",value:function(){return this.currentSelectedKey||this.unloadSelectedKey||null}},{key:"getUnloadCheckedKeys",value:function(){return this.unloadCheckedKeys}},{key:"getExpandNodes",value:function(){return this.flatData.filter(function(e){return!e.isLeaf&&e.expand})}},{key:"getExpandKeys",value:function(){var e=this;return this.getExpandNodes().map(function(t){return t[e.options.keyField]})}},{key:"getNode",value:function(e){return this.mapData[e]||null}},{key:"insertBefore",value:function(e,t){var n=this.getInsertedNode(e,t);if(!n)return null;this.remove(n[this.options.keyField],!1);var i=this.mapData[t]._parent,a=this.findIndex(t,i&&i.children),r=this.findIndex(t);return this.insertIntoStore(n,i,a,r),this.emit("visible-data-change"),n}},{key:"insertAfter",value:function(e,t){var n=this.getInsertedNode(e,t);if(!n)return null;this.remove(n[this.options.keyField],!1);for(var i=this.mapData[t],a=i._parent,r=this.findIndex(t,a&&a.children)+1,s=this.flatData.length,l=this.findIndex(t),o=l+1,d=l+1;d<s;d++)if(this.flatData[d]._level<=i._level){o=d;break}return this.insertIntoStore(n,a,r,o),this.emit("visible-data-change"),n}},{key:"append",value:function(e,t){var n=this.mapData[t];if(!n.isLeaf){var i=n.children.length;return this.insertAfter(e,n.children[i-1][this.options.keyField])}var a=this.getInsertedNode(e,t,!0);if(!a)return null;this.remove(a[this.options.keyField],!1);var r=this.findIndex(t)+1;return this.insertIntoStore(a,n,0,r),this.emit("visible-data-change"),a}},{key:"prepend",value:function(e,t){var n=this.mapData[t];if(!n.isLeaf)return this.insertBefore(e,n.children[0][this.options.keyField]);var i=this.getInsertedNode(e,t,!0);if(!i)return null;this.remove(i[this.options.keyField],!1);var a=this.findIndex(t)+1;return this.insertIntoStore(i,n,0,a),this.emit("visible-data-change"),i}},{key:"remove",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.mapData[e];if(!i)return null;var a=this.findIndex(i);if(-1===a)return null;for(var r=1,s=this.flatData.length,l=a+1;l<s&&this.flatData[l]._level>i._level;l++)r++;this.flatData.splice(a,r);if(function e(n){var i=t.mapData[n];delete t.mapData[n],i.children.forEach(function(n){return e(n[t.options.keyField])})}(e),i._parent){var o=this.findIndex(i,i._parent.children);-1!==o&&i._parent.children.splice(o,1),i._parent.isLeaf=!i._parent.children.length,i._parent.isLeaf&&(i._parent.expand=!1,i._parent.indeterminate=!1),this.updateMovingNodeStatus(i)}return n&&this.emit("visible-data-change"),i}},{key:"getInsertedNode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.mapData[t];if(!i)return null;var a=n?i:i._parent;if(e instanceof y)return e[this.options.keyField]===t?null:e;if("object"===typeof e){if(e[this.options.keyField]===t)return null;var r=this.mapData[e[this.options.keyField]];return r||new y(e,a,this.options.keyField,!!this.options.load)}return this.mapData[e]&&e!==t?this.mapData[e]:null}},{key:"insertIntoStore",value:function(e,t,n,i){var a;if(-1!==i){-1!==n&&t&&t.children.splice(n,0,e),e._parent=t,t&&(t.isLeaf=!1,this.setExpand(t[this.options.keyField],!0,!1,!1,!1));var r=this.flattenData([e]);e._level=t?t._level+1:0,r.forEach(function(e){return e._level=e._parent?e._parent._level+1:0}),(a=this.flatData).splice.apply(a,[i,0].concat(Object(b.a)(r))),this.updateMovingNodeStatus(e)}}},{key:"updateMovingNodeStatus",value:function(e){this.checkNodeUpward(e),this.triggerCheckedChange(),e.selected&&this.setSelected(e[this.options.keyField],!0)}},{key:"filter",value:function(e,t){var n=this,i=[];this.flatData.forEach(function(n){n._filterVisible=n._parent&&n._parent._filterVisible||t(e,n),n.visible=n._filterVisible,n.visible&&i.push(n)}),i.forEach(function(e){for(var t=e._parent;t;)t._filterVisible=!0,t.visible=t._filterVisible,n.setExpand(t[n.options.keyField],!0,!1,!1,!1),t=t._parent}),this.emit("visible-data-change")}},{key:"setUnloadCheckedKeys",value:function(e){this.unloadCheckedKeys=e;for(var t=e.concat(),n=this.unloadCheckedKeys.length-1;n>=0;n--){var i=this.unloadCheckedKeys[n];this.mapData[i]&&(this.setChecked(i,!0,!1,!1),this.unloadCheckedKeys.splice(n,1))}var a=this.getCheckedKeys();a.length===t.length&&a.every(function(e){return t.some(function(t){return t===e})})||this.emit("checked-change",this.getCheckedNodes(),a)}},{key:"setUnloadSelectedKey",value:function(e){var t=this.getSelectedKey();this.mapData[e]?(this.setSelected(e,!0,!1),this.unloadSelectedKey=null):(this.currentSelectedKey&&this.setSelected(this.currentSelectedKey,!1,!1),this.unloadSelectedKey=e);var n=this.getSelectedKey();n!==t&&this.emit("selected-change",this.getSelectedNode(),n)}},{key:"flattenData",value:function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=e.length,a=0;a<i;a++){var r=e[a],s=r[this.options.keyField];if(n.push(r),this.mapData[s])throw new Error("[CTree] Duplicate tree node key.");this.mapData[s]=r,r.checked&&this.options.cascade&&(this.checkNodeDownward(r,!0),this.checkNodeUpward(r)),r.selected&&t&&(this.clearSelected(),this.currentSelectedKey=r[this.options.keyField],this.unloadSelectedKey=null,this.emit("selected-change",r,this.currentSelectedKey)),!this.options.defaultExpandAll&&!r.expand||this.options.load||r.isLeaf||(r.expand=!1,this.setExpand(r[this.options.keyField],!0,!1,!1,!1)),r.children.length&&this.flattenData(r.children,t,n)}return n}},{key:"checkNodeDownward",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e.children.forEach(function(e){n.checkNodeDownward(e,t,i)}),e.isLeaf||this.options.load&&!e.children.length){if(!e.disabled){if(i&&!this.options.filteredNodeCheckable&&!e._filterVisible)return;e.checked=t,e.indeterminate=!1}}else this.checkParentNode(e)}},{key:"checkNodeUpward",value:function(e){for(var t=e._parent;t;)this.checkParentNode(t),t=t._parent}},{key:"checkParentNode",value:function(e){var t=e.children.length;if(t){for(var n=!1,i=!1,a=!1,r=0;r<t;r++){var s=e.children[r];if(s.checked?n=!0:i=!0,n&&i||s.indeterminate){a=!0,e.checked=!1,e.indeterminate=!0;break}}a||(e.checked=n,e.indeterminate=!1)}}},{key:"findIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.flatData;if(null!==t)for(var n=e instanceof y?e[this.options.keyField]:e,i=t.length,a=0;a<i;a++)if(t[0]instanceof y){if(n===t[a][this.options.keyField])return a}else if(n===t[a])return a;return-1}},{key:"on",value:function(e,t){var n=this;this.listenersMap[e]||(this.listenersMap[e]=[]);(Array.isArray(t)?t:[t]).forEach(function(t){-1===n.listenersMap[e].indexOf(t)&&n.listenersMap[e].push(t)})}},{key:"off",value:function(e,t){if(this.listenersMap[e])if(t){var n=this.listenersMap[e].indexOf(t);n>-1&&this.listenersMap[e].splice(n,1)}else this.listenersMap[e]=[]}},{key:"emit",value:function(e){if(this.listenersMap[e]){for(var t=this.listenersMap[e].length,n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];for(var r=0;r<t;r++){var s;(s=this.listenersMap[e])[r].apply(s,i)}}}}]),e}();"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeStore",filename:"src\\tree\\store\\tree-store.ts"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeStore",filename:"src\\tree\\store\\tree-store.ts"}});var k=g;"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeStore",filename:"src\\tree\\store\\index.ts"}}),"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeNode",filename:"src\\tree\\store\\index.ts"}}),n.d(t,"a",function(){return _});"undefined"!==typeof IProps&&IProps&&IProps===Object(IProps)&&Object.isExtensible(IProps)&&Object.defineProperty(IProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IProps",filename:"src\\tree\\Tree.tsx"}}),"undefined"!==typeof IState&&IState&&IState===Object(IState)&&Object.isExtensible(IState)&&Object.defineProperty(IState,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IState",filename:"src\\tree\\Tree.tsx"}});var _=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(a.a)(this,Object(r.a)(t).call(this,e))).avList=void 0,n.store=void 0,n.blockNodes=void 0,n.updateBlockNodes=function(){n.blockNodes=n.store.flatData.filter(function(e){return e.visible}),n.updateBlockData(),n.updateRender()},n.updateBlockData=function(){var e=n.props.optionHeight;n.setState({blockLength:n.blockNodes.length,blockAreaHeight:e*n.blockNodes.length})},n.updateRender=function(){n.updateRenderNodes()},n.updateRenderNodes=function(){n.setState({renderNodes:n.blockNodes.map(function(e){return Object.assign({},e,{_parent:null,children:[]})})})},n.scrollActiveItemToView=function(){var e=n.store.getSelectedNode();if(e){var t=n.store.findIndex(e);n.avList.current.scrollToItem(t)}},n.emitSelectableInput=function(e,t){var i=n.props,a=i.selectable,r=i.checkable,s=i.onSelect;a&&!r&&(s&&s([t||""],{selected:!0,selectedNodes:[],node:e,event:null}))},n.handleNodeSelect=function(e,t){var i=n.props,a=i.onChange,r=i.keyField;n.setSelected(t[r],!t.selected),a&&a(t[r],t)},n.handleNodeExpand=function(e){var t=n.getNode(e),i=n.props.keyField;n.store.setExpand(t[i],!t.expand)},n.handleChange=function(e){var t=n.props.onChange;t&&t(e,null)},n.getRrenderHeight=function(){var e=n.state.blockAreaHeight,t=n.props.height;return-1===t?e:e>t?t:e},n.getNode=function(e){return n.store.getNode(e)},n.setSelected=function(e,t){n.store.setSelected(e,t)},n.getNodesCount=function(){return n.store.flatData.length},n.getCurrentVisibleNodes=function(){return n.store.flatData.filter(function(e){return e.visible})},n.state={renderNodes:[],blockLength:0,blockAreaHeight:0},n.avList=d.a.createRef();var s=n.props,l=s.keyField,o=s.ignoreMode,c=s.defaultExpandAll;return n.store=new k({keyField:l,ignoreMode:o,defaultExpandAll:c}),n.blockNodes=[],n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.store.on("visible-data-change",this.updateBlockNodes),this.store.on("render-data-change",this.updateRender),this.store.on("selected-change",this.emitSelectableInput);var e=this.props.treeData;this.store.setData(e)}},{key:"componentDidUpdate",value:function(){}}]),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.keyField,i=t.titleField,a=t.prefixCls,r=t.optionHeight,s=t.render,l=this.state,o=l.renderNodes,h=l.blockLength,b=f.a.call(this,"tree",a);return d.a.createElement("div",{className:b},h?d.a.createElement(c.a,{ref:this.avList,className:"".concat(b,"-menu"),height:this.getRrenderHeight(),itemCount:h,itemSize:function(){return r},width:""},function(t){var a=t.index,r=t.style,l=o[a],c={onSelect:e.handleNodeSelect,onNodeExpand:e.handleNodeExpand,titleField:i,data:l,style:r,keyField:n,prefixCls:b,render:s,fullData:e.getNode(l[n])};return d.a.createElement(p.a,c)}):this.getNotFoundContent(u.a))}},{key:"filter",value:function(e,t){var n=this.props,i=n.titleField,a=n.filterMethod;t=t||a||function(e,t){var n=t[i];return!(null==n||!n.toString)&&n.toString().toLowerCase().indexOf(e.toLowerCase())>-1},this.store.filter(e,t)}},{key:"getNotFoundContent",value:function(e){var t=this.props.notFoundContent;return void 0!==t?t:e("Select")}}]),t}(o.Component);_.defaultProps={height:256,optionHeight:32,titleField:"title",keyField:"id",treeData:[],ignoreMode:v.none},"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tree",filename:"src\\tree\\Tree.tsx"}}),"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tree",filename:"src\\tree\\Tree.tsx"}})},"./src/tree/TreeNode.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=(n("./node_modules/antd/es/icon/style/index.js"),n("./node_modules/antd/es/icon/index.js")),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),h=n("react"),u=n.n(h),f=n("./node_modules/classnames/index.js"),p=n.n(f);"undefined"!==typeof IProps&&IProps&&IProps===Object(IProps)&&Object.isExtensible(IProps)&&Object.defineProperty(IProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IProps",filename:"src\\tree\\TreeNode.tsx"}}),"undefined"!==typeof IState&&IState&&IState===Object(IState)&&Object.isExtensible(IState)&&Object.defineProperty(IState,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IState",filename:"src\\tree\\TreeNode.tsx"}});var b="open",m="close",v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(d.a)(t).call(this,e))).onSelectorClick=function(){},n.onSelectorDoubleClick=function(){},n.handleSelect=function(e){var t=n.props,i=t.onSelect,a=t.data;i&&i(e,a)},n.onCheck=function(){},n.onMouseEnter=function(){},n.onMouseLeave=function(){},n.onExpand=function(){var e=n.props,t=e.data,i=e.onNodeExpand,a=e.keyField;t.isLeaf||i(t[a])},n.isDisabled=function(){},n.isCheckable=function(){},n.renderFunction=function(){var e=n.props,t=e.data,i=e.render;return t.render||i||null},n.renderSwitcherIcon=function(){var e=n.props,t=e.prefixCls;return e.data.isLeaf?null:u.a.createElement(r.a,{type:"caret-down",className:"".concat(t,"-switcher-icon")})},n.renderSwitcher=function(){var e=n.props,t=e.prefixCls,i=e.data;if(i.isLeaf)return u.a.createElement("span",{className:p()("".concat(t,"-switcher"),"".concat(t,"-switcher-noop"))},n.renderSwitcherIcon());var a=p()("".concat(t,"-switcher"),"".concat(t,"-switcher_").concat(i.expand?b:m));return u.a.createElement("span",{onClick:n.onExpand,className:a},n.renderSwitcherIcon())},n.state={},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e,t=this.props,n=t.style,r=t.prefixCls,s=t.data,l=t.titleField,o=t.fullData,d=s.disabled,c=(s.expand,s.selected),h=(s.isLeaf,s._level),f=s.visible,b=p()("".concat(r,"-node-content-wrapper"),(e={},Object(a.a)(e,"".concat(r,"-node-disabled"),d),Object(a.a)(e,"".concat(r,"-node-selected"),c),e)),m=h>0?24*(h-1)+18:0,v=Object(i.a)({},n,{padding:"0 0 0 ".concat(m,"px")}),y=d?{}:{onClick:this.handleSelect},g=p()("".concat(r,"-node"),Object(a.a)({},"".concat(r,"-node-open"),f)),k=this.renderFunction();return u.a.createElement("div",{style:v,className:g},this.renderSwitcher(),u.a.createElement("span",Object.assign({},y,{className:b,title:s[l]}),k&&o?k(o):s[l]))}}]),t}(u.a.Component);t.a=v,"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeNode",filename:"src\\tree\\TreeNode.tsx"}})},"./src/tree/_mock/treeData.js":function(e,t,n){"use strict";var i=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-1",key:"0-0-1"},{title:"Child Node2",value:"0-0-2",key:"0-0-2",children:Array.from(Array.from({length:50}).map(function(e,t){return{title:"Child Node"+t,value:"0-0-2-"+t,key:"0-0-2-"+t}}))}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node1",value:"0-1-1",key:"0-1-1"},{title:"Child Node2",value:"0-1-2",key:"0-1-2"}]}];t.a=i,"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"treeData",filename:"src\\tree\\_mock\\treeData.js"}})}}]);