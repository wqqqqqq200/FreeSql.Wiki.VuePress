import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as s}from"./app.19869b04.js";const a={},p=s(`<h1 id="\u7EA7\u8054\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u7EA7\u8054\u5220\u9664" aria-hidden="true">#</a> \u7EA7\u8054\u5220\u9664</h1><h2 id="\u57FA\u4E8E\u3010\u5BF9\u8C61\u3011\u7EA7\u8054\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u3010\u5BF9\u8C61\u3011\u7EA7\u8054\u5220\u9664" aria-hidden="true">#</a> \u57FA\u4E8E\u3010\u5BF9\u8C61\u3011\u7EA7\u8054\u5220\u9664</h2><blockquote><p>\u6BD4\u5982 Include/IncludeMany \u67E5\u8BE2\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6B64\u65B9\u6CD5\u7EA7\u8054\u5220\u9664\u5B83\u4EEC\u3002</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Group<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span>DbContextOptions<span class="token punctuation">.</span>EnableCascadeSave <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//\u5173\u952E\u8BBE\u7F6E</span>
repo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserGroup</span>
<span class="token punctuation">{</span>
    GroupName <span class="token operator">=</span> <span class="token string">&quot;group01&quot;</span><span class="token punctuation">,</span>
    Users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">User</span> <span class="token punctuation">{</span> Username <span class="token operator">=</span> <span class="token string">&quot;admin01&quot;</span><span class="token punctuation">,</span> Password <span class="token operator">=</span> <span class="token string">&quot;pwd01&quot;</span><span class="token punctuation">,</span> UserExt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserExt</span> <span class="token punctuation">{</span> Remark <span class="token operator">=</span> <span class="token string">&quot;\u7528\u6237\u5907\u6CE801&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">User</span> <span class="token punctuation">{</span> Username <span class="token operator">=</span> <span class="token string">&quot;admin02&quot;</span><span class="token punctuation">,</span> Password <span class="token operator">=</span> <span class="token string">&quot;pwd02&quot;</span><span class="token punctuation">,</span> UserExt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserExt</span> <span class="token punctuation">{</span> Remark <span class="token operator">=</span> <span class="token string">&quot;\u7528\u6237\u5907\u6CE802&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">User</span> <span class="token punctuation">{</span> Username <span class="token operator">=</span> <span class="token string">&quot;admin03&quot;</span><span class="token punctuation">,</span> Password <span class="token operator">=</span> <span class="token string">&quot;pwd03&quot;</span><span class="token punctuation">,</span> UserExt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserExt</span> <span class="token punctuation">{</span> Remark <span class="token operator">=</span> <span class="token string">&quot;\u7528\u6237\u5907\u6CE803&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7EA7\u8054\u6DFB\u52A0\u6D4B\u8BD5\u6570\u636E</span>
<span class="token comment">//INSERT INTO &quot;usergroup&quot;(&quot;groupname&quot;) VALUES(&#39;group01&#39;) RETURNING &quot;id&quot;</span>
<span class="token comment">//INSERT INTO &quot;user&quot;(&quot;username&quot;, &quot;password&quot;, &quot;groupid&quot;) VALUES(&#39;admin01&#39;, &#39;pwd01&#39;, 1), (&#39;admin02&#39;, &#39;pwd02&#39;, 1), (&#39;admin03&#39;, &#39;pwd03&#39;, 1) RETURNING &quot;id&quot; as &quot;Id&quot;, &quot;username&quot; as &quot;Username&quot;, &quot;password&quot; as &quot;Password&quot;, &quot;groupid&quot; as &quot;GroupId&quot;</span>
<span class="token comment">//INSERT INTO &quot;userext&quot;(&quot;userid&quot;, &quot;remark&quot;) VALUES(3, &#39;\u7528\u6237\u5907\u6CE801&#39;), (4, &#39;\u7528\u6237\u5907\u6CE802&#39;), (5, &#39;\u7528\u6237\u5907\u6CE803&#39;)</span>

<span class="token class-name"><span class="token keyword">var</span></span> groups <span class="token operator">=</span> repo<span class="token punctuation">.</span>Select
    <span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Users<span class="token punctuation">,</span> 
        then <span class="token operator">=&gt;</span> then<span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>UserExt<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>groups<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7EA7\u8054\u5220\u9664\uFF0C\u9012\u5F52\u5411\u4E0B\u904D\u5386 group OneToOne/OneToMany/ManyToMany \u5BFC\u822A\u5C5E\u6027</span>
<span class="token comment">//DELETE FROM &quot;userext&quot; WHERE (&quot;userid&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;user&quot; WHERE (&quot;id&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;usergroup&quot; WHERE (&quot;id&quot; = 1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u57FA\u4E8E\u3010\u6570\u636E\u5E93\u3011\u7EA7\u8054\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u3010\u6570\u636E\u5E93\u3011\u7EA7\u8054\u5220\u9664" aria-hidden="true">#</a> \u57FA\u4E8E\u3010\u6570\u636E\u5E93\u3011\u7EA7\u8054\u5220\u9664</h2><blockquote><p>\u6839\u636E\u8BBE\u7F6E\u7684\u5BFC\u822A\u5C5E\u6027\uFF0C\u9012\u5F52\u5220\u9664 OneToOne/OneToMany/ManyToMany \u5BF9\u5E94\u6570\u636E\uFF0C\u5E76\u8FD4\u56DE\u5DF2\u5220\u9664\u7684\u6570\u636E\u3002\u6B64\u529F\u80FD\u4E0D\u4F9D\u8D56\u6570\u636E\u5E93\u5916\u952E</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Group<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> ret <span class="token operator">=</span> repo<span class="token punctuation">.</span><span class="token function">DeleteCascadeByDatabase</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//SELECT a.&quot;id&quot;, a.&quot;username&quot;, a.&quot;password&quot;, a.&quot;groupid&quot; FROM &quot;user&quot; a WHERE (a.&quot;groupid&quot; = 1)</span>
<span class="token comment">//SELECT a.&quot;userid&quot;, a.&quot;remark&quot; FROM &quot;userext&quot; a WHERE (a.&quot;userid&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;userext&quot; WHERE (&quot;userid&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;user&quot; WHERE (&quot;id&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;usergroup&quot; WHERE (&quot;id&quot; = 1)</span>

<span class="token comment">//ret   Count = 7 System.Collections.Generic.List&lt;object&gt;</span>
<span class="token comment">//  [0] {UserExt} object {UserExt}</span>
<span class="token comment">//  [1] {UserExt} object {UserExt}</span>
<span class="token comment">//  [2] {UserExt} object {UserExt}</span>
<span class="token comment">//  [3] {User}     object {User}</span>
<span class="token comment">//  [4] {User}     object {User}</span>
<span class="token comment">//  [5] {User}   object {User}</span>
<span class="token comment">//  [6] {UserGroup} object {UserGroup}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Group</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> GroupName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>GroupId<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> Users <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Username <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Password <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> GroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">UserExt</span> UserExt <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserExt</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> UserId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Remark <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>UserId<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">User</span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div>`,7);function t(e,o){return p}var l=n(a,[["render",t],["__file","cascade-delete.html.vue"]]);export{l as default};