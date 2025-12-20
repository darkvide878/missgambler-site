
const SUPABASE_URL = "https://evnodxrryguyaelnjtaa.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2bm9keHJyeWd1eWFlbG5qdGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMzE1MTYsImV4cCI6MjA4MTgwNzUxNn0.9VyDJ93iZAiF302f3PDBtKEtFNQ77IFxf33mjN20fYA";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const modal = document.getElementById("authModal");
loginBtn.onclick = signupBtn.onclick = () => modal.classList.remove("hidden");

doLogin.onclick = async()=>{
 const {error} = await supabase.auth.signInWithPassword({email:email.value,password:password.value});
 alert(error?error.message:"Logged in");
};

doSignup.onclick = async()=>{
 const {error} = await supabase.auth.signUp({email:email.value,password:password.value});
 alert(error?error.message:"Confirm via email");
};

const chipColors=["red","blue","green","black","yellow","purple"];
document.querySelectorAll(".js-chip,.cta").forEach(el=>{
 el.onclick=()=>{
  for(let i=0;i<8;i++){
   const c=document.createElement("img");
   const col=chipColors[Math.floor(Math.random()*chipColors.length)];
   c.src=`assets/chips/${col}.png`;
   c.style.position="fixed";
   c.style.left=Math.random()*innerWidth+"px";
   c.style.top="-120px";
   c.style.width="46px";
   c.style.transition="top 3.5s linear";
   document.body.appendChild(c);
   setTimeout(()=>c.style.top="110%",50);
   setTimeout(()=>c.remove(),3800);
  }
 };
});
