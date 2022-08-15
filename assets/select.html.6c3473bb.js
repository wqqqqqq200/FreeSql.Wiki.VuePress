import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{c as i,a as t,b as n,w as u,F as a,e as l,d as r,r as d,o as c}from"./app.63a211de.js";const _={},h=t("h1",{id:"\u67E5\u8BE2",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u67E5\u8BE2","aria-hidden":"true"},"#"),l(" \u67E5\u8BE2")],-1),p=t("p",null,"FreeSql \u5728\u67E5\u8BE2\u6570\u636E\u4E0B\u8DB3\u4E86\u529F\u592B\uFF0C\u94FE\u5F0F\u67E5\u8BE2\u8BED\u6CD5\u3001\u591A\u8868\u67E5\u8BE2\u3001\u8868\u8FBE\u5F0F\u51FD\u6570\u652F\u6301\u5F97\u975E\u5E38\u5230\u4F4D\u3002",-1),m=l("\u5206\u9875\u67E5\u8BE2"),q=l("\u5355\u8868\u67E5\u8BE2"),b=l("\u591A\u8868\u67E5\u8BE2"),g=l("\u5D4C\u5957\u67E5\u8BE2"),f=l("\u5206\u7EC4\u805A\u5408\u67E5\u8BE2"),k=l("\u8FD4\u56DE\u6570\u636E"),L=l("LinqToSql"),y=l("\u4ED3\u50A8\u5C42 Repository"),T=l("\u8FC7\u6EE4\u5668"),S=l("\u5EF6\u65F6\u52A0\u8F7D"),I=l("\u8D2A\u5A6A\u52A0\u8F7D"),x=l("\u8868\u8FBE\u5F0F\u51FD\u6570"),F=l("\u8BFB\u5199\u5206\u79BB"),W=l("\u6027\u80FD"),E=l("\u5206\u8868\u5206\u5E93"),w=l("\u591A\u79DF\u6237"),B=t("h2",{id:"\u7279\u522B\u4ECB\u7ECD-wheredynamicfilter",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u7279\u522B\u4ECB\u7ECD-wheredynamicfilter","aria-hidden":"true"},"#"),l(" \u7279\u522B\u4ECB\u7ECD WhereDynamicFilter")],-1),D={href:"https://www.cnblogs.com/FreeSql/p/16485310.html",target:"_blank",rel:"noopener noreferrer"},N=l("\u300A\u9AD8\u6548\u7406\u89E3 FreeSql WhereDynamicFilter\uFF0C\u6DF1\u5165\u4E86\u89E3\u8BBE\u8BA1\u521D\u8877\u300B"),O=r(`<p>ISelect.WhereDynamicFilter \u65B9\u6CD5\u5B9E\u73B0\u52A8\u6001\u8FC7\u6EE4\u6761\u4EF6\uFF08\u4E0E\u524D\u7AEF\u4EA4\u4E92\uFF09\uFF0C\u652F\u6301\u7684\u64CD\u4F5C\u7B26\uFF1A</p><ul><li>Contains/StartsWith/EndsWith/NotContains/NotStartsWith/NotEndsWith\uFF1A\u5305\u542B/\u4E0D\u5305\u542B\uFF0Clike &#39;%xx%&#39;\uFF0C\u6216\u8005 like &#39;xx%&#39;\uFF0C\u6216\u8005 like &#39;%xx&#39;</li><li>Equal/NotEqual\uFF1A\u7B49\u4E8E/\u4E0D\u7B49\u4E8E</li><li>GreaterThan/GreaterThanOrEqual\uFF1A\u5927\u4E8E/\u5927\u4E8E\u7B49\u4E8E</li><li>LessThan/LessThanOrEqual\uFF1A\u5C0F\u4E8E/\u5C0F\u4E8E\u7B49\u4E8E</li><li>Range\uFF1A\u8303\u56F4\u67E5\u8BE2</li><li>DateRange\uFF1A\u65E5\u671F\u8303\u56F4\uFF0C\u6709\u7279\u6B8A\u5904\u7406 value[1] + 1</li><li>Any/NotAny\uFF1A\u662F\u5426\u7B26\u5408 value \u4E2D\u4EFB\u4F55\u4E00\u9879\uFF08\u76F4\u767D\u7684\u8BF4\u662F SQL IN\uFF09</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">DynamicFilterInfo</span> dyfilter <span class="token operator">=</span> JsonConvert<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DeserializeObject</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>DynamicFilterInfo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">@&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote><p>\u52A8\u6001\u6392\u5E8F\uFF1AISelect.OrderByPropertyName(&quot;Parent.Code&quot;)</p></blockquote><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,5),C=t("thead",null,[t("tr",null,[t("th",null,"\u65B9\u6CD5"),t("th",null,"\u8FD4\u56DE\u503C"),t("th",null,"\u53C2\u6570"),t("th",null,"\u63CF\u8FF0"),t("th")])],-1),v=t("tr",null,[t("td",null,"ToSql"),t("td",null,"string"),t("td"),t("td",null,"\u8FD4\u56DE\u5373\u5C06\u6267\u884C\u7684 SQL \u8BED\u53E5"),t("td")],-1),A=t("tr",null,[t("td",null,"ToList"),t("td",null,"List<T1>"),t("td"),t("td",null,"\u6267\u884C SQL \u67E5\u8BE2\uFF0C\u8FD4\u56DE T1 \u5B9E\u4F53\u6240\u6709\u5B57\u6BB5\u7684\u8BB0\u5F55\uFF0C\u82E5\u5B58\u5728\u5BFC\u822A\u5C5E\u6027\u5219\u4E00\u8D77\u67E5\u8BE2\u8FD4\u56DE\uFF0C\u8BB0\u5F55\u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE Count \u4E3A 0 \u7684\u5217\u8868"),t("td")],-1),Q=t("tr",null,[t("td",null,"ToList<T>"),t("td",null,"List<T>"),t("td",null,"Lambda"),t("td",null,"\u6267\u884C SQL \u67E5\u8BE2\uFF0C\u8FD4\u56DE\u6307\u5B9A\u5B57\u6BB5\u7684\u8BB0\u5F55\uFF0C\u8BB0\u5F55\u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE Count \u4E3A 0 \u7684\u5217\u8868"),t("td")],-1),R=t("tr",null,[t("td",null,"ToList<T>"),t("td",null,"List<T>"),t("td",null,"string field"),t("td",null,"\u6267\u884C SQL \u67E5\u8BE2\uFF0C\u8FD4\u56DE field \u6307\u5B9A\u5B57\u6BB5\u7684\u8BB0\u5F55\uFF0C\u5E76\u4EE5\u5143\u7EC4\u6216\u57FA\u7840\u7C7B\u578B(int,string,long)\u63A5\u6536\uFF0C\u8BB0\u5F55\u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE Count \u4E3A 0 \u7684\u5217\u8868"),t("td")],-1),G=t("tr",null,[t("td",null,"ToOne"),t("td",null,"T1"),t("td"),t("td",null,"\u6267\u884C SQL \u67E5\u8BE2\uFF0C\u8FD4\u56DE T1 \u5B9E\u4F53\u6240\u6709\u5B57\u6BB5\u7684\u7B2C\u4E00\u6761\u8BB0\u5F55\uFF0C\u8BB0\u5F55\u4E0D\u5B58\u5728\u65F6\u8FD4\u56DE null"),t("td")],-1),J=t("tr",null,[t("td",null,"ToAggregate<T>"),t("td",null,"List<T>"),t("td",null,"Lambda"),t("td",null,"\u6267\u884C SQL \u67E5\u8BE2\uFF0C\u8FD4\u56DE\u6307\u5B9A\u5B57\u6BB5\u7684\u805A\u5408\u7ED3\u679C\uFF08\u9002\u5408\u4E0D\u9700\u8981 GroupBy \u7684\u573A\u666F\uFF09"),t("td")],-1),V=t("tr",null,[t("td",null,"Any"),t("td",null,"bool"),t("td"),t("td",null,"\u6267\u884C SQL \u67E5\u8BE2\uFF0C\u662F\u5426\u6709\u8BB0\u5F55"),t("td")],-1),P=t("tr",null,[t("td",null,"Sum"),t("td",null,"T"),t("td",null,"Lambda"),t("td",null,"\u6307\u5B9A\u4E00\u4E2A\u5217\u6C42\u548C"),t("td")],-1),z=t("tr",null,[t("td",null,"Min"),t("td",null,"T"),t("td",null,"Lambda"),t("td",null,"\u6307\u5B9A\u4E00\u4E2A\u5217\u6C42\u6700\u5C0F\u503C"),t("td")],-1),H=t("tr",null,[t("td",null,"Max"),t("td",null,"T"),t("td",null,"Lambda"),t("td",null,"\u6307\u5B9A\u4E00\u4E2A\u5217\u6C42\u6700\u5927\u503C"),t("td")],-1),M=t("tr",null,[t("td",null,"Avg"),t("td",null,"T"),t("td",null,"Lambda"),t("td",null,"\u6307\u5B9A\u4E00\u4E2A\u5217\u6C42\u5E73\u5747\u503C"),t("td")],-1),j=t("tr",null,[t("td",null,"\u3010\u5206\u9875\u3011"),t("td"),t("td"),t("td"),t("td")],-1),U=t("tr",null,[t("td",null,"Count"),t("td",null,"long"),t("td"),t("td",null,"\u67E5\u8BE2\u7684\u8BB0\u5F55\u6570\u91CF"),t("td")],-1),K=t("tr",null,[t("td",null,"Count"),t("td",null,"<this>"),t("td",null,"out long"),t("td",null,"\u67E5\u8BE2\u7684\u8BB0\u5F55\u6570\u91CF\uFF0C\u4EE5\u53C2\u6570 out \u5F62\u5F0F\u8FD4\u56DE"),t("td")],-1),X=t("tr",null,[t("td",null,"Skip"),t("td",null,"<this>"),t("td",null,"int offset"),t("td",null,"\u67E5\u8BE2\u5411\u540E\u504F\u79FB\u884C\u6570"),t("td")],-1),Y=t("tr",null,[t("td",null,"Offset"),t("td",null,"<this>"),t("td",null,"int offset"),t("td",null,"\u67E5\u8BE2\u5411\u540E\u504F\u79FB\u884C\u6570"),t("td")],-1),Z=t("tr",null,[t("td",null,"Limit"),t("td",null,"<this>"),t("td",null,"int limit"),t("td",null,"\u67E5\u8BE2\u591A\u5C11\u6761\u6570\u636E"),t("td")],-1),$=t("tr",null,[t("td",null,"Take"),t("td",null,"<this>"),t("td",null,"int limit"),t("td",null,"\u67E5\u8BE2\u591A\u5C11\u6761\u6570\u636E"),t("td")],-1),tt=t("tr",null,[t("td",null,"Page"),t("td",null,"<this>"),t("td",null,"int pageIndex, int pageSize"),t("td",null,"\u5206\u9875"),t("td")],-1),lt=t("tr",null,[t("td",null,"\u3010\u6761\u4EF6\u3011"),t("td"),t("td"),t("td"),t("td")],-1),nt=t("tr",null,[t("td",null,"Where"),t("td",null,"<this>"),t("td",null,"Lambda"),t("td",null,"\u652F\u6301\u591A\u8868\u67E5\u8BE2\u8868\u8FBE\u5F0F\uFF0C\u591A\u6B21\u4F7F\u7528\u76F8\u5F53\u4E8E AND"),t("td")],-1),st=t("tr",null,[t("td",null,"WhereIf"),t("td",null,"<this>"),t("td",null,"bool, Lambda"),t("td",null,"\u652F\u6301\u591A\u8868\u67E5\u8BE2\u8868\u8FBE\u5F0F"),t("td")],-1),ut=t("td",null,"Where",-1),dt=t("td",null,"<this>",-1),et=t("td",null,"string, parms",-1),ot=l('\u539F\u751F sql \u8BED\u6CD5\u6761\u4EF6\uFF0CWhere("id = @id", new { id = 1 } ,'),it=l("\u6CE8\u610F\u524D\u7F00@,\u6839\u636E\u5177\u4F53\u6570\u636E\u5E93\u51B3\u5B9A"),at=l(" \u5176\u4ED6\u5730\u65B9\u4E0D\u518D\u8BF4\u660E\u3002\u540C\u7406 )"),rt=t("td",null,null,-1),ct=t("tr",null,[t("td",null,"WhereIf"),t("td",null,"<this>"),t("td",null,"bool, string, parms"),t("td",null,'\u539F\u751F sql \u8BED\u6CD5\u6761\u4EF6\uFF0CWhereIf(true, "id = @id", new { id = 1 }'),t("td")],-1),_t=t("tr",null,[t("td",null,"WhereCascade"),t("td",null,"<this>"),t("td",null,"Lambda"),t("td",null,"\u5B9E\u73B0\u591A\u8868\u67E5\u8BE2\u65F6\uFF0C\u5411\u6BCF\u4E2A\u8868\u4E2D\u9644\u52A0\u6761\u4EF6"),t("td")],-1),ht=t("tr",null,[t("td",null,"WhereDynamicFilter"),t("td",null,"<this>"),t("td",null,"DynamicFilterInfo"),t("td",null,"\u52A8\u6001\u8FC7\u6EE4\u6761\u4EF6(\u4E0E\u524D\u7AEF\u4EA4\u4E92)"),t("td")],-1),pt=t("tr",null,[t("td",null,"\u3010\u5206\u7EC4\u3011"),t("td"),t("td"),t("td"),t("td")],-1),mt=t("tr",null,[t("td",null,"GroupBy"),t("td",null,"<this>"),t("td",null,"Lambda"),t("td",null,"\u6309\u9009\u62E9\u7684\u5217\u5206\u7EC4\uFF0CGroupBy(a => a.Name)"),t("td",null,"GroupBy(a => new{a.Name,a.Time})")],-1),qt=t("tr",null,[t("td",null,"GroupBy"),t("td",null,"<this>"),t("td",null,"string, parms"),t("td",null,'\u6309\u539F\u751F sql \u8BED\u6CD5\u5206\u7EC4\uFF0CGroupBy("concat(name, @cc)", new { cc = 1 })'),t("td")],-1),bt=t("tr",null,[t("td",null,"Having"),t("td",null,"<this>"),t("td",null,"string, parms"),t("td",null,'\u6309\u539F\u751F sql \u8BED\u6CD5\u805A\u5408\u6761\u4EF6\u8FC7\u6EE4\uFF0CHaving("count(name) = @cc", new { cc = 1 })'),t("td")],-1),gt=t("tr",null,[t("td",null,"Disdinct"),t("td",null,"<this>"),t("td"),t("td",null,".Distinct().ToList(x => x.GroupName) \u662F\u5BF9\u6307\u5B9A\u5B57\u6BB5"),t("td")],-1),ft=t("tr",null,[t("td",null,"\u3010\u6392\u5E8F\u3011"),t("td"),t("td"),t("td"),t("td")],-1),kt=t("tr",null,[t("td",null,"OrderBy"),t("td",null,"<this>"),t("td",null,"Lambda"),t("td",null,"\u6309\u5217\u6392\u5E8F\uFF0COrderBy(a => a.Time)\uFF0C\u53EF\u591A\u6B21\u4F7F\u7528"),t("td")],-1),Lt=t("tr",null,[t("td",null,"OrderByDescending"),t("td",null,"<this>"),t("td",null,"Lambda"),t("td",null,"\u6309\u5217\u5012\u5411\u6392\u5E8F\uFF0COrderByDescending(a => a.Time)"),t("td")],-1),yt=t("tr",null,[t("td",null,"OrderBy"),t("td",null,"<this>"),t("td",null,"string, parms"),t("td",null,'\u6309\u539F\u751F sql \u8BED\u6CD5\u6392\u5E8F\uFF0COrderBy("count(name) + @cc", new { cc = 1 })'),t("td")],-1),Tt=t("tr",null,[t("td",null,"OrderByPropertyName"),t("td",null,"string, bool"),t("td",null,"\u6309\u5C5E\u6027\u540D\u5B57\u7B26\u4E32\u6392\u5E8F\uFF08\u652F\u6301\u5BFC\u822A\u5C5E\u6027\uFF09"),t("td"),t("td")],-1),St=t("tr",null,[t("td",null,"\u3010\u8054\u8868\u3011"),t("td"),t("td"),t("td"),t("td")],-1),It=t("tr",null,[t("td",null,"LeftJoin"),t("td",null,"<this>"),t("td",null,"Lambda"),t("td",null,"\u5DE6\u8054\u67E5\u8BE2\uFF0C\u53EF\u4F7F\u7528\u5BFC\u822A\u5C5E\u6027\uFF0C\u6216\u6307\u5B9A\u5173\u8054\u7684\u5B9E\u4F53\u7C7B\u578B"),t("td")],-1),xt=t("tr",null,[t("td",null,"InnerJoin"),t("td",null,"<this>"),t("td",null,"Lambda"),t("td",null,"\u8054\u63A5\u67E5\u8BE2\uFF0C\u53EF\u4F7F\u7528\u5BFC\u822A\u5C5E\u6027\uFF0C\u6216\u6307\u5B9A\u5173\u8054\u7684\u5B9E\u4F53\u7C7B\u578B"),t("td")],-1),Ft=t("tr",null,[t("td",null,"RightJoin"),t("td",null,"<this>"),t("td",null,"Lambda"),t("td",null,"\u53F3\u8054\u67E5\u8BE2\uFF0C\u53EF\u4F7F\u7528\u5BFC\u822A\u5C5E\u6027\uFF0C\u6216\u6307\u5B9A\u5173\u8054\u7684\u5B9E\u4F53\u7C7B\u578B"),t("td")],-1),Wt=t("tr",null,[t("td",null,"LeftJoin"),t("td",null,"<this>"),t("td",null,"string, parms"),t("td",null,'\u5DE6\u8054\u67E5\u8BE2\uFF0C\u4F7F\u7528\u539F\u751F sql \u8BED\u6CD5\uFF0CLeftJoin("type b on b.id = a.id and b.clicks > @clicks", new { clicks = 1 })'),t("td")],-1),Et=t("tr",null,[t("td",null,"InnerJoin"),t("td",null,"<this>"),t("td",null,"string, parms"),t("td",null,'\u8054\u63A5\u67E5\u8BE2\uFF0C\u4F7F\u7528\u539F\u751F sql \u8BED\u6CD5\uFF0CInnerJoin("type b on b.id = a.id and b.clicks > @clicks", new { clicks = 1 })'),t("td")],-1),wt=t("tr",null,[t("td",null,"RightJoin"),t("td",null,"<this>"),t("td",null,"string, parms"),t("td",null,'\u53F3\u8054\u67E5\u8BE2\uFF0C\u4F7F\u7528\u539F\u751F sql \u8BED\u6CD5\uFF0CRightJoin("type b on b.id = a.id and b.clicks > @clicks", new { clicks = 1 })'),t("td")],-1),Bt=t("tr",null,[t("td",null,"From"),t("td",null,"<this>"),t("td",null,"Lambda"),t("td",null,"\u591A\u8868\u67E5\u8BE2\uFF0C3 \u4E2A\u8868\u4EE5\u4E0A\u4F7F\u7528\u975E\u5E38\u65B9\u4FBF\uFF0C\u76EE\u524D\u8BBE\u8BA1\u6700\u5927\u652F\u6301 10 \u4E2A\u8868"),t("td")],-1),Dt=t("tr",null,[t("td",null,"\u3010\u5176\u4ED6\u3011"),t("td"),t("td"),t("td"),t("td")],-1),Nt=t("tr",null,[t("td",null,"As"),t("td",null,"<this>"),t("td",null,'string alias = "a"'),t("td",null,"\u6307\u5B9A\u522B\u540D"),t("td")],-1),Ot=t("tr",null,[t("td",null,"Master"),t("td",null,"<this>"),t("td"),t("td",null,"\u6307\u5B9A\u4ECE\u4E3B\u5E93\u67E5\u8BE2\uFF08\u9ED8\u8BA4\u67E5\u8BE2\u4ECE\u5E93\uFF09"),t("td")],-1),Ct=t("tr",null,[t("td",null,"CommandTimeout"),t("td",null,"<this>"),t("td",null,"int"),t("td",null,"\u547D\u4EE4\u8D85\u65F6\u8BBE\u7F6E(\u79D2)"),t("td")],-1),vt=t("tr",null,[t("td",null,"WithTransaction"),t("td",null,"<this>"),t("td",null,"DbTransaction"),t("td",null,"\u8BBE\u7F6E\u4E8B\u52A1\u5BF9\u8C61"),t("td")],-1),At=t("tr",null,[t("td",null,"WithConnection"),t("td",null,"<this>"),t("td",null,"DbConnection"),t("td",null,"\u8BBE\u7F6E\u8FDE\u63A5\u5BF9\u8C61"),t("td")],-1),Qt=t("tr",null,[t("td",null,"WithLock"),t("td",null,"<this>"),t("td",null,"Enum"),t("td",null,"SqlServer NoLock \u7B49\u7279\u6709\u7684\u8BBE\u7F6E"),t("td")],-1),Rt=t("tr",null,[t("td",null,"ForUpdate"),t("td",null,"<this>"),t("td",null,"bool"),t("td",null,"\u6392\u4ED6\u66F4\u65B0\u9501\uFF0C\u5BF9\u4E0D\u540C\u7684\u6570\u636E\u5E93\u5DF2\u4F5C\u9002\u914D\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u89C1\u6CE8\u91CA"),t("td")],-1),Gt=t("tr",null,[t("td",null,"AsQueryable"),t("td",null,"IQueryable"),t("td"),t("td",null,"\u5C06 ISelect \u8F6C\u6362\u4E3A IQueryable\uFF0C\u6B64\u65B9\u6CD5\u4E3B\u8981\u7528\u4E8E\u6269\u5C55\uFF0C\u6BD4\u5982\uFF1Aabp IRepository GetAll() \u63A5\u53E3\u65B9\u6CD5\u9700\u8981\u8FD4\u56DE IQueryable \u5BF9\u8C61\u3002\u6CE8\u610F\uFF1AIQueryable \u65B9\u6CD5\u6C61\u67D3\u8F83\u4E3A\u4E25\u91CD\uFF0C\u8BF7\u5C3D\u91CF\u907F\u514D\u6B64\u8F6C\u6362"),t("td")],-1),Jt=t("tr",null,[t("td",null,"ToTreeList()"),t("td",null,"List<TEntity>"),t("td",null,"\u65E0"),t("td",null,"\u5C06\u7236\u5B50\u5173\u7CFB\u7684\u6570\u636E\u4EE5 TreeList \u7684\u5F62\u5F0F\u8FD4\u56DE"),t("td")],-1),Vt=t("tr",null,[t("td",null,"AsTreeCte()"),t("td",null,"ISelect"),t("td",null,"(up, pathSelector, level)"),t("td",null,"\u9012\u5F52\u67E5\u8BE2\u7236\u5B50\u5173\u7CFB\u8868"),t("td")],-1);function Pt(zt,Ht){const s=d("RouterLink"),e=d("ExternalLinkIcon");return c(),i(a,null,[h,p,t("ul",null,[t("li",null,[n(s,{to:"/guide/paging.html"},{default:u(()=>[m]),_:1})]),t("li",null,[n(s,{to:"/guide/select-single-table.html"},{default:u(()=>[q]),_:1})]),t("li",null,[n(s,{to:"/guide/select-multi-table.html"},{default:u(()=>[b]),_:1})]),t("li",null,[n(s,{to:"/guide/withtempquery.html"},{default:u(()=>[g]),_:1})]),t("li",null,[n(s,{to:"/guide/select-group-by.html"},{default:u(()=>[f]),_:1})]),t("li",null,[n(s,{to:"/guide/select-return-data.html"},{default:u(()=>[k]),_:1})]),t("li",null,[n(s,{to:"/guide/linq-to-sql.html"},{default:u(()=>[L]),_:1})]),t("li",null,[n(s,{to:"/guide/repository.html"},{default:u(()=>[y]),_:1})]),t("li",null,[n(s,{to:"/guide/filters.html"},{default:u(()=>[T]),_:1})]),t("li",null,[n(s,{to:"/guide/select-lazy-loading.html"},{default:u(()=>[S]),_:1})]),t("li",null,[n(s,{to:"/guide/select-include.html"},{default:u(()=>[I]),_:1})]),t("li",null,[n(s,{to:"/guide/expression-function.html"},{default:u(()=>[x]),_:1})]),t("li",null,[n(s,{to:"/guide/read-write-splitting.html"},{default:u(()=>[F]),_:1})]),t("li",null,[n(s,{to:"/guide/performance.html"},{default:u(()=>[W]),_:1})]),t("li",null,[n(s,{to:"/guide/sharding.html"},{default:u(()=>[E]),_:1})]),t("li",null,[n(s,{to:"/guide/multi-tenancy.html"},{default:u(()=>[w]),_:1})])]),B,t("p",null,[t("a",D,[N,n(e)])]),O,t("table",null,[C,t("tbody",null,[v,A,Q,R,G,J,V,P,z,H,M,j,U,K,X,Y,Z,$,tt,lt,nt,st,t("tr",null,[ut,dt,et,t("td",null,[ot,n(s,{to:"/guide/ado.html#%E5%8F%82%E6%95%B0%E5%8C%96"},{default:u(()=>[it]),_:1}),at]),rt]),ct,_t,ht,pt,mt,qt,bt,gt,ft,kt,Lt,yt,Tt,St,It,xt,Ft,Wt,Et,wt,Bt,Dt,Nt,Ot,Ct,vt,At,Qt,Rt,Gt,Jt,Vt])])],64)}var Ut=o(_,[["render",Pt],["__file","select.html.vue"]]);export{Ut as default};
