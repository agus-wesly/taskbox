import{_ as L}from"./PureTaskList-f5962abf.js";import{Default as a}from"./Task.stories-24078a98.js";import{a as n}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-475d8a28.js";import"./Task-7a285438.js";const W={component:L,title:"PureTaskList",tags:["autodocs"],argTypes:{"onArchive-task":{},"onPin-task":{}},decorators:[()=>({template:'<div style="margin: 3em"><story/></div>'})],excludeStories:/.*Data$/},$={onPinTask:n("pin-task"),onArchiveTask:n("archive-task")};var i,o,k,c,d,l;const s={args:{tasks:[{...(i=a.args)==null?void 0:i.task,id:"1",title:"Task 1"},{...(o=a.args)==null?void 0:o.task,id:"2",title:"Task 2"},{...(k=a.args)==null?void 0:k.task,id:"3",title:"Task 3"},{...(c=a.args)==null?void 0:c.task,id:"4",title:"Task 4"},{...(d=a.args)==null?void 0:d.task,id:"5",title:"Task 5"},{...(l=a.args)==null?void 0:l.task,id:"6",title:"Task 6"}]}};var g,m;const e={args:{tasks:[...(m=(g=s.args)==null?void 0:g.tasks)==null?void 0:m.slice(0,5),{id:"6",state:"TASK_PINNED",title:"Task 6"}]}},t={args:{loading:!0}},r={args:{...t.args,loading:!1}};var u,T,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tasks: [{
      ...TaskStories.Default.args?.task!,
      id: '1',
      title: 'Task 1'
    }, {
      ...TaskStories.Default.args?.task!,
      id: '2',
      title: 'Task 2'
    }, {
      ...TaskStories.Default.args?.task!,
      id: '3',
      title: 'Task 3'
    }, {
      ...TaskStories.Default.args?.task!,
      id: '4',
      title: 'Task 4'
    }, {
      ...TaskStories.Default.args?.task!,
      id: '5',
      title: 'Task 5'
    }, {
      ...TaskStories.Default.args?.task!,
      id: '6',
      title: 'Task 6'
    }]
  }
}`,...(p=(T=s.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};var f,D,S;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tasks: [...Default.args?.tasks?.slice(0, 5)!, {
      id: '6',
      state: 'TASK_PINNED',
      title: 'Task 6'
    }]
  }
}`,...(S=(D=e.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var P,_,N;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(N=(_=t.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var h,v,A;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Loading.args,
    loading: false
  }
}`,...(A=(v=r.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const O=["actionsData","Default","WithPinned","Loading","NoTask"];export{s as Default,t as Loading,r as NoTask,e as WithPinned,O as __namedExportsOrder,$ as actionsData,W as default};
//# sourceMappingURL=PureTasklist.stories-9f9733b8.js.map
