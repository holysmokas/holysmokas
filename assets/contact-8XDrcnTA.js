import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import"./firebase-BtvxRjGj.js";const S="https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec";function u(t,e,n=!0){const i=document.getElementById("formModal"),o=document.getElementById("modalTitle"),r=document.getElementById("modalMessage"),s=document.getElementById("modalIcon");o.textContent=t,r.textContent=e,s.textContent=n?"✔":"✕",s.style.background=n?"var(--secondary)":"#ef4444",i.classList.add("show")}window.closeModal=function(){document.getElementById("formModal").classList.remove("show")};async function I(t){try{const e=await fetch(S,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return console.log("Data sent to Google Apps Script"),!0}catch(e){return console.error("Error sending to Google Script:",e),!1}}function $(t){let e=t.replace(/^https?:\/\//,"");return e=e.replace(/^www\./,""),e=e.split("/")[0],e=e.trim(),e}window.checkDomain=async function(){const t=document.getElementById("domainInput"),e=document.getElementById("domainResult"),n=t.value.trim();if(!n){e.innerHTML="⚠️ Please enter a domain name.",e.style.color="#f59e0b";return}e.innerHTML="🔍 Checking availability...",e.style.color="#6b7280";try{const o=await(await fetch("http://localhost:8080/check-domain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:n})})).json();if(o.available===!0){const r=o.cleanedDomain||$(n),s=o.pricing?.initialCost||o.price||12.99,a=o.pricing?.renewalCost||o.renewalPrice||12.99;e.innerHTML=`
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${r} is available!</strong>
                    </div>
                    
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: #6b7280;">Initial Registration:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${s.toFixed(2)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Annual Renewal:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${a.toFixed(2)}/year</strong>
                        </div>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        onclick="addDomainToForm('${r}', ${s}, ${a})" 
                        style="width: 100%; margin-top: 0.5rem;">
                        Add to Form
                    </button>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                        💡 Domain will be registered after you complete your website order
                    </p>
                </div>
            `,e.style.color="#10b981",window.selectedDomain=r,window.domainPricing={initialCost:s,renewalCost:a}}else{const r=o.domain||n;e.innerHTML=`
                <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">❌</span>
                        <strong style="color: #991b1b;">${r} is already taken</strong>
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
        `,e.style.color="#ef4444"}};window.addDomainToForm=function(t,e=0,n=0){const i=document.getElementById("currentUrl");i&&(i.value=`https://${t}`,i.style.border="2px solid #10b981",setTimeout(()=>{i.style.border=""},2e3)),window.selectedDomain=t,window.domainPricing={initialCost:e,renewalCost:n};const o=document.getElementById("domainResult");o.innerHTML=`
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${t} has been added to your form!</strong>
            </div>
            
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: #6b7280;">Initial Registration:</span>
                    <strong style="color: #059669;">$${e.toFixed(2)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">Annual Renewal:</span>
                    <strong style="color: #059669;">$${n.toFixed(2)}/year</strong>
                </div>
            </div>
            
            <button 
                type="button" 
                class="btn btn-secondary" 
                onclick="removeDomainFromForm()" 
                style="width: 100%; font-size: 0.875rem;">
                Remove Domain
            </button>
        </div>
    `,o.style.color="#10b981",m(),document.getElementById("contactForm").scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(()=>{const r=document.getElementById("businessName");r&&!r.value&&r.focus()},500)};function y(t){return{"Starter - $599 (New Website)":599,"Business - $1,199 (New Website)":1199,"Small Shop - $1,699 (New Website)":1699,"E-Commerce/Enterprise - Custom Quote":0,"Website Redesign/Updates":0,"Not Sure Yet":0}[t]||0}function m(){const t=document.getElementById("package"),e=t?t.value:"",n=y(e),i=window.domainPricing?window.domainPricing.initialCost:0;let o=document.getElementById("pricingBreakdown");if(!o){o=document.createElement("div"),o.id="pricingBreakdown",o.style.cssText="margin-top: 2rem; padding: 1.5rem; background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px;";const r=document.getElementById("submitBtn");r&&r.parentNode.insertBefore(o,r)}if(n>0){const r=n+i;o.innerHTML=`
            <h3 style="color: #065f46; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💰 Your Project Estimate
            </h3>
            
            <div style="background: white; padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 1rem;">
                        <strong>Website Package:</strong><br>
                        <span style="font-size: 0.875rem;">${e}</span>
                    </span>
                    <strong style="color: #059669; font-size: 1.1rem;">$${n.toFixed(2)}</strong>
                </div>
                
                ${i>0?`
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #6b7280; font-size: 1rem;">
                            <strong>Domain Registration:</strong><br>
                            <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                        </span>
                        <strong style="color: #059669; font-size: 1.1rem;">$${i.toFixed(2)}</strong>
                    </div>
                `:""}
                
                <div style="display: flex; justify-content: space-between; padding-top: 0.75rem;">
                    <strong style="color: #065f46; font-size: 1.2rem;">Total First Year:</strong>
                    <strong style="color: #065f46; font-size: 1.4rem;">$${r.toFixed(2)}</strong>
                </div>
            </div>
            
            ${i>0?`
                <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 1rem; margin-bottom: 0;">
                    📅 Domain renewal of $${window.domainPricing.renewalCost.toFixed(2)} will be due annually
                </p>
            `:""}
            
            <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 0.75rem; margin-bottom: 0;">
                ✨ This is an estimate. Final quote will be provided after reviewing your requirements.
            </p>
        `,o.style.display="block"}else e.includes("Custom Quote")?(o.innerHTML=`
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💼 Custom Enterprise Quote
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px; text-align: center;">
                <p style="color: #6b7280; margin-bottom: 1rem;">
                    We'll provide a detailed custom quote based on your specific requirements and features.
                </p>
                ${i>0?`
                    <div style="padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #6b7280;">
                                <strong>Domain Registration:</strong><br>
                                <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                            </span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${i.toFixed(2)}</strong>
                        </div>
                    </div>
                `:""}
            </div>
        `,o.style.display="block"):o.style.display="none"}window.removeDomainFromForm=function(){const t=document.getElementById("currentUrl");t&&(t.value=""),window.selectedDomain=null,window.domainPricing=null;const e=document.getElementById("domainInput");e&&(e.value="");const n=document.getElementById("domainResult");n&&(n.innerHTML=""),m()};window.handleContactSubmit=async function(t){t.preventDefault();const e=t.target,n=e.querySelector("#name")?.value.trim()||"",i=e.querySelector("#email")?.value.trim()||"",o=e.querySelector("#businessName")?.value.trim()||"",r=e.querySelector("#phone")?.value.trim()||"",s=e.querySelector("#package")?.value.trim()||"",a=e.querySelector("#timeline")?.value.trim()||"",b=e.querySelector("#currentUrl")?.value.trim()||"",f=e.querySelector("#referenceWebsite")?.value.trim()||"",w=e.querySelector("#mainGoal")?.value.trim()||"",v=e.querySelector("#mustHaveFeatures")?.value.trim()||"",c=y(s),x=window.domainPricing?window.domainPricing.initialCost:0,h=c+x;if(c===0){u("Please Select a Package","Please select a website package (Starter, Business, or Small Shop) before submitting.",!1);return}const p={name:n,email:i,businessName:o,phone:r,package:s,packagePrice:c,timeline:a,currentUrl:b,referenceWebsite:f,mainGoal:w,mustHaveFeatures:v,selectedDomain:window.selectedDomain||"N/A",domainPricing:window.domainPricing?{initialCost:window.domainPricing.initialCost,renewalCost:window.domainPricing.renewalCost}:null,totalCost:h,timestamp:new Date().toISOString(),status:"pending_payment"},l=document.getElementById("submitBtn"),k=l.textContent;l.textContent="Creating Payment Session...",l.disabled=!0;try{const d=await(await fetch("http://localhost:8080/create-payment-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).json();if(d.success&&d.sessionUrl)I(p).catch(P=>{console.warn("⚠️ Google Script submission failed, but proceeding to payment:",P)}),window.location.href=d.sessionUrl;else throw new Error(d.error||"Failed to create payment session")}catch(g){console.error("Error creating payment session:",g),u("Error","There was an error processing your request. Please try again or contact us at (415) 691-7085.",!1),l.textContent=k,l.disabled=!1}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("package");t&&t.addEventListener("change",m)});
