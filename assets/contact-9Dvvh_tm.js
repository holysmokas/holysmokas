import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{E as z}from"./config-gIZJO8lV.js";function m(t,e,n=!0){const o=document.getElementById("formModal"),s=document.getElementById("modalTitle"),a=document.getElementById("modalMessage"),i=document.getElementById("modalIcon");s.textContent=t,a.textContent=e,i.textContent=n?"✓":"✕",i.style.background=n?"var(--secondary)":"#ef4444",o.classList.add("show")}window.closeModal=function(){document.getElementById("formModal").classList.remove("show")};function R(t){let e=t.replace(/^https?:\/\//,"");return e=e.replace(/^www\./,""),e=e.split("/")[0],e=e.trim(),e}window.checkDomain=async function(){var o,s;const t=document.getElementById("domainInput"),e=document.getElementById("domainResult"),n=t.value.trim();if(!n){e.innerHTML="⚠️ Please enter a domain name.",e.style.color="#f59e0b";return}e.innerHTML="🔍 Checking availability...",e.style.color="#6b7280";try{const i=await(await fetch(z.checkDomain,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:n})})).json();if(i.available===!0){const l=i.cleanedDomain||R(n),p=((o=i.pricing)==null?void 0:o.initialCost)||i.price||12.99,g=((s=i.pricing)==null?void 0:s.renewalCost)||i.renewalPrice||12.99;e.innerHTML=`
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${l} is available!</strong>
                    </div>
                    
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: #6b7280;">Initial Registration:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${p.toFixed(2)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Annual Renewal:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${g.toFixed(2)}/year</strong>
                        </div>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        onclick="addDomainToForm('${l}', ${p}, ${g})" 
                        style="width: 100%; margin-top: 0.5rem;">
                        Add to Form
                    </button>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                        💡 Domain will be registered after you complete your website order
                    </p>
                </div>
            `,e.style.color="#10b981",window.selectedDomain=l,window.domainPricing={initialCost:p,renewalCost:g}}else{const l=i.domain||n;e.innerHTML=`
                <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">❌</span>
                        <strong style="color: #991b1b;">${l} is already taken</strong>
                    </div>
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                        Try a different domain name or extension (.net, .org, .co)
                    </p>
                </div>
            `,e.style.color="#ef4444",window.selectedDomain=null,window.domainPricing=null}}catch(a){console.error("Domain check error:",a),e.innerHTML=`
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⚠️</span>
                    <strong style="color: #991b1b;">Error checking domain</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please try again or contact support
                </p>
            </div>
        `,e.style.color="#ef4444"}};window.addDomainToForm=function(t,e=0,n=0){const o=document.getElementById("currentUrl");o&&(o.value=`https://${t}`,o.style.border="2px solid #10b981",setTimeout(()=>{o.style.border=""},2e3)),window.selectedDomain=t,window.domainPricing={initialCost:e,renewalCost:n};const s=document.getElementById("domainResult");s.innerHTML=`
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${t} added to form</strong>
            </div>
            
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: #6b7280;">Initial Registration:</span>
                    <strong style="color: #059669; font-size: 1.1rem;">$${e.toFixed(2)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">Annual Renewal:</span>
                    <strong style="color: #059669; font-size: 1.1rem;">$${n.toFixed(2)}/year</strong>
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
    `,u()};function B(t){if(!t||t.includes("Select a package"))return null;const e={"Starter - $599 (New Website)":.99,"Business - $1,199 (New Website)":.99,"Small Shop - $0.99 (New Website)":.99};for(const[n,o]of Object.entries(e))if(t.includes(n)||t.includes(o))return o;return 0}function q(t){if(!t)return"business";const e=t.toLowerCase();return e.includes("small shop")||e.includes("smallshop")?"smallshop":e.includes("starter")?"starter":e.includes("business")?"business":e.includes("enterprise")||e.includes("e-commerce")?"enterprise":"business"}function u(){const t=document.getElementById("package"),e=document.getElementById("pricingBreakdown");if(!t||!e)return;const n=t.value,o=B(n);if(o===null||n.includes("Select a package")){e.style.display="none";return}const s=window.domainPricing?window.domainPricing.initialCost:0,a=o+s;o>0?(e.innerHTML=`
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💰 Price Breakdown
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 1rem;"><strong>Website Package:</strong></span>
                    <strong style="color: #6366f1; font-size: 1.1rem;">$${o.toFixed(2)}</strong>
                </div>
                
                ${s>0?`
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #6b7280; font-size: 1rem;">
                            <strong>Domain Registration:</strong><br>
                            <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                        </span>
                        <strong style="color: #059669; font-size: 1.1rem;">$${s.toFixed(2)}</strong>
                    </div>
                `:""}
                
                <div style="display: flex; justify-content: space-between; padding-top: 0.75rem;">
                    <strong style="color: #065f46; font-size: 1.2rem;">Total First Year:</strong>
                    <strong style="color: #065f46; font-size: 1.4rem;">$${a.toFixed(2)}</strong>
                </div>
            </div>
            
            ${s>0?`
                <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 1rem; margin-bottom: 0;">
                    📅 Domain renewal of $${window.domainPricing.renewalCost.toFixed(2)} will be due annually
                </p>
            `:""}
            
            <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 0.75rem; margin-bottom: 0;">
                ✨ This is an estimate. Final quote will be provided after reviewing your requirements.
            </p>
        `,e.style.display="block"):n.includes("Custom Quote")?(e.innerHTML=`
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💼 Custom Enterprise Quote
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px; text-align: center;">
                <p style="color: #6b7280; margin-bottom: 1rem;">
                    We'll provide a detailed custom quote based on your specific requirements and features.
                </p>
                ${s>0?`
                    <div style="padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #6b7280;">
                                <strong>Domain Registration:</strong><br>
                                <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                            </span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${s.toFixed(2)}</strong>
                        </div>
                    </div>
                `:""}
            </div>
        `,e.style.display="block"):e.style.display="none"}window.removeDomainFromForm=function(){const t=document.getElementById("currentUrl");t&&(t.value=""),window.selectedDomain=null,window.domainPricing=null;const e=document.getElementById("domainInput");e&&(e.value="");const n=document.getElementById("domainResult");n&&(n.innerHTML=""),u()};window.handleContactSubmit=async function(t){var w,v,k,h,x,P,D,E,I,S;t.preventDefault();const e=t.target,n=((w=e.querySelector("#name"))==null?void 0:w.value.trim())||"",o=((v=e.querySelector("#email"))==null?void 0:v.value.trim())||"",s=((k=e.querySelector("#businessName"))==null?void 0:k.value.trim())||"",a=((h=e.querySelector("#phone"))==null?void 0:h.value.trim())||"",i=((x=e.querySelector("#package"))==null?void 0:x.value.trim())||"",l=((P=e.querySelector("#timeline"))==null?void 0:P.value.trim())||"",p=((D=e.querySelector("#currentUrl"))==null?void 0:D.value.trim())||"",g=((E=e.querySelector("#referenceWebsite"))==null?void 0:E.value.trim())||"",F=((I=e.querySelector("#mainGoal"))==null?void 0:I.value.trim())||"",T=((S=e.querySelector("#mustHaveFeatures"))==null?void 0:S.value.trim())||"",f=e.querySelector("#logoUpload"),y=(f==null?void 0:f.files[0])||null,b=B(i);if(b===null||i.includes("Select a package")){m("Please Select a Package","Please choose a website package before submitting your request.",!1);return}const L=window.domainPricing?window.domainPricing.initialCost:0,C=b+L;if(y&&y.size>5*1024*1024){m("Logo Too Large","Please upload a logo smaller than 5MB.",!1);return}const d=document.getElementById("submitBtn");if(!d){console.error("Submit button not found!"),m("Error","Form submission error. Please refresh the page and try again.",!1);return}const M=d.textContent;d.textContent=y?"Uploading Logo...":"Creating Payment Session...",d.disabled=!0;try{const r=new FormData;r.append("name",n),r.append("email",o),r.append("businessName",s),r.append("phone",a),r.append("package",i),r.append("packagePrice",b),r.append("timeline",l),r.append("currentUrl",p),r.append("referenceWebsite",g),r.append("mainGoal",F),r.append("mustHaveFeatures",T),r.append("selectedDomain",window.selectedDomain||"N/A"),r.append("domainPricing",JSON.stringify(window.domainPricing)),r.append("totalCost",C),r.append("timestamp",new Date().toISOString()),r.append("status","pending_payment");const $=q(i);r.append("category",$),console.log("📦 Package category:",$,"from package:",i),y&&r.append("logo",y);const c=await(await fetch(z.createPaymentSession,{method:"POST",body:r})).json();if(c.success)c.requiresPayment===!1?(m("📧 Check Your Email!",c.message||"Thank you! We've sent you a package recommendation. Check your email and click the link to continue.",!0),setTimeout(()=>{e.reset(),window.selectedDomain=null,window.domainPricing=null,typeof u=="function"&&u()},4e3)):c.sessionUrl&&(m("🎉 Request Submitted Successfully!","Redirecting you to secure payment...",!0),setTimeout(()=>{window.location.href=c.sessionUrl},2e3));else throw new Error(c.error||"Failed to create payment session")}catch(r){console.error("Error creating payment session:",r),m("Error","There was an error processing your request. Please try again or contact us at (415) 691-7085.",!1),d.textContent=M,d.disabled=!1}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("logoUpload"),e=document.getElementById("logoPreview"),n=document.getElementById("logoPreviewImage"),o=document.getElementById("removeLogo");t&&t.addEventListener("change",s=>{const a=s.target.files[0];if(a){if(a.size>5*1024*1024){alert("Logo file must be less than 5MB"),t.value="";return}const i=new FileReader;i.onload=l=>{n.src=l.target.result,e.style.display="block"},i.readAsDataURL(a)}else e.style.display="none"}),o&&o.addEventListener("click",()=>{t.value="",e.style.display="none",n.src=""})});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("package");t&&t.addEventListener("change",u),u()});
