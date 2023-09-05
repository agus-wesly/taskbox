import{_ as u}from"./Task-7a285438.js";import{a as e}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-475d8a28.js";const T={component:u,title:"Task",tags:["autodocs"],argTypes:{onPinTask:{},onArchiveTask:{}},excludeStories:/.*Data$/},D={onPinTask:e("pin-task"),onArchiveTask:e("archive-task")},a={args:{task:{id:"",state:"TASK_INBOX",title:""}}},s={args:{task:{...a.args.task,state:"TASK_PINNED"}}},t={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    task: {
      id: '',
      state: 'TASK_INBOX',
      title: ''
    }
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args!.task!,
      state: 'TASK_PINNED'
    }
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,p,k;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args!.task!,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const _=["actionsData","Default","Pinned","Archived"];export{t as Archived,a as Default,s as Pinned,_ as __namedExportsOrder,D as actionsData,T as default};
//# sourceMappingURL=Task.stories-24078a98.js.map
