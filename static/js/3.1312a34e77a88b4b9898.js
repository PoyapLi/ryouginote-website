webpackJsonp([3],{C3fl:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n("Dd8w"),i=n.n(e),a=n("NYxO"),s={data:function(){return{}},created:function(){this.checkLogin({path:"/login"}),this.getNotebooks()},computed:i()({},Object(a.c)(["notebooks"])),methods:i()({},Object(a.b)(["getNotebooks","addNotebook","updateNotebook","deleteNotebook","checkLogin"]),{onCreate:function(){var t=this;this.$prompt("请输入新标题","创建笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,8}$/,inputErrorMessage:"标题不能为空，且不能超过8个字符"}).then(function(o){var n=o.value;t.addNotebook({title:n})})},onEdit:function(t){var o=this;this.$prompt("请输入新标题","修改笔记本标题",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,8}$/,inputValue:t.title,inputErrorMessage:"标题不能为空，且不能超过8个字符"}).then(function(n){var e=n.value;o.updateNotebook({notebookId:t.id,title:e})})},onDelete:function(t){var o=this;this.$confirm("确认要删除当前笔记吗？","删除笔记",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.deleteNotebook({notebookId:t.id})})}})},c={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"detail",attrs:{id:"notebook-list"}},[n("header",[n("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.onCreate.apply(null,arguments)}}},[n("i",{staticClass:"iconfont icon-plus"}),t._v(" 新建笔记本 ")])]),t._v(" "),n("main",[n("div",{staticClass:"layout"},[n("h3",[t._v("笔记本列表（"+t._s(t.notebooks.length)+"）")]),t._v(" "),n("div",{staticClass:"book-list"},t._l(t.notebooks,function(o){return n("router-link",{key:o.id,staticClass:"notebook",attrs:{to:"/note?notebookId="+o.id}},[n("div",[n("span",{staticClass:"iconfont icon-notebook"}),t._v(" "+t._s(o.title)+"\n            "),n("span",{staticClass:"note-counts"},[t._v("（"+t._s(o.noteCounts?o.noteCounts:0)+"）")]),t._v(" "),n("span",{staticClass:"actionE",on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.onEdit(o)}}},[t._v("编辑")]),t._v(" "),n("span",{staticClass:"actionD",on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.onDelete(o)}}},[t._v("删除")]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(o.createdAtFriendly))])])])}),1)])])])},staticRenderFns:[]};var r=n("VU/8")(s,c,!1,function(t){n("guu4")},"data-v-679f8629",null);o.default=r.exports},guu4:function(t,o){}});
//# sourceMappingURL=3.1312a34e77a88b4b9898.js.map