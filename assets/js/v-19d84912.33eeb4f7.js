"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[7515],{5823:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-19d84912",path:"/guide/ifreesql-context.html",title:"IFreesql 和 Context",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"两者并存",slug:"两者并存",children:[]},{level:3,title:"使用方法",slug:"使用方法",children:[]}],git:{updatedTime:1648190517e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/ifreesql-context.md"}},6608:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="ifreesql-和-context" tabindex="-1"><a class="header-anchor" href="#ifreesql-和-context" aria-hidden="true">#</a> IFreesql 和 Context</h1><h3 id="两者并存" tabindex="-1"><a class="header-anchor" href="#两者并存" aria-hidden="true">#</a> 两者并存</h3><p>在 Freesql 中，支持 IFreesql 和 Context 两种形式，这两种形式的使用方法差异也有些大，其中 Context 跟 EFCore 的 Context 使用方式基本一致，使用简单、依赖注入方便。</p><p>而 IFreesql 支持更多细粒度的操作。在 Context 中，要删除多个行记录，必须先查询实体后，再使用 <code>RemoveRange()</code> 删除这些实体，当数据量非常大的时候，便会消耗大量时间和性能。而 IFreesql 中，支持嵌入部分 SQL ，支持细粒度的行记录操作。在 IFreesql 中批量删除、修改记录，可以使用类似 SQL 的模式：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>            <span class="token keyword">await</span> _freesql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Roles<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>IsDeleted<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>  x<span class="token punctuation">.</span>TenantId <span class="token operator">==</span> tenantId <span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">ExecuteAffrowsAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nupdate roles <span class="token keyword">set</span> is_deleted<span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">where</span> <span class="token class-name">where</span> tenant_id<span class="token operator">=</span><span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>所以往往将 IFreesql 和 Context 并存，在使用时，根据场景使用这两种方式操作数据库。</p><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><p>在 Freesql 中，IFreesql 的创建需要定义为单例模式，示例如下：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//自动同步实体结构到数据库</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>而 Freesql 也支持了类似 EFCore 的 Context 模式。通过引入 <code>FreeSql.DbContext</code> 库，可以使用特性、Fluent api 等配置实体映射、导航属性等，生成类似于 EFCore 的 Context 类型，然后通过依赖注入实例化使用。</p><p>通过定义 Context ，我们可以根据 EFCore 的使用习惯，快速掌握 Freesql 的使用，甚至可以直接将 EFCore Context 转为 Freesql Context，因为 Freesql Context 支持了 95% 的 EFCore Fluent api 。</p><p>下面说说如何利用 Freesql 更加方便地迁移数据库以及定义 Context。</p><p>安装 Freesql 工具：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet tool <span class="token function">install</span> -g FreeSql.Generator\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>接着还原数据库表为实体：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FreeSql.Generator  -NameOptions <span class="token number">1,1</span>,0,1 -NameSpace AuthCenter.Database.Entities -DB <span class="token string">&quot;MySql,data source=123.123.123.123;port=3306;user id=root;password=root;initial catalog=datab;charset=utf8;sslmode=none;max pool size=2&quot;</span> -FileName <span class="token string">&quot;{name}.cs&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>还原的实体示例：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>\t<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonObject</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MemberSerialization<span class="token punctuation">.</span>OptIn<span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;roles&quot;</span><span class="token punctuation">,</span> DisableSyncStructure <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n\t<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Roles</span>\n\t<span class="token punctuation">{</span>\n\n\t\t<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonProperty</span><span class="token punctuation">,</span> <span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> DbType <span class="token operator">=</span> <span class="token string">&quot;bigint unsigned&quot;</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n\t\t<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">ulong</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n\t\t<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n\t\t<span class="token doc-comment comment">/// 创建时间</span>\n\t\t<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n\t\t<span class="token punctuation">[</span>JsonProperty<span class="token punctuation">,</span> <span class="token function">Column</span><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;creation_time&quot;</span><span class="token punctuation">,</span> DbType <span class="token operator">=</span> <span class="token string">&quot;bigint unsigned&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n\t\t<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">ulong</span></span> CreationTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在 Freesql 中，实体特性优先于 Fluent api，同时 Freesql 也兼容 EFCore 的实体特性。</p><p>由于 <code>FreeSql.Generator</code> 工具很方便，我们不需要另外使用 Fluent api 去定义复杂的逻辑结构。</p><p>接着定义 Context：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">FreeSql</span><span class="token punctuation">;</span>\n\n<span class="token keyword">namespace</span> <span class="token namespace">My<span class="token punctuation">.</span>Context</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">AuthcenterContext</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">DbContext</span></span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IFreeSql</span> iFreesql<span class="token punctuation">;</span>\n        <span class="token keyword">public</span> <span class="token function">AuthcenterContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">public</span> <span class="token function">AuthcenterContext</span><span class="token punctuation">(</span><span class="token class-name">IFreeSql</span> freeSql<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            iFreesql <span class="token operator">=</span> freeSql<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        \n        <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">DbSet<span class="token punctuation">&lt;</span>Roles<span class="token punctuation">&gt;</span></span> Roles <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnConfiguring</span><span class="token punctuation">(</span><span class="token class-name">DbContextOptionsBuilder</span> builder<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// iFreesql.xxxx </span>\n            <span class="token comment">// 使用 iFreesql 调用 Fluent api</span>\n            builder<span class="token punctuation">.</span><span class="token function">UseFreeSql</span><span class="token punctuation">(</span>iFreesql<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnModelCreating</span><span class="token punctuation">(</span><span class="token class-name">ICodeFirst</span> codefirst<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><blockquote><p>通过这种方法，IFreesql 和 Context 中的实体及其实体特性、Fluent api 等都保持一致。</p></blockquote><p>接着，在依赖注入中，将 IFreesql 和 Context 都注入。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> <span class="token string">@&quot;data source=123.123.123.123;port=3306;user id=root;password=root;initial catalog=authcenter;charset=utf8&quot;</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddFreeDbContext</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AuthcenterContext<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span> options<span class="token punctuation">.</span><span class="token function">UseFreeSql</span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>我们在类型中通过依赖注入获取到这两种服务：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IFreeSql</span> _freesql<span class="token punctuation">;</span>\n        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">MyContext</span> _context<span class="token punctuation">;</span>\n\n        <span class="token keyword">public</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token class-name">IFreeSql</span> freeSql<span class="token punctuation">,</span> <span class="token class-name">MyContext</span> context<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            _freesql <span class="token operator">=</span> freeSql<span class="token punctuation">;</span>\n            _context <span class="token operator">=</span> context<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>然后就可以快乐地使用 Freesql 了。</p>',28),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);