(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/tree/index.mdx":function(e,t,r){"use strict";r.r(t);r("./node_modules/antd/es/icon/style/index.js");var a=r("./node_modules/antd/es/icon/index.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("react"),c=r.n(o),l=r("./node_modules/@mdx-js/react/dist/esm.js"),s=r("./node_modules/father/node_modules/docz/dist/index.esm.js"),d=r("./src/tree/Tree.tsx"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),b=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),u=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),m=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),h=(r("./node_modules/antd/es/input/style/index.js"),r("./node_modules/antd/es/input/index.js").a.Search);"undefined"!==typeof TreeSearchProps&&TreeSearchProps&&TreeSearchProps===Object(TreeSearchProps)&&Object.isExtensible(TreeSearchProps)&&Object.defineProperty(TreeSearchProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeSearchProps",filename:"src\\tree\\TreeSearch.tsx"}}),"undefined"!==typeof IState&&IState&&IState===Object(IState)&&Object.isExtensible(IState)&&Object.defineProperty(IState,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IState",filename:"src\\tree\\TreeSearch.tsx"}});var j=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(b.a)(this,Object(p.a)(t).call(this,e))).tree=void 0,r.handleChange=function(e){var t=e.target.value;r.filterTree(t)},r.handleSearch=function(e,t){r.filterTree(e)},r.filterTree=function(e){r.tree.current&&r.tree.current.filter(e)},r.state={},r.tree=c.a.createRef(),r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}}]),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showSearch,r=Object(n.a)(e,["showSearch"]);return c.a.createElement("div",null,t&&c.a.createElement(h,{style:{marginBottom:8},placeholder:"Search",onChange:this.handleChange,onSearch:this.handleSearch}),c.a.createElement(d.a,Object.assign({},r,{ref:this.tree})))}}]),t}(o.Component);j.defaultProps={showSearch:!0};var f=j;"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TreeSearch",filename:"src\\tree\\TreeSearch.tsx"}});var T=r("./src/tree/TreeNode.tsx");d.a.Search=f,d.a.TreeNode=T.a;var O=d.a;"undefined"!==typeof d.a&&d.a&&d.a===Object(d.a)&&Object.isExtensible(d.a)&&Object.defineProperty(d.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tree",filename:"src\\tree\\index.tsx"}});r("./src/tree/style/index.less");var _=r("./src/tree/_mock/treeData.js"),y=[{title:"Node1",value:"0-0",key:"0-0",icon:"question",children:[{icon:"question",title:"Child Node1",value:"0-0-1",key:"0-0-1"},{title:"Child Node2",value:"0-0-2",key:"0-0-2",children:Array.from(Array.from({length:50}).map((function(e,t){return{icon:"info-circle",title:"Child Node"+t,value:"0-0-2-"+t,key:"0-0-2-"+t}})))}]},{title:"Node2",value:"0-1",key:"0-1",render:function(e){return"\u5355\u8282\u70b9render"},children:[{title:"Child Node1",value:"0-1-1",key:"0-1-1"},{title:"Child Node2",value:"0-1-2",key:"0-1-2"}]}],x=y;"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"treeData",filename:"src\\tree\\_mock\\renderTreeData.js"}}),r.d(t,"default",(function(){return g}));var S={};function g(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object.assign({},S,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"tree-\u6811\u5f62\u63a7\u4ef6"},"Tree \u6811\u5f62\u63a7\u4ef6"),Object(l.b)("p",null,"\u6587\u4ef6\u5939\u3001\u7ec4\u7ec7\u67b6\u6784\u3001\u751f\u7269\u5206\u7c7b\u3001\u56fd\u5bb6\u5730\u533a\u7b49\u7b49\uff0c\u4e16\u95f4\u4e07\u7269\u7684\u5927\u591a\u6570\u7ed3\u6784\u90fd\u662f\u6811\u5f62\u7ed3\u6784\u3002\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"\u6811\u63a7\u4ef6"),"\u53ef\u4ee5\u5b8c\u6574\u5c55\u73b0\u5176\u4e2d\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5e76\u5177\u6709\u5c55\u5f00\u6536\u8d77\u9009\u62e9\u7b49\u4ea4\u4e92\u529f\u80fd\u3002"),Object(l.b)("h2",{id:"\u5f15\u5165"},"\u5f15\u5165"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"import { Tree } from 'antd-virtualized';\nconst TreeSearch = Tree.Search\n")),Object(l.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(l.b)("h3",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(l.b)(s.c,{__position:0,__code:'<Tree placeholder="\u652f\u6301\u5927\u6570\u636e\u7684Tree" treeData={treeData} defaultExpandAll />',__scope:{props:this?this.props:r,Playground:s.c,Props:s.d,Icon:a.a,Tree:O,treeData:_.a,renderTreeData:x},style:{backgroundColor:"#dafafa"},mdxType:"Playground"},Object(l.b)(O,{placeholder:"\u652f\u6301\u5927\u6570\u636e\u7684Tree",treeData:_.a,defaultExpandAll:!0,mdxType:"Tree"})),Object(l.b)("h3",{id:"\u53ef\u641c\u7d22"},"\u53ef\u641c\u7d22"),Object(l.b)(s.c,{__position:1,__code:'<Tree.Search placeholder="\u652f\u6301\u5927\u6570\u636e\u7684Tree" treeData={treeData} selectable />',__scope:{props:this?this.props:r,Playground:s.c,Props:s.d,Icon:a.a,Tree:O,treeData:_.a,renderTreeData:x},mdxType:"Playground"},Object(l.b)(O.Search,{placeholder:"\u652f\u6301\u5927\u6570\u636e\u7684Tree",treeData:_.a,selectable:!0})),Object(l.b)("h3",{id:"\u8282\u70b9-render-\u51fd\u6570"},"\u8282\u70b9 Render \u51fd\u6570"),Object(l.b)(s.c,{__position:2,__code:'<Tree\n  placeholder="\u652f\u6301\u5927\u6570\u636e\u7684Tree"\n  treeData={renderTreeData}\n  selectable\n  keyField="key"\n  render={tn => {\n    if (tn.icon) {\n      return (\n        <React.Fragment>\n          <Icon type={tn.icon} /> {tn.title}\n        </React.Fragment>\n      )\n    }\n    return <span>no icon->{tn.title}</span>\n  }}\n/>',__scope:{props:this?this.props:r,Playground:s.c,Props:s.d,Icon:a.a,Tree:O,treeData:_.a,renderTreeData:x},mdxType:"Playground"},Object(l.b)(O,{placeholder:"\u652f\u6301\u5927\u6570\u636e\u7684Tree",treeData:x,selectable:!0,keyField:"key",render:function(e){return e.icon?Object(l.b)(c.a.Fragment,null,Object(l.b)(a.a,{type:e.icon,mdxType:"Icon"})," ",e.title):Object(l.b)("span",null,"no icon->",e.title)},mdxType:"Tree"})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u4f20\u5165 render \u53c2\u6570\u9488\u5bf9\u6240\u6709\u8282\u70b9\u8bbe\u7f6e render \u51fd\u6570"),Object(l.b)("p",{parentName:"blockquote"},"\u4e5f\u53ef\u5728 data \u4e2d\u8bbe\u7f6e\u9488\u5bf9\u5355\u4e2a\u8282\u70b9\u7684 render \u51fd\u6570")),Object(l.b)("h3",{id:"\u81ea\u5b9a\u4e49\u65e0\u6570\u636e\u65f6\u7684\u663e\u793a\u6837\u5f0f"},"\u81ea\u5b9a\u4e49\u65e0\u6570\u636e\u65f6\u7684\u663e\u793a\u6837\u5f0f"),Object(l.b)(s.c,{__position:3,__code:'<Tree.Search\n  placeholder="\u652f\u6301\u5927\u6570\u636e\u7684Tree"\n  treeData={treeData}\n  selectable\n  notFoundContent="\u65e0\u6570\u636e"\n/>',__scope:{props:this?this.props:r,Playground:s.c,Props:s.d,Icon:a.a,Tree:O,treeData:_.a,renderTreeData:x},mdxType:"Playground"},Object(l.b)(O.Search,{placeholder:"\u652f\u6301\u5927\u6570\u636e\u7684Tree",treeData:_.a,selectable:!0,notFoundContent:"\u65e0\u6570\u636e"})),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)(s.d,{of:O,isToggle:!0,title:"\u269b\ufe0f Tree props",mdxType:"Props"}),Object(l.b)(s.d,{of:O.Search,isToggle:!0,title:"\u269b\ufe0f TreeSearch props",mdxType:"Props"}))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\tree\\index.mdx"}}),g.isMDXComponent=!0},"./src/tree/style/index.less":function(e,t,r){}}]);