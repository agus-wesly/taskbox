import{w as A,f as o}from"./index-1949d634.js";import{b as m,l as L,p as I,q as p,x as P,H as k,s as f,G as K,v as t}from"./vue.esm-bundler-475d8a28.js";import{_ as O}from"./PureTaskList-f5962abf.js";import{d as D}from"./pinia-a422cc53.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./Task-7a285438.js";const X=[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}],V=D("counter",()=>{const e=m(X),a=m("idle"),n=m(!1);function d(r){const s=e.value.find(u=>u.id===r);s&&(s.state="TASK_ARCHIVED")}function T(r){const s=e.value.find(u=>u.id===r);s&&(s.state="TASK_PINNED")}const _=L(()=>e.value.filter(s=>s.state==="TASK_INBOX"||s.state==="TASK_PINNED"));return{tasks:e,status:a,archiveTask:d,pinTask:T,getFilteredTasks:_,error:n}}),N=I({__name:"TaskList",setup(e){const{tasks:a,archiveTask:n,pinTask:d}=V();return(T,_)=>(p(),P(O,{tasks:k(a),onArchiveTask:k(n),onPinTask:k(d)},null,8,["tasks","onArchiveTask","onPinTask"]))}});N.__docgenInfo={exportName:"default",displayName:"TaskList",description:"",tags:{},sourceFiles:["/home/isaac/Projects/vue-advanced/src/stories/TaskList.vue"]};const F={key:0,class:"page lists-show"},$=t("div",{class:"wrapper-message"},[t("span",{class:"icon-face-sad"}),t("p",{class:"title-message"},"Oh no!"),t("p",{class:"subtitle-message"},"Something went wrong")],-1),j=[$],C={key:1,class:"page lists-show"},H=t("nav",null,[t("h1",{class:"title-page"},"Taskbox")],-1),E=I({__name:"PureInboxScreen",props:{error:{type:Boolean,default:!1}},setup(e){return(a,n)=>(p(),f("div",null,[e.error?(p(),f("div",F,j)):(p(),f("div",C,[H,K(N)]))]))}});E.__docgenInfo={exportName:"default",displayName:"PureInboxScreen",description:"",tags:{},props:[{name:"error",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/isaac/Projects/vue-advanced/src/stories/PureInboxScreen.vue"]};const Q={component:E,title:"PureInboxScreen",tags:["autodocs"],argTypes:{},excludeStories:/.*Data$/},i={args:{}},c={args:{error:!0}},l={play:async({canvasElement:e})=>{const a=A(e);await o.click(a.getByLabelText("pinTask-1")),await o.click(a.getByLabelText("pinTask-2")),await o.click(a.getByLabelText("pinTask-4")),await o.click(a.getByLabelText("pinTask-3"))}};var g,v,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var S,x,y;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,b,w;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    await fireEvent.click(canvas.getByLabelText('pinTask-2'));
    await fireEvent.click(canvas.getByLabelText('pinTask-4'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  }
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const U=["Default","Error","WithInteractions"];export{i as Default,c as Error,l as WithInteractions,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=PureInboxScreen.stories-8e34f8d9.js.map
