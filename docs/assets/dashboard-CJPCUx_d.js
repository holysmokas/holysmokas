import"./modulepreload-polyfill-B5Qt9EMX.js";import{o as h,a as g,E as m}from"./config-Zq-n2hKh.js";/* empty css              */let r=null,u=null;h(g,async e=>{e?(r=e,await f(e.uid)):window.location.href="./login.html"});window.auth=g;function y(e,s=3){return!e||e.length===0?'<p class="no-modifications">No modifications yet</p>':e.slice(0,s).map((o,t)=>{const c=t+1,l=o.status==="completed"?"completed":o.status==="pending"?"pending":"failed",a=o.userEmail||o.userName||"User",d=o.timestamp?new Date(o.timestamp).toLocaleString():"Unknown date";return`
            <div class="log-entry">
                <div class="log-header">
                    <span class="log-number">#${c}</span>
                    <span class="log-status ${l}">${o.status||"completed"}</span>
                    <span class="log-date">${d}</span>
                </div>
                <p class="log-prompt"><strong>Request:</strong> ${o.request||"No description"}</p>
                <p class="log-user">👤 Requested by: ${a}</p>
            </div>
        `}).join("")}async function f(e){try{const n=await(await fetch(m.userProjects(e))).json(),o=document.getElementById("projectsContainer");n.success&&n.projects.length>0?o.innerHTML=n.projects.map(t=>{const c=t.modificationsUsed||0,l=t.modificationsLimit||3,a=l-c,d=a>0,i=t.modifications||[];return`
                <div class="project-card">
                    <h3>${t.businessName}</h3>
                    <div class="project-info">
                        <p><strong>Status:</strong> <span class="project-status status-${t.status}">${t.status}</span></p>
                        <p><strong>Package:</strong> ${t.packageType}</p>
                        <p><strong>Created:</strong> ${new Date(t.createdAt.seconds*1e3).toLocaleDateString()}</p>
                        <p><strong>Modifications:</strong> 
                            <span class="${a>0?"text-success":"text-warning"}">
                                ${c}/${l} used
                            </span>
                            ${a===0?'<span class="badge-limit">Limit Reached</span>':""}
                        </p>
                    </div>

                    ${i.length>0?`
                    <div class="modification-log">
                        <h4>📋 Modification Log</h4>
                        ${y(i,3)}
                        ${i.length>3?`
                            <button onclick='viewAllModifications(${JSON.stringify(i).replace(/'/g,"&#39;")})' class="view-all-btn">
                                View all ${i.length} modifications
                            </button>
                        `:""}
                    </div>
                    `:'<p class="no-modifications">No modifications yet</p>'}

                    <div class="project-btn-group">
                        <a href="${t.liveUrl}" target="_blank" class="btn btn-view">🌐 View Live Site</a>
                        
                        ${d?`
                            <button 
                                onclick='openAiModificationModal(${JSON.stringify(t).replace(/'/g,"&#39;")})' 
                                class="btn btn-modify">
                                🤖 Request Modification (${a} free left)
                            </button>
                        `:`
                            <button 
                                onclick='openPurchaseModal(${JSON.stringify(t).replace(/'/g,"&#39;")})' 
                                class="btn btn-purchase">
                                💳 Purchase More Modifications
                            </button>
                        `}
                    </div>
                </div>
            `}).join(""):o.innerHTML=`
                <div class="empty-state">
                    <h3>No projects yet</h3>
                    <p>Your projects will appear here once they're created.</p>
                    <a href="./contact.html" class="btn btn-primary">Start a New Project</a>
                </div>
            `}catch(s){console.error("Error loading projects:",s),document.getElementById("projectsContainer").innerHTML=`
            <div class="empty-state">
                <h3>Error loading projects</h3>
                <p>Please try refreshing the page.</p>
            </div>
        `}}window.openAiModificationModal=function(e){u=e;const s=(e.modificationsLimit||3)-(e.modificationsUsed||0);document.getElementById("modificationsCount").textContent=s,document.getElementById("aiModificationModal").classList.add("show"),document.getElementById("aiModificationInput").value="",document.getElementById("aiChatMessages").innerHTML=`
        <div class="ai-message">
            <strong>AI Assistant:</strong> Hi! I can help you modify "${e.businessName}". You have ${s} free modification${s!==1?"s":""} remaining. What would you like to change?
        </div>
    `};window.closeAiModificationModal=function(){document.getElementById("aiModificationModal").classList.remove("show"),u=null};window.submitAiModification=async function(e){e.preventDefault();const s=document.getElementById("aiModificationInput"),n=s.value.trim(),o=document.getElementById("aiSubmitBtn"),t=document.getElementById("aiChatMessages"),c=document.getElementById("aiProcessingMessage"),l=document.getElementById("aiModificationForm");if(console.log("🔍 DEBUG: submitAiModification called"),console.log("🔍 currentUser:",r),console.log("🔍 currentProject:",u),console.log("🔍 request:",n),console.log("🔍 ENDPOINTS:",m),!n||!u)return;const a=document.createElement("div");a.className="user-message",a.innerHTML=`<strong>You:</strong> ${n}`,t.appendChild(a),t.scrollTop=t.scrollHeight,s.value="",o.disabled=!0,l.style.display="none",c.style.display="block";try{const i=await(await fetch(m.requestModification,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:r.uid,projectId:u.id,modificationRequest:n})})).json();if(c.style.display="none",l.style.display="block",o.disabled=!1,i.success){const p=document.createElement("div");p.className="ai-message",p.innerHTML=`<strong>AI Assistant:</strong> Great! I've processed your request and updated your website. The changes are being deployed now and should be live in 2-3 minutes. ${i.modificationsRemaining} free modification${i.modificationsRemaining!==1?"s":""} remaining.`,t.appendChild(p),t.scrollTop=t.scrollHeight,document.getElementById("modificationsCount").textContent=i.modificationsRemaining,setTimeout(()=>{f(r.uid),i.modificationsRemaining===0&&(closeAiModificationModal(),b("Modifications Limit Reached","You've used all 3 free modifications. Additional changes will require a small fee. Contact us at (415) 691-7085 to discuss pricing."))},2e3)}else{const p=document.createElement("div");p.className="ai-message",p.innerHTML=`<strong>AI Assistant:</strong> I'm sorry, there was an error processing your request: ${i.error||"Unknown error"}. Please try again or contact support at (415) 691-7085.`,t.appendChild(p),t.scrollTop=t.scrollHeight}}catch(d){console.error("Error submitting modification:",d),c.style.display="none",l.style.display="block",o.disabled=!1;const i=document.createElement("div");i.className="ai-message",i.innerHTML="<strong>AI Assistant:</strong> I encountered a technical error. Please try again or contact support at (415) 691-7085.",t.appendChild(i),t.scrollTop=t.scrollHeight}};function b(e,s){const n=document.getElementById("responseModal"),o=document.getElementById("responseContent");o.innerHTML=`
        <h2>${e}</h2>
        <p>${s}</p>
        <button onclick="closeResponseModal()" class="btn btn-primary">Close</button>
    `,n.classList.add("show")}window.closeResponseModal=function(){document.getElementById("responseModal").classList.remove("show")};window.viewAllModifications=function(e){const s=document.getElementById("responseModal"),n=document.getElementById("responseContent");n.innerHTML=`
        <h2>📋 Complete Modification Log</h2>
        <div class="modification-log">
            ${y(e,e.length)}
        </div>
        <button onclick="closeResponseModal()" class="btn btn-primary">Close</button>
    `,s.classList.add("show")};window.openPurchaseModal=function(e){const s=document.getElementById("responseModal"),n=document.getElementById("responseContent");n.innerHTML=`
        <h2>💳 Purchase Additional Modifications</h2>
        <p>You've used all 3 free modifications for <strong>${e.businessName}</strong>.</p>
        
        <div class="pricing-options">
            <div class="pricing-card">
                <h3>Single Modification</h3>
                <p class="price">$49</p>
                <p>One AI-powered change to your website</p>
                <button onclick="purchaseModifications('${e.id}', 1)" class="btn btn-primary">Purchase 1 Modification</button>
            </div>
            
            <div class="pricing-card featured">
                <span class="badge-popular">Most Popular</span>
                <h3>5 Modifications Pack</h3>
                <p class="price">$199 <span class="price-save">Save $46</span></p>
                <p>Five AI-powered changes to your website</p>
                <button onclick="purchaseModifications('${e.id}', 5)" class="btn btn-primary">Purchase 5 Modifications</button>
            </div>
            
            <div class="pricing-card">
                <h3>Unlimited Monthly</h3>
                <p class="price">$299/mo</p>
                <p>Unlimited modifications for one month</p>
                <button onclick="purchaseModifications('${e.id}', 'unlimited')" class="btn btn-primary">Get Unlimited</button>
            </div>
        </div>
        
        <p class="contact-note">Need something custom? Call us at <strong>(415) 691-7085</strong></p>
        <button onclick="closeResponseModal()" class="btn btn-outline">Maybe Later</button>
    `,s.classList.add("show")};window.purchaseModifications=async function(e,s){console.log(`Purchase request: ${s} modifications for project ${e}`),document.getElementById("responseModal");const n=document.getElementById("responseContent");n.innerHTML=`
        <h2>💳 Complete Your Purchase</h2>
        <p>To purchase ${s==="unlimited"?"unlimited":s} modification${s!==1&&s!=="unlimited"?"s":""}, please contact us:</p>
        <div style="text-align: center; margin: 2rem 0;">
            <p style="font-size: 1.5rem; font-weight: 700; color: #007bff;">📞 (415) 691-7085</p>
            <p>or email: <strong>support@holysmokas.com</strong></p>
        </div>
        <p>We'll process your payment and add the modifications to your account immediately.</p>
        <button onclick="closeResponseModal()" class="btn btn-primary">Got It</button>
    `};window.openSupportModal=function(){document.getElementById("supportModal").classList.add("show"),document.getElementById("supportSubject").value="",document.getElementById("supportMessage").value="",document.getElementById("supportForm").style.display="block",document.getElementById("supportProcessing").style.display="none"};window.closeSupportModal=function(){document.getElementById("supportModal").classList.remove("show")};window.submitSupportRequest=async function(e){e.preventDefault();const s=document.getElementById("supportSubject").value.trim(),n=document.getElementById("supportMessage").value.trim(),o=document.getElementById("supportSubmitBtn"),t=document.getElementById("supportForm"),c=document.getElementById("supportProcessing");if(!(!s||!n)){t.style.display="none",c.style.display="block",o.disabled=!0;try{const a=await(await fetch(m.supportRequest||`${m.requestModification.replace("/request-modification","/support-request")}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:r.uid,userEmail:r.email,subject:s,message:n,userName:r.displayName||r.email,timestamp:new Date().toISOString()})})).json();if(c.style.display="none",a.success){const i=document.getElementById("supportModal").querySelector(".modal-box");i.innerHTML=`
                <button class="modal-close" onclick="closeSupportModal()">&times;</button>
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 4rem; color: #28a745; margin-bottom: 1rem;">✅</div>
                    <h2>Message Sent!</h2>
                    <p style="color: #6c757d; margin: 1rem 0;">
                        We've received your message and will get back to you shortly!
                    </p>
                    
                    <p style="color: #6c757d; margin-top: 1rem;">
                        You can also call us directly at <strong>(415) 691-7085</strong>
                    </p>
                    <button onclick="closeSupportModal()" class="btn btn-primary" style="margin-top: 1.5rem;">
                        Close
                    </button>
                </div>
            `}else t.style.display="block",o.disabled=!1,alert("Error sending message: "+(a.error||"Unknown error. Please try calling us at (415) 691-7085"))}catch(l){console.error("Error submitting support request:",l),c.style.display="none",t.style.display="block",o.disabled=!1,alert("Technical error sending message. Please call us directly at (415) 691-7085")}}};
