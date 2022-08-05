import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c,a,b as e,w as l,F as i,d as r,e as n,o}from"./app.2c4cad69.js";const u={},b=r(`<h1 id="\u591A\u79DF\u6237" tabindex="-1"><a class="header-anchor" href="#\u591A\u79DF\u6237" aria-hidden="true">#</a> \u591A\u79DF\u6237</h1><h3 id="\u4EC0\u4E48\u662F\u591A\u79DF\u6237" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u591A\u79DF\u6237" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u591A\u79DF\u6237</h3><p>\u7EF4\u57FA\u767E\u79D1\uFF1A\u201C\u8F6F\u4EF6\u591A\u79DF\u6237\u662F\u6307\u4E00\u79CD\u8F6F\u4EF6\u67B6\u6784\uFF0C\u5728\u8FD9\u79CD\u8F6F\u4EF6\u67B6\u6784\u4E2D\uFF0C\u8F6F\u4EF6\u7684\u4E00\u4E2A\u5B9E\u4F8B\u8FD0\u884C\u5728\u670D\u52A1\u5668\u4E0A\u5E76\u4E14\u4E3A\u591A\u4E2A\u79DF\u6237\u670D\u52A1\u201D\u3002\u4E00\u4E2A\u79DF\u6237\u662F\u4E00\u7EC4\u5171\u4EAB\u8BE5\u8F6F\u4EF6\u5B9E\u4F8B\u7279\u5B9A\u6743\u9650\u7684\u7528\u6237\u3002\u6709\u4E86\u591A\u79DF\u6237\u67B6\u6784\uFF0C\u8F6F\u4EF6\u5E94\u7528\u88AB\u8BBE\u8BA1\u6210\u4E3A\u6BCF\u4E2A\u79DF\u6237\u63D0\u4F9B\u4E00\u4E2A \u4E13\u7528\u7684\u5B9E\u4F8B\u5305\u62EC\u8BE5\u5B9E\u4F8B\u7684\u6570\u636E\u7684\u5171\u4EAB\uFF0C\u8FD8\u53EF\u4EE5\u5171\u4EAB\u914D\u7F6E\uFF0C\u7528\u6237\u7BA1\u7406\uFF0C\u79DF\u6237\u81EA\u5DF1\u7684\u529F\u80FD\u548C\u975E\u529F\u80FD\u5C5E\u6027\u3002\u591A\u79DF\u6237\u548C\u591A\u5B9E\u4F8B\u67B6\u6784\u76F8\u6BD4\uFF0C\u591A\u79DF\u6237\u5206\u79BB\u4E86\u4EE3\u8868\u4E0D\u540C\u7684\u79DF\u6237\u64CD\u4F5C\u7684\u591A\u4E2A\u5B9E\u4F8B\u3002</p><p>\u591A\u79DF\u6237\u7528\u4E8E\u521B\u5EFA Saas\uFF08Software as-a service\uFF09\u5E94\u7528\uFF08\u4E91\u5904\u7406\uFF09\u3002</p><h3 id="\u65B9\u6848\u4E00-\u6309\u79DF\u6237\u5B57\u6BB5\u533A\u5206" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E00-\u6309\u79DF\u6237\u5B57\u6BB5\u533A\u5206" aria-hidden="true">#</a> \u65B9\u6848\u4E00\uFF1A\u6309\u79DF\u6237\u5B57\u6BB5\u533A\u5206</h3><p>\u7B2C1\u6B65\uFF1A\u4E86\u89E3 AsyncLocal&lt;int&gt;</p><p>ThreadLocal \u53EF\u4EE5\u7406\u89E3\u4E3A\u5B57\u5178 Dictionary&lt;int, string&gt; Key=\u7EBF\u7A0BID Value=\u503C\uFF0C\u8DE8\u65B9\u6CD5\u65F6\u53EA\u9700\u8981\u77E5\u9053\u7EBF\u7A0BID\uFF0C\u5C31\u80FD\u53D6\u5F97\u5BF9\u5E94\u7684 Value\u3002</p><p>\u6211\u4EEC\u77E5\u9053\u8DE8\u5F02\u6B65\u65B9\u6CD5\u53EF\u80FD\u9020\u6210\u7EBF\u7A0BID\u53D8\u5316\uFF0CThreadLocal \u5C06\u4E0D\u80FD\u6EE1\u8DB3\u6211\u4EEC\u4F7F\u7528\u3002</p><p>AsyncLocal \u662F ThreadLocal \u7684\u5347\u7EA7\u7248\uFF0C\u89E3\u51B3\u8DE8\u5F02\u6B65\u65B9\u6CD5\u4E5F\u80FD\u83B7\u53D6\u5230\u5BF9\u5E94\u7684 Value\u3002</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>public class TerantManager
{
    // \u6CE8\u610F\u4E00\u5B9A\u662F static \u9759\u6001\u5316
    static AsyncLocal&lt;int&gt; _asyncLocal = new AsyncLocal&lt;int&gt;();

    public static int Current
    {
        get =&gt; _asyncLocal.Value;
        set =&gt; _asyncLocal.Value = value;    
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7B2C2\u6B65\uFF1AFreeSql \u5168\u5C40\u8FC7\u6EE4\u5668\uFF0C\u8BA9\u4EFB\u4F55\u67E5\u8BE2/\u66F4\u65B0/\u5220\u9664\uFF0C\u90FD\u9644\u5E26\u79DF\u6237\u6761\u4EF6\uFF1B</p><p>\u4EE5\u4E0B\u4EE3\u7801\u82E5\u5F53\u524D\u6CA1\u6709\u8BBE\u7F6E\u79DF\u6237\u503C\uFF0C\u5219\u8FC7\u6EE4\u5668\u4E0D\u751F\u6548\uFF0C\u4EC0\u4E48\u610F\u601D\uFF1F</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>// \u5168\u5C40\u8FC7\u6EE4\u5668\u53EA\u9700\u8981\u5728 IFreeSql \u521D\u59CB\u5316\u5904\u6267\u884C\u4E00\u6B21
// ITerant \u53EF\u4EE5\u662F\u81EA\u5B9A\u4E49\u63A5\u53E3\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4EFB\u4F55\u4E00\u4E2A\u5305\u542B TerantId \u5C5E\u6027\u7684\u5B9E\u4F53\u7C7B\u578B\uFF0CFreeSql \u4E0D\u9700\u8981\u4E3A\u6BCF\u4E2A\u5B9E\u4F53\u7C7B\u578B\u90FD\u8BBE\u7F6E\u8FC7\u6EE4\u5668\uFF08\u4E00\u6B21\u5373\u53EF\uFF09
fsql.GlobalFilter.ApplyIf&lt;ITerant&gt;(
    &quot;TerantFilter&quot;, // \u8FC7\u6EE4\u5668\u540D\u79F0
    () =&gt; TerantManager.Current &gt; 0, // \u8FC7\u6EE4\u5668\u751F\u6548\u5224\u65AD
    a =&gt; a.TerantId == TerantManager.Current // \u8FC7\u6EE4\u5668\u6761\u4EF6
);

TerantManager.Current = 0;
fsql.Select&lt;T&gt;().ToList(); // SELECT .. FROM T

TerantManager.Current = 1;
fsql.Select&lt;T&gt;().ToList(); // SELECT .. FROM T WHERE TerantId = 1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7B2C3\u6B65\uFF1AFreeSql Aop.AuditValue \u5BF9\u8C61\u5BA1\u8BA1\u4E8B\u4EF6\uFF0C\u5B9E\u73B0\u7EDF\u4E00\u62E6\u622A\u63D2\u5165\u3001\u66F4\u65B0\u5B9E\u4F53\u5BF9\u8C61\uFF1B</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>fsql.Aop.AuditValue += (_, e) =&gt;
{
    if (TerantManager.Current &gt; 0 &amp;&amp; e.Property.PropertyType == typeof(int) &amp;&amp; e.Property.Name == &quot;TerantId&quot;)
    {
        e.Value = TerantManager.Current
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7B2C4\u6B65\uFF1AAspnetCore Startup.cs Configure \u4E2D\u95F4\u4EF6\u5904\u7406\u79DF\u6237\u903B\u8F91\uFF1B</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>public void Configure(IApplicationBuilder app)
{
    app.Use(async (context, next) =&gt;
    {
        try
        {
            // \u4F7F\u7528\u8005\u901A\u8FC7 aspnetcore \u4E2D\u95F4\u4EF6\uFF0C\u89E3\u6790 token \u83B7\u5F97 \u79DF\u6237ID
            TerantManager.Current = YourGetTerantIdFunction();
            await next();
        }
        finally
        {
            // \u6E05\u9664\u79DF\u6237\u72B6\u6001
            TerantManager.Current = 0;
        }
    });
    app.UseRouting();
    app.UseEndpoints(a =&gt; a.MapControllers());
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="wherecascade" tabindex="-1"><a class="header-anchor" href="#wherecascade" aria-hidden="true">#</a> WhereCascade</h3><p>\u591A\u8868\u67E5\u8BE2\u65F6\uFF0C\u50CF isdeleted \u6BCF\u4E2A\u8868\u90FD\u7ED9\u6761\u4EF6\uFF0C\u633A\u9EBB\u70E6\u7684\u3002WhereCascade \u4F7F\u7528\u540E\u751F\u6210 sql \u65F6\uFF0C\u6240\u6709\u8868\u90FD\u9644\u4E0A\u8FD9\u4E2A\u6761\u4EF6\u3002\u591A\u8868\u79DF\u6237\u6761\u4EF6\u4E5F\u53EF\u4EE5\u8FD9\u6837\u89E3\u51B3\u3002</p><p>\u5982\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>t1<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">LeftJoin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>t2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">WhereCascade</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>IsDeleted <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F97\u5230\u7684 SQL\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span> t1
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> t2 <span class="token keyword">on</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">AND</span> <span class="token punctuation">(</span>t2<span class="token punctuation">.</span>IsDeleted <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">WHERE</span> t1<span class="token punctuation">.</span>IsDeleted <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5B9E\u4F53\u53EF\u9644\u52A0\u8868\u8FBE\u5F0F\u65F6\u624D\u751F\u6548\uFF0C\u652F\u6301\u5B50\u8868\u67E5\u8BE2\u3002\u5355\u6B21\u67E5\u8BE2\u4F7F\u7528\u7684\u8868\u6570\u76EE\u8D8A\u591A\u6536\u76CA\u8D8A\u5927\u3002</p><p>\u53EF\u5E94\u7528\u8303\u56F4\uFF1A</p><ul><li>\u5B50\u67E5\u8BE2\uFF0C\u4E00\u5BF9\u591A\u3001\u591A\u5BF9\u591A\u3001\u81EA\u5B9A\u4E49\u7684\u5B50\u67E5\u8BE2\uFF1B</li><li>Join \u67E5\u8BE2\uFF0C\u5BFC\u822A\u5C5E\u6027\u3001\u81EA\u5B9A\u4E49\u7684 Join \u67E5\u8BE2\uFF1B</li><li>Include/IncludeMany \u7684\u5B50\u96C6\u5408\u67E5\u8BE2\uFF1B</li></ul><blockquote><p>\u6682\u65F6\u4E0D\u652F\u6301\u3010\u5EF6\u65F6\u5C5E\u6027\u3011\u7684\u5E7F\u64AD\uFF1B</p></blockquote><blockquote><p>\u6B64\u529F\u80FD\u548C\u3010\u8FC7\u6EE4\u5668\u3011\u4E0D\u540C\uFF0C\u7528\u4E8E\u5355\u6B21\u591A\u8868\u67E5\u8BE2\u6761\u4EF6\u7684\u4F20\u64AD\uFF1B</p></blockquote><h3 id="\u65B9\u6848\u4E8C-\u6309\u79DF\u6237\u5206\u8868" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E8C-\u6309\u79DF\u6237\u5206\u8868" aria-hidden="true">#</a> \u65B9\u6848\u4E8C\uFF1A\u6309\u79DF\u6237\u5206\u8868</h3><p>\u6B64\u65B9\u6848\u8981\u6C42\u6BCF\u4E2A\u79DF\u6237\u5BF9\u5E94\u4E0D\u540C\u7684\u6570\u636E\u8868\uFF0C\u5982 Goods_1\u3001Goods_2\u3001Goods_3 \u5206\u522B\u5BF9\u5E94 \u79DF\u62371\u3001\u79DF\u62372\u3001\u79DF\u62373 \u7684\u5546\u54C1\u8868\u3002</p><p>\u8FD9\u5176\u5B9E\u5C31\u662F\u4E00\u822C\u7684\u5206\u8868\u65B9\u6848\uFF0CFreeSql \u63D0\u4F9B\u4E86\u5206\u8868\u573A\u666F\u7684\u51E0\u4E2A API\uFF1A</p><ul><li>\u521B\u5EFA\u8868 fsql.CodeFirst.SyncStructure(typeof(Goods), &quot;Goods_1&quot;)</li><li>\u64CD\u4F5C\u8868 CURD</li></ul><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>var goodsRepository = fsql.GetRepository&lt;Goods&gt;(null, old =&gt; $&quot;{Goods}_{TerantManager.Current}&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u6211\u4EEC\u5F97\u5230\u4E00\u4E2A\u4ED3\u50A8\u6309\u79DF\u6237\u5206\u8868\uFF0C\u4F7F\u7528\u5B83 CURD \u6700\u7EC8\u4F1A\u64CD\u4F5C Goods_1 \u8868\u3002</p>`,34),d=n("\u66F4\u591A\u8BF4\u660E\u53C2\u8003\uFF1A"),m=n("\u300AFreeSql.Repository \u4ED3\u50A8\u300B"),g=n("\u3001"),k=n("\u300A\u5206\u8868\u5206\u5E93\u300B"),h=n("\u3002"),q=r(`<h3 id="\u65B9\u6848\u4E09-\u6309\u79DF\u6237\u5206\u5E93" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E09-\u6309\u79DF\u6237\u5206\u5E93" aria-hidden="true">#</a> \u65B9\u6848\u4E09\uFF1A\u6309\u79DF\u6237\u5206\u5E93</h3><ul><li>\u573A\u666F1\uFF1A\u540C\u6570\u636E\u5E93\u5B9E\u4F8B\uFF08\u672A\u8DE8\u670D\u52A1\u5668\uFF09\uFF0C\u79DF\u6237\u95F4\u4F7F\u7528\u4E0D\u540C\u7684\u6570\u636E\u5E93\u540D\u6216Schema\u533A\u5206\uFF0C\u4F7F\u7528\u65B9\u6CD5\u4E0E\u65B9\u6848\u4E8C\u76F8\u540C\uFF1B</li><li>\u573A\u666F2\uFF1A\u8DE8\u670D\u52A1\u5668\u5206\u5E93\uFF0C\u672C\u6BB5\u8BB2\u89E3\u8BE5\u573A\u666F\uFF1B</li></ul><p>\u7B2C1\u6B65\uFF1AFreeSql.Cloud \u4E3A FreeSql \u63D0\u4F9B\u8DE8\u6570\u636E\u5E93\u8BBF\u95EE\uFF0C\u5206\u5E03\u5F0F\u4E8B\u52A1TCC\u3001SAGA\u89E3\u51B3\u65B9\u6848\uFF0C\u652F\u6301 .NET Core 2.1+, .NET Framework 4.0+.</p><p>\u539F\u672C\u4F7F\u7528 FreeSqlBuilder \u521B\u5EFA IFreeSql\uFF0C\u9700\u8981\u4F7F\u7528 FreeSqlCloud \u4EE3\u66FF\uFF0C\u56E0\u4E3A FreeSqlCloud \u4E5F\u5B9E\u73B0\u4E86 IFreeSql \u63A5\u53E3\u3002</p><blockquote><p>dotnet add package FreeSql.Cloud</p></blockquote><p>or</p><blockquote><p>Install-Package FreeSql.Cloud</p></blockquote><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>FreeSqlCloud&lt;string&gt; fsql = new FreeSqlCloud&lt;string&gt;();

public void ConfigureServices(IServiceCollection services)
{
    fsql.DistributeTrace = log =&gt; Console.WriteLine(log.Split(&#39;\\n&#39;)[0].Trim());
    fsql.Register(&quot;main&quot;, () =&gt;
    {
        var db = new FreeSqlBuilder().UseConnectionString(DataType.SqlServer, &quot;data source=main.db&quot;).Build();
        //db.Aop.CommandAfter += ...
        return db;
    });

    services.AddSingleton&lt;IFreeSql&gt;(fsql);
    services.AddControllers();
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.Use(async (context, next) =&gt;
    {
        try
        {
            // \u4F7F\u7528\u8005\u901A\u8FC7 aspnetcore \u4E2D\u95F4\u4EF6\uFF0C\u89E3\u6790 token\uFF0C\u67E5\u8BE2  main \u5E93\u5F97\u5230\u79DF\u6237\u4FE1\u606F\u3002
            (string terant, string connectionString) = YourGetTerantFunction();

            // \u53EA\u4F1A\u9996\u6B21\u6CE8\u518C\uFF0C\u5982\u679C\u5DF2\u7ECF\u6CE8\u518C\u8FC7\u5219\u4E0D\u751F\u6548
            fsql.Register(terant, () =&gt;
            {
                var db = new FreeSqlBuilder().UseConnectionString(DataType.SqlServer, connectionString).Build();
                //db.Aop.CommandAfter += ...
                return db;
            });

            // \u5207\u6362\u79DF\u6237
            fsql.Change(terant);
            await next();
        }
        finally
        {
            // \u5207\u6362\u56DE main \u5E93
            fsql.Change(&quot;main&quot;);
        }
    });
    app.UseRouting();
    app.UseEndpoints(a =&gt; a.MapControllers());
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u7B2C2\u6B65\uFF1A\u76F4\u63A5\u4F7F\u7528 IFreeSql \u8BBF\u95EE\u79DF\u6237\u6570\u636E\u5E93</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>public class HomeController : ControllerBase
{

    [HttpGet]
    public object Get([FromServices] IFreeSql fsql)
    {
        // \u4F7F\u7528 fsql \u64CD\u4F5C\u5F53\u524D\u79DF\u6237\u5BF9\u5E94\u7684\u6570\u636E\u5E93
        return &quot;&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,10);function v(f,S){const s=t("RouterLink");return o(),c(i,null,[b,a("blockquote",null,[a("p",null,[d,e(s,{to:"/guide/repository.html"},{default:l(()=>[m]),_:1}),g,e(s,{to:"/guide/sharding.html"},{default:l(()=>[k]),_:1}),h])]),q],64)}var _=p(u,[["render",v],["__file","multi-tenancy.html.vue"]]);export{_ as default};
