let e,t;var n,o,s,i,a,r,l,c,d,u,h,f,m,g,p,E,C,y,O,v,_,w,I,b,T=globalThis,N={},A={},R=T.parcelRequire94c2;null==R&&((R=function(e){if(e in N)return N[e].exports;if(e in A){var t=A[e];delete A[e];var n={id:e,exports:{}};return N[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){A[e]=t},T.parcelRequire94c2=R),R.register;var S=R("47Mwn"),M=R("ilpIi"),x=R("6AR8M");(n=m||(m={})).STRING="string",n.NUMBER="number",n.INTEGER="integer",n.BOOLEAN="boolean",n.ARRAY="array",n.OBJECT="object",(o=g||(g={})).LANGUAGE_UNSPECIFIED="language_unspecified",o.PYTHON="python",(s=p||(p={})).OUTCOME_UNSPECIFIED="outcome_unspecified",s.OUTCOME_OK="outcome_ok",s.OUTCOME_FAILED="outcome_failed",s.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
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
 */const D=["user","model","function","system"];(i=E||(E={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",i.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",i.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",i.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",i.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(a=C||(C={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",a.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",a.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",a.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",a.BLOCK_NONE="BLOCK_NONE",(r=y||(y={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",r.NEGLIGIBLE="NEGLIGIBLE",r.LOW="LOW",r.MEDIUM="MEDIUM",r.HIGH="HIGH",(l=O||(O={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",l.SAFETY="SAFETY",l.OTHER="OTHER",(c=v||(v={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",c.STOP="STOP",c.MAX_TOKENS="MAX_TOKENS",c.SAFETY="SAFETY",c.RECITATION="RECITATION",c.LANGUAGE="LANGUAGE",c.OTHER="OTHER",(d=_||(_={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",d.RETRIEVAL_QUERY="RETRIEVAL_QUERY",d.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",d.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",d.CLASSIFICATION="CLASSIFICATION",d.CLUSTERING="CLUSTERING",(u=w||(w={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",u.AUTO="AUTO",u.ANY="ANY",u.NONE="NONE",(h=I||(I={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",h.MODE_DYNAMIC="MODE_DYNAMIC";/**
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
 */class L extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class H extends L{constructor(e,t){super(e),this.response=t}}class k extends L{constructor(e,t,n,o){super(e),this.status=t,this.statusText=n,this.errorDetails=o}}class U extends L{}(f=b||(b={})).GENERATE_CONTENT="generateContent",f.STREAM_GENERATE_CONTENT="streamGenerateContent",f.COUNT_TOKENS="countTokens",f.EMBED_CONTENT="embedContent",f.BATCH_EMBED_CONTENTS="batchEmbedContents";class P{constructor(e,t,n,o,s){this.model=e,this.task=t,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",o=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",s=`${o}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}async function F(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.21.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(e){throw new U(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${e.message}`)}for(let[e,t]of o.entries()){if("x-goog-api-key"===e)throw new U(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new U(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function G(e,t,n,o,s,i){let a=new P(e,t,n,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await F(a),body:s})}}async function $(e,t,n,o,s,i={},a=fetch){let{url:r,fetchOptions:l}=await G(e,t,n,o,s,i);return j(r,l,a)}async function j(e,t,n=fetch){let o;try{o=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof k||e instanceof U||((n=new L(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return o.ok||await B(o,e),o}async function B(e,t){let n,o="";try{let t=await e.json();o=t.error.message,t.error.details&&(o+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new k(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${o}`,e.status,e.statusText,n)}/**
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
 */function Y(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),J(e.candidates[0]))throw new H(`${V(e)}`,e);return function(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new H(`Text not available. ${V(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),J(e.candidates[0]))throw new H(`${V(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),K(e)[0]}if(e.promptFeedback)throw new H(`Function call not available. ${V(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),J(e.candidates[0]))throw new H(`${V(e)}`,e);return K(e)}if(e.promptFeedback)throw new H(`Function call not available. ${V(e)}`,e)},e}function K(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}const q=[v.RECITATION,v.SAFETY,v.LANGUAGE];function J(e){return!!e.finishReason&&q.includes(e.finishReason)}function V(e){var t,n,o;let s="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(o=e.candidates)||void 0===o?void 0:o[0]){let t=e.candidates[0];J(t)&&(s+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(s+=`: ${t.finishMessage}`))}return s}function W(e){return this instanceof W?(this.v=e,this):new W(e)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */const X=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function Q(e){let t=[],n=e.getReader();for(;;){let{done:e,value:o}=await n.read();if(e)return Y(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let o={};for(let s of e.content.parts)s.text&&(o.text=s.text),s.functionCall&&(o.functionCall=s.functionCall),s.executableCode&&(o.executableCode=s.executableCode),s.codeExecutionResult&&(o.codeExecutionResult=s.codeExecutionResult),0===Object.keys(o).length&&(o.text=""),n.candidates[t].content.parts.push(o)}}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(o)}}/**
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
 */async function z(e,t,n,o){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function o(){return t.read().then(({value:t,done:s})=>{let i;if(s){if(n.trim()){e.error(new L("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(X);for(;a;){try{i=JSON.parse(a[1])}catch(t){e.error(new L(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(i),a=(n=n.substring(a[0].length)).match(X)}return o()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(e,t||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(e){s[e]&&(o[e]=function(t){return new Promise(function(n,o){i.push([e,t,n,o])>1||r(e,t)})})}function r(e,t){try{var n;(n=s[e](t)).value instanceof W?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield W(t.read());if(n)break;yield yield W(Y(e))}})}(t),response:Q(n)}}(await $(t,b.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o))}async function Z(e,t,n,o){let s=await $(t,b.GENERATE_CONTENT,e,!1,JSON.stringify(n),o);return{response:Y(await s.json())}}/**
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
 */function ee(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function et(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},o=!1,s=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),s=!0):(t.parts.push(i),o=!0);if(o&&s)throw new L("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new L("No content is provided for sending chat message.");return o?t:n}(t)}function en(e){let t;return t=e.contents?e:{contents:[et(e)]},e.systemInstruction&&(t.systemInstruction=ee(e.systemInstruction)),t}/**
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
 */const eo=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],es={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},ei="SILENT_ERROR";class ea{constructor(e,t,n,o={}){this.model=t,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:o}=n;if(!t&&"user"!==e)throw new L(`First content should be with role 'user', got ${e}`);if(!D.includes(e))throw new L(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(D)}`);if(!Array.isArray(o))throw new L("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new L("Each Content should have at least one part");let s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of o)for(let t of eo)t in e&&(s[t]+=1);let i=es[e];for(let t of eo)if(!i.includes(t)&&s[t]>0)throw new L(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,o,s,i,a,r;let l;await this._sendPromise;let c=et(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>Z(this._apiKey,this.model,d,u)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=V(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,o,s,i,a,r;await this._sendPromise;let l=et(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=z(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(ei)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=V(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==ei&&console.error(e)}),u}}/**
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
 */async function er(e,t,n,o){return(await $(t,b.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}/**
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
 */async function el(e,t,n,o){return(await $(t,b.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function ec(e,t,n,o){let s=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await $(t,b.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}/**
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
 */class ed{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=ee(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let o=en(e),s=Object.assign(Object.assign({},this._requestOptions),t);return Z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(e,t={}){var n;let o=en(e),s=Object.assign(Object.assign({},this._requestOptions),t);return z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(e){var t;return new ea(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let o={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},s=null!=e.generateContentRequest;if(e.contents){if(s)throw new U("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{let t=et(e);o.contents=[t]}return{generateContentRequest:o}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return er(this.apiKey,this.model,n,o)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:et(e)}:e,o=Object.assign(Object.assign({},this._requestOptions),t);return el(this.apiKey,this.model,n,o)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return ec(this.apiKey,this.model,e,n)}}/**
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
 */class eu{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new L("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ed(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new U("Cached content must contain a `name` field.");if(!e.model)throw new U("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new U(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new ed(this.apiKey,o,n)}}const eh=document.getElementById("habitInput"),ef=document.getElementById("addHabitBtn"),em=document.getElementById("habitList"),eg=document.getElementById("send-btn"),ep=document.getElementById("chat-input"),eE=document.getElementById("chat-history");let eC=!1;const ey=document.getElementById("signOutBtn");async function eO(){t=new eu((await (0,M.getDoc)((0,M.doc)(S.db,"apikey","googlegenai"))).data().key).getGenerativeModel({model:"gemini-1.5-flash"})}function ev(e){eC||(eE.innerHTML="",eC=!0);let t=document.createElement("div");t.textContent=e,t.className="history",eE.appendChild(t),eE.scrollTop=eE.scrollHeight,ep.value=""}async function e_(e){let t=await eI(e);eh.value="",eN(t,e)}async function ew(){let e=await eb();em.innerHTML="";let t=[];e.forEach(e=>{t.push({id:e.id,text:e.data().text,completed:e.data().completed})}),t.sort((e,t)=>new Date(t.timeCreated)-new Date(e.timeCreated)),t.forEach(e=>{eN(e.id,e.text,e.completed)})}async function eI(t){if(!e){console.error("Email is undefined when adding habit!"),alert("Error: No user email found. Please sign in again.");return}return console.log("Adding habit for email:",e),(await (0,M.addDoc)((0,M.collection)(S.db,"habits"),{text:t,email:e,completed:!1})).id}async function eb(){let t=(0,M.query)((0,M.collection)(S.db,"habits"),(0,M.where)("email","==",e));return await (0,M.getDocs)(t)}async function eT(e){await (0,M.deleteDoc)((0,M.doc)(S.db,"habits",e))}function eN(e,t,n=!1){let o=document.createElement("li");o.id=e,o.classList.add("habit-item");let s=document.createElement("span");s.textContent=t,s.className=n?"completed":"habit-text";let i=document.createElement("div");i.classList.add("habit-buttons");let a=document.createElement("button");a.textContent=n?"Mark as Incomplete":"Mark as Complete",a.className="complete-btn",a.addEventListener("click",async()=>{n?window.confirm("Are you sure you want to mark this habit as incomplete?")&&(await eA(e,!n),ew()):window.confirm("Are you sure you want to mark this habit as complete?")&&(await eA(e,!n),ew())});let r=document.createElement("button");r.textContent="Delete Habit",r.className="delete-btn",r.addEventListener("click",async()=>{window.confirm("Are you sure you want to delete this habit?")&&(await eT(e),ew())}),i.appendChild(a),i.appendChild(r),o.appendChild(s),o.appendChild(i),em.appendChild(o)}async function eA(e,t){await (0,M.updateDoc)((0,M.doc)(S.db,"habits",e),{completed:t})}async function eR(e){ev((await t.generateContent(e)).response.text())}window.addEventListener("load",async()=>{eO(),(0,x.onAuthStateChanged)(S.auth,t=>{(e=t?t.email:localStorage.getItem("email"))?(console.log("User is signed in:",e),ew()):(console.error("No authenticated user found."),window.location.href="index.html")})}),eg.addEventListener("click",async()=>{let e=ep.value.trim().toLowerCase();e?(e.includes("add")?ev('To add a new habit, enter a description into the text input under the "Add a New Habit" section, and then click on the "Add Habit" button.'):e.includes("delete")?ev('To delete a habit, click on its corresponding "Delete Habit" button under the "Your Habits" section.'):e.includes("modify")?ev('To modify the status of a habit, click on its corresponding "Mark as Complete/Incomplete" button under the "Your Habits" section.'):ev("Please specify if you would like to add, delete, or modify the status of a habit."),0):ev("Please enter a prompt.")}),ep.addEventListener("keypress",function(e){"Enter"===e.key&&eg.click()}),ef.addEventListener("click",async()=>{let e=eh.value.trim();e?await e_(e):alert("Please enter a habit.")}),eh.addEventListener("keypress",function(e){"Enter"===e.key&&ef.click()}),window.addEventListener("error",function(e){console.error("Error occurred: ",e.message)}),ey.addEventListener("click",async function(){window.confirm("Are you sure you want to sign out?")&&(await (0,S.auth).signOut(),localStorage.removeItem("authenticatedUser"),localStorage.removeItem("email"),window.location.href="index.html")});
//# sourceMappingURL=habits.c7885e6e.js.map
