(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/tree-select/index.mdx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/icon/style/index.js");var l=n("./node_modules/antd/es/icon/index.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("react"),o=n.n(a),c=n("./node_modules/@mdx-js/react/dist/index.es.js"),i=n("./node_modules/docz/dist/index.esm.js"),s=(n("./node_modules/antd/es/select/style/index.js"),n("./node_modules/antd/es/select/index.js")),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),h=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),m=n("./node_modules/omit.js/es/index.js"),f=n("./src/tree/Tree.tsx");"undefined"!==typeof IState&&IState&&IState===Object(IState)&&Object.isExtensible(IState)&&Object.defineProperty(IState,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IState",filename:"src\\tree-select\\index.tsx"}}),"undefined"!==typeof IProp&&IProp&&IProp===Object(IProp)&&Object.isExtensible(IProp)&&Object.defineProperty(IProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IProp",filename:"src\\tree-select\\index.tsx"}});var j=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).avSelect=void 0,n.tree=void 0,n.saveSelect=function(e){n.avSelect=e},n.scrollActiveItemToView=function(){n.tree.current&&n.tree.current.scrollActiveItemToView()},n.filterTree=function(e){n.tree.current&&n.tree.current.filter(e)},n.handleSearch=function(e){n.filterTree(e)},n.handleChange=function(e){console.log("change"),n.filterTree("")},n.handleDropdownVisibleChange=function(e){n.setState({open:e})},n.handleBlur=function(){n.setState({})},n.handleSelect=function(e,t){var l=t.node,r=n.props,a=r.onSelect,o=r.keyField,c=r.titleField,i=r.onChange;a&&a(l[o],l,null),i&&i(l[o],l[c],null);var s={key:l[o],label:l[c]};n.setState({selectValue:s,open:!1},function(){n.avSelect.rcSelect.setInputValue(""),n.avSelect.focus()})},n.handleEventPrevent=function(e){return e.preventDefault()},n.renderMenu=function(e){var t=n.props,l=t.treeRender,a=Object(r.a)(t,["treeRender"]),c=Object(m.default)(a,["onChange"]);return o.a.createElement("div",{onMouseDown:n.handleEventPrevent},o.a.createElement(f.a,Object.assign({},c,{ref:n.tree,render:l,onSelect:n.handleSelect})))},n.state={open:!1,selectValue:void 0},n.tree=o.a.createRef(),n}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.open;!t.open&&n&&this.scrollActiveItemToView()}}]),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.open,l=t.selectValue,a=this.props,c=a.titleField,i=Object(r.a)(a,["titleField"]),d=Object(m.default)(i,["onSelect","labelInValue"]);return o.a.createElement(s.a,Object.assign({},d,{value:l,ref:this.saveSelect,open:n,onSearch:this.handleSearch,onChange:this.handleChange,onBlur:function(){return e.handleBlur()},labelInValue:!0,optionLabelProp:c,onDropdownVisibleChange:this.handleDropdownVisibleChange,dropdownRender:this.renderMenu,dropdownStyle:{overflow:"hidden"}}))}}]),t}(a.Component);j.defaultProps={titleField:"title",keyField:"id"},"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeSelect",filename:"src\\tree-select\\index.tsx"}}),"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeSelect",filename:"src\\tree-select\\index.tsx"}});n("./src/tree-select/style/index.less");var y=n("./src/tree/_mock/treeData.js"),O=[{title:"\u7f51\u70b9",key:"vlan",children:Array.from({length:1e3}).map(function(e,t){return{title:"vlan-".concat(t),key:"vlan-".concat(t),type:"1"}})},{title:"\u6807\u7b7e",key:"label",children:Array.from({length:1e3}).map(function(e,t){return{title:"label-".concat(t),key:"label-".concat(t),type:"2"}})},{title:"\u7f51\u6bb5",key:"net",children:Array.from({length:1e3}).map(function(e,t){return{title:"net-".concat(t),key:"net-".concat(t),type:"3"}})}],_=O;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"data",filename:"src\\tree\\_mock\\treeSelectData.js"}}),n.d(t,"default",function(){return x});var S={},v="wrapper";function x(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(v,Object.assign({},S,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"treeselect-\u6811\u9009\u62e9"},"TreeSelect \u6811\u9009\u62e9"),Object(c.b)("p",null,"\u6811\u578b\u9009\u62e9\u63a7\u4ef6\u3002"),Object(c.b)("h2",{id:"\u5f15\u5165"},"\u5f15\u5165"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{}),"import { TreeSelect } from 'antd-virtualized';\n")),Object(c.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(c.b)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(c.b)(i.c,{__position:0,__code:'<TreeSelect\n  placeholder="\u652f\u6301\u5927\u6570\u636e\u7684TreeSelect"\n  treeData={treeData}\n  style={{ width: 200 }}\n  allowClear\n  showSearch\n  selectable\n/>',__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Icon:l.a,TreeSelect:j,treeData:y.a,treeSelectData:_},__codesandbox:"undefined",mdxType:"Playground"},Object(c.b)(j,{placeholder:"\u652f\u6301\u5927\u6570\u636e\u7684TreeSelect",treeData:y.a,style:{width:200},allowClear:!0,showSearch:!0,selectable:!0,mdxType:"TreeSelect"})),Object(c.b)("h3",{id:"\u7efc\u5408\u5b9e\u4f8b\uff1a\u56fe\u6807\uff0c\u9ed8\u8ba4\u5c55\u5f00"},"\u7efc\u5408\u5b9e\u4f8b\uff1a\u56fe\u6807\uff0c\u9ed8\u8ba4\u5c55\u5f00"),Object(c.b)(i.c,{__position:1,__code:"<TreeSelect\n  showSearch\n  style={{ width: 300 }}\n  placeholder=\"\u8bf7\u8f93\u5165\"\n  defaultExpandAll\n  treeData={treeSelectData}\n  onSelect={(value, node, extra) => console.log(value, node, extra)}\n  keyField=\"key\"\n  titleField=\"title\"\n  selectable\n  treeRender={node => {\n    if (node.children && node.children.length) {\n      return (\n        <span>\n          {node.title} ({node.children.length})\n        </span>\n      )\n    } else {\n      let icon = ''\n      if (node.type === '1') {\n        icon = 'home'\n      } else if (node.type === '2') {\n        icon = 'tag'\n      } else if (node.type === '3') {\n        icon = 'edit'\n      }\n      return (\n        <span>\n          <Icon type={icon} /> {node.title}\n        </span>\n      )\n    }\n  }}\n/>",__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Icon:l.a,TreeSelect:j,treeData:y.a,treeSelectData:_},__codesandbox:"undefined",style:{height:"500px"},mdxType:"Playground"},Object(c.b)(j,{showSearch:!0,style:{width:300},placeholder:"\u8bf7\u8f93\u5165",defaultExpandAll:!0,treeData:_,onSelect:function(e,t,n){return console.log(e,t,n)},keyField:"key",titleField:"title",selectable:!0,treeRender:function(e){if(e.children&&e.children.length)return Object(c.b)("span",null,e.title," (",e.children.length,")");var t="";return"1"===e.type?t="home":"2"===e.type?t="tag":"3"===e.type&&(t="edit"),Object(c.b)("span",null,Object(c.b)(l.a,{type:t,mdxType:"Icon"})," ",e.title)},mdxType:"TreeSelect"})),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)(i.d,{of:j,mdxType:"Props"}))}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\tree-select\\index.mdx"}}),x.isMDXComponent=!0},"./src/tree-select/style/index.less":function(e,t,n){}}]);