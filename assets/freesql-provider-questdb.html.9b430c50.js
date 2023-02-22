import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a as e,b as n,d as a,e as t,r as u}from"./app.62680186.js";const r={},d=e("h1",{id:"freesql-provider-questdb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#freesql-provider-questdb","aria-hidden":"true"},"#"),n(" FreeSql.Provider.QuestDb")],-1),c=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),p=e("p",null,[e("code",null,"QuestDB "),n("是一款针对时序数据实时处理优化的关系型列存数据库， 支持 Rest API 方式访问，同时兼容 PostgreSQL 访问协议，以及 InfluxDB 写入的访问协议。自带 Web Console，方便数据库的基本访问")],-1),b={href:"https://questdb.io/",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="安装包" tabindex="-1"><a class="header-anchor" href="#安装包" aria-hidden="true">#</a> 安装包</h2><p>FreeSql.Provider.QuestDb</p><p>.NET CLI</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package FreeSql.Provider.QuestDb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Package Manager</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Install-Package FreeSql.Provider.QuestDb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>QuestDb<span class="token punctuation">,</span>
                <span class="token string">@&quot;host=localhost;port=8812;username=admin;password=quest;database=qdb;ServerCompatibilityMode=NoTypeLoading;&quot;</span><span class="token punctuation">)</span>  <span class="token comment">//连接字符串</span>
            <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Sql：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">cmd<span class="token punctuation">.</span>CommandText</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
            <span class="token punctuation">.</span><span class="token function">UseQuestDbRestAPI</span><span class="token punctuation">(</span><span class="token string">&quot;localhost:9000&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>  <span class="token comment">//RestAPI，建议开启</span>
            <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特有功能" tabindex="-1"><a class="header-anchor" href="#特有功能" aria-hidden="true">#</a> 特有功能</h2><h4 id="sample-by" tabindex="-1"><a class="header-anchor" href="#sample-by" aria-hidden="true">#</a> Sample By</h4><blockquote><p>SAMPLE BY用于时间序列数据，将大型数据集汇总为同质时间块的聚合，作为SELECT语句的一部分</p></blockquote>`,11),h={href:"https://questdb.io/docs/reference/sql/sample-by/",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>fsql.Select&lt;Table&gt;()
    .SampleBy(1, SampleUnits.d)
    .WithTempQuery(q =&gt; new { q.Id, q.Activos, count = SqlExt.Count(q.Id).ToValue() })
    .Where(q =&gt; q.Id != &quot;xxx&quot;)
    .ToSql();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成SQL</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT
  *
FROM
  (
    SELECT
      a.&quot;Id&quot;,
      a.&quot;Activos&quot;,
      count(a.&quot;Id&quot;) &quot;count&quot;
    FROM
      &quot;Table&quot; a SAMPLE BY 1d
  ) a
WHERE
  (a.&quot;Id&quot; &lt;&gt; &#39;1&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="groupby" tabindex="-1"><a class="header-anchor" href="#groupby" aria-hidden="true">#</a> GroupBy</h4><blockquote><p>需要注意的是QuestDb的GroupBy与其他关系型 数据库不同</p></blockquote>`,5),q={href:"https://questdb.io/docs/concept/sql-extensions/#group-by-is-optional",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//这里通过WithTempQuery实现
fsql.Select&lt;Table&gt;()
    .WithTempQuery(q =&gt; new { q.Id, q.xxx, count = SqlExt.Count(q.Id).ToValue() })
    .Where(q =&gt; q.Id != &quot;1&quot; &amp;&amp; q.count &gt; 1)
    .ToSql();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成SQL</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT
  *
FROM
  (
    SELECT
      a.&quot;Id&quot;,
      a.&quot;xxx&quot;,
      count(a.&quot;Id&quot;) &quot;count&quot;
    FROM
      &quot;Table&quot; a
  ) a
WHERE
  (
    a.&quot;Id&quot; &lt;&gt; &#39;1&#39;
    AND a.&quot;count&quot; &gt; 1
  )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="latest-on" tabindex="-1"><a class="header-anchor" href="#latest-on" aria-hidden="true">#</a> Latest On</h4><blockquote><p>对于多个时间序列存储在同一个表中的场景，根据时间戳检索给定键或键组合的最新项</p></blockquote>`,5),g={href:"https://questdb.io/docs/reference/sql/latest-on/",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Table<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">LatestOn</span><span class="token punctuation">(</span>q <span class="token operator">=&gt;</span> q<span class="token punctuation">.</span>CreateTime<span class="token punctuation">,</span> q <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> q<span class="token punctuation">.</span>xxx<span class="token punctuation">,</span> q<span class="token punctuation">.</span>xxx <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成SQL</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT  a.&quot;xxx&quot;, a.&quot;xxx&quot;, a.&quot;xxx&quot;, a.&quot;xxx&quot;, a.&quot;xxx&quot;, a.&quot;xxx&quot;, a.&quot;xxx&quot;, a.&quot;xxx&quot;, a.&quot;xxx&quot;
FROM &quot;Table&quot; a
LATEST ON a.xxxx  PARTITION BY a.xxxx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bulkcopy" tabindex="-1"><a class="header-anchor" href="#bulkcopy" aria-hidden="true">#</a> BulkCopy</h4><blockquote><p>实测七列10W数据预热后只需1-2秒，100W数据15秒左右</p></blockquote><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//需要启用RestAPI</span>
fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteBulkCopyAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自动分表、索引" tabindex="-1"><a class="header-anchor" href="#自动分表、索引" aria-hidden="true">#</a> 自动分表、索引</h4><blockquote><p>QuestDb支持自动分表</p></blockquote><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>[Index(&quot;Id_Index&quot;, nameof(Id), false)]
class Table
{
    //索引类型必须是symbol
    [Column(DbType = &quot;symbol&quot;)] 
    public string Id { get; set; }
    public string Name { get; set; }
    public double? Activos { get; set; }
    //按天分表 
    [AutoSubtable(SubtableType.Day)] 
    //特性标记类型必须是DateTime
    public DateTime? CreateTime { get; set; }
    public bool? IsCompra { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h4 id="table-busy" tabindex="-1"><a class="header-anchor" href="#table-busy" aria-hidden="true">#</a> table busy</h4><p><strong>多线程并发查询时会出现 table busy [reason=insert] 异常</strong></p>`,12),_={href:"https://questdb.io/docs/troubleshooting/faq/#why-do-i-get-table-busy-error-messages-when-inserting-data-over-postgresql-wire-protocol",target:"_blank",rel:"noopener noreferrer"},f=t(`<blockquote><p>解决方案，启用RestAPI后 Insert/Update就会默认使用HTTP方式</p></blockquote><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//在FreeSqlBuilder增加UseQuestDbRestAPI()
new FreeSql.FreeSqlBuilder()
.UseQuestDbRestAPI(&quot;localhost:9000&quot;, &quot;username&quot;, &quot;password&quot;) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="restapi设置账号密码" tabindex="-1"><a class="header-anchor" href="#restapi设置账号密码" aria-hidden="true">#</a> RestAPI设置账号密码</h4><p>QuestDb WebConsole并不支持设置账号密码，但是官网给出解决方案 使用Nginx代理</p>`,4),S={href:"https://questdb.io/blog/2022/08/05/setting-basic-auth-nginx/#introduction",target:"_blank",rel:"noopener noreferrer"},E=e("h4",{id:"questdb不支持删除",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#questdb不支持删除","aria-hidden":"true"},"#"),n(" QuestDb不支持删除？")],-1),T={href:"https://questdb.io/docs/troubleshooting/faq/#how-do-i-delete-a-row",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"在线测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在线测试","aria-hidden":"true"},"#"),n(" 在线测试")],-1),L={href:"https://demo.questdb.io/",target:"_blank",rel:"noopener noreferrer"},C=e("ul",null,[e("li",null,"Trips: 10 years of NYC taxi trips with 1.6 billion rows"),e("li",null,"Trades: live crytocurrency market data with 30M+ rows per month"),e("li",null,"Pos: geolocations of 250k unique ships over time")],-1),Q=e("thead",null,[e("tr",null,[e("th",null,"Query"),e("th",null,"Execution time")])],-1),I=e("td",null,"SELECT sum(double) FROM trips",-1),B={href:"https://demo.questdb.io/?query=SELECT",target:"_blank",rel:"noopener noreferrer"},R=e("td",null,"SELECT sum(double), avg(double) FROM trips",-1),A={href:"https://demo.questdb.io/?query=SELECT",target:"_blank",rel:"noopener noreferrer"},D=e("td",null,"SELECT avg(double) FROM trips WHERE time in '2019'",-1),F={href:"https://demo.questdb.io/?query=SELECT",target:"_blank",rel:"noopener noreferrer"},P=e("td",null,"SELECT time, avg(double) FROM trips WHERE time in '2019-01-01' SAMPLE BY 1h",-1),O={href:"https://demo.questdb.io/?query=SELECT",target:"_blank",rel:"noopener noreferrer"},w=e("td",null,"SELECT * FROM trades LATEST ON time PARTITION BY symbol",-1),M={href:"https://demo.questdb.io/?query=SELECT",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,[n("Our demo is running on "),e("code",null,"c5.metal"),n(" instance and using 24 cores out of")],-1);function W(Y,H){const s=u("ExternalLinkIcon");return i(),l("div",null,[d,c,p,e("p",null,[e("a",b,[n("QuestDB | 官网 "),a(s)])]),v,e("p",null,[e("a",h,[n("SAMPLE BY keyword | QuestDB"),a(s)])]),m,e("p",null,[e("a",q,[n("官网说明：SQL extensions | QuestDB"),a(s)])]),k,e("p",null,[e("a",g,[n("LATEST ON keyword | QuestDB"),a(s)])]),x,e("p",null,[e("a",_,[n("官网说明 | table busy "),a(s)])]),f,e("p",null,[e("a",S,[n("Setting up Basic Authentication for QuestDB open source using Nginx | QuestDB"),a(s)])]),E,e("p",null,[e("a",T,[n("FAQ | How do I delete a row?"),a(s)])]),y,e("p",null,[e("a",L,[n("QuestDB | 在线测试 "),a(s)]),n(" 提供了最新的QuestDB发行版和示例数据集:")]),C,e("table",null,[Q,e("tbody",null,[e("tr",null,[I,e("td",null,[n("[0.15 secs]("),e("a",B,[n("https://demo.questdb.io/?query=SELECT"),a(s)]),n(" sum(trip_distance) FROM trips;&executeQuery=true)")])]),e("tr",null,[R,e("td",null,[n("[0.5 secs]("),e("a",A,[n("https://demo.questdb.io/?query=SELECT"),a(s)]),n(" sum(fare_amount), avg(fare_amount) FROM trips;&executeQuery=true)")])]),e("tr",null,[D,e("td",null,[n("[0.02 secs]("),e("a",F,[n("https://demo.questdb.io/?query=SELECT"),a(s)]),n(" avg(trip_distance) FROM trips WHERE pickup_datetime IN '2019';&executeQuery=true)")])]),e("tr",null,[P,e("td",null,[n("[0.01 secs]("),e("a",O,[n("https://demo.questdb.io/?query=SELECT"),a(s)]),n(" pickup_datetime, avg(trip_distance) FROM trips WHERE pickup_datetime IN '2019-01-01' SAMPLE BY 1h;&executeQuery=true)")])]),e("tr",null,[w,e("td",null,[n("[0.00025 secs]("),e("a",M,[n("https://demo.questdb.io/?query=SELECT"),a(s)]),n(" * FROM trades LATEST ON timestamp PARTITION BY symbol;&executeQuery=true)")])])])]),N])}const G=o(r,[["render",W],["__file","freesql-provider-questdb.html.vue"]]);export{G as default};
