var F=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{E as S}from"./config-c1XWWVWh.js";var C=F((U,x)=>{const l={sanitizeText:n=>!n||typeof n!="string"?"":n.replace(/[<>]/g,"").replace(/javascript:/gi,"").replace(/on\w+=/gi,"").replace(/data:/gi,"").trim().slice(0,1e3),sanitizeName:n=>!n||typeof n!="string"?"":n.replace(/[<>\"\'`;\\]/g,"").replace(/javascript:/gi,"").replace(/on\w+=/gi,"").trim().slice(0,200),sanitizeEmail:n=>!n||typeof n!="string"?"":n.toLowerCase().replace(/[<>\"\'`;\\]/g,"").trim().slice(0,254),sanitizePhone:n=>!n||typeof n!="string"?"":n.replace(/[^0-9\s\-\(\)\+]/g,"").trim().slice(0,30),sanitizeUrl:n=>{if(!n||typeof n!="string")return"";const e=n.trim();return e.match(/^(javascript|data|vbscript):/i)?"":e.slice(0,2e3)},sanitizeDomain:n=>{if(!n||typeof n!="string")return"";let e=n.toLowerCase().trim();return e=e.replace(/^https?:\/\//,""),e=e.replace(/^www\./,""),e=e.split("/")[0],e=e.replace(/[^a-z0-9\.\-]/g,""),e.slice(0,253)},sanitizeLongText:n=>!n||typeof n!="string"?"":n.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,"").replace(/javascript:/gi,"").replace(/on\w+=/gi,"").replace(/data:text\/html/gi,"").trim().slice(0,1e4),detectAttack:n=>!n||typeof n!="string"?!1:[/<script/i,/javascript:/i,/on\w+\s*=/i,/union\s+select/i,/;\s*drop\s+table/i,/;\s*delete\s+from/i,/'\s*or\s+'1'\s*=\s*'1/i,/--\s*$/,/\/\*.*\*\//,/\$\{.*\}/,/\{\{.*\}\}/,/<iframe/i,/<embed/i,/<object/i,/expression\s*\(/i].some(t=>t.test(n)),escapeHtml:n=>{if(!n||typeof n!="string")return"";const e=document.createElement("div");return e.textContent=n,e.innerHTML}},u={submissions:{},maxSubmissions:3,windowTime:60*1e3,cooldownTime:300*1e3,canSubmit:(n="contact_form")=>{const e=Date.now(),t=u.submissions[n];return t?t.cooldownUntil&&e<t.cooldownUntil?!1:e-t.windowStart>u.windowTime?(delete u.submissions[n],!0):t.count<u.maxSubmissions:!0},recordSubmission:(n="contact_form")=>{const e=Date.now();u.submissions[n]||(u.submissions[n]={count:0,windowStart:e});const t=u.submissions[n];e-t.windowStart>u.windowTime&&(t.count=0,t.windowStart=e),t.count++,t.count>=u.maxSubmissions&&(t.cooldownUntil=e+u.cooldownTime)},getRemainingCooldown:(n="contact_form")=>{const e=u.submissions[n];if(!e?.cooldownUntil)return 0;const t=e.cooldownUntil-Date.now();return t>0?Math.ceil(t/1e3):0}},g={checks:{},maxChecks:10,windowTime:60*1e3,canCheck:()=>{const n=Date.now(),e=g.checks.domain;return e?n-e.windowStart>g.windowTime?(delete g.checks.domain,!0):e.count<g.maxChecks:!0},recordCheck:()=>{const n=Date.now();g.checks.domain||(g.checks.domain={count:0,windowStart:n});const e=g.checks.domain;n-e.windowStart>g.windowTime&&(e.count=0,e.windowStart=n),e.count++}};function d(n,e,t=!0){const a=document.getElementById("formModal"),o=document.getElementById("modalTitle"),i=document.getElementById("modalMessage"),s=document.getElementById("modalIcon");o.textContent=n,i.textContent=e,s.textContent=t?"✓":"✕",s.style.background=t?"var(--secondary)":"#ef4444",a.classList.add("show")}window.closeModal=function(){document.getElementById("formModal").classList.remove("show")};function z(n){return l.sanitizeDomain(n)}window.checkDomain=async function(){const n=document.getElementById("domainInput"),e=document.getElementById("domainResult");if(!g.canCheck()){e.innerHTML=`
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⏳</span>
                    <strong style="color: #991b1b;">Too many requests</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please wait a moment before checking another domain.
                </p>
            </div>
        `;return}const t=n.value.trim(),a=l.sanitizeDomain(t);if(!a){e.innerHTML="⚠️ Please enter a valid domain name.",e.style.color="#f59e0b";return}if(l.detectAttack(t)){e.innerHTML="⚠️ Invalid characters detected. Please enter a valid domain.",e.style.color="#ef4444";return}g.recordCheck(),e.innerHTML="🔍 Checking availability...",e.style.color="#6b7280";try{const i=await(await fetch(S.checkDomain,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:a})})).json();if(i.available===!0){const s=i.cleanedDomain||z(a),c=i.pricing?.registrationFee||12.99,m=i.pricing?.setupFee||0,p=i.pricing?.initialCost||c+m,f=i.pricing?.renewalFee||14.99,y=i.pricing?.renewalSetupFee||0,w=i.pricing?.renewalCost||f+y;e.innerHTML=`
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46; font-size: 1.1rem;">${s} is available!</strong>
            </div>
            
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span style="color: #6b7280; font-size: 0.9rem;">Domain Registration:</span>
                    <span style="color: #374151;">$${c.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 0.9rem;">Setup & Management:</span>
                    <span style="color: #374151;">$${m.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: #065f46; font-weight: 600;">Total (First Year):</span>
                    <strong style="color: #059669; font-size: 1.1rem;">$${p.toFixed(2)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280; font-size: 0.85rem;">Annual Renewal:</span>
                    <span style="color: #6b7280; font-size: 0.85rem;">$${w.toFixed(2)}/year</span>
                </div>
            </div>
            
            <button 
                type="button" 
                class="btn btn-primary" 
                onclick="addDomainToForm('${s}', ${p}, ${w}, ${c}, ${m})" 
                style="width: 100%; margin-top: 0.5rem;">
                Add to Form
            </button>
            
            <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                💡 Domain will be registered after you complete your website order
            </p>
        </div>
    `,e.style.color="#10b981",window.selectedDomain=s,window.domainPricing={initialCost:p,renewalCost:w,registrationFee:c,setupFee:m}}else{const s=l.escapeHtml(i.domain||a);e.innerHTML=`
                <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">❌</span>
                        <strong style="color: #991b1b;">${s} is already taken</strong>
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
        `,e.style.color="#ef4444"}};window.addDomainToForm=function(n,e=0,t=0,a=0,o=0){const i=l.sanitizeDomain(n),s=document.getElementById("currentUrl");s&&(s.value=`https://${i}`,s.style.border="2px solid #10b981",setTimeout(()=>{s.style.border=""},2e3)),window.selectedDomain=i,window.domainPricing={initialCost:e,renewalCost:t};const c=document.getElementById("selectedDomainValue");c&&(c.value=i);const m=l.escapeHtml(i),p=document.getElementById("domainResult");p.innerHTML=`
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${m} added to form</strong>
            </div>
            
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span style="color: #6b7280; font-size: 0.9rem;">Domain Registration:</span>
                    <span style="color: #374151;">$${(a||e).toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 0.9rem;">Setup & Management:</span>
                    <span style="color: #374151;">$${(o||0).toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: #065f46; font-weight: 600;">Total (First Year):</span>
                    <strong style="color: #059669; font-size: 1.1rem;">$${e.toFixed(2)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280; font-size: 0.85rem;">Annual Renewal:</span>
                    <span style="color: #6b7280; font-size: 0.85rem;">$${t.toFixed(2)}/year</span>
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
    `,h()};function k(n){if(!n||n.includes("Select a package"))return null;const e={"Starter - $599 (New Website)":.99,"Business - $1,199 (New Website)":.99,"Small Shop - $0.99 (New Website)":.99};for(const[t,a]of Object.entries(e))if(n.includes(t)||n.includes(a))return a;return 0}function $(n){if(!n)return"business";const e=n.toLowerCase();return e.includes("small shop")||e.includes("smallshop")?"smallshop":e.includes("starter")?"starter":e.includes("business")?"business":e.includes("enterprise")||e.includes("e-commerce")?"enterprise":"business"}window.removeDomainFromForm=function(){const n=document.getElementById("currentUrl");n&&(n.value=""),window.selectedDomain=null,window.domainPricing=null;const e=document.getElementById("domainInput");e&&(e.value="");const t=document.getElementById("domainResult");t&&(t.innerHTML="");const a=document.getElementById("selectedDomainValue");a&&(a.value=""),h()};window.handleContactSubmit=async function(n){n.preventDefault();const e=n.target;if(!u.canSubmit()){const r=u.getRemainingCooldown();d("Please Wait",`Too many submission attempts. Please try again in ${r} seconds.`,!1);return}const t={name:e.querySelector("#name")?.value||"",email:e.querySelector("#email")?.value||"",businessName:e.querySelector("#businessName")?.value||"",phone:e.querySelector("#phone")?.value||"",packageSelected:e.querySelector("#package")?.value||"",timeline:e.querySelector("#timeline")?.value||"",currentUrl:e.querySelector("#currentUrl")?.value||"",referenceWebsite:e.querySelector("#referenceWebsite")?.value||"",mainGoal:e.querySelector("#mainGoal")?.value||"",mustHaveFeatures:e.querySelector("#mustHaveFeatures")?.value||""},a=Object.values(t).join(" ");if(l.detectAttack(a)){d("Invalid Input","Your submission contains invalid characters. Please remove any special characters and try again.",!1),console.warn("🚨 Attack pattern detected in form submission");return}const o={name:l.sanitizeName(t.name),email:l.sanitizeEmail(t.email),businessName:l.sanitizeName(t.businessName),phone:l.sanitizePhone(t.phone),packageSelected:l.sanitizeText(t.packageSelected),timeline:l.sanitizeText(t.timeline),currentUrl:l.sanitizeUrl(t.currentUrl),referenceWebsite:l.sanitizeUrl(t.referenceWebsite),mainGoal:l.sanitizeLongText(t.mainGoal),mustHaveFeatures:l.sanitizeLongText(t.mustHaveFeatures)};if(!o.name||o.name.length<2){d("Invalid Name","Please enter a valid name (at least 2 characters).",!1);return}if(!o.email||!o.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){d("Invalid Email","Please enter a valid email address.",!1);return}if(!o.businessName||o.businessName.length<2){d("Invalid Business Name","Please enter a valid business name.",!1);return}const s=e.querySelector("#logoUpload")?.files[0]||null,c=document.getElementById("domainSelectionType")?.value||"new",m=document.getElementById("isOwnDomain")?.value==="true",p=document.getElementById("selectedDomainValue")?.value||"";let f="N/A",y=null;c==="new"&&window.selectedDomain?(f=l.sanitizeDomain(window.selectedDomain),y=window.domainPricing):c==="own"&&(window.ownDomain||p)&&(f=l.sanitizeDomain(window.ownDomain||p),y={initialCost:0,renewalCost:0});const w=k(o.packageSelected);if(w===null||o.packageSelected.includes("Select a package")){d("Please Select a Package","Please choose a website package before submitting your request.",!1);return}const P=y?y.initialCost:0,I=w+P;if(s){if(s.size>5*1024*1024){d("Logo Too Large","Please upload a logo smaller than 5MB.",!1);return}if(!["image/jpeg","image/png","image/gif","image/webp","image/svg+xml"].includes(s.type)){d("Invalid File Type","Please upload an image file (JPEG, PNG, GIF, WebP, or SVG).",!1);return}const D=s.name.split(".").pop().toLowerCase();if(!["jpg","jpeg","png","gif","webp","svg"].includes(D)){d("Invalid File","Invalid file extension. Please upload a valid image.",!1);return}}const b=document.getElementById("submitBtn");if(!b){console.error("Submit button not found!"),d("Error","Form submission error. Please refresh the page and try again.",!1);return}u.recordSubmission();const T=b.textContent;b.textContent=s?"Uploading Logo...":"Creating Payment Session...",b.disabled=!0;try{const r=new FormData;r.append("name",o.name),r.append("email",o.email),r.append("businessName",o.businessName),r.append("phone",o.phone),r.append("package",o.packageSelected),r.append("packagePrice",w),r.append("timeline",o.timeline),r.append("currentUrl",o.currentUrl),r.append("referenceWebsite",o.referenceWebsite),r.append("mainGoal",o.mainGoal),r.append("mustHaveFeatures",o.mustHaveFeatures),r.append("selectedDomain",f),r.append("domainPricing",JSON.stringify(y)),r.append("totalCost",I),r.append("domainOption",c),r.append("isOwnDomain",m.toString()),r.append("timestamp",new Date().toISOString()),r.append("status","pending_payment");const D=$(o.packageSelected);r.append("category",D),console.log("📦 Secure Form Submission:",{name:o.name,email:o.email,domainOption:c,domain:f}),s&&r.append("logo",s);const v=await(await fetch(S.createPaymentSession,{method:"POST",body:r})).json();if(v.success)v.requiresPayment===!1?(d("📧 Check Your Email!",v.message||"Thank you! We've sent you a package recommendation. Check your email and click the link to continue.",!0),setTimeout(()=>{e.reset(),L()},4e3)):v.sessionUrl&&(d("🎉 Request Submitted Successfully!","Redirecting you to secure payment...",!0),setTimeout(()=>{window.location.href=v.sessionUrl},2e3));else throw new Error(v.error||"Failed to create payment session")}catch(r){console.error("Error creating payment session:",r),d("Error","There was an error processing your request. Please try again or contact us at (415) 691-7085.",!1),b.textContent=T,b.disabled=!1}};function L(){window.selectedDomain=null,window.ownDomain=null,window.domainPricing=null,window.domainOption=null,window.isOwnDomain=!1;const n=document.getElementById("domainSelectionType"),e=document.getElementById("isOwnDomain"),t=document.getElementById("selectedDomainValue");n&&(n.value=""),e&&(e.value="false"),t&&(t.value="");const a=document.getElementById("newDomainSection"),o=document.getElementById("ownDomainSection");a&&(a.style.display="none"),o&&(o.style.display="none"),document.querySelectorAll('input[name="domainOption"]').forEach(i=>{i.checked=!1}),document.querySelectorAll(".domain-option-card").forEach(i=>{i.classList.remove("selected")}),typeof h=="function"&&h()}function h(){const n=document.getElementById("package"),e=document.getElementById("pricingBreakdown");if(!e)return;const t=n?.value||"",a=k(t),o=window.domainOption||document.getElementById("domainSelectionType")?.value||"";let i=0,s="";if(o==="new"&&window.domainPricing?(i=window.domainPricing.initialCost||0,s=l.escapeHtml(window.selectedDomain||"New Domain")):o==="own"&&(i=0,s=window.ownDomain?`${l.escapeHtml(window.ownDomain)} (Your Domain)`:"Your Domain"),a===null){e.innerHTML="",e.style.display="none";return}const c=a+i;let m=`
        <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); border: 2px solid #667eea; border-radius: 12px; padding: 1.25rem; margin-top: 1.5rem;">
            <h4 style="color: #667eea; margin: 0 0 1rem 0; font-size: 1.1rem;">💰 Order Summary</h4>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: #4b5563;">Website Package:</span>
                <strong style="color: #1a1a1a;">$${a.toFixed(2)}</strong>
            </div>
    `;o&&o!==""&&(m+=`
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: #4b5563;">Domain: ${s}</span>
                <strong style="color: ${i>0?"#1a1a1a":"#10b981"};">
                    ${i>0?"$"+i.toFixed(2):"FREE"}
                </strong>
            </div>
        `),m+=`
            <hr style="border: none; border-top: 1px solid #d1d5db; margin: 0.75rem 0;">
            
            <div style="display: flex; justify-content: space-between;">
                <span style="color: #1a1a1a; font-weight: 600;">Total Due Today:</span>
                <strong style="color: #667eea; font-size: 1.25rem;">$${c.toFixed(2)}</strong>
            </div>
    `,o==="new"&&window.domainPricing?.renewalCost>0&&(m+=`
            <p style="color: #6b7280; font-size: 0.8rem; margin: 0.75rem 0 0 0;">
                * Domain renews at $${window.domainPricing.renewalCost.toFixed(2)}/year
            </p>
        `),m+="</div>",e.innerHTML=m,e.style.display="block"}window.domainOption=null;window.selectedDomain=null;window.ownDomain=null;window.domainPricing=null;window.isOwnDomain=!1;document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("logoUpload"),e=document.getElementById("logoPreview"),t=document.getElementById("logoPreviewImage"),a=document.getElementById("removeLogo");n&&n.addEventListener("change",o=>{const i=o.target.files[0];if(i){if(!["image/jpeg","image/png","image/gif","image/webp","image/svg+xml"].includes(i.type)){d("Invalid File Type","Please upload an image file (JPEG, PNG, GIF, WebP, or SVG).",!1),n.value="";return}if(i.size>5*1024*1024){d("File Too Large","Logo file must be less than 5MB. Please choose a smaller file.",!1),n.value="";return}const c=i.name.split(".").pop().toLowerCase();if(!["jpg","jpeg","png","gif","webp","svg"].includes(c)){d("Invalid File","Invalid file extension. Please upload a valid image.",!1),n.value="";return}const p=new FileReader;p.onload=f=>{t.src=f.target.result,e.style.display="block"},p.readAsDataURL(i)}else e.style.display="none"}),a&&a.addEventListener("click",()=>{n.value="",e.style.display="none",t.src=""})});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("package");n&&n.addEventListener("change",h),h()});typeof x<"u"&&x.exports&&(x.exports={SecurityUtils:l,FormRateLimiter:u,DomainCheckLimiter:g})});export default C();
