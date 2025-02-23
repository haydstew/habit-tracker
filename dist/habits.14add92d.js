let t;var e,n,s,o,i,a,r,l,c,d,u,h,f,m,g,p,E,C,y,O,v,_,I,w,b=globalThis,T={},N={},A=b.parcelRequire94c2;null==A&&((A=function(t){if(t in T)return T[t].exports;if(t in N){var e=N[t];delete N[t];var n={id:t,exports:{}};return T[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){N[t]=e},b.parcelRequire94c2=A),A.register;var R=A("47Mwn"),S=A("ilpIi"),M=A("6AR8M");(e=f||(f={})).STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object",(n=m||(m={})).LANGUAGE_UNSPECIFIED="language_unspecified",n.PYTHON="python",(s=g||(g={})).OUTCOME_UNSPECIFIED="outcome_unspecified",s.OUTCOME_OK="outcome_ok",s.OUTCOME_FAILED="outcome_failed",s.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=["user","model","function","system"];(o=p||(p={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",o.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",o.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",o.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(i=E||(E={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",i.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",i.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",i.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",i.BLOCK_NONE="BLOCK_NONE",(a=C||(C={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",a.NEGLIGIBLE="NEGLIGIBLE",a.LOW="LOW",a.MEDIUM="MEDIUM",a.HIGH="HIGH",(r=y||(y={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",r.SAFETY="SAFETY",r.OTHER="OTHER",(l=O||(O={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",l.STOP="STOP",l.MAX_TOKENS="MAX_TOKENS",l.SAFETY="SAFETY",l.RECITATION="RECITATION",l.LANGUAGE="LANGUAGE",l.OTHER="OTHER",(c=v||(v={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",c.RETRIEVAL_QUERY="RETRIEVAL_QUERY",c.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",c.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",c.CLASSIFICATION="CLASSIFICATION",c.CLUSTERING="CLUSTERING",(d=_||(_={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.AUTO="AUTO",d.ANY="ANY",d.NONE="NONE",(u=I||(I={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",u.MODE_DYNAMIC="MODE_DYNAMIC";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class L extends D{constructor(t,e){super(t),this.response=e}}class H extends D{constructor(t,e,n,s){super(t),this.status=e,this.statusText=n,this.errorDetails=s}}class k extends D{}(h=w||(w={})).GENERATE_CONTENT="generateContent",h.STREAM_GENERATE_CONTENT="streamGenerateContent",h.COUNT_TOKENS="countTokens",h.EMBED_CONTENT="embedContent",h.BATCH_EMBED_CONTENTS="batchEmbedContents";class U{constructor(t,e,n,s,o){this.model=t,this.task=e,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var t,e;let n=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1beta",s=(null===(e=this.requestOptions)||void 0===e?void 0:e.baseUrl)||"https://generativelanguage.googleapis.com",o=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function P(t){var e;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(t){let e=[];return(null==t?void 0:t.apiClient)&&e.push(t.apiClient),e.push("genai-js/0.21.0"),e.join(" ")}(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=null===(e=t.requestOptions)||void 0===e?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(t){throw new k(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${t.message}`)}for(let[t,e]of s.entries()){if("x-goog-api-key"===t)throw new k(`Cannot set reserved header name ${t}`);if("x-goog-api-client"===t)throw new k(`Header name ${t} can only be set using the apiClient field`);n.append(t,e)}}return n}async function F(t,e,n,s,o,i){let a=new U(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(t){let e={};if((null==t?void 0:t.signal)!==void 0||(null==t?void 0:t.timeout)>=0){let n=new AbortController;(null==t?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),(null==t?void 0:t.signal)&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}(i)),{method:"POST",headers:await P(a),body:o})}}async function G(t,e,n,s,o,i={},a=fetch){let{url:r,fetchOptions:l}=await F(t,e,n,s,o,i);return $(r,l,a)}async function $(t,e,n=fetch){let s;try{s=await n(t,e)}catch(e){!function(t,e){let n=t;throw t instanceof H||t instanceof k||((n=new D(`Error fetching from ${e.toString()}: ${t.message}`)).stack=t.stack),n}(e,t)}return s.ok||await j(s,t),s}async function j(t,e){let n,s="";try{let e=await t.json();s=e.error.message,e.error.details&&(s+=` ${JSON.stringify(e.error.details)}`,n=e.error.details)}catch(t){}throw new H(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${s}`,t.status,t.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),q(t.candidates[0]))throw new L(`${J(t)}`,t);return function(t){var e,n,s,o;let i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(let e of null===(o=null===(s=t.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)e.text&&i.push(e.text),e.executableCode&&i.push("\n```"+e.executableCode.language+"\n"+e.executableCode.code+"\n```\n"),e.codeExecutionResult&&i.push("\n```\n"+e.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(t)}if(t.promptFeedback)throw new L(`Text not available. ${J(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),q(t.candidates[0]))throw new L(`${J(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Y(t)[0]}if(t.promptFeedback)throw new L(`Function call not available. ${J(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),q(t.candidates[0]))throw new L(`${J(t)}`,t);return Y(t)}if(t.promptFeedback)throw new L(`Function call not available. ${J(t)}`,t)},t}function Y(t){var e,n,s,o;let i=[];if(null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)for(let e of null===(o=null===(s=t.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)e.functionCall&&i.push(e.functionCall);return i.length>0?i:void 0}const K=[O.RECITATION,O.SAFETY,O.LANGUAGE];function q(t){return!!t.finishReason&&K.includes(t.finishReason)}function J(t){var e,n,s;let o="";if((!t.candidates||0===t.candidates.length)&&t.promptFeedback)o+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(o+=` due to ${t.promptFeedback.blockReason}`),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(null===(s=t.candidates)||void 0===s?void 0:s[0]){let e=t.candidates[0];q(e)&&(o+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(o+=`: ${e.finishMessage}`))}return o}function V(t){return this instanceof V?(this.v=t,this):new V(t)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function X(t){let e=[],n=t.getReader();for(;;){let{done:t,value:s}=await n.read();if(t)return B(function(t){let e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(let e of t){if(e.candidates)for(let t of e.candidates){let e=t.index;if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].groundingMetadata=t.groundingMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});let s={};for(let o of t.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),o.executableCode&&(s.executableCode=o.executableCode),o.codeExecutionResult&&(s.codeExecutionResult=o.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[e].content.parts.push(s)}}e.usageMetadata&&(n.usageMetadata=e.usageMetadata)}return n}(e));e.push(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t,e,n,s){return function(t){let[e,n]=(function(t){let e=t.getReader();return new ReadableStream({start(t){let n="";return function s(){return e.read().then(({value:e,done:o})=>{let i;if(o){if(n.trim()){t.error(new D("Failed to parse stream"));return}t.close();return}let a=(n+=e).match(W);for(;a;){try{i=JSON.parse(a[1])}catch(e){t.error(new D(`Error parsing JSON response: "${a[1]}"`));return}t.enqueue(i),a=(n=n.substring(a[0].length)).match(W)}return s()})}()}})})(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(t){return function(t,e,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(t,e||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(t){o[t]&&(s[t]=function(e){return new Promise(function(n,s){i.push([t,e,n,s])>1||r(t,e)})})}function r(t,e){try{var n;(n=o[t](e)).value instanceof V?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(t){d(i[0][3],t)}}function l(t){r("next",t)}function c(t){r("throw",t)}function d(t,e){t(e),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let e=t.getReader();for(;;){let{value:t,done:n}=yield V(e.read());if(n)break;yield yield V(B(t))}})}(e),response:X(n)}}(await G(e,w.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s))}async function z(t,e,n,s){let o=await G(e,w.GENERATE_CONTENT,t,!1,JSON.stringify(n),s);return{response:B(await o.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){if(null!=t){if("string"==typeof t)return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function tt(t){let e=[];if("string"==typeof t)e=[{text:t}];else for(let n of t)"string"==typeof n?e.push({text:n}):e.push(n);return function(t){let e={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,o=!1;for(let i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new D("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new D("No content is provided for sending chat message.");return s?e:n}(e)}function te(t){let e;return e=t.contents?t:{contents:[tt(t)]},t.systemInstruction&&(e.systemInstruction=Z(t.systemInstruction)),e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ts={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},to="SILENT_ERROR";class ti{constructor(t,e,n,s={}){this.model=e,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null==n?void 0:n.history)&&(function(t){let e=!1;for(let n of t){let{role:t,parts:s}=n;if(!e&&"user"!==t)throw new D(`First content should be with role 'user', got ${t}`);if(!x.includes(t))throw new D(`Each item should include role field. Got ${t} but valid roles are: ${JSON.stringify(x)}`);if(!Array.isArray(s))throw new D("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new D("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let t of s)for(let e of tn)e in t&&(o[e]+=1);let i=ts[t];for(let e of tn)if(!i.includes(e)&&o[e]>0)throw new D(`Content with role '${t}' can't contain '${e}' part`);e=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,e={}){var n,s,o,i,a,r;let l;await this._sendPromise;let c=tt(t),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),e);return this._sendPromise=this._sendPromise.then(()=>z(this._apiKey,this.model,d,u)).then(t=>{var e;if(t.response.candidates&&t.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(e=t.response.candidates)||void 0===e?void 0:e[0].content);this._history.push(n)}else{let e=J(t.response);e&&console.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}l=t}),await this._sendPromise,l}async sendMessageStream(t,e={}){var n,s,o,i,a,r;await this._sendPromise;let l=tt(t),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),e),u=Q(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(t=>{throw Error(to)}).then(t=>t.response).then(t=>{if(t.candidates&&t.candidates.length>0){this._history.push(l);let e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{let e=J(t);e&&console.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}}).catch(t=>{t.message!==to&&console.error(t)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t,e,n,s){return(await G(e,w.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t,e,n,s){return(await G(e,w.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function tl(t,e,n,s){let o=n.requests.map(t=>Object.assign(Object.assign({},t),{model:e}));return(await G(e,w.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e,n={}){this.apiKey=t,this._requestOptions=n,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.toolConfig=e.toolConfig,this.systemInstruction=Z(e.systemInstruction),this.cachedContent=e.cachedContent}async generateContent(t,e={}){var n;let s=te(t),o=Object.assign(Object.assign({},this._requestOptions),e);return z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(t,e={}){var n;let s=te(t),o=Object.assign(Object.assign({},this._requestOptions),e);return Q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(t){var e;return new ti(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(e=this.cachedContent)||void 0===e?void 0:e.name},t),this._requestOptions)}async countTokens(t,e={}){let n=function(t,e){var n;let s={model:null==e?void 0:e.model,generationConfig:null==e?void 0:e.generationConfig,safetySettings:null==e?void 0:e.safetySettings,tools:null==e?void 0:e.tools,toolConfig:null==e?void 0:e.toolConfig,systemInstruction:null==e?void 0:e.systemInstruction,cachedContent:null===(n=null==e?void 0:e.cachedContent)||void 0===n?void 0:n.name,contents:[]},o=null!=t.generateContentRequest;if(t.contents){if(o)throw new k("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{let e=tt(t);s.contents=[e]}return{generateContentRequest:s}}(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),e);return ta(this.apiKey,this.model,n,s)}async embedContent(t,e={}){let n="string"==typeof t||Array.isArray(t)?{content:tt(t)}:t,s=Object.assign(Object.assign({},this._requestOptions),e);return tr(this.apiKey,this.model,n,s)}async batchEmbedContents(t,e={}){let n=Object.assign(Object.assign({},this._requestOptions),e);return tl(this.apiKey,this.model,t,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t){this.apiKey=t}getGenerativeModel(t,e){if(!t.model)throw new D("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new tc(this.apiKey,t,e)}getGenerativeModelFromCachedContent(t,e,n){if(!t.name)throw new k("Cached content must contain a `name` field.");if(!t.model)throw new k("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==e?void 0:e[n])&&t[n]&&(null==e?void 0:e[n])!==t[n]){if("model"===n&&(e.model.startsWith("models/")?e.model.replace("models/",""):e.model)===(t.model.startsWith("models/")?t.model.replace("models/",""):t.model))continue;throw new k(`Different value for "${n}" specified in modelParams (${e[n]}) and cachedContent (${t[n]})`)}let s=Object.assign(Object.assign({},e),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new tc(this.apiKey,s,n)}}const tu=document.getElementById("habitInput"),th=document.getElementById("addHabitBtn"),tf=document.getElementById("habitList"),tm=document.getElementById("send-btn"),tg=document.getElementById("chat-input"),tp=document.getElementById("chat-history");let tE=!1;const tC=document.getElementById("signOutBtn"),ty=JSON.parse(localStorage.getItem("email"));async function tO(){t=new td((await (0,S.getDoc)((0,S.doc)(R.db,"apikey","googlegenai"))).data().key).getGenerativeModel({model:"gemini-1.5-flash"})}function tv(t){tE||(tp.innerHTML="",tE=!0);let e=document.createElement("div");e.textContent=t,e.className="history",tp.appendChild(e),tp.scrollTop=tp.scrollHeight,tg.value=""}async function t_(t){let e=await tw(t);tu.value="",tN(e,t)}async function tI(){let t=await tb();tf.innerHTML="";let e=[];t.forEach(t=>{e.push({id:t.id,text:t.data().text,completed:t.data().completed})}),e.sort((t,e)=>new Date(e.timeCreated)-new Date(t.timeCreated)),e.forEach(t=>{tN(t.id,t.text,t.completed)})}async function tw(t){return(await (0,S.addDoc)((0,S.collection)(R.db,"habits"),{text:t,email:ty,completed:!1})).id}async function tb(){let t=(0,S.query)((0,S.collection)(R.db,"habits"),(0,S.where)("email","==",ty));return await (0,S.getDocs)(t)}async function tT(t){await (0,S.deleteDoc)((0,S.doc)(R.db,"habits",t))}function tN(t,e,n=!1){let s=document.createElement("li");s.id=t,s.classList.add("habit-item");let o=document.createElement("span");o.textContent=e,o.className=n?"completed":"habit-text";let i=document.createElement("div");i.classList.add("habit-buttons");let a=document.createElement("button");a.textContent=n?"Mark as Incomplete":"Mark as Complete",a.className="complete-btn",a.addEventListener("click",async()=>{n?window.confirm("Are you sure you want to mark this habit as incomplete?")&&(await tA(t,!n),tI()):window.confirm("Are you sure you want to mark this habit as complete?")&&(await tA(t,!n),tI())});let r=document.createElement("button");r.textContent="Delete Habit",r.className="delete-btn",r.addEventListener("click",async()=>{window.confirm("Are you sure you want to delete this habit?")&&(await tT(t),tI())}),i.appendChild(a),i.appendChild(r),s.appendChild(o),s.appendChild(i),tf.appendChild(s)}async function tA(t,e){await (0,S.updateDoc)((0,S.doc)(R.db,"habits",t),{completed:e})}async function tR(e){tv((await t.generateContent(e)).response.text())}window.addEventListener("load",async()=>{tO(),tI()}),tm.addEventListener("click",async()=>{let t=tg.value.trim().toLowerCase();t?(t.includes("add")?tv('To add a new habit, enter a description into the text input under the "Add a New Habit" section, and then click on the "Add Habit" button.'):t.includes("delete")?tv('To delete a habit, click on its corresponding "Delete Habit" button under the "Your Habits" section.'):t.includes("modify")?tv('To modify the status of a habit, click on its corresponding "Mark as Complete/Incomplete" button under the "Your Habits" section.'):tv("Please specify if you would like to add, delete, or modify the status of a habit."),0):tv("Please enter a prompt.")}),tg.addEventListener("keypress",function(t){"Enter"===t.key&&tm.click()}),th.addEventListener("click",async()=>{let t=tu.value.trim();t?await t_(t):alert("Please enter a habit.")}),tu.addEventListener("keypress",function(t){"Enter"===t.key&&th.click()}),window.addEventListener("error",function(t){console.error("Error occurred: ",t.message)}),tC.addEventListener("click",async function(){if(window.confirm("Are you sure you want to sign out?"))try{await (0,M.signOut)(R.auth),localStorage.removeItem("authenticatedUser"),localStorage.removeItem("email"),window.location.href="index.html"}catch(t){console.error("Error signing out:",t)}});
//# sourceMappingURL=habits.14add92d.js.map
