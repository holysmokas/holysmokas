import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{E as f}from"./config-B_OJIxiv.js";function m(t,e,n=!0){const o=document.getElementById("formModal"),r=document.getElementById("modalTitle"),s=document.getElementById("modalMessage"),a=document.getElementById("modalIcon");r.textContent=t,s.textContent=e,a.textContent=n?"✓":"✕",a.style.background=n?"var(--secondary)":"#ef4444",o.classList.add("show")}window.closeModal=function(){document.getElementById("formModal").classList.remove("show")};function D(t){let e=t.replace(/^https?:\/\//,"");return e=e.replace(/^www\./,""),e=e.split("/")[0],e=e.trim(),e}window.checkDomain=async function(){const t=document.getElementById("domainInput"),e=document.getElementById("domainResult"),n=t.value.trim();if(!n){e.innerHTML="⚠️ Please enter a domain name.",e.style.color="#f59e0b";return}e.innerHTML="🔍 Checking availability...",e.style.color="#6b7280";try{const r=await(await fetch(f.checkDomain,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:n})})).json();if(r.available===!0){const s=r.cleanedDomain||D(n),a=r.pricing?.initialCost||r.price||12.99,l=r.pricing?.renewalCost||r.renewalPrice||12.99;e.innerHTML=`
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${s} is available!</strong>
                    </div>
                    
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: #6b7280;">Initial Registration:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${a.toFixed(2)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Annual Renewal:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${l.toFixed(2)}/year</strong>
                        </div>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        onclick="addDomainToForm('${s}', ${a}, ${l})" 
                        style="width: 100%; margin-top: 0.5rem;">
                        Add to Form
                    </button>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                        💡 Domain will be registered after you complete your website order
                    </p>
                </div>
            `,e.style.color="#10b981",window.selectedDomain=s,window.domainPricing={initialCost:a,renewalCost:l}}else{const s=r.domain||n;e.innerHTML=`
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
        `,e.style.color="#ef4444"}};window.addDomainToForm=function(t,e=0,n=0){const o=document.getElementById("currentUrl");o&&(o.value=`https://${t}`,o.style.border="2px solid #10b981",setTimeout(()=>{o.style.border=""},2e3)),window.selectedDomain=t,window.domainPricing={initialCost:e,renewalCost:n};const r=document.getElementById("domainResult");r.innerHTML=`
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
    `,u()};function b(t){if(!t||t.includes("Select a package"))return null;const e={"Starter - $599 (New Website)":599,"Business - $1,199 (New Website)":1199,"Small Shop - $0.99 (New Website)":.99};for(const[n,o]of Object.entries(e))if(t.includes(n)||t.includes(o))return o;return 0}function E(t){if(!t)return"business";const e=t.toLowerCase();return e.includes("small shop")||e.includes("smallshop")?"smallshop":e.includes("starter")?"starter":e.includes("business")?"business":e.includes("enterprise")||e.includes("e-commerce")?"enterprise":"business"}function u(){const t=document.getElementById("package"),e=document.getElementById("pricingBreakdown");if(!t||!e)return;const n=t.value,o=b(n);if(o===null||n.includes("Select a package")){e.style.display="none";return}const r=window.domainPricing?window.domainPricing.initialCost:0,s=o+r;o>0?(e.innerHTML=`
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💰 Price Breakdown
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 1rem;"><strong>Website Package:</strong></span>
                    <strong style="color: #6366f1; font-size: 1.1rem;">$${o.toFixed(2)}</strong>
                </div>
                
                ${r>0?`
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #6b7280; font-size: 1rem;">
                            <strong>Domain Registration:</strong><br>
                            <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                        </span>
                        <strong style="color: #059669; font-size: 1.1rem;">$${r.toFixed(2)}</strong>
                    </div>
                `:""}
                
                <div style="display: flex; justify-content: space-between; padding-top: 0.75rem;">
                    <strong style="color: #065f46; font-size: 1.2rem;">Total First Year:</strong>
                    <strong style="color: #065f46; font-size: 1.4rem;">$${s.toFixed(2)}</strong>
                </div>
            </div>
            
            ${r>0?`
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
                ${r>0?`
                    <div style="padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #6b7280;">
                                <strong>Domain Registration:</strong><br>
                                <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                            </span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${r.toFixed(2)}</strong>
                        </div>
                    </div>
                `:""}
            </div>
        `,e.style.display="block"):e.style.display="none"}window.removeDomainFromForm=function(){const t=document.getElementById("currentUrl");t&&(t.value=""),window.selectedDomain=null,window.domainPricing=null;const e=document.getElementById("domainInput");e&&(e.value="");const n=document.getElementById("domainResult");n&&(n.innerHTML=""),u()};window.handleContactSubmit=async function(t){t.preventDefault();const e=t.target,n=e.querySelector("#name")?.value.trim()||"",o=e.querySelector("#email")?.value.trim()||"",r=e.querySelector("#businessName")?.value.trim()||"",s=e.querySelector("#phone")?.value.trim()||"",a=e.querySelector("#package")?.value.trim()||"",l=e.querySelector("#timeline")?.value.trim()||"",w=e.querySelector("#currentUrl")?.value.trim()||"",v=e.querySelector("#referenceWebsite")?.value.trim()||"",x=e.querySelector("#mainGoal")?.value.trim()||"",h=e.querySelector("#mustHaveFeatures")?.value.trim()||"",c=e.querySelector("#logoUpload")?.files[0]||null,g=b(a);if(g===null||a.includes("Select a package")){m("Please Select a Package","Please choose a website package before submitting your request.",!1);return}const k=window.domainPricing?window.domainPricing.initialCost:0,P=g+k;if(c&&c.size>5*1024*1024){m("Logo Too Large","Please upload a logo smaller than 5MB.",!1);return}const d=document.getElementById("submitBtn");if(!d){console.error("Submit button not found!"),m("Error","Form submission error. Please refresh the page and try again.",!1);return}const I=d.textContent;d.textContent=c?"Uploading Logo...":"Creating Payment Session...",d.disabled=!0;try{const i=new FormData;i.append("name",n),i.append("email",o),i.append("businessName",r),i.append("phone",s),i.append("package",a),i.append("packagePrice",g),i.append("timeline",l),i.append("currentUrl",w),i.append("referenceWebsite",v),i.append("mainGoal",x),i.append("mustHaveFeatures",h),i.append("selectedDomain",window.selectedDomain||"N/A"),i.append("domainPricing",JSON.stringify(window.domainPricing)),i.append("totalCost",P),i.append("timestamp",new Date().toISOString()),i.append("status","pending_payment");const y=E(a);i.append("category",y),console.log("📦 Package category:",y,"from package:",a),c&&i.append("logo",c);const p=await(await fetch(f.createPaymentSession,{method:"POST",body:i})).json();if(p.success&&p.sessionUrl)m("🎉 Request Submitted Successfully!","Redirecting you to secure payment...",!0),setTimeout(()=>{window.location.href=p.sessionUrl},2e3);else throw new Error(p.error||"Failed to create payment session")}catch(i){console.error("Error creating payment session:",i),m("Error","There was an error processing your request. Please try again or contact us at (415) 691-7085.",!1),d.textContent=I,d.disabled=!1}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("logoUpload"),e=document.getElementById("logoPreview"),n=document.getElementById("logoPreviewImage"),o=document.getElementById("removeLogo");t&&t.addEventListener("change",r=>{const s=r.target.files[0];if(s){if(s.size>5*1024*1024){alert("Logo file must be less than 5MB"),t.value="";return}const a=new FileReader;a.onload=l=>{n.src=l.target.result,e.style.display="block"},a.readAsDataURL(s)}else e.style.display="none"}),o&&o.addEventListener("click",()=>{t.value="",e.style.display="none",n.src=""})});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("package");t&&t.addEventListener("change",u),u()});
