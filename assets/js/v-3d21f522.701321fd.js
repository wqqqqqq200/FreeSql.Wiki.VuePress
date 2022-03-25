"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[5588],{1993:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3d21f522",path:"/guide/select-group-by.html",title:"分组聚合",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"分组聚合",slug:"分组聚合-1",children:[]},{level:2,title:"API",slug:"api",children:[]}],git:{updatedTime:1648190517e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/select-group-by.md"}},4515:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const t=(0,a(6252).uE)('<h1 id="分组聚合" tabindex="-1"><a class="header-anchor" href="#分组聚合" aria-hidden="true">#</a> 分组聚合</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root;Initial Catalog=cccddd;Charset=utf8;SslMode=none;Max pool size=10&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="分组聚合-1" tabindex="-1"><a class="header-anchor" href="#分组聚合-1" aria-hidden="true">#</a> 分组聚合</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> tt2 <span class="token operator">=</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">.</span><span class="token function">Substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mod4 <span class="token operator">=</span> a<span class="token punctuation">.</span>Id <span class="token operator">%</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">Max</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>tt2<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OrderByDescending</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> cou1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arg1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Clicks<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//SELECT substr(a.`Title`, 1, 2) as1, count(1) as2, avg(a.`Id`) as3 </span>\n<span class="token comment">//FROM `Topic` a </span>\n<span class="token comment">//GROUP BY substr(a.`Title`, 1, 2), (a.`Id` % 4) </span>\n<span class="token comment">//HAVING (count(1) &gt; 0 AND avg((a.`Id` % 4)) &gt; 0 AND max((a.`Id` % 4)) &gt; 0) AND (count(1) &lt; 300 OR avg((a.`Id` % 4)) &lt; 100) </span>\n<span class="token comment">//ORDER BY substr(a.`Title`, 1, 2), count(1) DESC</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>不分组求聚合值，请使用 ToAggregate 替代 ToList</p></blockquote><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>方法</th><th>返回值</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>ToSql</td><td>string</td><td></td><td>返回即将执行的SQL语句</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>Lambda</td><td>执行SQL查询，返回指定字段的记录，记录不存在时返回 Count 为 0 的列表</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>string field</td><td>执行SQL查询，返回 field 指定字段的记录，并以元组或基础类型(int,string,long)接收，记录不存在时返回 Count 为 0 的列表</td></tr><tr><td>ToAggregate&lt;T&gt;</td><td>List&lt;T&gt;</td><td>Lambda</td><td>执行SQL查询，返回指定字段的聚合结果（适合不需要 GroupBy 的场景）</td></tr><tr><td>Sum</td><td>T</td><td>Lambda</td><td>指定一个列求和</td></tr><tr><td>Min</td><td>T</td><td>Lambda</td><td>指定一个列求最小值</td></tr><tr><td>Max</td><td>T</td><td>Lambda</td><td>指定一个列求最大值</td></tr><tr><td>Avg</td><td>T</td><td>Lambda</td><td>指定一个列求平均值</td></tr><tr><td>【分组】</td><td></td><td></td><td></td></tr><tr><td>GroupBy</td><td>&lt;this&gt;</td><td>Lambda</td><td>按选择的列分组，GroupBy(a =&gt; a.Name)</td></tr><tr><td>GroupBy</td><td>&lt;this&gt;</td><td>string, parms</td><td>按原生sql语法分组，GroupBy(&quot;concat(name, ?cc)&quot;, new { cc = 1 })</td></tr><tr><td>Having</td><td>&lt;this&gt;</td><td>string, parms</td><td>按原生sql语法聚合条件过滤，Having(&quot;count(name) = ?cc&quot;, new { cc = 1 })</td></tr><tr><td>【成员】</td><td></td><td></td><td></td></tr><tr><td>Key</td><td></td><td></td><td>返回 GroupBy 选择的对象</td></tr><tr><td>Value</td><td></td><td></td><td>返回主表 或 From&lt;T2,T3....&gt; 的字段选择器</td></tr></tbody></table>',7),p={},o=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);