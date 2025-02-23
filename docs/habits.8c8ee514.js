let e;var t,n,s,o,i,a,r,l,c,d,u,h,f,m,g,p,E,C,y,O,v,_,w,I,b=globalThis,T={},N={},A=b.parcelRequire94c2;null==A&&((A=function(e){if(e in T)return T[e].exports;if(e in N){var t=N[e];delete N[e];var n={id:e,exports:{}};return T[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){N[e]=t},b.parcelRequire94c2=A),A.register;var R=A("47Mwn"),S=A("ilpIi"),M=A("6AR8M");(t=f||(f={})).STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object",(n=m||(m={})).LANGUAGE_UNSPECIFIED="language_unspecified",n.PYTHON="python",(s=g||(g={})).OUTCOME_UNSPECIFIED="outcome_unspecified",s.OUTCOME_OK="outcome_ok",s.OUTCOME_FAILED="outcome_failed",s.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
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
 */const x=["user","model","function","system"];(o=p||(p={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",o.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",o.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",o.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(i=E||(E={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",i.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",i.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",i.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",i.BLOCK_NONE="BLOCK_NONE",(a=C||(C={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",a.NEGLIGIBLE="NEGLIGIBLE",a.LOW="LOW",a.MEDIUM="MEDIUM",a.HIGH="HIGH",(r=y||(y={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",r.SAFETY="SAFETY",r.OTHER="OTHER",(l=O||(O={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",l.STOP="STOP",l.MAX_TOKENS="MAX_TOKENS",l.SAFETY="SAFETY",l.RECITATION="RECITATION",l.LANGUAGE="LANGUAGE",l.OTHER="OTHER",(c=v||(v={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",c.RETRIEVAL_QUERY="RETRIEVAL_QUERY",c.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",c.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",c.CLASSIFICATION="CLASSIFICATION",c.CLUSTERING="CLUSTERING",(d=_||(_={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.AUTO="AUTO",d.ANY="ANY",d.NONE="NONE",(u=w||(w={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",u.MODE_DYNAMIC="MODE_DYNAMIC";/**
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
 */class D extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class L extends D{constructor(e,t){super(e),this.response=t}}class H extends D{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class U extends D{}(h=I||(I={})).GENERATE_CONTENT="generateContent",h.STREAM_GENERATE_CONTENT="streamGenerateContent",h.COUNT_TOKENS="countTokens",h.EMBED_CONTENT="embedContent",h.BATCH_EMBED_CONTENTS="batchEmbedContents";class k{constructor(e,t,n,s,o){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",s=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",o=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}async function P(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(e){throw new U(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${e.message}`)}for(let[e,t]of s.entries()){if("x-goog-api-key"===e)throw new U(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new U(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function F(e,t,n,s,o,i){let a=new k(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await P(a),body:o})}}async function G(e,t,n,s,o,i={},a=fetch){let{url:r,fetchOptions:l}=await F(e,t,n,s,o,i);return $(r,l,a)}async function $(e,t,n=fetch){let s;try{s=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof H||e instanceof U||((n=new D(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return s.ok||await j(s,e),s}async function j(e,t){let n,s="";try{let t=await e.json();s=t.error.message,t.error.details&&(s+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new H(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${s}`,e.status,e.statusText,n)}/**
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
 */function B(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),q(e.candidates[0]))throw new L(`${J(e)}`,e);return function(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new L(`Text not available. ${J(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),q(e.candidates[0]))throw new L(`${J(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Y(e)[0]}if(e.promptFeedback)throw new L(`Function call not available. ${J(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),q(e.candidates[0]))throw new L(`${J(e)}`,e);return Y(e)}if(e.promptFeedback)throw new L(`Function call not available. ${J(e)}`,e)},e}function Y(e){var t,n,s,o;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}const K=[O.RECITATION,O.SAFETY,O.LANGUAGE];function q(e){return!!e.finishReason&&K.includes(e.finishReason)}function J(e){var t,n,s;let o="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];q(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}return o}function V(e){return this instanceof V?(this.v=e,this):new V(e)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */const W=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function X(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return B(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let s={};for(let o of e.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),o.executableCode&&(s.executableCode=o.executableCode),o.codeExecutionResult&&(s.codeExecutionResult=o.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[t].content.parts.push(s)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(s)}}/**
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
 */async function Q(e,t,n,s){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function s(){return t.read().then(({value:t,done:o})=>{let i;if(o){if(n.trim()){e.error(new D("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(W);for(;a;){try{i=JSON.parse(a[1])}catch(t){e.error(new D(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(i),a=(n=n.substring(a[0].length)).match(W)}return s()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(e,t||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(e){o[e]&&(s[e]=function(t){return new Promise(function(n,s){i.push([e,t,n,s])>1||r(e,t)})})}function r(e,t){try{var n;(n=o[e](t)).value instanceof V?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield V(t.read());if(n)break;yield yield V(B(e))}})}(t),response:X(n)}}(await G(t,I.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s))}async function z(e,t,n,s){let o=await G(t,I.GENERATE_CONTENT,e,!1,JSON.stringify(n),s);return{response:B(await o.json())}}/**
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
 */function Z(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function ee(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,o=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new D("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new D("No content is provided for sending chat message.");return s?t:n}(t)}function et(e){let t;return t=e.contents?e:{contents:[ee(e)]},e.systemInstruction&&(t.systemInstruction=Z(e.systemInstruction)),t}/**
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
 */const en=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],es={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},eo="SILENT_ERROR";class ei{constructor(e,t,n,s={}){this.model=t,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:s}=n;if(!t&&"user"!==e)throw new D(`First content should be with role 'user', got ${e}`);if(!x.includes(e))throw new D(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(x)}`);if(!Array.isArray(s))throw new D("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new D("Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of s)for(let t of en)t in e&&(o[t]+=1);let i=es[e];for(let t of en)if(!i.includes(t)&&o[t]>0)throw new D(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,s,o,i,a,r;let l;await this._sendPromise;let c=ee(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>z(this._apiKey,this.model,d,u)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=J(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,s,o,i,a,r;await this._sendPromise;let l=ee(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=Q(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(eo)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=J(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==eo&&console.error(e)}),u}}/**
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
 */async function ea(e,t,n,s){return(await G(t,I.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
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
 */async function er(e,t,n,s){return(await G(t,I.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function el(e,t,n,s){let o=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await G(t,I.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class ec{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Z(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let s=et(e),o=Object.assign(Object.assign({},this._requestOptions),t);return z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(e,t={}){var n;let s=et(e),o=Object.assign(Object.assign({},this._requestOptions),t);return Q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(e){var t;return new ei(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let s={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},o=null!=e.generateContentRequest;if(e.contents){if(o)throw new U("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{let t=ee(e);s.contents=[t]}return{generateContentRequest:s}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return ea(this.apiKey,this.model,n,s)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:ee(e)}:e,s=Object.assign(Object.assign({},this._requestOptions),t);return er(this.apiKey,this.model,n,s)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return el(this.apiKey,this.model,e,n)}}/**
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
 */class ed{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new D("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ec(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new U("Cached content must contain a `name` field.");if(!e.model)throw new U("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new U(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let s=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new ec(this.apiKey,s,n)}}const eu=document.getElementById("habitInput"),eh=document.getElementById("addHabitBtn"),ef=document.getElementById("habitList"),em=document.getElementById("send-btn"),eg=document.getElementById("chat-input"),ep=document.getElementById("chat-history");let eE=!1;const eC=document.getElementById("signOutBtn");async function ey(){e=new ed((await (0,S.getDoc)((0,S.doc)(R.db,"apikey","googlegenai"))).data().key).getGenerativeModel({model:"gemini-1.5-flash"})}function eO(e){eE||(ep.innerHTML="",eE=!0);let t=document.createElement("div");t.textContent=e,t.className="history",ep.appendChild(t),ep.scrollTop=ep.scrollHeight,eg.value=""}async function ev(e){let t=await ew(e);eu.value="",eT(t,e)}async function e_(){let e=await eI();ef.innerHTML="";let t=[];e.forEach(e=>{t.push({id:e.id,text:e.data().text,completed:e.data().completed})}),t.sort((e,t)=>new Date(t.timeCreated)-new Date(e.timeCreated)),t.forEach(e=>{eT(e.id,e.text,e.completed)})}async function ew(e){let t=firebase.auth().currentUser?.email;return console.log(t),(await (0,S.addDoc)((0,S.collection)(R.db,"habits"),{text:e,email:t,completed:!1})).id}async function eI(){let e=firebase.auth().currentUser?.email;console.log(e);let t=(0,S.query)((0,S.collection)(R.db,"habits"),(0,S.where)("email","==",e));return await (0,S.getDocs)(t)}async function eb(e){await (0,S.deleteDoc)((0,S.doc)(R.db,"habits",e))}function eT(e,t,n=!1){let s=document.createElement("li");s.id=e,s.classList.add("habit-item");let o=document.createElement("span");o.textContent=t,o.className=n?"completed":"habit-text";let i=document.createElement("div");i.classList.add("habit-buttons");let a=document.createElement("button");a.textContent=n?"Mark as Incomplete":"Mark as Complete",a.className="complete-btn",a.addEventListener("click",async()=>{n?window.confirm("Are you sure you want to mark this habit as incomplete?")&&(await eN(e,!n),e_()):window.confirm("Are you sure you want to mark this habit as complete?")&&(await eN(e,!n),e_())});let r=document.createElement("button");r.textContent="Delete Habit",r.className="delete-btn",r.addEventListener("click",async()=>{window.confirm("Are you sure you want to delete this habit?")&&(await eb(e),e_())}),i.appendChild(a),i.appendChild(r),s.appendChild(o),s.appendChild(i),ef.appendChild(s)}async function eN(e,t){await (0,S.updateDoc)((0,S.doc)(R.db,"habits",e),{completed:t})}async function eA(t){eO((await e.generateContent(t)).response.text())}JSON.parse(localStorage.getItem("email"))||(window.location.href="index.html"),window.addEventListener("load",async()=>{ey(),e_()}),em.addEventListener("click",async()=>{let e=eg.value.trim().toLowerCase();e?(e.includes("add")?eO('To add a new habit, enter a description into the text input under the "Add a New Habit" section, and then click on the "Add Habit" button.'):e.includes("delete")?eO('To delete a habit, click on its corresponding "Delete Habit" button under the "Your Habits" section.'):e.includes("modify")?eO('To modify the status of a habit, click on its corresponding "Mark as Complete/Incomplete" button under the "Your Habits" section.'):eO("Please specify if you would like to add, delete, or modify the status of a habit."),0):eO("Please enter a prompt.")}),eg.addEventListener("keypress",function(e){"Enter"===e.key&&em.click()}),eh.addEventListener("click",async()=>{let e=eu.value.trim();e?await ev(e):alert("Please enter a habit.")}),eu.addEventListener("keypress",function(e){"Enter"===e.key&&eh.click()}),window.addEventListener("error",function(e){console.error("Error occurred: ",e.message)}),eC.addEventListener("click",async function(){if(window.confirm("Are you sure you want to sign out?"))try{await (0,M.signOut)(R.auth),localStorage.removeItem("authenticatedUser"),window.location.href="index.html"}catch(e){console.error("Error signing out:",e)}});
//# sourceMappingURL=habits.8c8ee514.js.map
