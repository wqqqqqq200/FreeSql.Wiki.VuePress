import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as a,c as r,a as e,b as i,e as d,d as l}from"./app.a7333a4f.js";const c={},u=e("h1",{id:"freescheduler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#freescheduler","aria-hidden":"true"},"#"),d(" FreeScheduler")],-1),o=e("p",null,"FreeScheduler \u662F\u5229\u7528 IdleBus \u5B9E\u73B0\u7684\u8F7B\u91CF\u5316\u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6\uFF0C\u652F\u6301\u4E34\u65F6\u7684\u5EF6\u65F6\u4EFB\u52A1\u548C\u91CD\u590D\u5FAA\u73AF\u4EFB\u52A1(\u53EF\u6301\u4E45\u5316)\uFF0C\u53EF\u6309\u79D2\uFF0C\u6BCF\u5929/\u6BCF\u5468/\u6BCF\u6708\u56FA\u5B9A\u65F6\u95F4\uFF0C\u81EA\u5B9A\u4E49\u95F4\u9694\u6267\u884C\uFF0C\u652F\u6301 .NET Core 2.1+\u3001.NET Framework 4.0+ \u8FD0\u884C\u73AF\u5883\u3002",-1),v=d("\u5F00\u6E90\u5730\u5740\uFF1A"),b={href:"https://github.com/2881099/FreeScheduler",target:"_blank",rel:"noopener noreferrer"},m=d("https://github.com/2881099/FreeScheduler"),h=d("\u6269\u5C55\u8D44\u6599\uFF1A"),k={href:"https://www.cnblogs.com/FreeSql/p/16623030.html",target:"_blank",rel:"noopener noreferrer"},p=d("\u300A.NET \u5B9A\u65F6\u4EFB\u52A1 -- FreeScheduler \u652F\u6301 cron\u3001\u6301\u4E45\u5316\u3001\u53EF\u53D8\u5B9A\u65F6\u8BBE\u7F6E\u300B"),T=l(`<h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><blockquote><p>dotnet add package FreeScheduler</p></blockquote><blockquote><p>Install-Package FreeScheduler</p></blockquote><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>static Lazy&lt;Scheduler&gt; _schedulerLazy = new Lazy(() =&gt; new Scheduler(new MyTaskHandler()));
static Scheduler scheduler =&gt; _schedulerLazy.Value;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E34\u65F6\u4EFB\u52A1-\u4E0D\u53EF\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E34\u65F6\u4EFB\u52A1-\u4E0D\u53EF\u6301\u4E45\u5316" aria-hidden="true">#</a> \u4E34\u65F6\u4EFB\u52A1(\u4E0D\u53EF\u6301\u4E45\u5316)</h2><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>void Callback()
{
    Console.WriteLine(&quot;\u65F6\u95F4\u5230\u4E86&quot;);
    scheduler.AddTempTask(TimeSpan.FromSeconds(10), Callback); //\u4E0B\u4E00\u6B21\u5B9A\u65F6
}

scheduler.AddTempTask(TimeSpan.FromSeconds(10), Callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Method</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>string AddTempTask(TimeSpan, Action)</td><td>\u521B\u5EFA\u4E34\u65F6\u7684\u5EF6\u65F6\u4EFB\u52A1\uFF0C\u8FD4\u56DE id</td></tr><tr><td>bool RemoveTempTask(string id)</td><td>\u5220\u9664\u4EFB\u52A1(\u4E34\u65F6\u4EFB\u52A1)</td></tr><tr><td>bool ExistsTempTask(string id)</td><td>\u5224\u65AD\u4EFB\u52A1\u662F\u5426\u5B58\u5728(\u4E34\u65F6\u4EFB\u52A1)</td></tr><tr><td>int QuantityTempTask</td><td>\u4EFB\u52A1\u6570\u91CF(\u4E34\u65F6\u4EFB\u52A1)</td></tr></tbody></table><h2 id="\u666E\u901A\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u4EFB\u52A1" aria-hidden="true">#</a> \u666E\u901A\u4EFB\u52A1</h2><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>class MyTaskHandler : FreeScheduler.TaskHandlers.TestHandler
{
    public override void OnExecuting(Scheduler scheduler, TaskInfo task)
    {
        //todo..
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6301\u4E45\u5316\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6301\u4E45\u5316\u4EFB\u52A1" aria-hidden="true">#</a> \u6301\u4E45\u5316\u4EFB\u52A1</h2><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>// \u4F7F\u7528 FreeSql \u6301\u4E45\u5316\u4EFB\u52A1
class MyTaskHandler : FreeScheduler.TaskHandlers.FreeSqlHandler
{
    public MyTaskHandler(IFreeSql fsql) : base(fsql) { }

    public override void OnExecuting(Scheduler scheduler, TaskInfo task)
    {
        Console.WriteLine($&quot;[{DateTime.Now.ToString(&quot;HH:mm:ss.fff&quot;)}] {task.Topic} \u88AB\u6267\u884C&quot;);

        //\u5F3A\u5236\u4F7F\u4EFB\u52A1\u5B8C\u6210
        //task.Status = TaskStatus.Completed;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Redis \u6301\u4E45\u5316\u8BF7\u5B89\u88C5\uFF1A</p><blockquote><p>dotnet add package FreeScheduler.TaskHandlers.FreeRedis</p></blockquote><blockquote><p>Install-Package FreeScheduler.TaskHandlers.FreeRedis</p></blockquote><h2 id="\u7BA1\u7406\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u4EFB\u52A1" aria-hidden="true">#</a> \u7BA1\u7406\u4EFB\u52A1</h2><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>// \u4F7F\u7528 FreeSql \u6216\u8005 SQL \u67E5\u8BE2 TaskInfo\u3001TaskLog \u4E24\u4E2A\u8868\u8FDB\u884C\u5206\u9875\u663E\u793A
fsql.Select&lt;TaskInfo&gt;().Count(out var total).Page(pageNumber, 30).ToList();
fsql.Select&lt;TaskLog&gt;().Count(out var total).Page(pageNumber, 30).ToList();

//\u6682\u505C\u4EFB\u52A1
scheduler.PauseTask(id);
//\u6062\u590D\u6682\u505C\u7684\u4EFB\u52A1
scheduler.ResumeTask(id);
//\u5220\u9664\u4EFB\u52A1
scheduler.RemoveTask(id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-\u5FAA\u73AF\u4EFB\u52A1-\u53EF\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#api-\u5FAA\u73AF\u4EFB\u52A1-\u53EF\u6301\u4E45\u5316" aria-hidden="true">#</a> API (\u5FAA\u73AF\u4EFB\u52A1/\u53EF\u6301\u4E45\u5316)</h2><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>//\u6BCF5\u79D2\u89E6\u53D1\uFF0C\u6267\u884CN\u6B21
var id = scheduler.AddTask(&quot;topic1&quot;, &quot;body1&quot;, round: -1, 5);

//\u6BCF\u6B21 \u4E0D\u540C\u7684\u95F4\u9694\u79D2\u6570\u89E6\u53D1\uFF0C\u6267\u884C6\u6B21
var id = scheduler.AddTask(&quot;topic1&quot;, &quot;body1&quot;, new [] { 5, 5, 10, 10, 60, 60 });

//\u6BCF\u5929 20:00:00 \u89E6\u53D1\uFF0C\u6307\u5B9Autc\u65F6\u95F4\uFF0C\u6267\u884CN\u6B21
var id = scheduler.AddTaskRunOnDay(&quot;topic1&quot;, &quot;body1&quot;, round: -1, &quot;20:00:00&quot;);

//\u6BCF\u5468\u4E00 20:00:00 \u89E6\u53D1\uFF0C\u6307\u5B9Autc\u65F6\u95F4\uFF0C\u6267\u884C1\u6B21
var id = scheduler.AddTaskRunOnWeek(&quot;topic1&quot;, &quot;body1&quot;, round: 1, &quot;1:20:00:00&quot;);

//\u6BCF\u67081\u65E5 20:00:00 \u89E6\u53D1\uFF0C\u6307\u5B9Autc\u65F6\u95F4\uFF0C\u6267\u884C12\u6B21
var id = scheduler.AddTaskRunOnMonth(&quot;topic1&quot;, &quot;body1&quot;, round: 12, &quot;1:20:00:00&quot;);

//\u81EA\u5B9A\u4E49\u95F4\u9694
var id = scheduler.AddTaskCustom(&quot;topic1&quot;, &quot;body1&quot;, &quot;0/1 * * * * ? &quot;);
class MyCustomTaskHandler : FreeScheduler.ITaskIntervalCustomHandler
{
    public TimeSpan? NextDelay(TaskInfo task)
    {
        //\u5229\u7528 cron \u529F\u80FD\u5E93\u89E3\u6790 task.IntervalArgument \u5F97\u5230\u4E0B\u4E00\u6B21\u6267\u884C\u65F6\u95F4
        //\u4E0E\u5F53\u524D\u65F6\u95F4\u76F8\u51CF\uFF0C\u5F97\u5230 TimeSpan\uFF0C\u82E5\u8FD4\u56DE null \u5219\u4EFB\u52A1\u5B8C\u6210
        return TimeSpan.FromSeconds(5);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Method</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>void ctor(ITaskHandler)</td><td>\u6307\u5B9A\u4EFB\u52A1\u8C03\u5EA6\u5668\uFF08\u5355\u4F8B\uFF09</td></tr><tr><td>string AddTask(string topic, string body, int round, int seconds)</td><td>\u521B\u5EFA\u5FAA\u73AF\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u8FD4\u56DE id</td></tr><tr><td>string AddTask(string topic, string body, int[] seconds)</td><td>\u521B\u5EFA\u6BCF\u8F6E\u95F4\u9694\u4E0D\u540C\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u8FD4\u56DE id</td></tr><tr><td>string AddTaskRunOnDay(..)</td><td>\u521B\u5EFA\u6BCF\u65E5\u5FAA\u73AF\u4EFB\u52A1\uFF0C\u6307\u5B9Autc\u65F6\u95F4\uFF0C\u8FD4\u56DE id</td></tr><tr><td>string AddTaskRunOnWeek(..)</td><td>\u521B\u5EFA\u6BCF\u5468\u5FAA\u73AF\u4EFB\u52A1\uFF0C\u6307\u5B9Autc\u65F6\u95F4\uFF0C\u8FD4\u56DE id</td></tr><tr><td>string AddTaskRunOnMonth(..)</td><td>\u521B\u5EFA\u6BCF\u6708\u5FAA\u73AF\u4EFB\u52A1\uFF0C\u6307\u5B9Autc\u65F6\u95F4\uFF0C\u8FD4\u56DE id</td></tr><tr><td>string AddTaskCustom(string topic, string body, string expression)</td><td>\u521B\u5EFA\u81EA\u5B9A\u4E49\u4EFB\u52A1\uFF0C\u8FD4\u56DE id</td></tr><tr><td>bool RemoveTask(string id)</td><td>\u5220\u9664\u4EFB\u52A1</td></tr><tr><td>bool ExistsTask(string id)</td><td>\u5224\u65AD\u4EFB\u52A1\u662F\u5426\u5B58\u5728</td></tr><tr><td>bool ResumeTask(string id)</td><td>\u6062\u590D\u5DF2\u6682\u505C\u7684\u4EFB\u52A1</td></tr><tr><td>bool PauseTask(string id)</td><td>\u6682\u505C\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1</td></tr><tr><td>TaskInfo[] FindTask(lambda)</td><td>\u67E5\u8BE2\u6B63\u5728\u8FD0\u884C\u4E2D\u7684\u4EFB\u52A1</td></tr><tr><td>int QuantityTask</td><td>\u4EFB\u52A1\u6570\u91CF</td></tr></tbody></table>`,19);function g(q,S){const n=t("ExternalLinkIcon");return a(),r("div",null,[u,o,e("p",null,[v,e("a",b,[m,i(n)])]),e("p",null,[h,e("a",k,[p,i(n)])]),T])}var y=s(c,[["render",g],["__file","freescheduler.html.vue"]]);export{y as default};
