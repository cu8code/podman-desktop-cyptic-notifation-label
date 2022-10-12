"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[114],{544:function(e,t,n){var a=n(7378),i=n(161);t.Z=function(){function e(){var e;if(document&&document.documentElement){var t=document.documentElement;"dark"===(null==(e=t.dataset)?void 0:e.theme)?(t.classList.add("dark"),setTimeout((function(){t.classList.add("dark")}),100)):(t.classList.remove("dark"),setTimeout((function(){t.classList.remove("dark")}),100))}}return(0,a.useEffect)((function(){i.Z.canUseDOM&&e()}),[i.Z.canUseDOM]),(0,a.useEffect)((function(){if(i.Z.canUseDOM){var t=new MutationObserver((function(t){t.forEach((function(t){("data-rh"===t.attributeName&&"attributes"==t.type||"data-theme"===t.attributeName&&"attributes"==t.type)&&e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),function(){t.disconnect()}}}),[i.Z.canUseDOM]),a.createElement("div",null)}},1261:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=n(353),i=n(9821),s=n(7378),l=n(544),o=n(4034),c=n(8948);function r(){var e=(0,a.Z)().siteConfig;return s.createElement(i.Z,{title:e.title,description:"Extensibility"},s.createElement(l.Z,null),s.createElement("section",{className:"text-gray-600 dark:text-gray-400 body-font"},s.createElement("div",{className:"container mx-auto flex px-5 py-24 items-center justify-center flex-col"},s.createElement("div",{className:"text-center lg:w-2/3 w-full"},s.createElement("h1",{className:"title-font sm:text-4xl text-3xl lg:text-6xl mb-4 font-medium text-gray-900 dark:text-white"},"Extend capabilities with Docker Desktop extensions."),s.createElement("p",null,"Podman Desktop is able to use Docker Desktop UI plug-ins by adding a wrapper to intercept the API calls."),s.createElement("p",null,"By adding a Docker Desktop extension, you can extend the capabilities of Podman Desktop."),s.createElement(o.Z,{className:"py-4",alt:"Extend with Docker Desktop extensions",sources:{light:(0,c.Z)("img/extend/extend-dd-light.png"),dark:(0,c.Z)("img/extend/extend-dd-dark.png")}}),s.createElement(o.Z,{className:"py-4",alt:"Reuse Docker Desktop extensions",sources:{light:(0,c.Z)("img/ddextensions/dd-support.png"),dark:(0,c.Z)("img/ddextensions/dd-support.png")}}),s.createElement("h1",{className:"mt-24 title-font sm:text-4xl text-3xl lg:text-6xl mb-4 font-medium text-gray-900 dark:text-white"},"Extend capabilities with Podman Desktop plug-ins."),s.createElement("p",null,"Podman Desktop is using plug-ins under the hood to manage the different container engine."),s.createElement("p",null,"By adding a new plugin, you can extend the capabilities of Podman Desktop."),s.createElement("p",null,"For example plug a new container Engine likes Podman, Docker, Lima, etc."),s.createElement(o.Z,{className:"py-4",alt:"Extensibility diagram",sources:{light:(0,c.Z)("img/extend/extend-light.png"),dark:(0,c.Z)("img/extend/extend-dark.png")}}),s.createElement("h3",{className:"pt-2 pb-24 font-semibold"},s.createElement("div",null,"Extensions are written in JavaScript/Typescript"),s.createElement("div",null,"It consumes a TypeScript definition of the extension model.")),s.createElement("h1",{className:"title-font sm:text-2xl text-2xl lg:text-3xl mb-4 font-medium text-gray-900 dark:text-white"},"More extension points"),s.createElement("p",null,"Several extension points exists in addition to adding a Provider connection."),s.createElement("p",null,"User interaction, dialogs, launching commands are among the possible ways to extend Podman Desktop")))))}}}]);