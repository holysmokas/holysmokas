import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import"./authLogic-CC4CpbKG.js";import{o as d,a as l}from"./firebase-BtvxRjGj.js";let i=null,r=null;d(l,async e=>{e?(i=e,await c(e.uid)):window.location.href="/src/frontend/pages/login.html"});async function c(e){try{const t=await(await fetch(`http://localhost:8080/user-projects/${e}`)).json(),s=document.getElementById("projectsContainer");t.success&&t.projects.length>0?s.innerHTML=t.projects.map(o=>`
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
            `).join(""):s.innerHTML=`
                <div class="empty-state">
                    <h3>No projects yet</h3>
                    <p>Your projects will appear here once they're created.</p>
                    <a href="/src/frontend/pages/contact.html" class="btn btn-primary">Start a New Project</a>
                </div>
            `}catch(n){console.error("Error loading projects:",n),document.getElementById("projectsContainer").innerHTML=`
            <div class="empty-state">
                <h3>Error loading projects</h3>
                <p>Please try refreshing the page.</p>
            </div>
        `}}window.openModificationModal=function(e){r=e,document.getElementById("modificationModal").classList.add("show")};window.closeModificationModal=function(){document.getElementById("modificationModal").classList.remove("show"),document.getElementById("modificationRequest").value=""};window.submitModification=async function(e){e.preventDefault();const n=document.getElementById("modificationRequest").value;try{const s=await(await fetch("http://localhost:8080/request-modification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:i.uid,projectId:r,modificationRequest:n})})).json();closeModificationModal(),s.success?(a("Success!","Your modification request has been received. We'll update your site and notify you via email when it's ready!"),await c(i.uid)):a("Error","Failed to submit modification request. Please try again.")}catch(t){console.error("Error submitting modification:",t),a("Error","An error occurred. Please try again later.")}};function a(e,n){const t=document.getElementById("responseModal"),s=document.getElementById("responseContent");s.innerHTML=`
        <h2>${e}</h2>
        <p>${n}</p>
        <button onclick="closeResponseModal()" class="btn btn-primary">Close</button>
    `,t.classList.add("show")}window.closeResponseModal=function(){document.getElementById("responseModal").classList.remove("show")};
