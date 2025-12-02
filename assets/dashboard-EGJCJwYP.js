import"./modulepreload-polyfill-B5Qt9EMX.js";import{o as I,a as w,E as m}from"./config-gIZJO8lV.js";/* empty css              */let l=null,f=null;I(w,async e=>{e?(l=e,await $(e.uid)):window.location.href="./login.html"});window.auth=w;function E(e,t=3){return!e||e.length===0?'<p class="no-modifications">No modifications yet</p>':e.slice(0,t).map((o,n)=>{const r=n+1,d=o.status==="completed"?"completed":o.status==="pending"?"pending":"failed",a=o.userEmail||o.userName||"User",u=o.timestamp?new Date(o.timestamp).toLocaleString():"Unknown date";return`
            <div class="log-entry">
                <div class="log-header">
                    <span class="log-number">#${r}</span>
                    <span class="log-status ${d}">${o.status||"completed"}</span>
                    <span class="log-date">${u}</span>
                </div>
                <p class="log-prompt"><strong>Request:</strong> ${o.request||"No description"}</p>
                <p class="log-user">👤 Requested by: ${a}</p>
            </div>
        `}).join("")}async function $(e){try{const s=await(await fetch(m.userProjects(e))).json(),o=document.getElementById("projectsContainer");s.success&&s.projects.length>0?o.innerHTML=s.projects.map(n=>{const r=n.modificationsUsed||0,d=n.modificationsLimit||3,a=d-r,u=a>0,i=n.modifications||[];return`
                <div class="project-card">
                    <h3>${n.businessName}</h3>
                    <div class="project-info">
                        <p><strong>Status:</strong> <span class="project-status status-${n.status}">${n.status}</span></p>
                        <p><strong>Package:</strong> ${n.packageType}</p>
                        <p><strong>Created:</strong> ${new Date(n.createdAt.seconds*1e3).toLocaleDateString()}</p>
                        <p><strong>Modifications:</strong> 
                            <span class="${a>0?"text-success":"text-warning"}">
                                ${r}/${d} used
                            </span>
                            ${a===0?'<span class="badge-limit">Limit Reached</span>':""}
                        </p>
                    </div>

                    ${i.length>0?`
                    <div class="modification-log">
                        <h4>📋 Modification Log</h4>
                        ${E(i,3)}
                        ${i.length>3?`
                            <button onclick='viewAllModifications(${JSON.stringify(i).replace(/'/g,"&#39;")})' class="view-all-btn">
                                View all ${i.length} modifications
                            </button>
                        `:""}
                    </div>
                    `:'<p class="no-modifications">No modifications yet</p>'}

                    <div class="project-btn-group">
                        <a href="${n.liveUrl}" target="_blank" class="btn btn-view">🌐 View Live Site</a>
                        
                        ${u?`
                            <button 
                                onclick='openAiModificationModal(${JSON.stringify(n).replace(/'/g,"&#39;")})' 
                                class="btn btn-modify">
                                🤖 Request Modification (${a} free left)
                            </button>
                        `:`
                            <button 
                                onclick='openPurchaseModal(${JSON.stringify(n).replace(/'/g,"&#39;")})' 
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
            `}catch(t){console.error("Error loading projects:",t),document.getElementById("projectsContainer").innerHTML=`
            <div class="empty-state">
                <h3>Error loading projects</h3>
                <p>Please try refreshing the page.</p>
            </div>
        `}}window.openAiModificationModal=function(e){f=e;const t=(e.modificationsLimit||3)-(e.modificationsUsed||0);document.getElementById("modificationsCount").textContent=t,document.getElementById("aiModificationModal").classList.add("show"),document.getElementById("aiModificationInput").value="",document.getElementById("aiChatMessages").innerHTML=`
        <div class="ai-message">
            <strong>AI Assistant:</strong> Hi! I can help you modify "${e.businessName}". You have ${t} free modification${t!==1?"s":""} remaining. What would you like to change?
        </div>
    `};window.closeAiModificationModal=function(){document.getElementById("aiModificationModal").classList.remove("show"),f=null};window.submitAiModification=async function(e){e.preventDefault();const t=document.getElementById("aiModificationInput"),s=t.value.trim(),o=document.getElementById("aiSubmitBtn"),n=document.getElementById("aiChatMessages"),r=document.getElementById("aiProcessingMessage"),d=document.getElementById("aiModificationForm");if(console.log("🔍 DEBUG: submitAiModification called"),console.log("🔍 currentUser:",l),console.log("🔍 currentProject:",f),console.log("🔍 request:",s),console.log("🔍 ENDPOINTS:",m),!s||!f)return;const a=document.createElement("div");a.className="user-message",a.innerHTML=`<strong>You:</strong> ${s}`,n.appendChild(a),n.scrollTop=n.scrollHeight,t.value="",o.disabled=!0,d.style.display="none",r.style.display="block";try{const i=await(await fetch(m.requestModification,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:l.uid,projectId:f.id,modificationRequest:s})})).json();if(r.style.display="none",d.style.display="block",o.disabled=!1,i.success){const p=document.createElement("div");p.className="ai-message",p.innerHTML=`<strong>AI Assistant:</strong> Great! I've processed your request and updated your website. The changes are being deployed now and should be live in 2-3 minutes. ${i.modificationsRemaining} free modification${i.modificationsRemaining!==1?"s":""} remaining.`,n.appendChild(p),n.scrollTop=n.scrollHeight,document.getElementById("modificationsCount").textContent=i.modificationsRemaining,setTimeout(()=>{$(l.uid),i.modificationsRemaining===0&&(closeAiModificationModal(),B("Modifications Limit Reached","You've used all 3 free modifications. Additional changes will require a small fee. Contact us at (415) 691-7085 to discuss pricing."))},2e3)}else{const p=document.createElement("div");p.className="ai-message",p.innerHTML=`<strong>AI Assistant:</strong> I'm sorry, there was an error processing your request: ${i.error||"Unknown error"}. Please try again or contact support at (415) 691-7085.`,n.appendChild(p),n.scrollTop=n.scrollHeight}}catch(u){console.error("Error submitting modification:",u),r.style.display="none",d.style.display="block",o.disabled=!1;const i=document.createElement("div");i.className="ai-message",i.innerHTML="<strong>AI Assistant:</strong> I encountered a technical error. Please try again or contact support at (415) 691-7085.",n.appendChild(i),n.scrollTop=n.scrollHeight}};function B(e,t){const s=document.getElementById("responseModal"),o=document.getElementById("responseContent");o.innerHTML=`
        <h2>${e}</h2>
        <p>${t}</p>
        <button onclick="closeResponseModal()" class="btn btn-primary">Close</button>
    `,s.classList.add("show")}window.closeResponseModal=function(){document.getElementById("responseModal").classList.remove("show")};window.viewAllModifications=function(e){const t=document.getElementById("responseModal"),s=document.getElementById("responseContent");s.innerHTML=`
        <h2>📋 Complete Modification Log</h2>
        <div class="modification-log">
            ${E(e,e.length)}
        </div>
        <button onclick="closeResponseModal()" class="btn btn-primary">Close</button>
    `,t.classList.add("show")};window.openPurchaseModal=function(e){const t=document.getElementById("responseModal"),s=document.getElementById("responseContent");s.innerHTML=`
        <h2>💳 Purchase Additional Modifications</h2>
        <p>You've used all your free modifications for <strong>${e.businessName}</strong>.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
            <div style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 1.5rem; text-align: center;">
                <h3 style="margin: 0 0 0.5rem 0; color: #333;">3 Modifications</h3>
                <p style="font-size: 2.5rem; font-weight: 700; color: #3b82f6; margin: 0.5rem 0;">$29</p>
                <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 1rem;">$9.67 per modification</p>
                <button onclick="purchaseModifications('${e.id}', '3-mods')" class="btn btn-primary" style="width: 100%;">
                    Buy 3 Mods
                </button>
            </div>
            
            <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 2px solid #3b82f6; border-radius: 12px; padding: 1.5rem; text-align: center; position: relative;">
                <span style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: #10b981; color: white; padding: 2px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">BEST VALUE</span>
                <h3 style="margin: 0 0 0.5rem 0; color: #333;">10 Modifications</h3>
                <p style="font-size: 2.5rem; font-weight: 700; color: #3b82f6; margin: 0.5rem 0;">$69</p>
                <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 1rem;">$6.90 per modification</p>
                <button onclick="purchaseModifications('${e.id}', '10-mods')" class="btn btn-primary" style="width: 100%; background: #10b981;">
                    Buy 10 Mods
                </button>
            </div>
        </div>
        
        <p style="color: #6b7280; font-size: 0.9rem; text-align: center;">
            Need something custom? Call us at <strong>(415) 691-7085</strong>
        </p>
        <button onclick="closeResponseModal()" class="btn btn-outline" style="width: 100%; margin-top: 1rem;">Maybe Later</button>
    `,t.classList.add("show")};window.purchaseModifications=async function(e,t){console.log(`💳 Purchase request: ${t} for project ${e}`),document.getElementById("responseModal");const s=document.getElementById("responseContent");s.innerHTML=`
        <div style="text-align: center; padding: 3rem;">
            <div class="spinner"></div>
            <p style="margin-top: 1rem;">Creating checkout session...</p>
        </div>
    `;try{const n=await(await fetch(m.createModificationCheckout||`${m.requestModification.replace("/request-modification","/create-modification-checkout")}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectId:e,userId:l.uid,package:t})})).json();if(n.success&&n.sessionUrl)window.location.href=n.sessionUrl;else throw new Error(n.error||"Failed to create checkout session")}catch(o){console.error("Error creating checkout:",o),s.innerHTML=`
            <h2>❌ Error</h2>
            <p>Failed to create checkout session: ${o.message}</p>
            <p>Please call us at <strong>(415) 691-7085</strong> to complete your purchase.</p>
            <button onclick="closeResponseModal()" class="btn btn-primary" style="margin-top: 1rem;">Close</button>
        `}};window.openSupportModal=function(){document.getElementById("supportModal").classList.add("show"),document.getElementById("supportSubject").value="",document.getElementById("supportMessage").value="",document.getElementById("supportForm").style.display="block",document.getElementById("supportProcessing").style.display="none"};window.closeSupportModal=function(){document.getElementById("supportModal").classList.remove("show")};window.submitSupportRequest=async function(e){e.preventDefault();const t=document.getElementById("supportSubject").value.trim(),s=document.getElementById("supportMessage").value.trim(),o=document.getElementById("supportSubmitBtn"),n=document.getElementById("supportForm"),r=document.getElementById("supportProcessing");if(!(!t||!s)){n.style.display="none",r.style.display="block",o.disabled=!0;try{const a=await(await fetch(m.supportRequest||`${m.requestModification.replace("/request-modification","/support-request")}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:l.uid,userEmail:l.email,subject:t,message:s,userName:l.displayName||l.email,timestamp:new Date().toISOString()})})).json();if(r.style.display="none",a.success){const i=document.getElementById("supportModal").querySelector(".modal-box");i.innerHTML=`
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
            `}else n.style.display="block",o.disabled=!1,alert("Error sending message: "+(a.error||"Unknown error. Please try calling us at (415) 691-7085"))}catch(d){console.error("Error submitting support request:",d),r.style.display="none",n.style.display="block",o.disabled=!1,alert("Technical error sending message. Please call us directly at (415) 691-7085")}}};var M;const h=((M=m)==null?void 0:M.apiUrl)||(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://localhost:8080":"https://api.holysmokas.com");let c=null,y=null;I(w,async e=>{e?(c=e.uid,window.currentUserId=e.uid,console.log("🔐 DriveUI: User authenticated:",e.uid),await v()):(c=null,g({connected:!1}))});async function v(){if(!c){console.log("⚠️ DriveUI: No user ID, skipping status check"),g({connected:!1});return}try{console.log("🔍 Checking Drive status for user:",c);const t=await(await fetch(`${h}/api/drive/status?userId=${c}`)).json();console.log("📡 Drive status response:",t),t.success?g(t):g({connected:!1})}catch(e){console.error("Error checking Drive status:",e),g({connected:!1,error:e.message})}}function g(e){var s,o,n;const t=document.getElementById("driveSection");if(!t){console.warn("⚠️ DriveUI: #driveSection element not found");return}e.connected?t.innerHTML=`
            <div class="drive-connected">
                <div class="drive-header">
                    <span class="drive-icon">✅</span>
                    <h4>Google Drive Connected</h4>
                </div>
                <div class="drive-info">
                    <p><strong>Account:</strong> ${e.email||"Connected"}</p>
                    <div class="storage-bar-container">
                        <div class="storage-bar">
                            <div class="storage-used" style="width: ${((s=e.storage)==null?void 0:s.percentUsed)||0}%"></div>
                        </div>
                        <p class="storage-text">
                            ${((o=e.storage)==null?void 0:o.usedGB)||"0"} GB / ${((n=e.storage)==null?void 0:n.totalGB)||"15"} GB used
                        </p>
                    </div>
                    ${e.folderLink?`
                        <a href="${e.folderLink}" target="_blank" class="btn btn-sm btn-outline" style="margin-top: 0.75rem; font-size: 0.85rem;">
                            📁 Open in Drive
                        </a>
                    `:""}
                </div>
                <button onclick="window.disconnectDrive()" class="btn-disconnect">
                    Disconnect
                </button>
            </div>
        `:t.innerHTML=`
            <div class="drive-not-connected">
                <div class="drive-promo">
                    <p style="margin-bottom: 1rem; color: #4b5563;">
                        Store product images in <strong>your own Google Drive</strong> — no monthly storage fees!
                    </p>
                    <ul class="drive-benefits">
                        <li>✅ 15GB free storage</li>
                        <li>✅ You own your files</li>
                        <li>✅ No extra fees</li>
                    </ul>
                </div>
                <button onclick="window.connectDrive()" class="btn btn-primary btn-connect-drive">
                    🔗 Connect Google Drive
                </button>
                <p class="drive-note">
                    We only access files created for your website.
                </p>
            </div>
        `}window.connectDrive=function(){if(!c){alert("Please log in first");return}const e=y||"none";console.log("🔗 Starting Drive OAuth flow..."),console.log("   User ID:",c),console.log("   Project ID:",e),window.location.href=`${h}/auth/google/drive/connect?userId=${c}&projectId=${e}`};window.disconnectDrive=async function(){if(confirm("Are you sure you want to disconnect Google Drive? Your uploaded images will still work.")){if(!c){alert("Please log in first");return}try{const t=await(await fetch(`${h}/api/drive/disconnect`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:c})})).json();t.success?(b("Google Drive disconnected successfully","success"),await v()):alert("Error: "+t.error)}catch(e){console.error("Error disconnecting Drive:",e),alert("Failed to disconnect Google Drive")}}};window.uploadProductImage=async function(e,t,s){if(!c)throw new Error("Please log in first");if(!y)throw new Error("No project selected");const o=new FormData;o.append("image",e),o.append("userId",c),o.append("projectId",y),o.append("productId",t),o.append("productName",s);const r=await(await fetch(`${h}/api/upload-product-image`,{method:"POST",body:o})).json();if(!r.success)throw r.needsConnection?(confirm("You need to connect Google Drive to upload images. Connect now?")&&window.connectDrive(),new Error("Drive not connected")):new Error(r.error);return r};window.setCurrentProject=function(e){y=e,window.currentProjectId=e};function C(){const e=new URLSearchParams(window.location.search);if(e.get("drive_connected")==="true"&&(b("✅ Google Drive connected successfully!","success"),window.history.replaceState({},"",window.location.pathname)),e.get("drive_error")){const t=e.get("drive_error");b("❌ Drive connection failed: "+decodeURIComponent(t),"error"),window.history.replaceState({},"",window.location.pathname)}}function b(e,t="info"){const s=document.querySelector(".drive-notification");s&&s.remove();const o=document.createElement("div");o.className=`drive-notification notification-${t}`,o.textContent=e,o.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        background: ${t==="success"?"#10b981":t==="error"?"#ef4444":"#3b82f6"};
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `,document.body.appendChild(o),setTimeout(()=>{o.style.animation="slideOut 0.3s ease-in",setTimeout(()=>o.remove(),300)},4e3)}const k=document.createElement("style");k.textContent=`
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .drive-connected, .drive-not-connected {
        background: white;
        border-radius: 12px;
        padding: 1.25rem;
        border: 1px solid #e5e7eb;
    }
    
    .drive-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .drive-icon {
        font-size: 1.25rem;
    }
    
    .drive-header h4 {
        margin: 0;
        color: #1f2937;
        font-size: 1rem;
    }
    
    .drive-info p {
        margin: 0.5rem 0;
        font-size: 0.9rem;
        color: #4b5563;
    }
    
    .drive-benefits {
        list-style: none;
        padding: 0;
        margin: 0.75rem 0;
    }
    
    .drive-benefits li {
        padding: 0.35rem 0;
        color: #4b5563;
        font-size: 0.9rem;
    }
    
    .storage-bar-container {
        margin: 0.75rem 0;
    }
    
    .storage-bar {
        background: #e5e7eb;
        border-radius: 9999px;
        height: 8px;
        overflow: hidden;
    }
    
    .storage-used {
        background: linear-gradient(90deg, #10b981, #059669);
        height: 100%;
        border-radius: 9999px;
        transition: width 0.3s ease;
    }
    
    .storage-text {
        font-size: 0.8rem !important;
        color: #6b7280 !important;
        margin-top: 0.35rem !important;
    }
    
    .btn-connect-drive {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        margin-top: 0.5rem;
    }
    
    .btn-disconnect {
        background: #fee2e2;
        color: #dc2626;
        border: none;
        padding: 0.4rem 0.75rem;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 0.75rem;
        font-size: 0.8rem;
        width: 100%;
    }
    
    .btn-disconnect:hover {
        background: #fecaca;
    }
    
    .drive-note {
        font-size: 0.75rem !important;
        color: #9ca3af !important;
        margin-top: 0.75rem !important;
        text-align: center;
    }
    
    .btn-sm {
        padding: 0.4rem 0.75rem !important;
        font-size: 0.85rem !important;
    }
`;document.head.appendChild(k);document.addEventListener("DOMContentLoaded",()=>{console.log("🚀 DriveUI: Initialized"),C()});window.checkDriveStatus=v;
