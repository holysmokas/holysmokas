import"./modulepreload-polyfill-B5Qt9EMX-ulV_1b7r-BGxEsOWE.js";import"./authLogic-CC4CpbKG-CrBVcBcr-DJSf1S8_.js";import{x as r,F as d}from"./firebase-BtvxRjGj-Bmveahn2-DtNkYIDR.js";/* empty css                                */let a=null,i=null;r(d,async e=>{e?(a=e,await c(e.uid)):window.location.href="/src/frontend/pages/login.html"});async function c(e){try{const t=await(await fetch(`http://localhost:8080/user-projects/${e}`)).json(),n=document.getElementById("projectsContainer");t.success&&t.projects.length>0?n.innerHTML=t.projects.map(o=>`
                <div class="project-card">
                    <h3>${o.businessName}</h3>
                    <div class="project-info">
                        <p><strong>Status:</strong> <span class="project-status status-${o.status}">${o.status}</span></p>
                        <p><strong>Package:</strong> ${o.packageType}</p>
                        <p><strong>Created:</strong> ${new Date(o.createdAt.seconds*1e3).toLocaleDateString()}</p>
                    </div>
                    <div class="project-actions">
                        <a href="${o.liveUrl}" target="_blank" class="project-btn btn-view">View Live Site</a>
                        <button onclick="openModificationModal('${o.id}')" class="project-btn btn-modify">Request Changes</button>
                    </div>
                </div>
            `).join(""):n.innerHTML=`
                <div class="empty-state">
                    <h3>No projects yet</h3>
                    <p>Your projects will appear here once they're created.</p>
                    <a href="/src/frontend/pages/contact.html" class="btn btn-primary">Start a New Project</a>
                </div>
            `}catch(t){console.error("Error loading projects:",t),document.getElementById("projectsContainer").innerHTML=`
            <div class="empty-state">
                <h3>Error loading projects</h3>
                <p>Please try refreshing the page.</p>
            </div>
        `}}window.openModificationModal=function(e){i=e,document.getElementById("modificationModal").classList.add("show")};window.closeModificationModal=function(){document.getElementById("modificationModal").classList.remove("show"),document.getElementById("modificationRequest").value=""};window.submitModification=async function(e){e.preventDefault();const t=document.getElementById("modificationRequest").value;try{const n=await(await fetch("http://localhost:8080/request-modification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:a.uid,projectId:i,modificationRequest:t})})).json();closeModificationModal(),n.success?(s("Success!","Your modification request has been received. We'll update your site and notify you via email when it's ready!"),await c(a.uid)):s("Error","Failed to submit modification request. Please try again.")}catch(n){console.error("Error submitting modification:",n),s("Error","An error occurred. Please try again later.")}};function s(e,t){const n=document.getElementById("responseModal"),o=document.getElementById("responseContent");o.innerHTML=`
        <h2>${e}</h2>
        <p>${t}</p>
        <button onclick="closeResponseModal()" class="btn btn-primary">Close</button>
    `,n.classList.add("show")}window.closeResponseModal=function(){document.getElementById("responseModal").classList.remove("show")};
