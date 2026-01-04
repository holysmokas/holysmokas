import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{E as h}from"./config-c1XWWVWh.js";function m(n,e,t=!0){const i=document.getElementById("formModal"),o=document.getElementById("modalTitle"),a=document.getElementById("modalMessage"),r=document.getElementById("modalIcon");o.textContent=n,a.textContent=e,r.textContent=t?"✓":"✕",r.style.background=t?"var(--secondary)":"#ef4444",i.classList.add("show")}window.closeModal=function(){document.getElementById("formModal").classList.remove("show")};function L(n){let e=n.replace(/^https?:\/\//,"");return e=e.replace(/^www\./,""),e=e.split("/")[0],e=e.trim(),e}window.checkDomain=async function(){const n=document.getElementById("domainInput"),e=document.getElementById("domainResult"),t=n.value.trim();if(!t){e.innerHTML="⚠️ Please enter a domain name.",e.style.color="#f59e0b";return}e.innerHTML="🔍 Checking availability...",e.style.color="#6b7280";try{const o=await(await fetch(h.checkDomain,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:t})})).json();if(o.available===!0){const a=o.cleanedDomain||L(t),r=o.pricing?.initialCost||o.price||12.99,l=o.pricing?.renewalCost||o.renewalPrice||12.99;e.innerHTML=`
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${a} is available!</strong>
                    </div>
                    
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: #6b7280;">Initial Registration:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${r.toFixed(2)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Annual Renewal:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${l.toFixed(2)}/year</strong>
                        </div>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        onclick="addDomainToForm('${a}', ${r}, ${l})" 
                        style="width: 100%; margin-top: 0.5rem;">
                        Add to Form
                    </button>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                        💡 Domain will be registered after you complete your website order
                    </p>
                </div>
            `,e.style.color="#10b981",window.selectedDomain=a,window.domainPricing={initialCost:r,renewalCost:l}}else{const a=o.domain||t;e.innerHTML=`
                <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">❌</span>
                        <strong style="color: #991b1b;">${a} is already taken</strong>
                    </div>
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                        Try a different domain name or extension (.net, .org, .co)
                    </p>
                </div>
            `,e.style.color="#ef4444",window.selectedDomain=null,window.domainPricing=null}}catch(i){console.error("Domain check error:",i),e.innerHTML=`
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⚠️</span>
                    <strong style="color: #991b1b;">Error checking domain</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please try again or contact support
                </p>
            </div>
        `,e.style.color="#ef4444"}};window.addDomainToForm=function(n,e=0,t=0){const i=document.getElementById("currentUrl");i&&(i.value=`https://${n}`,i.style.border="2px solid #10b981",setTimeout(()=>{i.style.border=""},2e3)),window.selectedDomain=n,window.domainPricing={initialCost:e,renewalCost:t};const o=document.getElementById("domainResult");o.innerHTML=`
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${n} added to form</strong>
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
    `,g()};function S(n){if(!n||n.includes("Select a package"))return null;const e={"Starter - $599 (New Website)":.99,"Business - $1,199 (New Website)":.99,"Small Shop - $0.99 (New Website)":.99};for(const[t,i]of Object.entries(e))if(n.includes(t)||n.includes(i))return i;return 0}function $(n){if(!n)return"business";const e=n.toLowerCase();return e.includes("small shop")||e.includes("smallshop")?"smallshop":e.includes("starter")?"starter":e.includes("business")?"business":e.includes("enterprise")||e.includes("e-commerce")?"enterprise":"business"}window.removeDomainFromForm=function(){const n=document.getElementById("currentUrl");n&&(n.value=""),window.selectedDomain=null,window.domainPricing=null;const e=document.getElementById("domainInput");e&&(e.value="");const t=document.getElementById("domainResult");t&&(t.innerHTML=""),g()};window.handleContactSubmit=async function(n){n.preventDefault();const e=n.target,t=e.querySelector("#name")?.value.trim()||"",i=e.querySelector("#email")?.value.trim()||"",o=e.querySelector("#businessName")?.value.trim()||"",a=e.querySelector("#phone")?.value.trim()||"",r=e.querySelector("#package")?.value.trim()||"",l=e.querySelector("#timeline")?.value.trim()||"",d=e.querySelector("#currentUrl")?.value.trim()||"",k=e.querySelector("#referenceWebsite")?.value.trim()||"",E=e.querySelector("#mainGoal")?.value.trim()||"",I=e.querySelector("#mustHaveFeatures")?.value.trim()||"",y=e.querySelector("#logoUpload")?.files[0]||null,f=document.getElementById("domainSelectionType")?.value||"new",v=document.getElementById("isOwnDomain")?.value==="true",D=document.getElementById("selectedDomainValue")?.value||"";let w="N/A",c=null;f==="new"&&window.selectedDomain?(w=window.selectedDomain,c=window.domainPricing):f==="own"&&(window.ownDomain||D)?(w=window.ownDomain||D,c={initialCost:0,renewalCost:0}):f==="none"&&(w="N/A",c=null);const b=S(r);if(b===null||r.includes("Select a package")){m("Please Select a Package","Please choose a website package before submitting your request.",!1);return}const P=c?c.initialCost:0,x=b+P;if(y&&y.size>5*1024*1024){m("Logo Too Large","Please upload a logo smaller than 5MB.",!1);return}const u=document.getElementById("submitBtn");if(!u){console.error("Submit button not found!"),m("Error","Form submission error. Please refresh the page and try again.",!1);return}const B=u.textContent;u.textContent=y?"Uploading Logo...":"Creating Payment Session...",u.disabled=!0;try{const s=new FormData;s.append("name",t),s.append("email",i),s.append("businessName",o),s.append("phone",a),s.append("package",r),s.append("packagePrice",b),s.append("timeline",l),s.append("currentUrl",d),s.append("referenceWebsite",k),s.append("mainGoal",E),s.append("mustHaveFeatures",I),s.append("selectedDomain",w),s.append("domainPricing",JSON.stringify(c)),s.append("totalCost",x),s.append("domainOption",f),s.append("isOwnDomain",v.toString()),s.append("timestamp",new Date().toISOString()),s.append("status","pending_payment");const T=$(r);s.append("category",T),console.log("📦 Domain Selection:",{type:f,isOwnDomain:v,domain:w,pricing:c}),y&&s.append("logo",y);const p=await(await fetch(h.createPaymentSession,{method:"POST",body:s})).json();if(p.success)p.requiresPayment===!1?(m("📧 Check Your Email!",p.message||"Thank you! We've sent you a package recommendation. Check your email and click the link to continue.",!0),setTimeout(()=>{e.reset(),F()},4e3)):p.sessionUrl&&(m("🎉 Request Submitted Successfully!","Redirecting you to secure payment...",!0),setTimeout(()=>{window.location.href=p.sessionUrl},2e3));else throw new Error(p.error||"Failed to create payment session")}catch(s){console.error("Error creating payment session:",s),m("Error","There was an error processing your request. Please try again or contact us at (415) 691-7085.",!1),u.textContent=B,u.disabled=!1}};function F(){window.selectedDomain=null,window.ownDomain=null,window.domainPricing=null,window.domainOption=null,window.isOwnDomain=!1;const n=document.getElementById("domainSelectionType"),e=document.getElementById("isOwnDomain"),t=document.getElementById("selectedDomainValue");n&&(n.value=""),e&&(e.value="false"),t&&(t.value="");const i=document.getElementById("newDomainSection"),o=document.getElementById("ownDomainSection"),a=document.getElementById("noDomainSection");i&&(i.style.display="none"),o&&(o.style.display="none"),a&&(a.style.display="none"),document.querySelectorAll('input[name="domainOption"]').forEach(r=>{r.checked=!1}),document.querySelectorAll(".domain-option-card").forEach(r=>{r.classList.remove("selected")}),typeof g=="function"&&g()}function g(){const n=document.getElementById("package"),e=document.getElementById("pricingBreakdown");if(!e)return;const t=n?.value||"",i=S(t),o=window.domainOption||document.getElementById("domainSelectionType")?.value||"";let a=0,r="";if(o==="new"&&window.domainPricing?(a=window.domainPricing.initialCost||0,r=window.selectedDomain||"New Domain"):o==="own"?(a=0,r=window.ownDomain?`${window.ownDomain} (Your Domain)`:"Your Domain"):o==="none"&&(a=0,r="Free Subdomain"),i===null){e.innerHTML="",e.style.display="none";return}const l=i+a;let d=`
        <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); border: 2px solid #667eea; border-radius: 12px; padding: 1.25rem; margin-top: 1.5rem;">
            <h4 style="color: #667eea; margin: 0 0 1rem 0; font-size: 1.1rem;">💰 Order Summary</h4>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: #4b5563;">Website Package:</span>
                <strong style="color: #1a1a1a;">$${i.toFixed(2)}</strong>
            </div>
    `;o&&o!==""&&(d+=`
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: #4b5563;">Domain: ${r}</span>
                <strong style="color: ${a>0?"#1a1a1a":"#10b981"};">
                    ${a>0?"$"+a.toFixed(2):"FREE"}
                </strong>
            </div>
        `),d+=`
            <hr style="border: none; border-top: 1px solid #d1d5db; margin: 0.75rem 0;">
            
            <div style="display: flex; justify-content: space-between;">
                <span style="color: #1a1a1a; font-weight: 600;">Total Due Today:</span>
                <strong style="color: #667eea; font-size: 1.25rem;">$${l.toFixed(2)}</strong>
            </div>
    `,o==="new"&&window.domainPricing?.renewalCost>0&&(d+=`
            <p style="color: #6b7280; font-size: 0.8rem; margin: 0.75rem 0 0 0;">
                * Domain renews at $${window.domainPricing.renewalCost.toFixed(2)}/year
            </p>
        `),d+="</div>",e.innerHTML=d,e.style.display="block"}window.domainOption=null;window.selectedDomain=null;window.ownDomain=null;window.domainPricing=null;window.isOwnDomain=!1;document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("logoUpload"),e=document.getElementById("logoPreview"),t=document.getElementById("logoPreviewImage"),i=document.getElementById("removeLogo");n&&n.addEventListener("change",o=>{const a=o.target.files[0];if(a){if(a.size>5*1024*1024){m("File Too Large","Logo file must be less than 5MB. Please choose a smaller file.",!1),n.value="";return}const r=new FileReader;r.onload=l=>{t.src=l.target.result,e.style.display="block"},r.readAsDataURL(a)}else e.style.display="none"}),i&&i.addEventListener("click",()=>{n.value="",e.style.display="none",t.src=""})});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("package");n&&n.addEventListener("change",g),g()});
