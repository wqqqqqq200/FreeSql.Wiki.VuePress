if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const d=e=>i(e,a),u={module:{uri:a},exports:n,require:d};s[a]=Promise.all(l.map((e=>u[e]||d(e)))).then((e=>(r(...e),n)))}}define(["./workbox-85077874"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"ea893ea17a17c6d96e8f5ef79f2bc636"},{url:"android-chrome-192x192.png",revision:"5c5a418d7c29275f4ae6ddfcae7a2090"},{url:"android-chrome-512x512.png",revision:"dbcaf7855b3bf777e1650fcfb2533b4f"},{url:"apple-touch-icon.png",revision:"328875080674ea578a41a970f9bf2d29"},{url:"assets/css/styles.c986768e.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/4229.30b9c3eb.js",revision:null},{url:"assets/js/4332.0c5f8ec1.js",revision:null},{url:"assets/js/5205.e6f662c6.js",revision:null},{url:"assets/js/8491.2cba7763.js",revision:null},{url:"assets/js/app.560df457.js",revision:null},{url:"assets/js/runtime~app.9940db3b.js",revision:null},{url:"assets/js/v-08d798b2.d8d3a526.js",revision:null},{url:"assets/js/v-0921d17b.0a9cf552.js",revision:null},{url:"assets/js/v-0a96cd2d.0fad98df.js",revision:null},{url:"assets/js/v-0c785bc4.aceebd59.js",revision:null},{url:"assets/js/v-0ce4876c.ad1bbca8.js",revision:null},{url:"assets/js/v-100fe338.cd9d1d98.js",revision:null},{url:"assets/js/v-107e3a4c.e6449843.js",revision:null},{url:"assets/js/v-10da9644.8fe2fdd5.js",revision:null},{url:"assets/js/v-135e4503.c61233c7.js",revision:null},{url:"assets/js/v-13d6e5f6.235b0620.js",revision:null},{url:"assets/js/v-19d84912.a696d149.js",revision:null},{url:"assets/js/v-19eea59d.96e44445.js",revision:null},{url:"assets/js/v-1b20f374.82453d55.js",revision:null},{url:"assets/js/v-1cad7b10.50adcbb5.js",revision:null},{url:"assets/js/v-1d73af95.17f1c85a.js",revision:null},{url:"assets/js/v-22df3c61.47f38bab.js",revision:null},{url:"assets/js/v-24de54ee.3386e0ab.js",revision:null},{url:"assets/js/v-259c62e1.a1c6d0ca.js",revision:null},{url:"assets/js/v-2648ac1a.83860cda.js",revision:null},{url:"assets/js/v-275e2a2f.fbb205a7.js",revision:null},{url:"assets/js/v-28c3945c.5a205fb2.js",revision:null},{url:"assets/js/v-29d78daa.2981bc46.js",revision:null},{url:"assets/js/v-2b3a8924.ebddf945.js",revision:null},{url:"assets/js/v-2d0a870d.8f7e24b8.js",revision:null},{url:"assets/js/v-300af17d.1c8fed7d.js",revision:null},{url:"assets/js/v-3392574c.e27e98ca.js",revision:null},{url:"assets/js/v-3464e36c.15f73854.js",revision:null},{url:"assets/js/v-3706649a.c71457a8.js",revision:null},{url:"assets/js/v-3889ebcd.c3854926.js",revision:null},{url:"assets/js/v-38f50e54.07cfeb4e.js",revision:null},{url:"assets/js/v-3bb27ea9.ebbb572b.js",revision:null},{url:"assets/js/v-3d21f522.ce9e690f.js",revision:null},{url:"assets/js/v-3e6e95f0.11b7c6cb.js",revision:null},{url:"assets/js/v-466b2cb2.b87e8730.js",revision:null},{url:"assets/js/v-46acd16b.382a7a63.js",revision:null},{url:"assets/js/v-4e3df5b1.8e134bd0.js",revision:null},{url:"assets/js/v-52acee36.8424c97f.js",revision:null},{url:"assets/js/v-53a22a9b.d22ce93f.js",revision:null},{url:"assets/js/v-578131e6.151c118c.js",revision:null},{url:"assets/js/v-5ccd7e2c.207759d4.js",revision:null},{url:"assets/js/v-5d526c16.84eebbb3.js",revision:null},{url:"assets/js/v-5fa3f531.40e29d14.js",revision:null},{url:"assets/js/v-6059229c.7cb6b628.js",revision:null},{url:"assets/js/v-60c55912.332b81e0.js",revision:null},{url:"assets/js/v-68763ece.2ab7e49a.js",revision:null},{url:"assets/js/v-6879b57d.d0c902af.js",revision:null},{url:"assets/js/v-6cdf9fd9.0239cd7a.js",revision:null},{url:"assets/js/v-6ce48554.448b6d29.js",revision:null},{url:"assets/js/v-6dc1ceac.9dad38be.js",revision:null},{url:"assets/js/v-6e61f61e.b300d24c.js",revision:null},{url:"assets/js/v-737e532c.766ae3d7.js",revision:null},{url:"assets/js/v-786147a6.6ebf086f.js",revision:null},{url:"assets/js/v-7919c9a2.3161092a.js",revision:null},{url:"assets/js/v-7aa8fa6a.7b1ce03b.js",revision:null},{url:"assets/js/v-7ad3128b.d79e7114.js",revision:null},{url:"assets/js/v-7ce4c14a.d2eb5855.js",revision:null},{url:"assets/js/v-8daa1a0e.20cfc2b5.js",revision:null},{url:"assets/js/v-945cf558.4a923213.js",revision:null},{url:"assets/js/v-9b6c7ddc.67bcc81c.js",revision:null},{url:"assets/js/v-9d037942.abbbd991.js",revision:null},{url:"assets/js/v-9d397e8e.fde652e9.js",revision:null},{url:"assets/js/v-a1a49808.c64e03c6.js",revision:null},{url:"assets/js/v-aa863f00.895a0ffe.js",revision:null},{url:"assets/js/v-aaf75552.ef10b663.js",revision:null},{url:"assets/js/v-b147b508.f28d512e.js",revision:null},{url:"assets/js/v-b7d94a60.65742433.js",revision:null},{url:"assets/js/v-bb011780.4e241af9.js",revision:null},{url:"assets/js/v-bea7aa1c.2217bd11.js",revision:null},{url:"assets/js/v-bfa4a14a.3d0d2983.js",revision:null},{url:"assets/js/v-ca9835b8.227063ca.js",revision:null},{url:"assets/js/v-cc6d4d78.d28d8706.js",revision:null},{url:"assets/js/v-ce832304.12f66828.js",revision:null},{url:"assets/js/v-d5ba0b9c.d03189f9.js",revision:null},{url:"assets/js/v-d6ed953a.7fdc6dd9.js",revision:null},{url:"assets/js/v-e45cc9ec.f90b3815.js",revision:null},{url:"assets/js/v-e6412400.ced60cfc.js",revision:null},{url:"assets/js/v-f07fc1be.89c5b9db.js",revision:null},{url:"assets/js/v-fb0f0066.5f1d0c56.js",revision:null},{url:"assets/js/v-fffb8e28.67d49d47.js",revision:null},{url:"contributing.html",revision:"548ccdac7f4ae9a6812ca1af431e68ae"},{url:"en/guide/Cascade-Saving.html",revision:"c9279e661244b3beee8f2144745de018"},{url:"en/guide/CodeFirst-Mode.html",revision:"67f750a307a7ca208ad034b27a5c4985"},{url:"en/guide/Delete-Data.html",revision:"fab92b7211d4c8f6a274eee69fd3c9b3"},{url:"en/guide/getting-started.html",revision:"0fa7fc1d1046f6acac5abf2d12a35811"},{url:"en/guide/Greed-Loading.html",revision:"524e7bb75dde1dcdab7c78a65817fa86"},{url:"en/guide/Group-Aggregation-Query.html",revision:"5e236418f07c31543f5035694195d203"},{url:"en/guide/index.html",revision:"36d5554c5efc433345c448fb9720a3c9"},{url:"en/guide/Insert-Data.html",revision:"290be3820ca72f3e3327c4d4abd48734"},{url:"en/guide/insert-or-update.html",revision:"26fa238b39484d186f62afbcd208ef2e"},{url:"en/guide/install.html",revision:"2589a66dbbd2c358c297c512e4fe01b7"},{url:"en/guide/Lazy-Loading.html",revision:"eb42e96c3aa771ceee871a59215d193a"},{url:"en/guide/Linq-to-Sql.html",revision:"a97c76a1ee180d13e7e7a68861258566"},{url:"en/guide/Pagination.html",revision:"6934e3315907ddbf7ce91f736588fdc8"},{url:"en/guide/Parent-Child-Relationship-Query.html",revision:"0b90bfc852170a74978897a2c246d320"},{url:"en/guide/Query-Data.html",revision:"43f2ade866f1f00563754f3d4ff63be0"},{url:"en/guide/Query-from-Multi-Table.html",revision:"de18af32ac29f16e7ac0d97e4531add8"},{url:"en/guide/Query-from-Single-Table.html",revision:"006694cbd5f0d82b510fef26a0f9ed0e"},{url:"en/guide/Repository-Layer.html",revision:"c4f9850ed717f80bff026e68ebe7981a"},{url:"en/guide/Return-Data.html",revision:"0382bd80bfaabb5063cd5fcc3655e4fd"},{url:"en/guide/type-mapping.html",revision:"4cfaeb91aae29b5567b8384a91d9852f"},{url:"en/guide/Unit-of-Work-Manager.html",revision:"9a3795fe273b1cd793d1507d533798a6"},{url:"en/guide/Unit-of-Work.html",revision:"ccbbe5651869ff2855b49f0667435a03"},{url:"en/guide/Update-Data.html",revision:"2659bfdf73391b601f03ec9d42c0b465"},{url:"en/guide/With-Sql.html",revision:"803a75e37b2664c97c140422b0df8646"},{url:"en/index.html",revision:"093db48cf8ff66dfbc7d2391c301f71b"},{url:"favicon-16x16.png",revision:"85e898664445fdc5f71a2cca96278f52"},{url:"favicon-32x32.png",revision:"376de207c8dd3f4c2baa4445600d07cb"},{url:"guide/ado.html",revision:"d521f4ec2e3d42bf8d4000c64ea1efe8"},{url:"guide/aop.html",revision:"73d3bcbe2b24f7dcfcdf8dec30e8364a"},{url:"guide/BaseEntity.html",revision:"6607aeab7131ebb62a34d0cddc82451e"},{url:"guide/cascade-saving.html",revision:"ccf7e27993b9c2382c55dca1069a0cf5"},{url:"guide/code-first.html",revision:"6d58cfe514c3f515d5cb48eb4534ff0f"},{url:"guide/config-entity-from-db-first.html",revision:"fc4760ebd5441055d883bafda9bddf41"},{url:"guide/custom-attribute.html",revision:"b6d411a1497ab28781a32b06bb216a5a"},{url:"guide/db-context.html",revision:"fc225918c2e116be1f84306bcb2bb533"},{url:"guide/db-first.html",revision:"8516745e84b2d60fff6b751d4949bc5d"},{url:"guide/delegate.html",revision:"2c3cb52717278c4addbf10f8bb5f8c81"},{url:"guide/delete.html",revision:"d77f5df00e8491acb4d09a71de1cb681"},{url:"guide/entity-attribute.html",revision:"ea5fb7b019fc1e06c1a30728516630d5"},{url:"guide/expression-function.html",revision:"917744894f77181c560799a0baf4a546"},{url:"guide/filters.html",revision:"99e66fc52c99c7ff3c1c6993a9a9410b"},{url:"guide/fluent-api.html",revision:"4b89f649ffe70a048d5aa2bec923613d"},{url:"guide/getting-started.html",revision:"3e69b3c94a1ce68d9fc7f7f7a969818d"},{url:"guide/ifreesql-context.html",revision:"1a09211c7d7112a3698c24da380a237b"},{url:"guide/index.html",revision:"eeb379b9f6844a9996bdbb81058b82d8"},{url:"guide/insert-or-update.html",revision:"209b569334a4dcd58ef7cb1e32e0c245"},{url:"guide/insert.html",revision:"378225e29d04838b60fed58253d059dd"},{url:"guide/install.html",revision:"67facfe743ef4ff3de808a56e8a15b73"},{url:"guide/linq-to-sql.html",revision:"f9ea578a44023f176d2a4475f3cba90a"},{url:"guide/more.html",revision:"4100b55bc80ddd939eff2af431483579"},{url:"guide/multi-tenancy.html",revision:"884bdeacc742407ef5500b835ed13948"},{url:"guide/navigate-attribute.html",revision:"991e12aac44eecd6baee0bbdc0c1cde6"},{url:"guide/paging.html",revision:"7b21bc339b74c5628373f9f968d38e11"},{url:"guide/performance.html",revision:"9ce330875b5c6325f1fde5cba43f1587"},{url:"guide/read-write-splitting.html",revision:"3063a2d42babc61e3639e737b091b594"},{url:"guide/repository.html",revision:"d340fdef92b86e215870366bc60afc49"},{url:"guide/select-as-tree.html",revision:"4823dab540aadc8cefbfcc10cfe57255"},{url:"guide/select-group-by.html",revision:"be8d30b3994dc452008e49f70a2cecbd"},{url:"guide/select-include.html",revision:"a5eacc6b14a7de6d48ccd7ce05917497"},{url:"guide/select-lazy-loading.html",revision:"2ff9c0f4842833ef2e83263f36b378a6"},{url:"guide/select-multi-table.html",revision:"43f3aa13f0a71864cab047461111f31b"},{url:"guide/select-return-data.html",revision:"4e18b664ea550774d19414a66ac74b97"},{url:"guide/select-single-table.html",revision:"0ec01c22dae62b6a337617a256953231"},{url:"guide/select.html",revision:"1050a488e190b983d2908460a0a487e5"},{url:"guide/sharding.html",revision:"f76d44c907a4898675c3262991547d1a"},{url:"guide/transaction.html",revision:"0f7791b08703265113be8871ed271c2e"},{url:"guide/type-mapping.html",revision:"a0e0b3c23450c522b5d2a9473614ebbc"},{url:"guide/unit-of-work.html",revision:"215ce76225002ac3b1923befa66231bd"},{url:"guide/unitofwork-manager.html",revision:"72e9ef581fac054a3b1ce96c71a7fd0a"},{url:"guide/update.html",revision:"073bfe21a40affcbd2880a07900e7c3f"},{url:"guide/withsql.html",revision:"dcdee0040d67f90529657505b0092288"},{url:"index.html",revision:"fea7fa80d5f0d37b3cba1fb197fd7a6c"},{url:"logo.png",revision:"994ed032d78dce0ef491b36fa4dc95d8"},{url:"mstile-150x150.png",revision:"905e91d3fe4a006d32a842f1e4473456"},{url:"reference/api.html",revision:"5bd5c68533abd97c989bd8d32f920333"},{url:"reference/awesome-freesql.html",revision:"e5046dd8b5b498411904df7753beea05"},{url:"reference/change-log.html",revision:"0e805cf78e622336044533ddd7303bc8"},{url:"reference/donation.html",revision:"d3501dc5604160708526e3e443d13487"},{url:"reference/faq.html",revision:"b0a696c5340b0f258b0861781644f081"},{url:"reference/vs-dapper.html",revision:"b8e9de1b6061d661ed0c9a89873a8448"},{url:"reference/vs-entity-framework.html",revision:"87fdb4e1c16b4bf165fe83c16c2f12df"},{url:"wechat_qrcode.jpg",revision:"44d32d516f6ed4cfe9aa55eac560ea74"}],{})}));
