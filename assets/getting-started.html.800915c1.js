import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,c as i,a as n,b as a,w as t,F as d,e as s,d as o,o as k}from"./app.8dd3a59a.js";const b={},m=n("h1",{id:"\u5165\u95E8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5165\u95E8","aria-hidden":"true"},"#"),s(" \u5165\u95E8")],-1),h=n("h2",{id:"\u6A21\u578B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6A21\u578B","aria-hidden":"true"},"#"),s(" \u6A21\u578B")],-1),g=n("p",null,[n("code",null,"FreeSql"),s(" \u4F7F\u7528\u6A21\u578B\u6267\u884C\u6570\u636E\u8BBF\u95EE\uFF0C\u6A21\u578B\u7531\u5B9E\u4F53\u7C7B\u8868\u793A\u6570\u636E\u5E93\u8868\u6216\u89C6\u56FE\uFF0C\u7528\u4E8E\u67E5\u8BE2\u548C\u4FDD\u5B58\u6570\u636E\u3002")],-1),S=s("\u53EF\u4ECE\u73B0\u6709\u6570\u636E\u5E93\u751F\u6210\u5B9E\u4F53\u6A21\u578B\uFF0C"),_=n("code",null,"FreeSql",-1),f=s(" \u63D0\u4F9B "),y=n("code",null,"IDbFirst",-1),q=s(" \u63A5\u53E3\u5B9E\u73B0"),D=s("\u751F\u6210\u5B9E\u4F53\u6A21\u578B"),v=s("\u3002"),P=o(`<p>\u6216\u8005\u624B\u52A8\u521B\u5EFA\u6A21\u578B\uFF0C\u57FA\u4E8E\u6A21\u578B\u521B\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u5E93\uFF0C\u63D0\u4F9B <code>ICodeFirst</code> \u540C\u6B65\u7ED3\u6784\u7684 <code>API</code>\uFF08\u751A\u81F3\u53EF\u4EE5\u505A\u5230\u5F00\u53D1\u9636\u6BB5\u81EA\u52A8\u540C\u6B65\uFF09\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">FreeSql<span class="token punctuation">.</span>DataAnnotations</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Blog</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BlogId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Url <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Rating <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u5305</h2>`,3),T=s("FreeSql.Provider.xxx("),I=s("\u53EF\u9009\u7684\u9A71\u52A8"),F=s(")"),C=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[s("dotnet "),n("span",{class:"token function"},"add"),s(` packages FreeSql
dotnet `),n("span",{class:"token function"},"add"),s(` packages FreeSql.Provider.Sqlite
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),w=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,`Install-Package FreeSql
Install-Package FreeSql.Provider.Sqlite
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),U=o(`<h2 id="\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E" aria-hidden="true">#</a> \u58F0\u660E</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=db1.db&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//\u81EA\u52A8\u540C\u6B65\u5B9E\u4F53\u7ED3\u6784\u5230\u6570\u636E\u5E93\uFF0CFreeSql\u4E0D\u4F1A\u626B\u63CF\u7A0B\u5E8F\u96C6\uFF0C\u53EA\u6709CRUD\u65F6\u624D\u4F1A\u751F\u6210\u8868\u3002</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BF7\u52A1\u5FC5\u5B9A\u4E49\u6210 Singleton \u5355\u4F8B\u6A21\u5F0F</span>

    <span class="token comment">//\u6CE8\u610F\uFF1A IFreeSql \u5728\u9879\u76EE\u4E2D\u5E94\u4EE5\u5355\u4F8B\u58F0\u660E\uFF0C\u800C\u4E0D\u662F\u5728\u6BCF\u6B21\u4F7F\u7528\u7684\u65F6\u5019\u521B\u5EFA\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>.NET Core \u5355\u4F8B Startup.cs</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=db1.db&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//\u81EA\u52A8\u540C\u6B65\u5B9E\u4F53\u7ED3\u6784\u5230\u6570\u636E\u5E93\uFF0CFreeSql\u4E0D\u4F1A\u626B\u63CF\u7A0B\u5E8F\u96C6\uFF0C\u53EA\u6709CRUD\u65F6\u624D\u4F1A\u751F\u6210\u8868\u3002</span>
      <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),x=s(".NET Core \u6CE8\u5165\u591A\u4E2A FreeSql \u5B9E\u4F8B"),A=n("li",null,".NET Framework \u5355\u4F8B",-1),E=o(`<div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DB</span>
<span class="token punctuation">{</span>
   <span class="token keyword">static</span> Lazy<span class="token operator">&lt;</span>IFreeSql<span class="token operator">&gt;</span>sqliteLazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=db1.db&quot;</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//\u81EA\u52A8\u540C\u6B65\u5B9E\u4F53\u7ED3\u6784\u5230\u6570\u636E\u5E93\uFF0CFreeSql\u4E0D\u4F1A\u626B\u63CF\u7A0B\u5E8F\u96C6\uFF0C\u53EA\u6709CRUD\u65F6\u624D\u4F1A\u751F\u6210\u8868\u3002</span>
         <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IFreeSql</span> Sqlite <span class="token operator">=&gt;</span> sqliteLazy<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>IFreeSql</code> \u662F <code>ORM</code> \u6700\u9876\u7EA7\u5BF9\u8C61\uFF0C\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u4F7F\u7528\u5B83\u7684\u65B9\u6CD5\u6216\u8005\u5C5E\u6027\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u67E5\u8BE2</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u63D2\u5165</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u66F4\u65B0</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5220\u9664</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">InsertOrUpdate</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// \u63D2\u5165\u6216\u66F4\u65B0</span>
fsql<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4E8B\u52A1</span>

fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">;</span> <span class="token comment">//CodeFirst \u5BF9\u8C61</span>
fsql<span class="token punctuation">.</span>DbFirst<span class="token punctuation">;</span> <span class="token comment">//DbFirst \u5BF9\u8C61</span>
fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">;</span> <span class="token comment">//Ado \u5BF9\u8C61</span>
fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">;</span> <span class="token comment">//Aop \u5BF9\u8C61</span>
fsql<span class="token punctuation">.</span>GlobalFilter<span class="token punctuation">;</span> <span class="token comment">//\u5168\u5C40\u8FC7\u6EE4\u5668\u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#\u8FC1\u79FB" aria-hidden="true">#</a> \u8FC1\u79FB</h2>`,4),B=s("\u7A0B\u5E8F\u8FD0\u884C\u4E2D"),M=n("code",null,"FreeSql",-1),O=s("\u4F1A\u68C0\u67E5"),L=n("code",null,"AutoSyncStructure",-1),R=s("\u53C2\u6570\uFF0C\u4EE5\u6B64\u6761\u4EF6\u5224\u65AD\u662F\u5426\u5BF9\u6BD4\u5B9E\u4F53\u4E0E\u6570\u636E\u5E93\u7ED3\u6784\u4E4B\u95F4\u7684\u53D8\u5316\uFF0C\u8FBE\u5230\u81EA\u52A8\u8FC1\u79FB\u7684\u76EE\u7684,\u66F4\u591A\u8BF7\u67E5\u770B"),z=s("CodeFirst"),N=s("\u6587\u6863\uFF0C"),W=o(`<blockquote><p>\u6CE8\u610F\uFF1A\u8C28\u614E\u3001\u8C28\u614E\u3001\u8C28\u614E\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\u8BE5\u529F\u80FD\u3002</p></blockquote><blockquote><p>\u6CE8\u610F\uFF1A\u8C28\u614E\u3001\u8C28\u614E\u3001\u8C28\u614E\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\u8BE5\u529F\u80FD\u3002</p></blockquote><blockquote><p>\u6CE8\u610F\uFF1A\u8C28\u614E\u3001\u8C28\u614E\u3001\u8C28\u614E\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\u8BE5\u529F\u80FD\u3002</p></blockquote><h2 id="\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a> \u67E5\u8BE2</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> blogs <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Rating <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Skip</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//\u7B2C100\u884C-110\u884C\u7684\u8BB0\u5F55</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a> \u63D2\u5165</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> blog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Blog</span> <span class="token punctuation">{</span> Url <span class="token operator">=</span> <span class="token string">&quot;http://sample.com&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
blog<span class="token punctuation">.</span>BlogId <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AppendData</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteIdentity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a> \u66F4\u65B0</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url<span class="token punctuation">,</span> <span class="token string">&quot;http://sample2222.com&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url <span class="token operator">==</span> <span class="token string">&quot;http://sample.com&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url <span class="token operator">==</span> <span class="token string">&quot;http://sample.com&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="freesqlbuilder" tabindex="-1"><a class="header-anchor" href="#freesqlbuilder" aria-hidden="true">#</a> FreeSqlBuilder</h1><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8FD4\u56DE\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>UseConnectionString</td><td>this</td><td>\u8BBE\u7F6E\u8FDE\u63A5\u4E32</td></tr><tr><td>UseSlave</td><td>this</td><td>\u8BBE\u7F6E\u4ECE\u6570\u636E\u5E93\uFF0C\u652F\u6301\u591A\u4E2A</td></tr><tr><td>UseConnectionFactory</td><td>this</td><td>\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6570\u636E\u5E93\u8FDE\u63A5\u5BF9\u8C61\uFF08\u653E\u5F03\u5185\u7F6E\u5BF9\u8C61\u8FDE\u63A5\u6C60\u6280\u672F\uFF09</td></tr><tr><td>UseAutoSyncStructure</td><td>this</td><td>\u3010\u5F00\u53D1\u73AF\u5883\u5FC5\u5907\u3011\u81EA\u52A8\u540C\u6B65\u5B9E\u4F53\u7ED3\u6784\u5230\u6570\u636E\u5E93\uFF0C\u7A0B\u5E8F\u8FD0\u884C\u4E2D\u68C0\u67E5\u5B9E\u4F53\u521B\u5EFA\u6216\u4FEE\u6539\u8868\u7ED3\u6784</td></tr><tr><td>UseNoneCommandParameter</td><td>this</td><td>\u4E0D\u4F7F\u7528\u547D\u4EE4\u53C2\u6570\u5316\u6267\u884C\uFF0C\u9488\u5BF9 Insert/Update\uFF0C\u4E5F\u53EF\u4E34\u65F6\u4F7F\u7528 IInsert/IUpdate.NoneParameter()</td></tr><tr><td>UseGenerateCommandParameterWithLambda</td><td>this</td><td>\u751F\u6210\u547D\u4EE4\u53C2\u6570\u5316\u6267\u884C\uFF0C\u9488\u5BF9 lambda \u8868\u8FBE\u5F0F\u89E3\u6790</td></tr><tr><td>UseLazyLoading</td><td>this</td><td>\u5F00\u542F\u5EF6\u65F6\u52A0\u8F7D\u529F\u80FD</td></tr><tr><td>UseMonitorCommand</td><td>this</td><td>\u76D1\u89C6\u5168\u5C40 SQL \u6267\u884C\u524D\u540E</td></tr><tr><td>UseMappingPriority</td><td>this</td><td>\u6307\u5B9A\u6620\u5C04\u4F18\u5148\u7EA7\uFF08\u9ED8\u8BA4 Aop &lt; FluentApi &lt; Attribute\uFF09</td></tr><tr><td>UseNameConvert</td><td>this</td><td>\u81EA\u52A8\u8F6C\u6362\u540D\u79F0 Entity -&gt; Db</td></tr><tr><td>UseExitAutoDisposePool</td><td>this</td><td>\u76D1\u542C AppDomain.CurrentDomain.ProcessExit/Console.CancelKeyPress \u4E8B\u4EF6\u81EA\u52A8\u91CA\u653E\u8FDE\u63A5\u6C60 (\u9ED8\u8BA4 true)</td></tr><tr><td>Build&lt;T&gt;</td><td>IFreeSql&lt;T&gt;</td><td>\u521B\u5EFA\u4E00\u4E2A IFreeSql \u5BF9\u8C61\uFF0C\u6CE8\u610F\uFF1A\u5355\u4F8B\u8BBE\u8BA1\uFF0C\u4E0D\u8981\u91CD\u590D\u521B\u5EFA</td></tr></tbody></table><h1 id="connectionstrings" tabindex="-1"><a class="header-anchor" href="#connectionstrings" aria-hidden="true">#</a> ConnectionStrings</h1>`,14),G=n("thead",null,[n("tr",null,[n("th",null,"DataType"),n("th",null,"ConnectionString")])],-1),V=n("tr",null,[n("td",null,"DataType.MySql"),n("td",null,"Data Source=127.0.0.1;Port=3306;User ID=root;Password=root; Initial Catalog=cccddd;Charset=utf8; SslMode=none;Min pool size=1")],-1),Q=n("tr",null,[n("td",null,"DataType.PostgreSQL"),n("td",null,"Host=192.168.164.10;Port=5432;Username=postgres;Password=123456; Database=tedb;Pooling=true;Minimum Pool Size=1")],-1),X=n("tr",null,[n("td",null,"DataType.SqlServer"),n("td",null,"Data Source=.;User Id=sa;Password=123456;Initial Catalog=freesqlTest;TrustServerCertificate=true;Pooling=true;Min Pool Size=1")],-1),Y=n("tr",null,[n("td",null,"DataType.Oracle"),n("td",null,"user id=user1;password=123456; data source=//127.0.0.1:1521/XE;Pooling=true;Min Pool Size=1")],-1),K=n("tr",null,[n("td",null,"DataType.Sqlite"),n("td",null,"Data Source=|DataDirectory|\\document.db; Attachs=xxxtb.db; Pooling=true;Min Pool Size=1")],-1),H=n("tr",null,[n("td",null,"DataType.Firebird"),n("td",null,"database=localhost:D:\\fbdata\\EXAMPLES.fdb;user=sysdba;password=123456")],-1),Z=n("tr",null,[n("td",null,"DataType.MsAccess"),n("td",null,"Provider=Microsoft.Jet.OleDb.4.0;Data Source=d:/accdb/2003.mdb")],-1),J=n("tr",null,[n("td",null,"DataType.Dameng(\u8FBE\u68A6)"),n("td",null,"server=127.0.0.1;port=5236;user id=2user;password=123456789;database=2user;poolsize=5")],-1),j=n("tr",null,[n("td",null,"DataType.ShenTong(\u795E\u901A)"),n("td",null,"HOST=192.168.164.10;PORT=2003;DATABASE=OSRDB;USERNAME=SYSDBA;PASSWORD=szoscar55;MAXPOOLSIZE=2")],-1),$=n("tr",null,[n("td",null,"DataType.KingbaseES(\u4EBA\u5927\u91D1\u4ED3) V008R003"),n("td",null,"Server=127.0.0.1;Port=54321;UID=USER2;PWD=123456789;database=TEST;MAXPOOLSIZE=2")],-1),nn=n("tr",null,[n("td",null,"DataType.Gbase(\u5357\u5927\u901A\u7528)"),n("td",null,"Driver={GBase ODBC DRIVER (64-Bit)};Host=192.168.164.134;Service=9088;Server=gbase01;Database=testdb;Protocol=onsoctcp;Uid=gbasedbt;Pwd=GBase123;Db_locale=zh_CN.utf8;Client_locale=zh_CN.utf8")],-1),sn=n("tr",null,[n("td",null,"DataType.OdbcMySql"),n("td",null,"Driver={MySQL ODBC 8.0 Unicode Driver}; Server=127.0.0.1;Persist Security Info=False; Trusted_Connection=Yes;UID=root;PWD=root; DATABASE=cccddd_odbc;Charset=utf8; SslMode=none;Min Pool Size=1")],-1),an=n("tr",null,[n("td",null,"DataType.OdbcSqlServer"),n("td",null,"Driver={SQL Server};Server=.;Persist Security Info=False; Trusted_Connection=Yes;Integrated Security=True; DATABASE=freesqlTest_odbc; Pooling=true;Min Pool Size=1")],-1),tn=n("tr",null,[n("td",null,"DataType.OdbcOracle"),n("td",null,"Driver={Oracle in XE};Server=//127.0.0.1:1521/XE; Persist Security Info=False; Trusted_Connection=Yes;UID=odbc1;PWD=123456; Min Pool Size=1")],-1),en=n("tr",null,[n("td",null,"DataType.OdbcPostgreSQL"),n("td",null,"Driver={PostgreSQL Unicode(x64)};Server=192.168.164.10; Port=5432;UID=postgres;PWD=123456; Database=tedb_odbc;Pooling=true;Min Pool Size=1")],-1),pn=n("tr",null,[n("td",null,"DataType.OdbcDameng (\u8FBE\u68A6)"),n("td",null,"Driver={DM8 ODBC DRIVER};Server=127.0.0.1:5236; Persist Security Info=False; Trusted_Connection=Yes; UID=USER1;PWD=123456789")],-1),on=n("tr",null,[n("td",null,"DataType.OdbcKingbaseES (\u4EBA\u5927\u91D1\u4ED3) V008R003"),n("td",null,"Driver={KingbaseES 8.2 ODBC Driver ANSI};Server=127.0.0.1;Port=54321;UID=USER2;PWD=123456789;database=TEST")],-1),cn=n("tr",null,[n("td",null,"DataType.Odbc"),n("td",null,"Driver={SQL Server};Server=.;Persist Security Info=False; Trusted_Connection=Yes;Integrated Security=True; DATABASE=freesqlTest_odbc; Pooling=true;Min pool size=1")],-1),ln={href:"https://github.com/dotnetcore/FreeSql/tree/master/Providers/FreeSql.Provider.Custom",target:"_blank",rel:"noopener noreferrer"},un=s("DataType.Custom"),rn=n("td",null,"\u81EA\u5B9A\u4E49\u8FDE\u63A5\u4E32\uFF0C\u8BBF\u95EE\u4EFB\u4F55\u6570\u636E\u5E93",-1);function dn(kn,bn){const e=p("RouterLink"),c=p("CodeGroupItem"),l=p("CodeGroup"),u=p("ExternalLinkIcon");return k(),i(d,null,[m,h,g,n("p",null,[S,_,f,y,q,a(e,{to:"/guide/db-first.html"},{default:t(()=>[D]),_:1}),v]),P,n("p",null,[T,a(e,{to:"/guide/install.html"},{default:t(()=>[I]),_:1}),F]),a(l,null,{default:t(()=>[a(c,{title:".NET CLI"},{default:t(()=>[C]),_:1}),a(c,{title:"Package Manager"},{default:t(()=>[w]),_:1})]),_:1}),U,n("ul",null,[n("li",null,[a(e,{to:"/extra/idlebus-freesql.html"},{default:t(()=>[x]),_:1})]),A]),E,n("p",null,[B,M,O,L,R,a(e,{to:"/guide/code-first.html"},{default:t(()=>[z]),_:1}),N]),W,n("table",null,[G,n("tbody",null,[V,Q,X,Y,K,H,Z,J,j,$,nn,sn,an,tn,en,pn,on,cn,n("tr",null,[n("td",null,[n("a",ln,[un,a(u)])]),rn])])])],64)}var gn=r(b,[["render",dn],["__file","getting-started.html.vue"]]);export{gn as default};