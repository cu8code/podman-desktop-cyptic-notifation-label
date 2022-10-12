"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[360],{5318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6304:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=t(2685),r=t(1244),i=(t(7378),t(5318)),a=["components"],s={sidebar_position:4},l="Troubleshooting",c={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Here, find some answers to the question : I have downloaded Podman Desktop but I am unable to see any of my image or container",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Podman Desktop",permalink:"/docs/getting-started/getting-started"}},u={},p=[{value:"Podman",id:"podman",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Check connection",id:"check-connection",level:3},{value:"Fixing corrupted Podman Machine in Windows",id:"fixing-corrupted-podman-machine-in-windows",level:3},{value:"Code Ready Containers",id:"code-ready-containers",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Here, find some answers to the question : I have downloaded Podman Desktop but I am unable to see any of my image or container"),(0,i.kt)("h2",{id:"podman"},"Podman"),(0,i.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,i.kt)("p",null,"The tool connects to Podman using the socket on the host on macOS and on a named pipe on Windows. This is available only on podman 4.0.2+\nSo, please check your version and update."),(0,i.kt)("p",null,"On Windows, the named pipe is ",(0,i.kt)("inlineCode",{parentName:"p"},"//./pipe/docker_engine")," when Docker Desktop is not installed. It will be solved by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/issues/13502"},"https://github.com/containers/podman/issues/13502")," / ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/pull/13655"},"https://github.com/containers/podman/pull/13655"),". During that time, you may start Docker Desktop so the named pipe is the one expected."),(0,i.kt)("h3",{id:"check-connection"},"Check connection"),(0,i.kt)("p",null,"Check at least a podman machine is running on Windows & macOS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"podman machine list\n")),(0,i.kt)("p",null,"And check a connection can be made with the CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ podman run quay.io/podman/hello\n!... Hello Podman World ...!\n\n         .--"--.\n       / -     - \\\n      / (O)   (O) \\\n   ~~~| -=(,Y,)=- |\n    .---. /`  \\   |~~\n ~/  o  o \\~~~~.----. ~~\n  | =(X)= |~  / (O (O) \\\n   ~~~~~~~  ~| =(Y_)=-  |\n  ~~~~    ~~~|   U      |~~\n\nProject:   https://github.com/containers/podman\nWebsite:   https://podman.io\nDocuments: https://docs.podman.io\nTwitter:   @Podman_io\n')),(0,i.kt)("h3",{id:"fixing-corrupted-podman-machine-in-windows"},"Fixing corrupted Podman Machine in Windows"),(0,i.kt)("p",null,"If at all you are not able to stop your Podman Machine, you will find such an error in the Logs-\n",(0,i.kt)("inlineCode",{parentName:"p"},"Error: Error stopping sysd: exit status 1")),(0,i.kt)("p",null,"It is highly unlikely that you may be stuck in such a situation but if you are, here's a quick fix for it."),(0,i.kt)("p",null,"Assuming the name of the Podman Machine to be ",(0,i.kt)("inlineCode",{parentName:"p"},"my-machine"),", run the following commands in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wsl --list\n")),(0,i.kt)("p",null,"This shall display a list of active distributions i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"my-machine")," in this case."),(0,i.kt)("p",null,"Then,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wsl --unregister my-machine\n")),(0,i.kt)("p",null,"(Replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"my-machine")," with the name that is displayed under ",(0,i.kt)("inlineCode",{parentName:"p"},"wsl --list")," for your Podman Machine)"),(0,i.kt)("p",null,"This will stop the Podman Machine for you."),(0,i.kt)("h2",{id:"code-ready-containers"},"Code Ready Containers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check that podman preset is defined. (",(0,i.kt)("inlineCode",{parentName:"li"},"crc config get preset"),")"),(0,i.kt)("li",{parentName:"ul"},"Check that ",(0,i.kt)("inlineCode",{parentName:"li"},"crc")," binary is available in the user PATH (",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/crc"),")"),(0,i.kt)("li",{parentName:"ul"},"Check that ",(0,i.kt)("inlineCode",{parentName:"li"},"crc setup --check-only")," is running without errors.")))}m.isMDXComponent=!0}}]);