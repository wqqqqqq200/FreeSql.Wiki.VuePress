import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c,a as n,b as s,d as t,e as p,r as l}from"./app.babe2031.js";const u={},i=p(`<h1 id="分组聚合" tabindex="-1"><a class="header-anchor" href="#分组聚合" aria-hidden="true">#</a> 分组聚合</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root;Initial Catalog=cccddd;Charset=utf8;SslMode=none;Max pool size=10&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>

<span class="token keyword">class</span> <span class="token class-name">Topic</span> 
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groupby分组聚合" tabindex="-1"><a class="header-anchor" href="#groupby分组聚合" aria-hidden="true">#</a> GroupBy分组聚合</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> tt2 <span class="token operator">=</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">.</span><span class="token function">Substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mod4 <span class="token operator">=</span> a<span class="token punctuation">.</span>Id <span class="token operator">%</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">Max</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>tt2<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderByDescending</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> 
    <span class="token punctuation">{</span>
        a<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> 
        cou1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
        arg1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Clicks<span class="token punctuation">)</span><span class="token punctuation">,</span> 
        arg2 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">Sum</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Clicks <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token punctuation">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//SELECT </span>
<span class="token comment">//substr(a.\`Title\`, 1, 2) as1, </span>
<span class="token comment">//count(1) as2, </span>
<span class="token comment">//avg(a.\`Clicks\`) as3, </span>
<span class="token comment">//sum(case when a.\`Clicks\` &gt; 100 then 1 else 0 end) as4 </span>
<span class="token comment">//FROM \`Topic\` a </span>
<span class="token comment">//GROUP BY substr(a.\`Title\`, 1, 2), (a.\`Id\` % 4) </span>
<span class="token comment">//HAVING (count(1) &gt; 0 AND avg((a.\`Id\` % 4)) &gt; 0 AND max((a.\`Id\` % 4)) &gt; 0) AND (count(1) &lt; 300 OR avg((a.\`Id\` % 4)) &lt; 100)</span>
<span class="token comment">//ORDER BY substr(a.\`Title\`, 1, 2), count(1) DESC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>不分组求聚合值，请使用 ToAggregate 替代 ToList</p></blockquote><h2 id="导航属性分组" tabindex="-1"><a class="header-anchor" href="#导航属性分组" aria-hidden="true">#</a> 导航属性分组</h2><p>假如 Topic 有导航属性 Category，Category 又有导航属性 Area，导航属性分组代码如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Clicks<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),k={href:"http://a.Key.Category.Area.Name",target:"_blank",rel:"noopener noreferrer"},r=p(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area<span class="token punctuation">)</span>
    <span class="token comment">//必须添加此行，否则只分组 Category 而不包含它的下级导航属性 Area</span>

    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Clicks<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，你还可以这样解决：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Clicks<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Area<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多表分组" tabindex="-1"><a class="header-anchor" href="#多表分组" aria-hidden="true">#</a> 多表分组</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">,</span> Category<span class="token punctuation">,</span> Area<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>g <span class="token operator">=&gt;</span> g<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span> g<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Item1<span class="token punctuation">.</span>Clicks<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>g <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> count <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> g<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>g.Value.Item1 对应 Topic</li><li>g.Value.Item2 对应 Category</li><li>g.Value.Item3 对应 Area</li></ul><h2 id="aggregate" tabindex="-1"><a class="header-anchor" href="#aggregate" aria-hidden="true">#</a> Aggregate</h2><h3 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> Distinct</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Aggregate</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> Convert<span class="token punctuation">.</span><span class="token function">ToInt32</span><span class="token punctuation">(</span><span class="token string">&quot;count(distinct title)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> count<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>SELECT count(distinct title) as1 FROM &quot;Topic&quot; a</p></blockquote><blockquote><p>SELECT a.&quot;Id&quot;, a.&quot;Clicks&quot;, a.&quot;Title&quot;, a.&quot;CreateTime&quot; FROM &quot;Topic&quot; a</p></blockquote><h3 id="sqlext-distinctcount" tabindex="-1"><a class="header-anchor" href="#sqlext-distinctcount" aria-hidden="true">#</a> SqlExt.DistinctCount</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Aggregate</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> SqlExt<span class="token punctuation">.</span><span class="token function">DistinctCount</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Title<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>SELECT count(distinct a.&quot;title&quot;) as1 FROM &quot;Topic&quot; a</p></blockquote><h3 id="toaggregate-sqlext-distinctcount" tabindex="-1"><a class="header-anchor" href="#toaggregate-sqlext-distinctcount" aria-hidden="true">#</a> ToAggregate + SqlExt.DistinctCount</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> distinctAggregate <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToAggregate</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span>
    <span class="token punctuation">{</span>
        TitleCount <span class="token operator">=</span> SqlExt<span class="token punctuation">.</span><span class="token function">DistinctCount</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Title<span class="token punctuation">)</span><span class="token punctuation">,</span>
        ClicksCount<span class="token operator">=</span> SqlExt<span class="token punctuation">.</span><span class="token function">DistinctCount</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Clicks<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>SELECT count(distinct a.&quot;Title&quot;) as1, count(distinct a.&quot;Clicks&quot;) as2 FROM &quot;Topic&quot; a</p></blockquote><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,18),d=n("thead",null,[n("tr",null,[n("th",null,"方法"),n("th",null,"返回值"),n("th",null,"参数"),n("th",null,"描述")])],-1),m=n("tr",null,[n("td",null,"ToSql"),n("td",null,"string"),n("td"),n("td",null,"返回即将执行的 SQL 语句")],-1),g=n("tr",null,[n("td",null,"ToList<T>"),n("td",null,"List<T>"),n("td",null,"Lambda"),n("td",null,"执行 SQL 查询，返回指定字段的记录，记录不存在时返回 Count 为 0 的列表")],-1),v=n("tr",null,[n("td",null,"ToList<T>"),n("td",null,"List<T>"),n("td",null,"string field"),n("td",null,"执行 SQL 查询，返回 field 指定字段的记录，并以元组或基础类型(int,string,long)接收，记录不存在时返回 Count 为 0 的列表")],-1),b=n("tr",null,[n("td",null,"ToAggregate<T>"),n("td",null,"List<T>"),n("td",null,"Lambda"),n("td",null,"执行 SQL 查询，返回指定字段的聚合结果（适合不需要 GroupBy 的场景）")],-1),h=n("tr",null,[n("td",null,"Sum"),n("td",null,"T"),n("td",null,"Lambda"),n("td",null,"指定一个列求和")],-1),y=n("tr",null,[n("td",null,"Min"),n("td",null,"T"),n("td",null,"Lambda"),n("td",null,"指定一个列求最小值")],-1),f=n("tr",null,[n("td",null,"Max"),n("td",null,"T"),n("td",null,"Lambda"),n("td",null,"指定一个列求最大值")],-1),T=n("tr",null,[n("td",null,"Avg"),n("td",null,"T"),n("td",null,"Lambda"),n("td",null,"指定一个列求平均值")],-1),q=n("tr",null,[n("td",null,"【分组】"),n("td"),n("td"),n("td")],-1),_=n("td",null,"GroupBy",-1),w=n("td",null,"<this>",-1),C=n("td",null,"Lambda",-1),x={href:"http://a.Name",target:"_blank",rel:"noopener noreferrer"},S=n("tr",null,[n("td",null,"GroupBy"),n("td",null,"<this>"),n("td",null,"string, parms"),n("td",null,'按原生sql语法分组，GroupBy("concat(name, @cc)", new { cc = 1 })')],-1),L=n("tr",null,[n("td",null,"Having"),n("td",null,"<this>"),n("td",null,"string, parms"),n("td",null,'按原生sql语法聚合条件过滤，Having("count(name) = @cc", new { cc = 1 })')],-1),A=n("tr",null,[n("td",null,"【成员】"),n("td"),n("td"),n("td")],-1),I=n("tr",null,[n("td",null,"Key"),n("td"),n("td"),n("td",null,"返回 GroupBy 选择的对象")],-1),B=n("tr",null,[n("td",null,"Value"),n("td"),n("td"),n("td",null,"返回主表 或 From<T2,T3....> 的字段选择器")],-1);function E(N,D){const a=l("ExternalLinkIcon");return e(),c("div",null,[i,n("p",null,[s("注意：如上这样编写，会报错无法解析 "),n("a",k,[s("a.Key.Category.Area.Name"),t(a)]),s("，解决办法使用 Include：")]),r,n("table",null,[d,n("tbody",null,[m,g,v,b,h,y,f,T,q,n("tr",null,[_,w,C,n("td",null,[s("按选择的列分组，GroupBy(a => "),n("a",x,[s("a.Name"),t(a)]),s(")")])]),S,L,A,I,B])])])}const V=o(u,[["render",E],["__file","select-group-by.html.vue"]]);export{V as default};