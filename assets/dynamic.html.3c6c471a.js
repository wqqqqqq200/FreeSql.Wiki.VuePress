import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as u,a as n,b as p,d as a,e as s}from"./app.c5255ef9.js";const l={},i=a(`<h1 id="\u52A8\u6001\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u64CD\u4F5C" aria-hidden="true">#</a> \u52A8\u6001\u64CD\u4F5C</h1><h2 id="\u5F31\u7C7B\u578B-crud" tabindex="-1"><a class="header-anchor" href="#\u5F31\u7C7B\u578B-crud" aria-hidden="true">#</a> \u5F31\u7C7B\u578B CRUD</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsType</span><span class="token punctuation">(</span>\u5B9E\u4F53\u7C7B\u578B<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">AppendData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsType</span><span class="token punctuation">(</span>\u5B9E\u4F53\u7C7B\u578B<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">SetSource</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsType</span><span class="token punctuation">(</span>\u5B9E\u4F53\u7C7B\u578B<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a <span class="token keyword">as</span> <span class="token class-name">BaseEntity</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//fsql.Select&lt;object&gt;()...</span>

<span class="token comment">//\u6216\u8005\u4ED3\u50A8</span>
<span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">AsType</span><span class="token punctuation">(</span>\u5B9E\u4F53\u7C7B\u578B<span class="token punctuation">)</span><span class="token punctuation">;</span>

repo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">InsertOrUpdate</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=s("\u63D0\u793A\uFF1A\u52A8\u6001\u7F16\u8BD1\u6280\u672F "),k={href:"https://natasha.dotnetcore.xyz/zh-Hans/docs/get_started/string-complie",target:"_blank",rel:"noopener noreferrer"},d=s("https://natasha.dotnetcore.xyz/zh-Hans/docs/get_started/string-complie"),v=a(`<h2 id="\u5B57\u5178-cud" tabindex="-1"><a class="header-anchor" href="#\u5B57\u5178-cud" aria-hidden="true">#</a> \u5B57\u5178 CUD</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> dic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fsql<span class="token punctuation">.</span><span class="token function">InsertDict</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token string">&quot;table1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token function">UpdateDict</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token string">&quot;table1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WherePrimary</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token function">DeleteDict</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token string">&quot;table1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token function">InsertOrUpdateDict</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token string">&quot;table1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WherePrimary</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>InsertDict/UpdateDict/DeleteDict/InsertOrUpdateDict \u90FD\u652F\u6301\u6279\u91CF\u64CD\u4F5C\uFF0C\u5BF9\u5E94\u7C7B\u578B List&lt;Dictionary&lt;string, object&gt;&gt;</p><h2 id="\u52A8\u6001\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u6761\u4EF6" aria-hidden="true">#</a> \u52A8\u6001\u6761\u4EF6</h2><p>1\u3001ISelect.Where(string sql) \u4F7F\u7528\u539F\u751F\u6761\u4EF6\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Region<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;a.id &gt; 0&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u63D0\u793A\uFF1A\u5B58\u5728SQL\u6CE8\u5165\u5B89\u5168\u95EE\u9898</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u52A8\u6001 Lambda \u8868\u8FBE\u5F0F</p>`,7),m=n("code",null,"And",-1),q=s("\u3001"),g=n("code",null,"Or",-1),b=s("\u6269\u5C55\u65B9\u6CD5 "),h={href:"https://github.com/dotnetcore/FreeSql/blob/master/FreeSql/Extensions/LambadaExpressionExtensions.cs",target:"_blank",rel:"noopener noreferrer"},f=s("LambadaExpressionExtensions.cs"),y=a(`<div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">Expression<span class="token punctuation">&lt;</span>Func<span class="token punctuation">&lt;</span>Region<span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">where</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">where</span> <span class="token operator">=</span> <span class="token keyword">where</span><span class="token punctuation">.</span><span class="token function">And</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Id <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">where</span> <span class="token operator">=</span> <span class="token keyword">where</span><span class="token punctuation">.</span><span class="token function">Or</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Region<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token keyword">where</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//WHERE id &gt; 10 OR id = 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001ISelect.WhereDynamicFilter \u65B9\u6CD5\u5B9E\u73B0\u52A8\u6001\u8FC7\u6EE4\u6761\u4EF6\uFF08\u4E0E\u524D\u7AEF\u4EA4\u4E92\uFF09\uFF0C\u652F\u6301\u7684\u64CD\u4F5C\u7B26\uFF1A</p><ul><li>Contains/StartsWith/EndsWith/NotContains/NotStartsWith/NotEndsWith\uFF1A\u5305\u542B/\u4E0D\u5305\u542B\uFF0Clike &#39;%xx%&#39;\uFF0C\u6216\u8005 like &#39;xx%&#39;\uFF0C\u6216\u8005 like &#39;%xx&#39;</li><li>Equal/NotEqual\uFF1A\u7B49\u4E8E/\u4E0D\u7B49\u4E8E</li><li>GreaterThan/GreaterThanOrEqual\uFF1A\u5927\u4E8E/\u5927\u4E8E\u7B49\u4E8E</li><li>LessThan/LessThanOrEqual\uFF1A\u5C0F\u4E8E/\u5C0F\u4E8E\u7B49\u4E8E</li><li>Range\uFF1A\u8303\u56F4\u67E5\u8BE2</li><li>DateRange\uFF1A\u65E5\u671F\u8303\u56F4\uFF0C\u6709\u7279\u6B8A\u5904\u7406 value[1] + 1</li><li>Any/NotAny\uFF1A\u662F\u5426\u7B26\u5408 value \u4E2D\u4EFB\u4F55\u4E00\u9879\uFF08\u76F4\u767D\u7684\u8BF4\u662F SQL IN\uFF09</li><li>Custom\uFF1A\u81EA\u5B9A\u4E49\u89E3\u6790</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">DynamicFilterInfo</span> dyfilter <span class="token operator">=</span> JsonConvert<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DeserializeObject</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>DynamicFilterInfo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">@&quot;
{
    &quot;&quot;Logic&quot;&quot;: &quot;&quot;And&quot;&quot;,
    &quot;&quot;Filters&quot;&quot;:
    [
        { &quot;&quot;Field&quot;&quot;: &quot;&quot;id&quot;&quot;, &quot;&quot;Operator&quot;&quot;: &quot;&quot;Equals&quot;&quot;, &quot;&quot;Value&quot;&quot;: 1 },
        {
            &quot;&quot;Logic&quot;&quot;: &quot;&quot;Or&quot;&quot;,
            &quot;&quot;Filters&quot;&quot;:
            [
                { &quot;&quot;Field&quot;&quot;: &quot;&quot;id&quot;&quot;, &quot;&quot;Operator&quot;&quot;: &quot;&quot;Equals&quot;&quot;, &quot;&quot;Value&quot;&quot;: 2 },
                { &quot;&quot;Field&quot;&quot;: &quot;&quot;id&quot;&quot;, &quot;&quot;Operator&quot;&quot;: &quot;&quot;Equals&quot;&quot;, &quot;&quot;Value&quot;&quot;: 3 }
            ]
        }
    ]
}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Region<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WhereDynamicFilter</span><span class="token punctuation">(</span>dyfilter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//WHERE id = 1 AND (id = 2 OR id = 3)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),w={href:"https://www.cnblogs.com/FreeSql/p/16485310.html",target:"_blank",rel:"noopener noreferrer"},x=s("\u300A\u9AD8\u6548\u7406\u89E3 FreeSql WhereDynamicFilter\uFF0C\u6DF1\u5165\u4E86\u89E3\u8BBE\u8BA1\u521D\u8877\u300B"),_=a(`<h2 id="\u52A8\u6001\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u6392\u5E8F" aria-hidden="true">#</a> \u52A8\u6001\u6392\u5E8F</h2><p>1\u3001ISelect.OrderBy(string sql) \u4F7F\u7528\u539F\u751F\u6392\u5E8F\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Region<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span><span class="token string">&quot;a.id desc&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u63D0\u793A\uFF1A\u5B58\u5728SQL\u6CE8\u5165\u5B89\u5168\u95EE\u9898</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001ISelect.OrderByPropertyName \u4F7F\u7528\u5C5E\u6027\u540D\u6392\u5E8F\uFF1A</p><ul><li>\u652F\u6301\u5BFC\u822A\u5C5E\u6027\uFF0C\u6BD4\u5982 OrderByPropertyName(&quot;Parent.Code&quot;)</li><li>\u652F\u6301\u591A\u8868\u67E5\u8BE2\uFF0C\u6BD4\u5982 OrderByPropertyName(&quot;b.Code&quot;)</li></ul><h2 id="\u52A8\u6001\u8D2A\u5A6A\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8D2A\u5A6A\u52A0\u8F7D" aria-hidden="true">#</a> \u52A8\u6001\u8D2A\u5A6A\u52A0\u8F7D</h2><p>1\u3001ISelect.IncludeByPropertyName \u65B9\u6CD5\u5B9E\u73B0\u52A8\u6001\u8D2A\u5A6A\u52A0\u8F7D\uFF0C\u5BF9\u5E94 Include/IncludeMany\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Region<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">IncludeByPropertyName</span><span class="token punctuation">(</span><span class="token string">&quot;Parent.Parent.Parent&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">IncludeByPropertyName</span><span class="token punctuation">(</span><span class="token string">&quot;Childs&quot;</span><span class="token punctuation">)</span>

    <span class="token punctuation">.</span><span class="token function">IncludeByPropertyName</span><span class="token punctuation">(</span><span class="token string">&quot;Childs&quot;</span><span class="token punctuation">,</span> then <span class="token operator">=&gt;</span> then
        <span class="token punctuation">.</span><span class="token function">IncludeByPropertyName</span><span class="token punctuation">(</span><span class="token string">&quot;Parent.Parent&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">IncludeByPropertyName</span><span class="token punctuation">(</span><span class="token string">&quot;Parent.Childs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001List&lt;TDto&gt;.IncludeByPropertyName \u6269\u5C55\u65B9\u6CD5\u4E5F\u5B9E\u73B0\u4E86 OneToMany \u52A8\u6001\u8D2A\u5A6A\u52A0\u8F7D\uFF1A</p><blockquote><p>\u975E\u5B9E\u4F53\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u7EA7\u8054\u52A0\u8F7D\uFF0C\u4ED6\u4EEC\u4E0D\u9700\u8981\u914D\u7F6E\u5BFC\u822A\u5C5E\u6027\u5173\u7CFB\u3002</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> dtos <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Region<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Dto<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

dtos<span class="token punctuation">.</span><span class="token function">IncludeByPropertyName</span><span class="token punctuation">(</span>
    <span class="token named-parameter punctuation">orm</span><span class="token punctuation">:</span> fsql<span class="token punctuation">,</span> 
    <span class="token named-parameter punctuation">property</span><span class="token punctuation">:</span> <span class="token string">&quot;Childs&quot;</span><span class="token punctuation">,</span> 
    <span class="token keyword">where</span><span class="token punctuation">:</span> <span class="token string">&quot;ParentId=Id&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u4E34\u65F6\u5173\u7CFB</span>
    take<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> 
    <span class="token keyword">select</span><span class="token punctuation">:</span> <span class="token string">&quot;id,name&quot;</span><span class="token punctuation">,</span>
    then <span class="token operator">=&gt;</span> then<span class="token punctuation">.</span><span class="token function">IncludeByPropertyName</span><span class="token punctuation">(</span><span class="token string">&quot;Parent&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u6001\u8FD4\u56DE\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8FD4\u56DE\u6570\u636E" aria-hidden="true">#</a> \u52A8\u6001\u8FD4\u56DE\u6570\u636E</h2><p>1\u3001ISelect.ToList \u4F7F\u7528\u539F\u751FSQL\u8FD4\u56DE\u6570\u636E\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Region<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;a.id,a.name&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u63D0\u793A\uFF1A\u5B58\u5728SQL\u6CE8\u5165\u5B89\u5168\u95EE\u9898</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001ISelect.ToDataTableByPropertyName \u4F7F\u7528\u5C5E\u6027\u540D\u8FD4\u56DE\u6570\u636E\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">DataTable</span> dt <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Region<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToDataTableByPropertyName</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Parent.Code&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;b.Id&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u6001\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7247\u6BB5" aria-hidden="true">#</a> \u52A8\u6001\u7247\u6BB5</h2><p>FreeSql \u63D0\u4F9B Where(sql)\u3001GroupBy(sql)\u3001OrderBy(sql)\u3001ToList(sql) \u7B49\u76F4\u63A5\u4F7F\u7528 SQL \u7247\u6BB5\u7684 API\u3002</p><p><strong>\u4F7F\u7528\u8FD9\u4E9B API \u65F6\u8BF7\u52A1\u5FC5\u6CE8\u610FSQL\u6CE8\u5165\u5B89\u5168\u95EE\u9898\u3002</strong></p><p>\u4E0D\u5EFA\u8BAE\u524D\u7AEF\u76F4\u63A5 POST SQL \u5230\u540E\u7AEF\u4F7F\u7528\u5B83\u4EEC\uFF0C\u800C\u5E94\u8BE5\u5728\u540E\u7AEF\u505A\u4E00\u5C42\u6620\u5C04\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> whereMapping <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token string">&quot;where1&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a.id &gt; {0}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;where2&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;len(a.name) &gt; {0}&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> orderByMapping <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token string">&quot;order1&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a.id asc, a.name desc&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;order2&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;len(a.name) desc&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\u5047\u8BBE\u524D\u7AEF POST \u5185\u5BB9\u662F postWhere=where1&amp;postWhereValue=100&amp;postOrder=order1</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Region<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WhereIf</span><span class="token punctuation">(</span>
        whereMapping<span class="token punctuation">.</span><span class="token function">TryGetValue</span><span class="token punctuation">(</span>postWhere<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> whereSql<span class="token punctuation">)</span><span class="token punctuation">,</span> 
        <span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span>whereSql<span class="token punctuation">,</span> postWhereValue<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>
        orderByMapping<span class="token punctuation">.</span><span class="token function">TryGetValue</span><span class="token punctuation">(</span>postOrder<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> orderSql<span class="token punctuation">)</span><span class="token punctuation">,</span> 
        orderSql
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function S(I,D){const t=o("ExternalLinkIcon");return c(),u("div",null,[i,n("blockquote",null,[n("p",null,[r,n("a",k,[d,p(t)])])]),v,n("ul",null,[n("li",null,[m,q,g,b,n("a",h,[f,p(t)])])]),y,n("p",null,[n("a",w,[x,p(t)])]),_])}var P=e(l,[["render",S],["__file","dynamic.html.vue"]]);export{P as default};