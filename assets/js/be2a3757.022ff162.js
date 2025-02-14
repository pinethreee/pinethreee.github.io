"use strict";(self.webpackChunkpe=self.webpackChunkpe||[]).push([[1553],{4708:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"data-analysis/unbiased-estimator","title":"\ubd88\ud3b8 \ucd94\uc815\ub7c9 (Unbiased Estimator)","description":"I. \ubaa8\uc218\uc640 \uac00\uae4c\uc6cc\uc9c0\ub824\ub294 \uc131\uc9c8, \ubd88\ud3b8 \ucd94\uc815\ub7c9 \uac1c\ub150","source":"@site/docs/answers/02-data-analysis/unbiased-estimator.mdx","sourceDirName":"02-data-analysis","slug":"/data-analysis/unbiased-estimator","permalink":"/data-analysis/unbiased-estimator","draft":false,"unlisted":false,"editUrl":"https://github.com/pinethreee/pe/tree/main/docs/answers/02-data-analysis/unbiased-estimator.mdx","tags":[{"inline":true,"label":"\uc810\ucd94\uc815","permalink":"/tags/\uc810\ucd94\uc815"},{"inline":true,"label":"\ud45c\ubcf8\ucd94\ucd9c","permalink":"/tags/\ud45c\ubcf8\ucd94\ucd9c"}],"version":"current","frontMatter":{"tags":["\uc810\ucd94\uc815","\ud45c\ubcf8\ucd94\ucd9c"]},"sidebar":"answersSidebar","previous":{"title":"Introduction","permalink":"/data-analysis/intro"},"next":{"title":"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uacf5\ud559","permalink":"/category/\uc18c\ud504\ud2b8\uc6e8\uc5b4-\uacf5\ud559"}}');var l=a(5105),i=a(7890);const t={tags:["\uc810\ucd94\uc815","\ud45c\ubcf8\ucd94\ucd9c"]},m="\ubd88\ud3b8 \ucd94\uc815\ub7c9 (Unbiased Estimator)",c={},r=[{value:"I. \ubaa8\uc218\uc640 \uac00\uae4c\uc6cc\uc9c0\ub824\ub294 \uc131\uc9c8, \ubd88\ud3b8 \ucd94\uc815\ub7c9 \uac1c\ub150",id:"i-\ubaa8\uc218\uc640-\uac00\uae4c\uc6cc\uc9c0\ub824\ub294-\uc131\uc9c8-\ubd88\ud3b8-\ucd94\uc815\ub7c9-\uac1c\ub150",level:2},{value:"II. \ubd88\ud3b8 \ucd94\uc815\ub7c9 \uc124\uba85",id:"ii-\ubd88\ud3b8-\ucd94\uc815\ub7c9-\uc124\uba85",level:2}];function h(s){const e={admonition:"admonition",annotation:"annotation",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mermaid:"mermaid",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",msub:"msub",msup:"msup",munderover:"munderover",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\ubd88\ud3b8-\ucd94\uc815\ub7c9-unbiased-estimator",children:"\ubd88\ud3b8 \ucd94\uc815\ub7c9 (Unbiased Estimator)"})}),"\n",(0,l.jsx)(e.h2,{id:"i-\ubaa8\uc218\uc640-\uac00\uae4c\uc6cc\uc9c0\ub824\ub294-\uc131\uc9c8-\ubd88\ud3b8-\ucd94\uc815\ub7c9-\uac1c\ub150",children:"I. \ubaa8\uc218\uc640 \uac00\uae4c\uc6cc\uc9c0\ub824\ub294 \uc131\uc9c8, \ubd88\ud3b8 \ucd94\uc815\ub7c9 \uac1c\ub150"}),"\n",(0,l.jsx)(e.admonition,{title:"\ud1b5\uacc4\uc801 \uac1c\ub150",type:"tip",children:(0,l.jsx)(e.p,{children:"\ud45c\ubcf8\uc73c\ub85c\ubd80\ud130 \uad6c\ud55c \ud1b5\uacc4\ub7c9\uc758 \uae30\ub300\uce58\uac00 \ucd94\uc815\ud558\ub294 \ubaa8\uc218\uc758 \uc2e4\uc81c\uac12\uacfc \uac19\uac70\ub098 \uac00\uae4c\uc6cc\uc9c0\ub824\ud558\ub294 \uc131\uc9c8"})}),"\n",(0,l.jsx)(e.admonition,{title:"\uc218\ud559\uc801 \uac1c\ub150",type:"tip",children:(0,l.jsxs)(e.p,{children:["\ucd94\uc815\ub7c9 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"\u03b8"}),(0,l.jsx)(e.mo,{children:"^"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\hat{\\theta}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.9579em"}}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.9579em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"})]}),(0,l.jsxs)(e.span,{style:{top:"-3.2634em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1667em"},children:(0,l.jsx)(e.span,{className:"mord",children:"^"})})]})]})})})})]})})]})," \uc774 \ubaa8\uc218 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"\u03b8"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"{\\theta}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"})})]})})]}),"\ub97c \ucd94\uc815\ud560 \ub54c, ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"E"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"\u03b8"}),(0,l.jsx)(e.mo,{children:"^"})]}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"\u03b8"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"{E[\\hat\\theta]=\\theta}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.2079em",verticalAlign:"-0.25em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.9579em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"})]}),(0,l.jsxs)(e.span,{style:{top:"-3.2634em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1667em"},children:(0,l.jsx)(e.span,{className:"mord",children:"^"})})]})]})})})}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"})]})]})})]})," \uac00 \uc131\ub9bd\ud558\uba74 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"\u03b8"}),(0,l.jsx)(e.mo,{children:"^"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\hat{\\theta}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.9579em"}}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.9579em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"})]}),(0,l.jsxs)(e.span,{style:{top:"-3.2634em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1667em"},children:(0,l.jsx)(e.span,{className:"mord",children:"^"})})]})]})})})})]})})]}),"\uc744 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"\u03b8"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"{\\theta}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"})})]})})]}),"\uc758 \ubd88\ud3b8 \ucd94\uc815\ub7c9\uc774\ub77c\uace0 \ubd80\ub984"]})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"ii-\ubd88\ud3b8-\ucd94\uc815\ub7c9-\uc124\uba85",children:"II. \ubd88\ud3b8 \ucd94\uc815\ub7c9 \uc124\uba85"}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsxs)("colgroup",{children:[(0,l.jsx)("col",{width:"300"}),(0,l.jsx)("col",{width:"700"})]}),(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"\uad6c\ubd84"}),(0,l.jsx)("th",{children:"\uc0c1\uc138 \uc124\uba85"})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"hi"}),(0,l.jsx)("td",{children:(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"S"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"})]})]}),(0,l.jsxs)(e.munderover,{children:[(0,l.jsx)(e.mo,{children:"\u2211"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsx)(e.mo,{fence:"true",stretchy:"true",minsize:"1.2em",maxsize:"1.2em",children:"("}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"X"}),(0,l.jsx)(e.mi,{children:"i"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsxs)(e.mover,{accent:"true",children:[(0,l.jsx)(e.mi,{children:"X"}),(0,l.jsx)(e.mo,{children:"\u02c9"})]}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mo,{fence:"true",stretchy:"true",minsize:"1.2em",maxsize:"1.2em",children:")"}),(0,l.jsx)(e.mn,{children:"2"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"S^{2} = \\frac{1}{n - 1} \\sum_{i=1}^{n} \\bigl( X_i - \\bar{X} \\bigr)^{2}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8641em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"2.9291em",verticalAlign:"-1.2777em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]}),(0,l.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord",children:(0,l.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.7693em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop op-limits",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.6514em"},children:[(0,l.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,l.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{children:(0,l.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,l.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"1.2777em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mopen",children:(0,l.jsx)(e.span,{className:"delimsizing size1",children:"("})}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.404em",verticalAlign:"-0.35em"}}),(0,l.jsx)(e.span,{className:"mord accent",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.8201em"},children:[(0,l.jsxs)(e.span,{style:{top:"-3em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]}),(0,l.jsxs)(e.span,{style:{top:"-3.2523em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"accent-body",style:{left:"-0.1667em"},children:(0,l.jsx)(e.span,{className:"mord",children:"\u02c9"})})]})]})})})}),(0,l.jsxs)(e.span,{className:"mclose",children:[(0,l.jsx)(e.span,{className:"mclose",children:(0,l.jsx)(e.span,{className:"delimsizing size1",children:")"})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"1.054em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.3029em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})})]})})})})})]})]})]})]})})})]})})]}),"\n",(0,l.jsx)("img",{width:100,alt:""}),"\n",(0,l.jsx)(e.mermaid,{value:"stateDiagram-v2\n  \uc810\ucd94\uc815&nbsp;4\uac00\uc9c0&nbsp;\uc900\uac70 --\x3e \ubd88\ud3b8<br>\ucd94\uc815\ub7c9\n  \uc810\ucd94\uc815&nbsp;4\uac00\uc9c0&nbsp;\uc900\uac70 --\x3e \ud6a8\uc728\uc131<br>(=\uc720\uc5f0\uc131)\n  \uc810\ucd94\uc815&nbsp;4\uac00\uc9c0&nbsp;\uc900\uac70 --\x3e \uc77c\uce58\uc131\n  \uc810\ucd94\uc815&nbsp;4\uac00\uc9c0&nbsp;\uc900\uac70 --\x3e \ucda9\ubd84\uc131"})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}}}]);