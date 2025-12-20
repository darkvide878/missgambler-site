
const SUPABASE_URL = "https://evnodxrryguyaelnjtaa.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2bm9keHJyeWd1eWFlbG5qdGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMzE1MTYsImV4cCI6MjA4MTgwNzUxNn0.9VyDJ93iZAiF302f3PDBtKEtFNQ77IFxf33mjN20fYA";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const modal = document.getElementById("authModal");
document.getElementById("loginBtn").onclick = ()=> modal.classList.remove("hidden");
document.getElementById("signupBtn").onclick = ()=> modal.classList.remove("hidden");

document.getElementById("doLogin").onclick = async () => {
  const email = email.value;
  const password = password.value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  alert(error ? error.message : "Logged in");
};

document.getElementById("doSignup").onclick = async () => {
  const email = email.value;
  const password = password.value;
  const { error } = await supabase.auth.signUp({ email, password });
  alert(error ? error.message : "Check your email to confirm");
};

// Chips rain
document.querySelectorAll(".js-chip").forEach(el=>{
  el.addEventListener("click", ()=>{
    for(let i=0;i<6;i++){
      const c=document.createElement("img");
      c.src="assets/chips.png";
      c.style.position="fixed";
      c.style.left=Math.random()*window.innerWidth+"px";
      c.style.top="-40px";
      c.style.width="40px";
      c.style.transition="top 2.5s linear";
      document.body.appendChild(c);
      setTimeout(()=>c.style.top="100%",50);
      setTimeout(()=>c.remove(),3000);
    }
  })
})
