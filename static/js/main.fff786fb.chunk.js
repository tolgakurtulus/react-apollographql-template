(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(e,a,t){e.exports=t(80)},66:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n,r=t(3),c=t.n(r),l=t(54),i=t.n(l),m=(t(66),t(0)),o=t(26),s=t(95),u=t(81),d=Object(s.a)(n||(n=Object(o.a)(["\n  query {\n    characters {\n      results {\n        id\n        name\n        image\n      }\n    }\n  }\n"])));var h,E=function(){var e=Object(u.b)(d);return{error:e.error,data:e.data,loading:e.loading}},v=(t(72),t(18));function g(){var e=E(),a=e.error,t=e.data;return e.loading?c.a.createElement("div",null,"Spinner...."):a?c.a.createElement("div",null,"Somethings Wrong"):c.a.createElement("div",{className:"characterList"},c.a.createElement("div",{className:"characterList-header"},c.a.createElement(v.b,{to:"/"},"Home"),c.a.createElement(v.b,{to:"/search"},"Search")),c.a.createElement("div",{className:"characterList-row"},t.characters.results.map(function(e){return c.a.createElement(v.b,{to:"/".concat(e.id)},c.a.createElement("img",{src:e.image,alt:e.name}),c.a.createElement("h2",null,e.name))}),")"))}var p=Object(s.a)(h||(h=Object(o.a)(["\n  query GetCharacter($id: ID!) {\n    character(id: $id) {\n      name\n      id\n      image\n      episode {\n        name\n        episode\n      }\n    }\n  }\n"])));var b=function(e){var a=Object(u.b)(p,{variables:{id:e}});return{error:a.error,data:a.data,loading:a.loading}};t(74);function f(){var e=Object(m.p)().id,a=b(e),t=a.error,n=a.data,r=a.loading;return console.log("loading:",r),console.log("data:",n),console.log("error:",t),r?c.a.createElement("div",null,"Spinner...."):t?c.a.createElement("div",null,"Somethings Wrong Test"):c.a.createElement("div",{className:"characterList"},c.a.createElement("div",{className:"character"},c.a.createElement("img",{src:n.character.image,alt:n.character.name,width:750,height:750}),c.a.createElement("div",{className:"characterContent"},c.a.createElement("h1",null,n.character.name),c.a.createElement("p",null,n.character.gender),c.a.createElement("div",{className:"characterEpisode"},n.character.episode.map(function(e){return c.a.createElement("div",null,e.name," - ",c.a.createElement("b",null,e.episode))})))))}var j,O=t(6),S=t(87),N=(t(76),Object(s.a)(j||(j=Object(o.a)(["\n  query GetCharacterLocations($name: String!) {\n    characters(filter: { name: $name }) {\n      results {\n        location {\n          name\n        }\n      }\n    }\n  }\n"]))));function w(){var e=Object(r.useState)(""),a=Object(O.a)(e,2),t=a[0],n=a[1],l=Object(S.a)(N,{variables:{name:t}}),i=Object(O.a)(l,2),m=i[0],o=i[1],s=o.loading,u=o.error,d=o.data;return c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"search-header"},c.a.createElement(v.b,{to:"/"},"Home"),c.a.createElement(v.b,{to:"/search"},"Search")),c.a.createElement("div",{className:"search-area"},c.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}}),c.a.createElement("button",{onClick:function(){return m()}},"Search")),s&&c.a.createElement("div",null,"Spinner...."),u&&c.a.createElement("div",null,"Error...."),d&&c.a.createElement("ul",null,d.characters.results.map(function(e){return c.a.createElement("li",null,e.location.name)})))}var C=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m.c,null,c.a.createElement(m.a,{strict:!0,exact:!0,path:"/",element:c.a.createElement(g,null)}),c.a.createElement(m.a,{strict:!0,exact:!0,path:"/search",element:c.a.createElement(w,null)}),c.a.createElement(m.a,{strict:!0,exact:!0,path:"/:id",element:c.a.createElement(f,null)})))},L=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,93)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)})},y=t(94),k=t(96),q=t(92),x=new y.a({uri:"https://rickandmortyapi.com/graphql",cache:new k.a});i.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v.a,null,c.a.createElement(q.a,{client:x},c.a.createElement(C,null))))),L()}},[[57,3,2]]]);
//# sourceMappingURL=main.fff786fb.chunk.js.map