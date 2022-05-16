import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,c,a as n,b as l,w as o,F as r,d as a,e as s,o as b}from"./app.b592e0a5.js";const u={},i=a(`<h1 id="cascade-saving" tabindex="-1"><a class="header-anchor" href="#cascade-saving" aria-hidden="true">#</a> Cascade Saving</h1><h2 id="savemany-save-manually" tabindex="-1"><a class="header-anchor" href="#savemany-save-manually" aria-hidden="true">#</a> Savemany save manually</h2><p>Save completely, compare the existing data in the table, and calculate the execution of addition, modification and deletion.</p><p>Recursive saving of navigation attributes is unsafe and uncontrollable. It is not a technical problem, but for security reasons. It provides a way to save navigation attributes manually and completely.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Type<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> type <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Type</span>
<span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;c#&quot;</span><span class="token punctuation">,</span>
    Topics <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">SaveMany</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token string">&quot;Topics&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token doc-comment comment">////Manually and completely save topics</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>-SaveMany only supports onetomany and manytomany navigation properties -Save only topics, not downward recursive tracing -When topics is empty, delete all table data of topics existing in type, and confirm? -The manytomany mechanism is to completely compare and save the intermediate table, and only append the external table without updating</p><p>For example:</p><p>-This table song -External table tag -Intermediate table Songtag</p><h2 id="enablecascadesave-warehouse-cascade-save" tabindex="-1"><a class="header-anchor" href="#enablecascadesave-warehouse-cascade-save" aria-hidden="true">#</a> EnableCascadeSave warehouse cascade save</h2><p>Dbcontext / repository EnableCascadeSave can realize recursive tracing and save the OneToOne/OneToMany/ManyToMany navigation attributes when saving objects. This document describes the mechanism to prevent misuse.</p><ol><li>Onetoone cascade save</li></ol>`,11),d=s("v3.2.606 + support, and support "),m=s("cascade deletion function"),g=a(`<ol start="2"><li>Onetomany appends or updates the sub table without deleting the existing data of the sub table</li></ol><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>repo<span class="token punctuation">.</span> DbContextOptions<span class="token punctuation">.</span> EnableCascadeSave <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// Manual opening required</span>
repo<span class="token punctuation">.</span> <span class="token function">Insert</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>-Do not delete the existing data in the topics sub table. Are you sure? -When the topics attribute is empty, do not do anything. Confirm? -When you save topics, you will also save the subordinate collection properties of topics \\ [0 -.. ]. Go down to 18 layers and confirm?</p><blockquote><p>For example, in the [type] table, there is set attribute [article] below and set attribute [comment] below [article].</p></blockquote><blockquote><p>When saving the [type] table object, it will retrieve the set attribute [article], and then if the [article] is saved, it will continue to retrieve the set attribute [comment]. Do insertorupdate operation together.</p></blockquote><ol start="3"><li>Manytomany completely compares and saves the intermediate table and appends the external table</li></ol><p>Compare and save the intermediate table completely, compare the existing data of the [many to many] intermediate table, and calculate the execution of addition, modification and deletion.</p><p>Append external tables, only append without updating.</p><p>-This table song -External table tag -Intermediate table Songtag</p><hr><p>Test 1: append and save OneToMany</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>class Cagetory
{
    public Guid Id { get; set; }
    public string Name { get; set; }

    public Guid ParentId { get; set; }
    [Navigate(nameof(ParentId))]
    public List&lt;Cagetory&gt; Childs { get; set; }
}
public void TestOneToManyParent()
{
    var repo = fsql.GetRepository&lt;Cagetory&gt;();
    repo.DbContextOptions.EnableCascadeSave = true;
    var cts = new[]
    {
        new Cagetory
        {
            Name = &quot;class1&quot;,
            Childs = new List&lt;Cagetory&gt;(new[]
            {
                new Cagetory { Name = &quot;class1_1&quot; },
                new Cagetory { Name = &quot;class1_2&quot; },
                new Cagetory { Name = &quot;class1_3&quot; }
            })
        },
        new Cagetory
        {
            Name = &quot;class2&quot;,
            Childs = new List&lt;Cagetory&gt;(new[]
            {
                new Cagetory { Name = &quot;class2_1&quot; },
                new Cagetory { Name = &quot;class2_2&quot; }
            })
        }
    };
    repo.Insert(cts);
    //To create a table and insert data:
    //INSERT INTO &quot;Cagetory&quot;(&quot;Id&quot;, &quot;Name&quot;, &quot;ParentId&quot;) VALUES(&#39;5d90afcb-ed57-f6f4-0082-cb6b78eaaf9f&#39;, &#39;class1&#39;, &#39;00000000-0000-0000-0000-000000000000&#39;), (&#39;5d90afcb-ed57-f6f4-0082-cb6c5b531b3e&#39;, &#39;class2&#39;, &#39;00000000-0000-0000-0000-000000000000&#39;)
    //INSERT INTO &quot;Cagetory&quot;(&quot;Id&quot;, &quot;Name&quot;, &quot;ParentId&quot;) VALUES(&#39;5d90afcb-ed57-f6f4-0082-cb6d0c1c5f1a&#39;, &#39;class1_1&#39;, &#39;5d90afcb-ed57-f6f4-0082-cb6b78eaaf9f&#39;), (&#39;5d90afcb-ed57-f6f4-0082-cb6e74bd8eef&#39;, &#39;class1_2&#39;, &#39;5d90afcb-ed57-f6f4-0082-cb6b78eaaf9f&#39;), (&#39;5d90afcb-ed57-f6f4-0082-cb6f6267cc5f&#39;, &#39;class1_3&#39;, &#39;5d90afcb-ed57-f6f4-0082-cb6b78eaaf9f&#39;), (&#39;5d90afcb-ed57-f6f4-0082-cb7057c41d46&#39;, &#39;class2_1&#39;, &#39;5d90afcb-ed57-f6f4-0082-cb6c5b531b3e&#39;), (&#39;5d90afcb-ed57-f6f4-0082-cb7156e0375e&#39;, &#39;class2_2&#39;, &#39;5d90afcb-ed57-f6f4-0082-cb6c5b531b3e&#39;)
    cts[0].Name = &quot;class11&quot;;
    cts[0].Childs.Clear();
    cts[1].Name = &quot;class22&quot;;
    cts[1].Childs.Clear();
    repo.Update(cts);
    //UPDATE &quot;Cagetory&quot; SET &quot;Name&quot; = CASE &quot;Id&quot;
    //WHEN &#39;5d90afcb-ed57-f6f4-0082-cb6b78eaaf9f&#39; THEN &#39;class11&#39;
    //WHEN &#39;5d90afcb-ed57-f6f4-0082-cb6c5b531b3e&#39; THEN &#39;class22&#39; END
    //WHERE (&quot;Id&quot; IN (&#39;5d90afcb-ed57-f6f4-0082-cb6b78eaaf9f&#39;,&#39;5d90afcb-ed57-f6f4-0082-cb6c5b531b3e&#39;))
    //Childs.Clear After that, the operation of deleting subsets was not performed, indicating that no complete comparison was made
    cts[0].Name = &quot;class111&quot;;
    cts[0].Childs.Clear();
    cts[0].Childs.Add(new Cagetory { Name = &quot;class1_33&quot; });
    cts[1].Name = &quot;class222&quot;;
    cts[1].Childs.Clear();
    cts[1].Childs.Add(new Cagetory { Name = &quot;class2_22&quot; });
    repo.Update(cts);
    //UPDATE &quot;Cagetory&quot; SET &quot;Name&quot; = CASE &quot;Id&quot;
    //WHEN &#39;5d90afcb-ed57-f6f4-0082-cb6b78eaaf9f&#39; THEN &#39;class111&#39;
    //WHEN &#39;5d90afcb-ed57-f6f4-0082-cb6c5b531b3e&#39; THEN &#39;class222&#39; END
    //WHERE (&quot;Id&quot; IN (&#39;5d90afcb-ed57-f6f4-0082-cb6b78eaaf9f&#39;,&#39;5d90afcb-ed57-f6f4-0082-cb6c5b531b3e&#39;))
    //INSERT INTO &quot;Cagetory&quot;(&quot;Id&quot;, &quot;Name&quot;, &quot;ParentId&quot;) VALUES(&#39;5d90afe8-ed57-f6f4-0082-cb725df546ea&#39;, &#39;class1_33&#39;, &#39;5d90afcb-ed57-f6f4-0082-cb6b78eaaf9f&#39;), (&#39;5d90afe8-ed57-f6f4-0082-cb7338a6214c&#39;, &#39;class2_22&#39;, &#39;5d90afcb-ed57-f6f4-0082-cb6c5b531b3e&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><hr><p>Test 2: Full save ManyToMany</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>class Song
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public List&lt;Tag&gt; Tags { get; set; }
}
class Tag
{
    public Guid Id { get; set; }
    public string TagName { get; set; }
    public List&lt;Song&gt; Songs { get; set; }
}
class SongTag
{
    public Guid SongId { get; set; }
    public Song Song { get; set; }
    public Guid TagId { get; set; }
    public Tag Tag { get; set; }
}

[Fact]
public void TestManyToMany()
{
    var tags = new[]
    {
        new Tag { TagName = &quot;pop music&quot; },
        new Tag { TagName = &quot;the post-80s generation&quot; },
        new Tag { TagName = &quot;the post-00s generation&quot; },
        new Tag { TagName = &quot;Rock music&quot; }
    };
    var ss = new[]
    {
        new Song
        {
            Name = &quot;love you forever.mp3&quot;,
            Tags = new List&lt;Tag&gt;(new[]
            {
                tags[0], tags[1]
            })
        },
        new Song
        {
            Name = &quot;Li Bai.mp3&quot;,
            Tags = new List&lt;Tag&gt;(new[]
            {
                tags[0], tags[2]
            })
        }
    };
    var repo = fsql.GetRepository&lt;Song&gt;();
    repo.DbContextOptions.EnableCascadeSave = true;
    repo.Insert(ss);
    //INSERT INTO &quot;Song&quot;(&quot;Id&quot;, &quot;Name&quot;) VALUES(&#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39;, &#39;love you forever.mp3&#39;), (&#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39;, &#39;Li Bai.mp3&#39;)
    //INSERT INTO &quot;Tag&quot;(&quot;Id&quot;, &quot;TagName&quot;) VALUES(&#39;5d90fdb7-6a6b-2c58-00c8-37991ead4f05&#39;, &#39;pop music&#39;), (&#39;5d90fdbd-6a6b-2c58-00c8-379a0432a09c&#39;, &#39;the post-80s generation&#39;)
    //INSERT INTO &quot;SongTag&quot;(&quot;SongId&quot;, &quot;TagId&quot;) VALUES(&#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39;, &#39;5d90fdb7-6a6b-2c58-00c8-37991ead4f05&#39;), (&#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39;, &#39;5d90fdbd-6a6b-2c58-00c8-379a0432a09c&#39;)
    //INSERT INTO &quot;Tag&quot;(&quot;Id&quot;, &quot;TagName&quot;) VALUES(&#39;5d90fdcc-6a6b-2c58-00c8-379b5af59d25&#39;, &#39;the post-00s generation&#39;)
    //INSERT INTO &quot;SongTag&quot;(&quot;SongId&quot;, &quot;TagId&quot;) VALUES(&#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39;, &#39;5d90fdb7-6a6b-2c58-00c8-37991ead4f05&#39;), (&#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39;, &#39;5d90fdcc-6a6b-2c58-00c8-379b5af59d25&#39;)

    ss[0].Name = &quot;love you forever.mp5&quot;;
    ss[0].Tags.Clear();
    ss[0].Tags.Add(tags[0]);
    ss[1].Name = &quot;Li Bai.mp5&quot;;
    ss[1].Tags.Clear();
    ss[1].Tags.Add(tags[3]);
    repo.Update(ss);
    //UPDATE &quot;Song&quot; SET &quot;Name&quot; = CASE &quot;Id&quot;
    //WHEN &#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39; THEN &#39;love you forever.mp5&#39;
    //WHEN &#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39; THEN &#39;Li Bai.mp5&#39; END
    //WHERE (&quot;Id&quot; IN (&#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39;,&#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39;))

    //SELECT a.&quot;SongId&quot;, a.&quot;TagId&quot;
    //FROM &quot;SongTag&quot; a
    //WHERE (a.&quot;SongId&quot; = &#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39;)

    //DELETE FROM &quot;SongTag&quot; WHERE (&quot;SongId&quot; = &#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39; AND &quot;TagId&quot; = &#39;5d90fdbd-6a6b-2c58-00c8-379a0432a09c&#39;)
    //INSERT INTO &quot;Tag&quot;(&quot;Id&quot;, &quot;TagName&quot;) VALUES(&#39;5d90febd-6a6b-2c58-00c8-379c21acfc72&#39;, &#39;Rock music&#39;)

    //SELECT a.&quot;SongId&quot;, a.&quot;TagId&quot;
    //FROM &quot;SongTag&quot; a
    //WHERE (a.&quot;SongId&quot; = &#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39;)

    //DELETE FROM &quot;SongTag&quot; WHERE (&quot;SongId&quot; = &#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39; AND &quot;TagId&quot; = &#39;5d90fdb7-6a6b-2c58-00c8-37991ead4f05&#39; OR &quot;SongId&quot; = &#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39; AND &quot;TagId&quot; = &#39;5d90fdcc-6a6b-2c58-00c8-379b5af59d25&#39;)
    //INSERT INTO &quot;SongTag&quot;(&quot;SongId&quot;, &quot;TagId&quot;) VALUES(&#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39;, &#39;5d90febd-6a6b-2c58-00c8-379c21acfc72&#39;)

    ss[0].Name = &quot;love you forever.mp4&quot;;
    ss[0].Tags.Clear();
    ss[1].Name = &quot;Li Bai.mp4&quot;;
    ss[1].Tags.Clear();
    repo.Update(ss);
    //DELETE FROM &quot;SongTag&quot; WHERE (&quot;SongId&quot; = &#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39;)
    //DELETE FROM &quot;SongTag&quot; WHERE (&quot;SongId&quot; = &#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39;)

    //UPDATE &quot;Song&quot; SET &quot;Name&quot; = CASE &quot;Id&quot;
    //WHEN &#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39; THEN &#39;love you forever.mp4&#39;
    //WHEN &#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39; THEN &#39;Li Bai.mp4&#39; END
    //WHERE (&quot;Id&quot; IN (&#39;5d90fdb3-6a6b-2c58-00c8-37974177440d&#39;,&#39;5d90fdb3-6a6b-2c58-00c8-37987f29b197&#39;))
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div>`,15);function q(f,T){const e=p("RouterLink");return b(),c(r,null,[i,n("blockquote",null,[n("p",null,[d,l(e,{to:"/en/guide/Delete-Data.html#cascade-deletion-of-ibaserepository"},{default:o(()=>[m]),_:1})])]),g],64)}var E=t(u,[["render",q],["__file","Cascade-Saving.html.vue"]]);export{E as default};
