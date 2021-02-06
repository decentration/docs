(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),i=(n(0),n(167)),r={title:"FAQ"},s={unversionedId:"api/FAQ",id:"api/FAQ",isDocsHomePage:!1,title:"FAQ",description:"The list will be updated/expanded as questions come up, dealing with some common issues that API users find.",source:"@site/docs/api/FAQ.md",slug:"/api/FAQ",permalink:"/docs/api/FAQ",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/FAQ.md",version:"current",sidebar:"reference",previous:{title:"Get chain information",permalink:"/docs/api/examples/promise/chain-info"},next:{title:"Overview",permalink:"/docs/substrate"}},c=[{value:"I am getting a &quot;Unknown types found, no types for ...&quot; error",id:"i-am-getting-a-unknown-types-found-no-types-for--error",children:[]},{value:"I am getting a &quot;Metadata:: failed on MagicNumber&quot; error",id:"i-am-getting-a-metadata-failed-on-magicnumber-error",children:[]},{value:"The node returns a &quot;Could not convert&quot; error on send",id:"the-node-returns-a-could-not-convert-error-on-send",children:[]},{value:"I would like to sign transactions offline",id:"i-would-like-to-sign-transactions-offline",children:[]},{value:"I would like to send a root transaction",id:"i-would-like-to-send-a-root-transaction",children:[]},{value:"How do I call a function with a Tuple input",id:"how-do-i-call-a-function-with-a-tuple-input",children:[]},{value:"How long do transactions live",id:"how-long-do-transactions-live",children:[]},{value:"My chain does not support system.account queries",id:"my-chain-does-not-support-systemaccount-queries",children:[]},{value:"I cannot send transactions, sending yields decoding failures",id:"i-cannot-send-transactions-sending-yields-decoding-failures",children:[]},{value:"Using a non-current-master node, I have issues parsing events",id:"using-a-non-current-master-node-i-have-issues-parsing-events",children:[]},{value:"On a non-current, non Substrate 2.0 branch, my balances are wrong",id:"on-a-non-current-non-substrate-20-branch-my-balances-are-wrong",children:[]},{value:"Which API can I use to query by transaction hash?",id:"which-api-can-i-use-to-query-by-transaction-hash",children:[]}],d={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The list will be updated/expanded as questions come up, dealing with some common issues that API users find."),Object(i.b)("h2",{id:"i-am-getting-a-unknown-types-found-no-types-for--error"},'I am getting a "Unknown types found, no types for ..." error'),Object(i.b)("p",null,"There are 2 causes for this, both related to the version of the API that you are using and the support of types. As explained in the elsewhere, types on Polkadot/Substrate are continuously evolving - the latest version of the API always tries to support types for the latest Polkadot networks, such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://kusama.network/"}),"Kusama"),". So for Polkadot public chains, ensure that you are using the latest released API version."),Object(i.b)("p",null,"If you are connected to a customized chain, you would rather want to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/types.extend"}),"register the types")," either on your own, or via packages that the chain vendor provides."),Object(i.b)("p",null,"If however you are running against a master branch of either Polkadot or Substrate, and the type additions are very new and have not made it into an API release yet you may well be better suited running ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/install#betas"}),"a beta version, tracking master"),"."),Object(i.b)("h2",{id:"i-am-getting-a-metadata-failed-on-magicnumber-error"},'I am getting a "Metadata:: failed on MagicNumber" error'),Object(i.b)("p",null,"Update your version of the API to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/install"}),"latest version"),". Like types, the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/basics"}),"metadata interfaces")," are continuously evolving. For instance with the Polkadot Alexander network, only metadata v3 is available. By the time Kusama launched, this has been bumped to v7. As these versions are added to the Polkadot/Substrate codebase, they are added to the API."),Object(i.b)("h2",{id:"the-node-returns-a-could-not-convert-error-on-send"},'The node returns a "Could not convert" error on send'),Object(i.b)("p",null,"The typical error that you would see is ",Object(i.b)("inlineCode",{parentName:"p"},"Verification Error: Execution(ApiError(\"Could not convert parameter 'tx' between node and runtime"),". This means that the transaction data serialized from the API cannot be deserialized on the node."),Object(i.b)("p",null,"All data transferred between the API and the Node is in a SCALE-encoded binary format, so the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/types.extend"}),"definition of the types")," between the API and the node needs to match 100%. When you find the above, it would mean the definition of the types on the API side does not match what is on the node. Specifically the API encodes against the definition, but since there is a mismatch the Node cannot parse the data correctly."),Object(i.b)("p",null,"To fix this, you should look at the specific ",Object(i.b)("inlineCode",{parentName:"p"},"api.tx.*")," params and adjust the type definitions for those param types to match what is found on the node side. In some rare cases the cause could be extrinsic formatting related, to track these make an ",Object(i.b)("inlineCode",{parentName:"p"},"api.tx.system.remark(data: Bytes)")," call, if it fails, the API and node cannot agree on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/types.extend#impact-on-extrinsics"}),"an extrinsic format and adjustments are required"),"."),Object(i.b)("h2",{id:"i-would-like-to-sign-transactions-offline"},"I would like to sign transactions offline"),Object(i.b)("p",null,"The API itself is independent on where the signature comes from and how it is injected. Additionally it implements a signer interface, that can be used for external signing - an example of this is the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polkadot-js/apps"}),"polkadot-js/apps")," support for signing via extensions and even the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polkadot-js/extension"}),"polkadot-js/extension")," support for tools such as the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/paritytech/parity-signer"}),"Parity Signer"),"."),Object(i.b)("p",null,"As of this writing we don't have an explicit example of implementing the signer interface in these docs, although we do use one in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polkadot-js/api/blob/master/packages/api/test/util/SingleAccountSigner.ts"}),"our tests"),". Additionally, the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polkadot-js/tools"}),"polkadot-js/tools")," has an implementation of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polkadot-js/tools/tree/master/packages/signer-cli"}),"a very basic offline signer")," where transactions are generated in one process and signatures in another non-connected process."),Object(i.b)("h2",{id:"i-would-like-to-send-a-root-transaction"},"I would like to send a root transaction"),Object(i.b)("p",null,"Some calls in Polkadot/Substrate can only be submitted as root, these are indicated by ",Object(i.b)("inlineCode",{parentName:"p"},"ensure_root(origin)")," in the Rust codebase. Root here does not refer to the actual account, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"//Alice")," on  a ",Object(i.b)("inlineCode",{parentName:"p"},"--dev")," chain, but rather that it cannot be submitted as a bare user transaction. This restriction applies to chain upgrades, changing balances or anything that modifies the state and/or chain operation."),Object(i.b)("p",null,"To submit these transactions, it needs to be send as a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/api.tx.wrap#sudo-use"}),"wrapped transaction")," via either ",Object(i.b)("inlineCode",{parentName:"p"},"sudo.sudo")," (assuming you have access on your chain) or ",Object(i.b)("inlineCode",{parentName:"p"},"democracy.proposal")," (which would allow users of the chain to vote on it)."),Object(i.b)("h2",{id:"how-do-i-call-a-function-with-a-tuple-input"},"How do I call a function with a Tuple input"),Object(i.b)("p",null,"Tuples, as defined in the Polkadot/Substrate types appear as ",Object(i.b)("inlineCode",{parentName:"p"},"(TypeA, TypeB)"),". For instance we may have an ",Object(i.b)("inlineCode",{parentName:"p"},"(AccountId, u64)")," input as defined in the metadata or as part of the user types. To specify a Tuple as an input, wrap it in an  array format, for instance to call ",Object(i.b)("inlineCode",{parentName:"p"},"query.module.get((u32, u64))")," where a ",Object(i.b)("inlineCode",{parentName:"p"},"(u32, u64)")," Tuple input is expected, you would do  ",Object(i.b)("inlineCode",{parentName:"p"},"query.module.get([123, 456])")),Object(i.b)("h2",{id:"how-long-do-transactions-live"},"How long do transactions live"),Object(i.b)("p",null,"Polkadot/Substrate supports both immortal and mortal transactions. For immortal, this means that the transaction has an infinite lifetime, for mortals, the transactions expire after a defined period. By default the API sends mortal transactions when no explicit extrinsic era has been specified. This means that all transaction has a limited lifetime and will expire if not included in the period set."),Object(i.b)("p",null,"The length for this transaction validity is set to 5 minutes, calculated based on the blocktime for the chain. (10 blocks per minute in this default 6s Substrate configuration)."),Object(i.b)("h2",{id:"my-chain-does-not-support-systemaccount-queries"},"My chain does not support system.account queries"),Object(i.b)("p",null,"The API always tracks the latest Substrate master in terms of examples. This means that nonce & balance queries are done via the ",Object(i.b)("inlineCode",{parentName:"p"},"api.query.system.account(<account>)")," which returns a struct ",Object(i.b)("inlineCode",{parentName:"p"},"{ nonce: Index, data: AccountData }")," where the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," is struct containing the free and reserved balances. As with all ",Object(i.b)("inlineCode",{parentName:"p"},"api.query.*")," endpoints, this is decorated based on what the chain you connect to support, via the metadata exchange."),Object(i.b)("p",null,"It is possible that you are connecting to an older chain that has not been upgraded yet. For these chains, this storage entry won't be available (yet). To query the nonce on older chains, you can do a query to ",Object(i.b)("inlineCode",{parentName:"p"},"api.query.system.accountNonce(<account>)")," and balances can be retrieved via ",Object(i.b)("inlineCode",{parentName:"p"},"api.query.balances.freeBalance(<account>)"),"."),Object(i.b)("p",null,"Likewise, if your chain has been upgraded recently and you are still using the old ",Object(i.b)("inlineCode",{parentName:"p"},"system.accountNonce")," or ",Object(i.b)("inlineCode",{parentName:"p"},"balances.freeBalance")," queries in your code (which is now not available in the chain metadata), you need to update it to query the new location."),Object(i.b)("h2",{id:"i-cannot-send-transactions-sending-yields-decoding-failures"},"I cannot send transactions, sending yields decoding failures"),Object(i.b)("p",null,"Depending on the chain, you could get either an ",Object(i.b)("inlineCode",{parentName:"p"},"Address")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Signature")," or extensions decoding error when sending the transaction returned from the node. This is due to a type mismatch on the ",Object(i.b)("inlineCode",{parentName:"p"},"Address")," types defined on the node vs what the API uses. This is not something the API can detect via the metadata and it is generally configured on a per-chain basis."),Object(i.b)("p",null,"The API always injects the default type definitions as specified by the Substrate master fully-featured node. This means that any customizations to chains needs needs to be applied as types, should there be differences in specific user-implementations."),Object(i.b)("p",null,"Due to these customizations and differences that bleed through to the transaction formats, out-of-the-box chains based on the node-template will have issues when sending transactions. To fix this, you would need to add ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/types.extend#impact-on-extrinsics"}),"the customized Address types into your API")," instances (or UIs), allowing the API to have the information required to adjust the encoding."),Object(i.b)("p",null,"There are 3 ",Object(i.b)("inlineCode",{parentName:"p"},"Address")," types that are generally configured in different chains, and one variant should be passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"Api.create({ ... })")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://polkadot.js.org/docs/api/start/types.extend/#extension"}),"options as types")," -"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"type Address = MultiAddress")," (Rust), this is the current default in Substrate master and the API and used in chains such as Polkadot/Kusama from runtime 2. It allows an enhancement to the original ",Object(i.b)("inlineCode",{parentName:"p"},"Indices")," lookup, catering for a wide array of address types. To configure this type in the API, use ",Object(i.b)("inlineCode",{parentName:"p"},'{ "Address": "MultiAddress", "LookupSource": "MultiAddress" }'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"type Address = <Indices as StaticLookup>::Source")," (Rust), this is the previous the default as applied in the API and yields types ",Object(i.b)("inlineCode",{parentName:"p"},'{ "Address": "IndicesLookupSource", "LookupSource": "IndicesLookupSource" }')," when explicitly specified;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"type Address = AccountId")," (Rust), this is used in a number of chains such as Kusama/Polkadot (prior to the 28 runtime) and a previous default for the node-template chain as well. To override to this type of Address, use the API types ",Object(i.b)("inlineCode",{parentName:"p"},'{ "Address": "AccountId", "LookupSource": "AccountId" }')))),Object(i.b)("p",null,"The above may also apply when when you use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/polkadot-js/apps"}),"polkadot-js/apps")," to connect to your node. Known chains are correctly configured, however any custom chain may need additional types."),Object(i.b)("h2",{id:"using-a-non-current-master-node-i-have-issues-parsing-events"},"Using a non-current-master node, I have issues parsing events"),Object(i.b)("p",null,"Recently Substrate master updated the ",Object(i.b)("inlineCode",{parentName:"p"},"Weight")," type from ",Object(i.b)("inlineCode",{parentName:"p"},"u32")," -> ",Object(i.b)("inlineCode",{parentName:"p"},"u64"),". This type is used in the ",Object(i.b)("inlineCode",{parentName:"p"},"DispatchInfo")," struct in the ",Object(i.b)("inlineCode",{parentName:"p"},"system.ExtrinsicSuccess")," events, to return the applied call weights as well as the resulting fees. Since the API master branch tracks Substrate master, this means the change has been applied by default, with the default set to ",Object(i.b)("inlineCode",{parentName:"p"},"u64"),"."),Object(i.b)("p",null,"If you are on a chain that has not been upgraded yet, you need to add ",Object(i.b)("inlineCode",{parentName:"p"},"Weight: 'u32'")," to your types to allow for successful parsing of all events. Without this override, parsing will fail. As soon as one event in the ",Object(i.b)("inlineCode",{parentName:"p"},"Vec<EventRecord>")," structure from ",Object(i.b)("inlineCode",{parentName:"p"},"system.events")," fails to parse, all subsequent events are affected and the decoding will return an error."),Object(i.b)("h2",{id:"on-a-non-current-non-substrate-20-branch-my-balances-are-wrong"},"On a non-current, non Substrate 2.0 branch, my balances are wrong"),Object(i.b)("p",null,"As part of the Substrate 2.0 release, the ",Object(i.b)("inlineCode",{parentName:"p"},"RefCount")," type has been changed from ",Object(i.b)("inlineCode",{parentName:"p"}," u8")," to a ",Object(i.b)("inlineCode",{parentName:"p"},"u32"),". Since the API always track latest Substrate, this change has been applied by default. The impact of this type is that it is used in the ",Object(i.b)("inlineCode",{parentName:"p"},"AccountInfo")," type which is returned from ",Object(i.b)("inlineCode",{parentName:"p"},"system.account"),", which, in turn, tracks balances."),Object(i.b)("p",null,"If on an older version of the chain, apply the older type via ",Object(i.b)("inlineCode",{parentName:"p"},"RefCount: 'u8'")," to your types."),Object(i.b)("h2",{id:"which-api-can-i-use-to-query-by-transaction-hash"},"Which API can I use to query by transaction hash?"),Object(i.b)("p",null,'There is no such API. Substrate does not expose a "query-by-tx-hash" RPC, nor are transactions indexed by hash on the Substrate node. The reason for this is that transaction hashes are non-unique across the chain, although they will generally be unique inside a block.'),Object(i.b)("p",null,"For more information around this, refer to the Polkadot wiki ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://wiki.polkadot.network/docs/en/build-protocol-info#unique-identifiers-for-extrinsics"}),"on unique extrinsic identifiers"),"."))}l.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,b=p["".concat(r,".").concat(h)]||p[h]||u[h]||i;return n?o.a.createElement(b,s(s({ref:t},d),{},{components:n})):o.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);