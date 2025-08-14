import{A as e}from"./UIcon.83b4822b.js";const m=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function d(a,...s){const n=Object.assign({},a);return Object.keys(n).forEach(r=>{s.includes(r)&&delete n[r]}),n}const i=a=>a,g=[i({name:"Programming Languages",slug:"pro-lang"}),i({name:"Frameworks",slug:"framework"}),i({name:"Libraries",slug:"library"}),i({name:"Languages",slug:"lang"}),i({name:"Databases",slug:"db"}),i({name:"ORMs",slug:"orm"}),i({name:"DevOps",slug:"devops"}),i({name:"Testing",slug:"test"}),i({name:"Dev Tools",slug:"devtools"}),i({name:"Markup & Style",slug:"markup-style"}),i({name:"Design",slug:"design"}),i({name:"Soft Skills",slug:"soft"}),i({name:"Game Development",slug:"game-dev"}),i({name:"Research",slug:"research"})],t=a=>{const s=d(a,"category");return a.category&&(s.category=g.find(n=>n.slug===a.category)),s},l=[t({slug:"android",color:"green",description:"",logo:e.Android,name:"Android",category:"pro-lang"}),t({slug:"java",color:"yellow",description:"",logo:e.Java,name:"Java",category:"pro-lang"}),t({slug:"game-design",color:"yellow",description:"",logo:e.JavaScript,name:"JavaScript",category:"pro-lang"}),t({slug:"python",color:"blue",description:"",logo:e.Python,name:"Python",category:"pro-lang"}),t({slug:"qualitative",color:"yellow",description:"",logo:e.Unknown,name:"Qualitative Analysis",category:"research"}),t({slug:"quantitative",color:"yellow",description:"",logo:e.Unknown,name:"Quantitative Analysis",category:"research"}),t({slug:"csharp",color:"blue",description:"",logo:e.Csharp,name:"C#",category:"pro-lang"}),t({slug:"ts",color:"blue",description:"",logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),t({slug:"unity",color:"cyan",description:"",logo:e.Unity,name:"Unity",category:"game-dev"}),t({slug:"supabase",color:"green",description:"",logo:e.Supabase,name:"Supabase",category:"db"}),t({slug:"css",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.CSS,name:"CSS",category:"markup-style"}),t({slug:"html",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.HTML,name:"HTML",category:"markup-style"}),t({slug:"sass",color:"pink",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.Sass,name:"Sass",category:"markup-style"}),t({slug:"reactjs",color:"cyan",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.ReactJs,name:"React Js",category:"library"}),t({slug:"svelte",color:"orange",description:m,logo:e.Svelte,name:"Svelte",category:"library"})],h="Skills",b=(...a)=>l.filter(s=>a.includes(s.slug)),y=a=>{const s=[],n=[];return l.forEach(r=>{if(a.trim()&&!r.name.toLowerCase().includes(a.trim().toLowerCase()))return;if(!r.category){n.push(r);return}let o=s.find(c=>{var u;return c.category.slug===((u=r.category)==null?void 0:u.slug)});o||(o={items:[],category:r.category},s.push(o)),o.items.push(r)}),n.length!==0&&s.push({category:{name:"Others",slug:"others"},items:n}),s};export{y as a,b as g,l as i,h as t};
