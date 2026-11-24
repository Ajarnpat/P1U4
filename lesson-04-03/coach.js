'use strict';
const $=s=>document.getElementById(s);function math(s){return s;}const coach=[
{q:'What system should you choose if you want to explain why the total momentum remained unchanged in the 1D lab?',h:'Decide which forces would be internal, and which external.',a:'Choose both cars as the system. Forces during their collision are then internal; with negligible net external impulse, total system momentum is constant.'},
{q:'How can the total momentum of two cars be zero even though both are moving?',h:'Momentum is a vector. Start with right positive.',a:'Their signed momenta can cancel. For example, +12,000 kg·m/s and −12,000 kg·m/s sum to zero.'},
{q:'If only car 1 is chosen as the system, is its momentum necessarily conserved during the collision?',h:'The other car is outside the chosen system.',a:'No. The force from car 2 is external to a system containing only car 1, so its momentum changes.'},
{q:'How does Newton’s third law explain the equal-and-opposite changes in momentum?',h:'Think about force, contact duration and impulse.',a:'Each car exerts an equal-and-opposite force on the other for the same interaction time. Their impulses, and hence their changes in momentum, are equal and opposite.'},
{q:'If an external force gives the two-car system an impulse, what happens to the total system momentum?',h:'Recall the impulse–momentum theorem from 4.2.',a:'The total system momentum changes by the net external impulse: J<sub>external</sub> = Δp<sub>system</sub>.'},
{q:'How do you calculate the velocity of the centre of mass of two moving objects?',h:'Treat total mass and total momentum as one system.',a:'v<sub>cm</sub> = (m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub>)/(m<sub>1</sub> + m<sub>2</sub>). Include signs in 1D. In two dimensions, add momentum vectors.'},
{q:'Does conservation of total momentum mean conservation of total kinetic energy?',h:'Look back at your second scatter graph.',a:'No. Total momentum can be conserved even when some kinetic energy is transferred to other energy stores. Only elastic collisions conserve the total kinetic energy of the system.'},
{q:'Can conservation of momentum help predict an explosion in a system initially at rest?',h:'Momentum before is zero. What must the momenta after add to?',a:'Yes. If external impulse is negligible, the total vector momentum remains zero, so the fragments’ momenta add to zero; their kinetic energy can increase as stored energy is released.'},
{q:'During one isolated collision, total kinetic energy falls from 700 J to 460 J. Has energy been lost from the universe? What accounts for the difference?',h:'Do not confuse kinetic energy with all forms of energy.',a:'Energy is conserved. The 240 J decrease in kinetic energy is balanced by an increase in internal energy, deformation, sound or other forms; there is no loss of total energy.'},
{q:'Write a simple energy-balance equation for a collision in a system where kinetic and internal energies change but no energy crosses the boundary.',h:'Include both kinetic and internal energy before and after.',a:'K<sub>i</sub> + E<sub>int,i</sub> = K<sub>f</sub> + E<sub>int,f</sub>. The total is unchanged, even if K alone decreases.'}
];
const deriv=[
{q:'D1. Write the force on A exerted by B in terms of the force on B exerted by A.',a:'F<sub>B→A</sub> = −F<sub>A→B</sub> (Newton’s third law).'},
{q:'D2. Multiply both sides by the common duration of the collision, Δt. What does each side represent?',a:'F<sub>B→A</sub>Δt = −F<sub>A→B</sub>Δt. Both sides represent the respective impulses. More generally, the forces are equal and opposite at every instant, so their impulses are also equal and opposite.'},
{q:'D3. Replace the impulses using the impulse–momentum theorem.',a:'Δp<sub>A</sub> = −Δp<sub>B</sub>.'},
{q:'D4. Rearrange in terms of initial and final momentum. What principle have you derived?',a:'p<sub>A,f</sub> + p<sub>B,f</sub> = p<sub>A,i</sub> + p<sub>B,i</sub>. Total momentum is conserved, assuming negligible net external impulse.'}
];
const early1=[
['Two equal-mass cars approach with equal and opposite velocities. Their initial system momentum is…',['positive','negative','zero','not defined'],2,'The momenta cancel.'],
['When two cars stick together, the pair’s final velocities must be…',['equal','opposite','zero','unchanged'],0,'The cars move together, though not necessarily at rest.'],
['Which graph shows all perfectly isolated 1D collisions?',['K_final = K_initial in every trial','p_final = p_initial in every trial','p_final = −p_initial','K_final is always zero'],1,'The whole system’s momentum does not change.']
];
const early2=[
['During a car–lorry impact, their interaction forces are…',['larger on the car','equal in magnitude and opposite in direction','larger on the lorry','necessarily zero'],1,'Newton’s third law holds at every instant.'],
['Which system is guaranteed constant momentum when external impulse is negligible?',['the car alone','the lorry alone','car and lorry together','the car driver alone'],2,'Both interaction forces are internal to this choice of system.'],
['If the total momentum of a 3000 kg system is −12,000 kg·m/s, v_cm is…',['−4 m/s','+4 m/s','−36 m/s','0'],0,'Divide total signed momentum by total mass.']
];
const early3=[
['For a 2D collision with negligible external impulse, which quantities are conserved?',['only p_x','only p_y','p_x and p_y independently','each object’s speed'],2,'Momentum is a vector; each component of the system total stays constant.'],
['The impulse on ball 1 is (−0.12, +0.08) N·s. The impulse on ball 2 is…',['(−0.12, +0.08)','(+0.12, −0.08)','(+0.08, −0.12)','(0, 0)'],1,'Equal and opposite impulses.'],
['In an elastic 2D collision, which must be unchanged?',['each ball’s kinetic energy','each ball’s velocity','the total kinetic energy of both balls','the total momentum magnitude of each ball'],2,'Elastic describes the energy of the system, not each individual ball.']
];
const mixed=[
['A 1.5 kg cart moving right at 4.0 m/s catches a 0.50 kg cart moving right at 2.0 m/s; they stick. Their common velocity is…',['2.0 m/s right','3.0 m/s right','3.5 m/s right','4.5 m/s right'],2,'Conserve total momentum: (6.0 + 1.0)/2.0 = 3.5 m/s.'],
['A system has no net external force. Which quantity may still change?',['total momentum','centre-of-mass velocity','one object’s momentum','total mass in this closed two-body model'],2,'The constituents can exchange momentum.'],
['A 0.40 kg object moves right at 5 m/s; a 0.60 kg object moves left at 2 m/s. What is total momentum?',['+0.8 kg·m/s','+3.2 kg·m/s','−0.8 kg·m/s','+2.0 kg·m/s'],0,'0.40(5) + 0.60(−2) = +0.8 kg·m/s.'],
['The two-object system has initial momentum +15 kg·m/s and receives an external impulse of −4 N·s. The final momentum is…',['+19 kg·m/s','+11 kg·m/s','−11 kg·m/s','−19 kg·m/s'],1,'Change in system momentum equals external impulse.'],
['An initially stationary object breaks into two pieces of masses 2 kg and 3 kg. The 2 kg piece moves right at 6 m/s. The other moves…',['4 m/s right','4 m/s left','9 m/s left','9 m/s right'],1,'0 = 2(6) + 3v, so v = −4 m/s.'],
['During a collision, the forces on two cars are equal in magnitude. Their accelerations are…',['necessarily equal','greater for the car with larger mass','greater in magnitude for the car with smaller mass','necessarily zero'],2,'a = F/m for each object; larger mass means smaller acceleration magnitude.'],
['For an isolated two-car collision, which is correct?',['total momentum conserved only if cars rebound','total momentum conserved for all collision types','kinetic energy conserved for all collision types','each car’s momentum conserved'],1,'System momentum conservation does not depend on the collision being elastic.'],
['Two equal masses approach at equal speeds, then stick. The centre of mass afterwards…',['moves right','moves left','remains at rest','accelerates in the direction of the heavier object'],2,'Total momentum was zero; the centre-of-mass velocity remains zero.'],
['The centre of mass of a closed system moves at constant velocity during an internal explosion because…',['internal forces are absent','net external force is zero','fragments have equal speeds','total kinetic energy is constant'],1,'Internal forces sum to zero in the system model.'],
['For an isolated 2D collision, total p_x is +2 and total p_y is −3 kg·m/s before. Afterwards…',['both components must be zero','both components remain +2 and −3','the momentum magnitude must be 5','p_x and p_y exchange values'],1,'Each component is conserved separately.']
];
const frqs=[
{title:'FRQ 1 · Predict the outcome of an idealised collision',lead:'Cart A (2.0 kg) moves right at 3.0 m/s; cart B (2.0 kg) moves left at 3.0 m/s. External horizontal impulse is negligible.',parts:['a. Calculate the initial total momentum.','b. If the carts stick together, determine their common final velocity.','c. Suppose instead the collision is elastic and the equal masses exchange velocities. Show that total momentum and total kinetic energy are conserved.','d. Why does your answer to part (b) not violate momentum conservation?']},
{title:'FRQ 2 · Explosion from rest',lead:'Two fragments of mass 0.80 kg and 1.20 kg are initially at rest together. They separate. The 0.80 kg fragment moves left at 6.0 m/s.',parts:['a. Determine the final velocity of the 1.20 kg fragment.','b. Calculate the final momentum of each fragment.','c. Calculate the total kinetic energy of the fragments after the explosion. Explain the energy source.','d. Describe the centre-of-mass motion before and after.']},
{title:'FRQ 3 · Two-dimensional billiard-ball reasoning',lead:'Two balls move on a horizontal, frictionless table. Ball A initially moves east and ball B north. External horizontal forces are negligible during the collision.',parts:['a. Sketch labelled before-and-after momentum vectors.','b. Write the conservation equations for the x and y components (do not solve simultaneous equations).','c. Explain the relationship between the impulses on A and B, including directions.','d. Predict how the system’s centre-of-mass velocity changes, and justify.']},
{title:'FRQ 4 · Car and lorry head-on impact',lead:'A 1200 kg car travelling east at 30 m/s collides with a 3600 kg lorry travelling west at 20 m/s. They remain joined after collision. Duration: 0.40 s. Take east as positive.',parts:['a. Determine the total momentum immediately before and after collision.','b. Determine the common velocity just after impact.','c. Determine each vehicle’s momentum change and impulse.','d. Find the average contact force exerted on each vehicle by the other.','e. Compare their average accelerations. Under clearly stated assumptions, comment on the driver decelerations. Explain why vehicle mass alone is insufficient to predict injury.']}
];
function qa(data,prefix){return data.map((it,i)=>`<div class="q"><div class="num">${prefix}${i+1}</div><p><b>${it.q}</b></p><textarea aria-label="Your answer to ${prefix}${i+1}" placeholder="Write a prediction or explanation first…"></textarea><div class="tools"><button class="subtle" data-hint>Hint</button><button class="alt" data-answer disabled>Reveal after an attempt</button></div><div class="hint">${it.h||'Use the previous discussion.'}</div><div class="answer">${it.a}</div></div>`).join('');}
$('coachQs').innerHTML=qa(coach,'Q');$('derivation').innerHTML=qa(deriv,'D');
function renderMC(list,prefix){return list.map((a,i)=>`<div class="mc-item"><div class="mc-title">${prefix}${i+1}. ${a[0]}</div><div class="mc-options">${a[1].map((choice,j)=>`<label><input type="radio" name="${prefix}${i}" value="${j}"> ${'ABCD'[j]}. ${choice}</label>`).join('')}</div><div class="tools"><button class="subtle" data-mc-check data-correct="${a[2]}" data-explain="${a[3].replace(/"/g,'&quot;')}">Check answer</button></div><div class="mc-feedback"></div></div>`).join('');}
$('mc-early1').innerHTML=renderMC(early1,'E');$('mc-early2').innerHTML=renderMC(early2,'C');$('mc-early3').innerHTML=renderMC(early3,'T');$('mixedMC').innerHTML=renderMC(mixed,'M');
$('frq').innerHTML=frqs.map((q,i)=>`<div class="q"><div class="num">FRQ ${i+1}</div><h3>${q.title}</h3><p>${q.lead}</p>${q.parts.map((p,j)=>`<p>${p}</p><textarea aria-label="FRQ ${i+1} part ${j+1} working" placeholder="Reasoning and calculations…"></textarea>`).join('')}<p><a href="../resources/L43_Worked_Solutions.pdf" target="_blank" rel="noopener">Worked solutions PDF — open only after attempting</a></p></div>`).join('');
for(const q of document.querySelectorAll('.q')){let ta=q.querySelector('textarea'),btn=q.querySelector('[data-answer]');if(!ta||!btn)continue;ta.addEventListener('input',()=>btn.disabled=ta.value.trim().length<2);q.querySelector('[data-hint]').onclick=()=>{let h=q.querySelector('.hint');h.style.display=h.style.display==='block'?'none':'block'};btn.onclick=()=>q.querySelector('.answer').style.display='block';}
for(const b of document.querySelectorAll('[data-mc-check]')){b.addEventListener('click',()=>{let q=b.closest('.mc-item'),v=q.querySelector('input:checked'),out=q.querySelector('.mc-feedback');if(!v){out.textContent='Make a selection first.';out.style.display='block';return}let correct=+b.dataset.correct,ok=+v.value===correct;out.textContent=(ok?'Correct. ':'Try again. ')+(ok?b.dataset.explain:'Review your reasoning, then choose another answer.');out.classList.toggle('wrong',!ok);out.style.display='block';});}
for(const btn of document.querySelectorAll('[data-check-blanks]')){btn.addEventListener('click',()=>{let c=$(btn.dataset.checkBlanks),inputs=[...c.querySelectorAll('input')];if(inputs.some(x=>!x.value.trim())){let o=c.querySelector('.reveal-feedback');o.style.display='block';o.textContent='Complete every blank before checking.';return}let hits=0;inputs.forEach(x=>{let correct=x.dataset.answer.toLowerCase(),v=x.value.trim().toLowerCase();let right=v===correct||(correct==='equal'&&['same','unchanged'].includes(v))||(correct==='constant'&&['unchanged','the same'].includes(v));x.style.borderColor=right?'#2e9362':'#c57a37';if(right)hits++});let out=c.querySelector('.reveal-feedback');out.style.display='block';out.innerHTML=`${hits}/${inputs.length} matches. Check the words you used. <button class="subtle" data-show-expected>Show model conclusions</button>`;out.querySelector('button').onclick=()=>out.innerHTML=inputs.map((a,i)=>`${i+1}. <b>${a.dataset.answer}</b>`).join(' · ');});}
let timer=null,deadline=0,continued=false;
const cover=$('labOverlay'),labFrame=$('labFrame');
const timeoutBox=$('labTimeout');
function updateTimer(){
 if(continued){$('labTimer').textContent='Extra time';return;}
 const remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));
 $('labTimer').textContent=`${Math.floor(remaining/60)}:${String(remaining%60).padStart(2,'0')}`;
 if(remaining===0){
   if(timer){clearInterval(timer);timer=null;}
   timeoutBox.hidden=false;
 }
}
function openLab(){
 continued=false;deadline=Date.now()+10*60*1000;timeoutBox.hidden=true;
 $('labTitle').textContent='1D PhET investigation · Shared class results';
 if(!labFrame.src.endsWith('lab-guide.html'))labFrame.src='lab-guide.html';
 cover.style.display='block';document.body.style.overflow='hidden';
 if(timer)clearInterval(timer);updateTimer();timer=setInterval(updateTimer,500);
}
function closeLab(){
 if(timer)clearInterval(timer);timer=null;timeoutBox.hidden=true;
 cover.style.display='none';document.body.style.overflow='';
 const section=$('after-one');section.style.display='block';
 section.scrollIntoView({behavior:'smooth',block:'start'});
}
for(const b of document.querySelectorAll('[data-open]'))b.addEventListener('click',openLab);
$('closeLab').addEventListener('click',closeLab);
$('timeoutReturn').addEventListener('click',closeLab);
$('timeoutContinue').addEventListener('click',()=>{continued=true;timeoutBox.hidden=true;$('labTimer').textContent='Extra time';});
window.addEventListener('message',event=>{
 if(event.source!==labFrame.contentWindow)return;
 if(event.data?.type==='u43:returnToCoach')closeLab();
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&cover.style.display==='block')closeLab();});
window.addEventListener('focus',()=>{if(cover.style.display==='block')updateTimer();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&cover.style.display==='block')updateTimer();});
if(new URLSearchParams(window.location.search).get('resume')==='one'){
 $('after-one').style.display='block';
}
$('finishTwo').onclick=()=>{const div=$('after-two');div.style.display='block';div.scrollIntoView({behavior:'smooth',block:'start'});};
