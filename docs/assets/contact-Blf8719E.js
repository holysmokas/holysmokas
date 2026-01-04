var z=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{E as S}from"./config-c1XWWVWh.js";var B=z((U,h)=>{const l={sanitizeText:n=>!n||typeof n!="string"?"":n.replace(/[<>]/g,"").replace(/javascript:/gi,"").replace(/on\w+=/gi,"").replace(/data:/gi,"").trim().slice(0,1e3),sanitizeName:n=>!n||typeof n!="string"?"":n.replace(/[<>\"\'`;\\]/g,"").replace(/javascript:/gi,"").replace(/on\w+=/gi,"").trim().slice(0,200),sanitizeEmail:n=>!n||typeof n!="string"?"":n.toLowerCase().replace(/[<>\"\'`;\\]/g,"").trim().slice(0,254),sanitizePhone:n=>!n||typeof n!="string"?"":n.replace(/[^0-9\s\-\(\)\+]/g,"").trim().slice(0,30),sanitizeUrl:n=>{if(!n||typeof n!="string")return"";const e=n.trim();return e.match(/^(javascript|data|vbscript):/i)?"":e.slice(0,2e3)},sanitizeDomain:n=>{if(!n||typeof n!="string")return"";let e=n.toLowerCase().trim();return e=e.replace(/^https?:\/\//,""),e=e.replace(/^www\./,""),e=e.split("/")[0],e=e.replace(/[^a-z0-9\.\-]/g,""),e.slice(0,253)},sanitizeLongText:n=>!n||typeof n!="string"?"":n.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,"").replace(/javascript:/gi,"").replace(/on\w+=/gi,"").replace(/data:text\/html/gi,"").trim().slice(0,1e4),detectAttack:n=>!n||typeof n!="string"?!1:[/<script/i,/javascript:/i,/on\w+\s*=/i,/union\s+select/i,/;\s*drop\s+table/i,/;\s*delete\s+from/i,/'\s*or\s+'1'\s*=\s*'1/i,/--\s*$/,/\/\*.*\*\//,/\$\{.*\}/,/\{\{.*\}\}/,/<iframe/i,/<embed/i,/<object/i,/expression\s*\(/i].some(t=>t.test(n)),escapeHtml:n=>{if(!n||typeof n!="string")return"";const e=document.createElement("div");return e.textContent=n,e.innerHTML}},d={submissions:{},maxSubmissions:3,windowTime:60*1e3,cooldownTime:300*1e3,canSubmit:(n="contact_form")=>{const e=Date.now(),t=d.submissions[n];return t?t.cooldownUntil&&e<t.cooldownUntil?!1:e-t.windowStart>d.windowTime?(delete d.submissions[n],!0):t.count<d.maxSubmissions:!0},recordSubmission:(n="contact_form")=>{const e=Date.now();d.submissions[n]||(d.submissions[n]={count:0,windowStart:e});const t=d.submissions[n];e-t.windowStart>d.windowTime&&(t.count=0,t.windowStart=e),t.count++,t.count>=d.maxSubmissions&&(t.cooldownUntil=e+d.cooldownTime)},getRemainingCooldown:(n="contact_form")=>{const e=d.submissions[n];if(!e?.cooldownUntil)return 0;const t=e.cooldownUntil-Date.now();return t>0?Math.ceil(t/1e3):0}},p={checks:{},maxChecks:10,windowTime:60*1e3,canCheck:()=>{const n=Date.now(),e=p.checks.domain;return e?n-e.windowStart>p.windowTime?(delete p.checks.domain,!0):e.count<p.maxChecks:!0},recordCheck:()=>{const n=Date.now();p.checks.domain||(p.checks.domain={count:0,windowStart:n});const e=p.checks.domain;n-e.windowStart>p.windowTime&&(e.count=0,e.windowStart=n),e.count++}};function c(n,e,t=!0){const a=document.getElementById("formModal"),o=document.getElementById("modalTitle"),i=document.getElementById("modalMessage"),r=document.getElementById("modalIcon");o.textContent=n,i.textContent=e,r.textContent=t?"✓":"✕",r.style.background=t?"var(--secondary)":"#ef4444",a.classList.add("show")}window.closeModal=function(){document.getElementById("formModal").classList.remove("show")};window.checkDomain=async function(){const n=document.getElementById("domainInput"),e=document.getElementById("domainResult");if(!p.canCheck()){e.innerHTML=`
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⏳</span>
                    <strong style="color: #991b1b;">Too many requests</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please wait a moment before checking another domain.
                </p>
            </div>
        `;return}const t=n.value.trim(),a=l.sanitizeDomain(t);if(!a){e.innerHTML="⚠️ Please enter a valid domain name.",e.style.color="#f59e0b";return}if(l.detectAttack(t)){e.innerHTML="⚠️ Invalid characters detected. Please enter a valid domain.",e.style.color="#ef4444";return}p.recordCheck(),e.innerHTML="🔍 Checking availability...",e.style.color="#6b7280";try{const i=await(await fetch(S.checkDomain,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:a})})).json();if(i.available===!0){const r=l.sanitizeDomain(i.cleanedDomain||a),m=i.pricing?.initialCost||i.price||12.99,u=i.pricing?.renewalCost||i.renewalPrice||12.99,g=l.escapeHtml(r);e.innerHTML=`
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${g} is available!</strong>
                    </div>
                    
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: #6b7280;">Initial Registration:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${m.toFixed(2)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Annual Renewal:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${u.toFixed(2)}/year</strong>
                        </div>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        onclick="addDomainToForm('${r}', ${m}, ${u})" 
                        style="width: 100%; margin-top: 0.5rem;">
                        Add to Form
                    </button>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                        💡 Domain will be registered after you complete your website order
                    </p>
                </div>
            `,e.style.color="#10b981",window.selectedDomain=r,window.domainPricing={initialCost:m,renewalCost:u}}else{const r=l.escapeHtml(i.domain||a);e.innerHTML=`
                <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">❌</span>
                        <strong style="color: #991b1b;">${r} is already taken</strong>
                    </div>
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                        Try a different domain name or extension (.net, .org, .co)
                    </p>
                </div>
            `,e.style.color="#ef4444",window.selectedDomain=null,window.domainPricing=null}}catch(o){console.error("Domain check error:",o),e.innerHTML=`
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⚠️</span>
                    <strong style="color: #991b1b;">Error checking domain</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please try again or contact support
                </p>
            </div>
        `,e.style.color="#ef4444"}};window.addDomainToForm=function(n,e=0,t=0){const a=l.sanitizeDomain(n),o=document.getElementById("currentUrl");o&&(o.value=`https://${a}`,o.style.border="2px solid #10b981",setTimeout(()=>{o.style.border=""},2e3)),window.selectedDomain=a,window.domainPricing={initialCost:e,renewalCost:t};const i=document.getElementById("selectedDomainValue");i&&(i.value=a);const r=l.escapeHtml(a),m=document.getElementById("domainResult");m.innerHTML=`
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${r} added to form</strong>
            </div>
            
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: #6b7280;">Initial Registration:</span>
                    <strong style="color: #059669; font-size: 1.1rem;">$${e.toFixed(2)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">Annual Renewal:</span>
                    <strong style="color: #059669; font-size: 1.1rem;">$${t.toFixed(2)}/year</strong>
                </div>
            </div>
            
            <button 
                type="button" 
                class="btn btn-secondary" 
                onclick="removeDomainFromForm()" 
                style="width: 100%; margin-top: 0.5rem;">
                Remove Domain
            </button>
            
            <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                💡 Domain cost will be added to your total at checkout
            </p>
        </div>
    `,b()};function x(n){if(!n||n.includes("Select a package"))return null;const e={"Starter - $599 (New Website)":.99,"Business - $1,199 (New Website)":.99,"Small Shop - $0.99 (New Website)":.99};for(const[t,a]of Object.entries(e))if(n.includes(t)||n.includes(a))return a;return 0}function C(n){if(!n)return"business";const e=n.toLowerCase();return e.includes("small shop")||e.includes("smallshop")?"smallshop":e.includes("starter")?"starter":e.includes("business")?"business":e.includes("enterprise")||e.includes("e-commerce")?"enterprise":"business"}window.removeDomainFromForm=function(){const n=document.getElementById("currentUrl");n&&(n.value=""),window.selectedDomain=null,window.domainPricing=null;const e=document.getElementById("domainInput");e&&(e.value="");const t=document.getElementById("domainResult");t&&(t.innerHTML="");const a=document.getElementById("selectedDomainValue");a&&(a.value=""),b()};window.handleContactSubmit=async function(n){n.preventDefault();const e=n.target;if(!d.canSubmit()){const s=d.getRemainingCooldown();c("Please Wait",`Too many submission attempts. Please try again in ${s} seconds.`,!1);return}const t={name:e.querySelector("#name")?.value||"",email:e.querySelector("#email")?.value||"",businessName:e.querySelector("#businessName")?.value||"",phone:e.querySelector("#phone")?.value||"",packageSelected:e.querySelector("#package")?.value||"",timeline:e.querySelector("#timeline")?.value||"",currentUrl:e.querySelector("#currentUrl")?.value||"",referenceWebsite:e.querySelector("#referenceWebsite")?.value||"",mainGoal:e.querySelector("#mainGoal")?.value||"",mustHaveFeatures:e.querySelector("#mustHaveFeatures")?.value||""},a=Object.values(t).join(" ");if(l.detectAttack(a)){c("Invalid Input","Your submission contains invalid characters. Please remove any special characters and try again.",!1),console.warn("🚨 Attack pattern detected in form submission");return}const o={name:l.sanitizeName(t.name),email:l.sanitizeEmail(t.email),businessName:l.sanitizeName(t.businessName),phone:l.sanitizePhone(t.phone),packageSelected:l.sanitizeText(t.packageSelected),timeline:l.sanitizeText(t.timeline),currentUrl:l.sanitizeUrl(t.currentUrl),referenceWebsite:l.sanitizeUrl(t.referenceWebsite),mainGoal:l.sanitizeLongText(t.mainGoal),mustHaveFeatures:l.sanitizeLongText(t.mustHaveFeatures)};if(!o.name||o.name.length<2){c("Invalid Name","Please enter a valid name (at least 2 characters).",!1);return}if(!o.email||!o.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){c("Invalid Email","Please enter a valid email address.",!1);return}if(!o.businessName||o.businessName.length<2){c("Invalid Business Name","Please enter a valid business name.",!1);return}const r=e.querySelector("#logoUpload")?.files[0]||null,m=document.getElementById("domainSelectionType")?.value||"new",u=document.getElementById("isOwnDomain")?.value==="true",g=document.getElementById("selectedDomainValue")?.value||"";let f="N/A",v=null;m==="new"&&window.selectedDomain?(f=l.sanitizeDomain(window.selectedDomain),v=window.domainPricing):m==="own"&&(window.ownDomain||g)&&(f=l.sanitizeDomain(window.ownDomain||g),v={initialCost:0,renewalCost:0});const D=x(o.packageSelected);if(D===null||o.packageSelected.includes("Select a package")){c("Please Select a Package","Please choose a website package before submitting your request.",!1);return}const P=v?v.initialCost:0,I=D+P;if(r){if(r.size>5*1024*1024){c("Logo Too Large","Please upload a logo smaller than 5MB.",!1);return}if(!["image/jpeg","image/png","image/gif","image/webp","image/svg+xml"].includes(r.type)){c("Invalid File Type","Please upload an image file (JPEG, PNG, GIF, WebP, or SVG).",!1);return}const k=r.name.split(".").pop().toLowerCase();if(!["jpg","jpeg","png","gif","webp","svg"].includes(k)){c("Invalid File","Invalid file extension. Please upload a valid image.",!1);return}}const y=document.getElementById("submitBtn");if(!y){console.error("Submit button not found!"),c("Error","Form submission error. Please refresh the page and try again.",!1);return}d.recordSubmission();const E=y.textContent;y.textContent=r?"Uploading Logo...":"Creating Payment Session...",y.disabled=!0;try{const s=new FormData;s.append("name",o.name),s.append("email",o.email),s.append("businessName",o.businessName),s.append("phone",o.phone),s.append("package",o.packageSelected),s.append("packagePrice",D),s.append("timeline",o.timeline),s.append("currentUrl",o.currentUrl),s.append("referenceWebsite",o.referenceWebsite),s.append("mainGoal",o.mainGoal),s.append("mustHaveFeatures",o.mustHaveFeatures),s.append("selectedDomain",f),s.append("domainPricing",JSON.stringify(v)),s.append("totalCost",I),s.append("domainOption",m),s.append("isOwnDomain",u.toString()),s.append("timestamp",new Date().toISOString()),s.append("status","pending_payment");const k=C(o.packageSelected);s.append("category",k),console.log("📦 Secure Form Submission:",{name:o.name,email:o.email,domainOption:m,domain:f}),r&&s.append("logo",r);const w=await(await fetch(S.createPaymentSession,{method:"POST",body:s})).json();if(w.success)w.requiresPayment===!1?(c("📧 Check Your Email!",w.message||"Thank you! We've sent you a package recommendation. Check your email and click the link to continue.",!0),setTimeout(()=>{e.reset(),L()},4e3)):w.sessionUrl&&(c("🎉 Request Submitted Successfully!","Redirecting you to secure payment...",!0),setTimeout(()=>{window.location.href=w.sessionUrl},2e3));else throw new Error(w.error||"Failed to create payment session")}catch(s){console.error("Error creating payment session:",s),c("Error","There was an error processing your request. Please try again or contact us at (415) 691-7085.",!1),y.textContent=E,y.disabled=!1}};function L(){window.selectedDomain=null,window.ownDomain=null,window.domainPricing=null,window.domainOption=null,window.isOwnDomain=!1;const n=document.getElementById("domainSelectionType"),e=document.getElementById("isOwnDomain"),t=document.getElementById("selectedDomainValue");n&&(n.value=""),e&&(e.value="false"),t&&(t.value="");const a=document.getElementById("newDomainSection"),o=document.getElementById("ownDomainSection");a&&(a.style.display="none"),o&&(o.style.display="none"),document.querySelectorAll('input[name="domainOption"]').forEach(i=>{i.checked=!1}),document.querySelectorAll(".domain-option-card").forEach(i=>{i.classList.remove("selected")}),typeof b=="function"&&b()}function b(){const n=document.getElementById("package"),e=document.getElementById("pricingBreakdown");if(!e)return;const t=n?.value||"",a=x(t),o=window.domainOption||document.getElementById("domainSelectionType")?.value||"";let i=0,r="";if(o==="new"&&window.domainPricing?(i=window.domainPricing.initialCost||0,r=l.escapeHtml(window.selectedDomain||"New Domain")):o==="own"&&(i=0,r=window.ownDomain?`${l.escapeHtml(window.ownDomain)} (Your Domain)`:"Your Domain"),a===null){e.innerHTML="",e.style.display="none";return}const m=a+i;let u=`
        <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); border: 2px solid #667eea; border-radius: 12px; padding: 1.25rem; margin-top: 1.5rem;">
            <h4 style="color: #667eea; margin: 0 0 1rem 0; font-size: 1.1rem;">💰 Order Summary</h4>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: #4b5563;">Website Package:</span>
                <strong style="color: #1a1a1a;">$${a.toFixed(2)}</strong>
            </div>
    `;o&&o!==""&&(u+=`
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: #4b5563;">Domain: ${r}</span>
                <strong style="color: ${i>0?"#1a1a1a":"#10b981"};">
                    ${i>0?"$"+i.toFixed(2):"FREE"}
                </strong>
            </div>
        `),u+=`
            <hr style="border: none; border-top: 1px solid #d1d5db; margin: 0.75rem 0;">
            
            <div style="display: flex; justify-content: space-between;">
                <span style="color: #1a1a1a; font-weight: 600;">Total Due Today:</span>
                <strong style="color: #667eea; font-size: 1.25rem;">$${m.toFixed(2)}</strong>
            </div>
    `,o==="new"&&window.domainPricing?.renewalCost>0&&(u+=`
            <p style="color: #6b7280; font-size: 0.8rem; margin: 0.75rem 0 0 0;">
                * Domain renews at $${window.domainPricing.renewalCost.toFixed(2)}/year
            </p>
        `),u+="</div>",e.innerHTML=u,e.style.display="block"}window.domainOption=null;window.selectedDomain=null;window.ownDomain=null;window.domainPricing=null;window.isOwnDomain=!1;document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("logoUpload"),e=document.getElementById("logoPreview"),t=document.getElementById("logoPreviewImage"),a=document.getElementById("removeLogo");n&&n.addEventListener("change",o=>{const i=o.target.files[0];if(i){if(!["image/jpeg","image/png","image/gif","image/webp","image/svg+xml"].includes(i.type)){c("Invalid File Type","Please upload an image file (JPEG, PNG, GIF, WebP, or SVG).",!1),n.value="";return}if(i.size>5*1024*1024){c("File Too Large","Logo file must be less than 5MB. Please choose a smaller file.",!1),n.value="";return}const m=i.name.split(".").pop().toLowerCase();if(!["jpg","jpeg","png","gif","webp","svg"].includes(m)){c("Invalid File","Invalid file extension. Please upload a valid image.",!1),n.value="";return}const g=new FileReader;g.onload=f=>{t.src=f.target.result,e.style.display="block"},g.readAsDataURL(i)}else e.style.display="none"}),a&&a.addEventListener("click",()=>{n.value="",e.style.display="none",t.src=""})});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("package");n&&n.addEventListener("change",b),b()});typeof h<"u"&&h.exports&&(h.exports={SecurityUtils:l,FormRateLimiter:d,DomainCheckLimiter:p})});export default B();
