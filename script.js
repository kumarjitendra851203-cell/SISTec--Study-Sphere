// ==================== DATA ====================
const state = {
  role:null, classData:{},
  resources:[
    {id:1,subject:'Data Structures',title:'Chapter 3 - Binary Trees',type:'pdf',size:'1.8 MB',bookmarked:false},
    {id:2,subject:'Data Structures',title:'Tree Traversal Explained',type:'yt',bookmarked:true},
    {id:3,subject:'Operating Systems',title:'Process Scheduling PYQ 2023',type:'pyq',size:'890 KB',bookmarked:false},
    {id:4,subject:'DBMS',title:'Normalization Notes',type:'pdf',size:'2.1 MB',bookmarked:false},
    {id:5,subject:'Computer Networks',title:'OSI Model Assignment',type:'pdf',size:'540 KB',bookmarked:true},
    {id:6,subject:'Mathematics',title:'Calculus Chapter 5',type:'pdf',size:'3.2 MB',bookmarked:false},
    {id:7,subject:'Operating Systems',title:'Deadlock Examples',type:'yt',bookmarked:false},
    {id:8,subject:'DBMS',title:'SQL Practice Questions',type:'pyq',size:'1.1 MB',bookmarked:false},
  ],
  quizzes:[
    {id:1,title:'Mid-Sem: Data Structures',subject:'Data Structures',published:true,questions:[
      {q:'Which data structure uses LIFO?',options:['Queue','Stack','Tree','Heap'],correct:1},
      {q:'Time complexity of binary search?',options:['O(n)','O(n²)','O(log n)','O(1)'],correct:2},
      {q:'What is a complete binary tree?',options:['All nodes have 2 children','All levels full except last','Balanced tree','None'],correct:1},
      {q:'Which traversal gives sorted output from BST?',options:['Preorder','Postorder','Inorder','Level order'],correct:2},
    ]},
    {id:2,title:'Quick Test: OS Basics',subject:'Operating Systems',published:true,questions:[
      {q:'What does CPU scheduling decide?',options:['Memory allocation','Process execution order','File access','Network speed'],correct:1},
      {q:'Deadlock requires how many conditions?',options:['2','3','4','5'],correct:2},
      {q:'Virtual memory allows programs to use...',options:['More CPU','More RAM than physical','Network storage','GPU memory'],correct:1},
    ]},
    {id:3,title:'DBMS Unit 2',subject:'DBMS',published:true,questions:[
      {q:'SQL stands for?',options:['Structured Query Language','Simple Query Language','Sequential Query Logic','Stored Query Language'],correct:0},
      {q:'Primary key cannot be?',options:['Unique','Indexed','NULL','Integer'],correct:2},
    ]},
  ],
  placements:[
    // High Package
    {id:1,company:'Amazon',emoji:'🟠',role:'SDE / SDE Intern',package:'₹15–21 LPA',pkgNum:18,skills:['Java','AWS','DSA','Problem Solving'],cgpa:7.0,type:'On-Campus',tier:'high',batch:'2025'},
    {id:2,company:'Cisco',emoji:'🔵',role:'Software Engineer',package:'₹10–18 LPA',pkgNum:14,skills:['Networking','C++','Embedded'],cgpa:7.5,type:'On-Campus',tier:'high',batch:'2025'},
    {id:3,company:'Deloitte',emoji:'🟢',role:'Analyst / Consultant',package:'₹7–12 LPA',pkgNum:9,skills:['Consulting','Python','Analytics'],cgpa:7.0,type:'On-Campus',tier:'high',batch:'2025'},
    {id:4,company:'Bajaj Finserv',emoji:'🔷',role:'Software Engineer',package:'₹10–12 LPA',pkgNum:11,skills:['Java','FinTech','Spring Boot'],cgpa:7.5,type:'On-Campus',tier:'high',batch:'2025'},
    {id:5,company:'Tejas Networks',emoji:'🟡',role:'Software Developer',package:'₹8–10 LPA',pkgNum:9,skills:['C++','Networking','DSP'],cgpa:7.0,type:'On-Campus',tier:'high',batch:'2025'},
    // Average
    {id:6,company:'Accenture',emoji:'🟣',role:'Associate / ASE',package:'₹4.5–8 LPA',pkgNum:6,skills:['Any Language','Cloud','Agile'],cgpa:6.5,type:'Mass Hiring',tier:'avg',batch:'2025'},
    {id:7,company:'Cognizant',emoji:'🔵',role:'Programmer Analyst',package:'₹4–7 LPA',pkgNum:5,skills:['Java','SQL','Testing'],cgpa:6.0,type:'Mass Hiring',tier:'avg',batch:'2025'},
    {id:8,company:'IBM',emoji:'⚫',role:'Associate Software Engineer',package:'₹4–7 LPA',pkgNum:5,skills:['Cloud','AI/ML','DevOps'],cgpa:6.5,type:'On-Campus',tier:'avg',batch:'2025'},
    {id:9,company:'Capgemini',emoji:'🔷',role:'Analyst',package:'₹4–6.5 LPA',pkgNum:5,skills:['Python','SAP','Agile'],cgpa:6.0,type:'Mass Hiring',tier:'avg',batch:'2025'},
    {id:10,company:'Zensar Technologies',emoji:'🟤',role:'Engineer Trainee',package:'₹4–6 LPA',pkgNum:5,skills:['Java','React','Testing'],cgpa:6.0,type:'On-Campus',tier:'avg',batch:'2025'},
    // Mass Hiring
    {id:11,company:'TCS',emoji:'🔵',role:'Systems Engineer',package:'₹3–4 LPA',pkgNum:3.5,skills:['Any Language','Communication','Aptitude'],cgpa:6.0,type:'Mass Hiring',tier:'mass',batch:'2025'},
    {id:12,company:'Infosys',emoji:'🟢',role:'Systems Engineer',package:'₹3–4.5 LPA',pkgNum:3.7,skills:['Java','Python','SQL'],cgpa:6.0,type:'Mass Hiring',tier:'mass',batch:'2025'},
    {id:13,company:'Wipro',emoji:'🟡',role:'Project Engineer',package:'₹3–4 LPA',pkgNum:3.5,skills:['Any Stack','Communication'],cgpa:6.0,type:'Mass Hiring',tier:'mass',batch:'2025'},
    {id:14,company:'HCLTech',emoji:'🔵',role:'Graduate Engineer Trainee',package:'₹3–4 LPA',pkgNum:3.5,skills:['Any Language','Aptitude'],cgpa:6.0,type:'Mass Hiring',tier:'mass',batch:'2025'},
  ],
  studentResults:[],
  currentQuiz:null, currentQIndex:0, currentAnswers:[],
  hcLog:[], faceDetectionModel:null,
  issuedBooks:[],
  currentPlacementFilter:'high',
};

const classes={a:['A1','A2','A3','A4','A5'],b:['B1','B2','B3','B4','B5','B6']};

// ==================== BUS ROUTES DATA ====================
const BUS_ROUTES = [
  {num:'24',name:'Narela Route',stops:[
    {time:'7:20',name:'Nizamuddin'},
    {time:'7:30',name:'Tanatan Dhaba'},
    {time:'7:35',name:'Narela Jod'},
    {time:'7:38',name:'Ayodhya Nagar'},
    {time:'7:44',name:'Green Valley'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
  {num:'42/02/49',name:'Karond Route (3 Buses!)',badge:'3 BUSES',stops:[
    {time:'7:45',name:'Karond Chauraha'},
    {time:'7:50',name:'RGPV'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
  {num:'06',name:'Neori Mandir Route',stops:[
    {time:'7:45',name:'Neori Mandir'},
    {time:'7:50',name:'Lalghati'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
  {num:'11',name:'Chhola Road Route',stops:[
    {time:'7:05',name:'Chopda'},
    {time:'7:32',name:'Peoples Hospital'},
    {time:'7:35',name:'BMHRC'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
  {num:'12',name:'Railway Station Route',stops:[
    {time:'7:00',name:'Coach Factory'},
    {time:'7:05',name:'Bhopal Railway Station'},
    {time:'7:15',name:'Nadra Bus Stop'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
  {num:'28',name:'Katara / 5 No Stop Route',stops:[
    {time:'7:00',name:'Amaltas'},
    {time:'7:05',name:'Katara Chowki'},
    {time:'7:50',name:'5 No Stop'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
  {num:'30',name:'Kolar Route',stops:[
    {time:'6:35',name:'Kajli Kheda'},
    {time:'7:00',name:'Bima Kunj'},
    {time:'7:15',name:'Chunabhatti'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
  {num:'31',name:'Mandideep Route',stops:[
    {time:'6:30',name:'Satlapur'},
    {time:'6:58',name:'Ashima Mall'},
    {time:'7:30',name:'Board Office'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
  {num:'18',name:'City Route',stops:[
    {time:'7:10',name:'Jyoti Talkies'},
    {time:'7:35',name:'Bharat Talkies'},
    {time:'7:55',name:'Idgah Hills'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
  {num:'50',name:'Nariyal Kheda Route',stops:[
    {time:'7:35',name:'Bhopal Talkies'},
    {time:'7:45',name:'Nariyal Kheda'},
    {time:'8:15',name:'🏫 SISTec GN (Final)'},
  ]},
];

// ==================== LIBRARY BOOKS DATA ====================
const LIBRARY_BOOKS = {
  'Sem 1':{
    desc:'First semester — Engineering fundamentals & basics',
    books:[
      {title:'Higher Engineering Mathematics',author:'B.S. Grewal',subject:'Mathematics',icon:'📐',available:3,total:5,tag:'Must Read'},
      {title:'Engineering Physics',author:'S.K. Sengar',subject:'Physics',icon:'⚛️',available:2,total:4,tag:''},
      {title:'Engineering Chemistry',author:'Jain & Jain',subject:'Chemistry',icon:'🧪',available:4,total:5,tag:''},
      {title:'Basic Electrical Engineering',author:'D.P. Kothari',subject:'BEE',icon:'⚡',available:1,total:3,tag:'High Demand'},
      {title:'Engineering Graphics',author:'K.L. Narayana',subject:'EG',icon:'📏',available:5,total:6,tag:''},
      {title:'Communicative English',author:'M. Ashraf Rizvi',subject:'English',icon:'🗣️',available:6,total:8,tag:''},
    ]
  },
  'Sem 2':{
    desc:'Second semester — Applied sciences & electronics',
    books:[
      {title:'Higher Engineering Mathematics',author:'B.S. Grewal',subject:'Maths II',icon:'📐',available:3,total:5,tag:'Must Read'},
      {title:'Engineering Mechanics',author:'Meriam & Kraige',subject:'Mechanics',icon:'⚙️',available:2,total:4,tag:''},
      {title:'Basic Electronics',author:'B.L. Theraja',subject:'ECA',icon:'💡',available:3,total:5,tag:''},
      {title:'Environmental Science',author:'R. Rajagopalan',subject:'ES',icon:'🌿',available:7,total:8,tag:''},
      {title:'Workshop Technology',author:'B.S. Raghuwanshi',subject:'Workshop',icon:'🔧',available:4,total:5,tag:''},
    ]
  },
  'Sem 3':{
    desc:'Core CSE subjects begin — DSA & Programming',
    books:[
      {title:'Data Structures using C',author:'Reema Thareja',subject:'Data Structures',icon:'🌳',available:2,total:6,tag:'High Demand'},
      {title:'Introduction to Algorithms',author:'CLRS (Cormen)',subject:'Data Structures',icon:'🔢',available:1,total:3,tag:'Must Read'},
      {title:'Digital Logic Design',author:'M. Morris Mano',subject:'DLD',icon:'🔌',available:3,total:5,tag:''},
      {title:'Object-Oriented Programming in Java',author:'E. Balagurusamy',subject:'OOP Java',icon:'☕',available:2,total:4,tag:'High Demand'},
      {title:'Higher Engineering Mathematics',author:'B.S. Grewal',subject:'Maths III',icon:'📐',available:4,total:5,tag:''},
      {title:'Computer Organization',author:'Carl Hamacher',subject:'COA',icon:'💻',available:2,total:4,tag:''},
    ]
  },
  'Sem 4':{
    desc:'Advanced algorithms, OS and networks',
    books:[
      {title:'Algorithm Design',author:'Kleinberg & Tardos',subject:'Algorithms',icon:'🔍',available:2,total:4,tag:'Must Read'},
      {title:'Database System Concepts',author:'Silberschatz',subject:'DBMS',icon:'🗄️',available:1,total:4,tag:'High Demand'},
      {title:'Operating System Concepts',author:'Galvin (Dinosaur Book)',subject:'OS',icon:'🦕',available:1,total:3,tag:'Must Read'},
      {title:'Computer Networks',author:'Andrew Tanenbaum',subject:'CN',icon:'🌐',available:2,total:4,tag:'High Demand'},
      {title:'Introduction to Automata Theory',author:'Hopcroft & Ullman',subject:'TOC',icon:'🤖',available:3,total:4,tag:''},
      {title:'Discrete Mathematics',author:'Kenneth Rosen',subject:'Maths',icon:'📊',available:4,total:5,tag:''},
    ]
  },
  'Sem 5':{
    desc:'Advanced CSE — Web, Compiler, Software Engg.',
    books:[
      {title:'Software Engineering',author:'Roger Pressman',subject:'SE',icon:'🏗️',available:3,total:5,tag:'Must Read'},
      {title:'Compiler Design',author:'Alfred V. Aho',subject:'CD',icon:'⚙️',available:2,total:3,tag:''},
      {title:'Web Technologies',author:'Chris Bates',subject:'WT',icon:'🌐',available:4,total:6,tag:''},
      {title:'Microprocessors & Interfacing',author:'Douglas Hall',subject:'MP',icon:'🔲',available:2,total:4,tag:''},
      {title:'Computer Graphics',author:'Foley, van Dam',subject:'CG',icon:'🎨',available:3,total:4,tag:''},
    ]
  },
  'Sem 6':{
    desc:'Specializations — AI, ML, Cloud & Security',
    books:[
      {title:'Artificial Intelligence',author:'Russell & Norvig',subject:'AI',icon:'🤖',available:1,total:3,tag:'Must Read'},
      {title:'Machine Learning',author:'Tom Mitchell',subject:'ML',icon:'🧠',available:1,total:2,tag:'High Demand'},
      {title:'Information Security',author:'William Stallings',subject:'IS',icon:'🔒',available:3,total:4,tag:''},
      {title:'Cloud Computing',author:'Rajkumar Buyya',subject:'Cloud',icon:'☁️',available:2,total:3,tag:''},
      {title:'Mobile App Development',author:'Reto Meier',subject:'MAD',icon:'📱',available:4,total:5,tag:''},
    ]
  },
  'Sem 7':{
    desc:'Final year electives & project preparation',
    books:[
      {title:'Deep Learning',author:'Goodfellow et al.',subject:'DL',icon:'🧬',available:1,total:2,tag:'High Demand'},
      {title:'Distributed Systems',author:'Tanenbaum',subject:'DS',icon:'🌍',available:2,total:3,tag:''},
      {title:'Internet of Things',author:'Arshdeep Bahga',subject:'IoT',icon:'📡',available:3,total:4,tag:''},
      {title:'Big Data Analytics',author:'Seema Acharya',subject:'BDA',icon:'📊',available:2,total:3,tag:''},
      {title:'Project Management',author:'Harold Kerzner',subject:'PM',icon:'📋',available:5,total:6,tag:''},
    ]
  },
  'Sem 8':{
    desc:'Final semester — Project, placement & electives',
    books:[
      {title:'Cracking the Coding Interview',author:'Gayle McDowell',subject:'Placement',icon:'💼',available:1,total:3,tag:'Must Read'},
      {title:'System Design Interview',author:'Alex Xu',subject:'Placement',icon:'🏛️',available:1,total:2,tag:'High Demand'},
      {title:'Clean Code',author:'Robert C. Martin',subject:'Best Practices',icon:'✨',available:2,total:3,tag:'Must Read'},
      {title:'The Pragmatic Programmer',author:'Hunt & Thomas',subject:'Career',icon:'🎯',available:2,total:3,tag:''},
      {title:'Introduction to Blockchain',author:'Tiana Laurence',subject:'Blockchain',icon:'🔗',available:3,total:4,tag:''},
    ]
  },
};

let currentLibSem = 'Sem 1';
let currentPlacementTier = 'high';
let builderQuestions = [];
let activeSubject = 'All';

// ==================== LOCAL STORAGE / STATE ====================
function saveState() {
  localStorage.setItem('eduSyncState', JSON.stringify({
    resources: state.resources,
    quizzes: state.quizzes,
    placements: state.placements,
    studentResults: state.studentResults,
    hcLog: state.hcLog,
    classData: state.classData,
    issuedBooks: state.issuedBooks
  }));
}
function loadState() {
  const saved = localStorage.getItem('eduSyncState');
  if (saved) {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
  } else {
    saveState();
  }
}
function loadUsers() {
  const users = localStorage.getItem('eduSyncUsers');
  if (!users) {
    const demoUsers = {
      'teacher@sistec.ac.in': { name: 'Prof. Raj', role: 'teacher', email: 'teacher@sistec.ac.in', password: 'password' },
      'student@sistec.ac.in': { name: 'Bhaskar Sharma', role: 'student', email: 'student@sistec.ac.in', password: 'password' }
    };
    saveUsers(demoUsers);
    return demoUsers;
  }
  return JSON.parse(users);
}
function saveUsers(users) {
  localStorage.setItem('eduSyncUsers', JSON.stringify(users));
}

let authMode = 'login';
function setAuthMode(mode, el) {
  authMode = mode;
  document.querySelectorAll('#login .tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('auth-signup-fields').style.display = mode === 'signup' ? 'block' : 'none';
  document.getElementById('auth-role-field').style.display = mode === 'signup' ? 'block' : 'none';
  document.getElementById('demo-hints').style.display = mode === 'signup' ? 'none' : 'block';
  document.getElementById('auth-btn').textContent = mode === 'signup' ? 'Create Account →' : 'Sign In →';
}

function doAuth() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  if (!email || !pass) { showToast('Please enter email and password', false); return; }
  
  const users = loadUsers();

  if (authMode === 'signup') {
    const name = document.getElementById('reg-name').value.trim();
    const role = document.getElementById('login-role').value;
    if (!name) { showToast('Please enter Full Name', false); return; }
    if (users[email]) { showToast('Email already registered', false); return; }
    
    users[email] = { name, role, email, password: pass };
    saveUsers(users);
    showToast('Account created! Please log in.', true);
    setAuthMode('login', document.querySelectorAll('#login .tab')[0]); // Switch to login tab
    document.getElementById('login-pass').value = '';
    return;
  }

  // Login Mode
  const user = users[email];
  if (!user || user.password !== pass) {
    showToast('Invalid Email or Password', false);
    return;
  }

  state.role = user.role;
  state.currentUser = user;
  
  // Set UI Names
  const initials = user.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
  if (user.role === 'teacher') {
    document.getElementById('t-avatar').textContent = initials;
    document.getElementById('t-greeting').textContent = `Good morning, ${user.name} 👋`;
  } else {
    document.getElementById('s-avatar').textContent = initials;
    document.getElementById('s-greeting').textContent = `Hello, ${user.name} 👋`;
  }

  showScreen(user.role === 'teacher' ? 'teacher-app' : 'student-app');
  initApp();
  showToast(`Welcome back, ${user.name}! 👋`, true);
}
function logout(){
  showScreen('login');
}
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ==================== NAV ====================
function switchPage(role,page,el){
  const prefix=role==='teacher'?'t':'s';
  document.querySelectorAll(`#${role}-app .page`).forEach(p=>p.classList.remove('active'));
  document.getElementById(`${prefix}-${page}`)?.classList.add('active');
  document.querySelectorAll(`#${role}-nav .nav-item`).forEach(n=>n.classList.remove('active'));
  el?.classList.add('active');
  if(role==='student'&&page==='resources')renderStudentResources();
  if(role==='student'&&page==='quiz'){backToQuizList();renderStudentQuizList();}
  if(role==='student'&&page==='analytics')renderAnalytics();
  if(role==='student'&&page==='placement')renderStudentPlacements();
  if(role==='student'&&page==='library')renderLibrary();
  if(role==='student'&&page==='bus')renderBusRoutes();
  if(role==='teacher'&&page==='resources')renderTeacherResources();
  if(role==='teacher'&&page==='placement')renderTeacherPlacements();
  if(role==='teacher'&&page==='quiz')renderTeacherResults();
  if(role==='teacher'&&page==='headcount')renderHeadcountPage();
}

// ==================== INIT ====================
function initApp(){
  loadState();
  const now=new Date();
  const ds=now.toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  ['t-date','s-date'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=ds;});
  renderClassGrid('class-grid');
  renderClassGrid('class-grid-a','a');
  renderClassGrid('class-grid-b','b');
  renderTeacherResources();
  renderTeacherResults();
  renderTeacherPlacements();
  initQuizBuilder();
  renderStudentUpcoming();
  updateTotals();
  updateStudentStats();
  // Pre-load bus & library on first student visit
  renderBusRoutes();
  renderLibrary();
}

// ==================== CLASS GRID ====================
function renderClassGrid(containerId,div=null){
  const el=document.getElementById(containerId);if(!el)return;
  const list=div?classes[div]:[...classes.a,...classes.b];
  el.innerHTML=list.map(cls=>{
    const cnt=state.classData[cls];
    return `<div class="class-card${cnt!==undefined?' has-count':''}" onclick="openCameraFor('${cls}')">
      <div class="class-name">${cls}</div>
      ${cnt!==undefined?`<div class="class-count">${cnt}</div><div class="class-time">Just now</div>`:'<div style="font-size:11px;color:var(--muted);margin-top:3px">Tap to count</div>'}
    </div>`;
  }).join('');
}
function updateTotals(){
  const vals=Object.values(state.classData);
  const total=vals.reduce((a,b)=>a+b,0);
  const counted=vals.length;
  ['t-total-count','t-hc-total'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=total||'—';});
  const el3=document.getElementById('t-hc-classes');if(el3)el3.textContent=counted;
}

// ==================== CAMERA / PHOTO UPLOAD ====================
let uploadedImage = null;

function openCamera(){openCameraFor(document.getElementById('camera-class')?.value||'A1');}
function openCameraFor(cls){
  document.getElementById('camera-class').value=cls;
  document.getElementById('camera-modal').classList.add('open');
  document.getElementById('camera-result').style.display='none';
  document.getElementById('retake-btn').style.display='none';
  document.getElementById('save-count-btn').style.display='none';
  document.getElementById('camera-status').textContent='Tap to Upload Class Photo';
  document.getElementById('camera-preview').classList.remove('scanning');
  document.getElementById('camera-placeholder-content').style.display='flex';
  document.getElementById('camera-canvas').style.display='none';
  uploadedImage = null;
}
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.getElementById('camera-canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width; canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      document.getElementById('camera-placeholder-content').style.display='none';
      canvas.style.display='block';
      document.getElementById('camera-preview').classList.add('scanning');
      document.getElementById('camera-status').textContent='AI analyzing faces...';
      uploadedImage = img;
      setTimeout(() => analyzeImage(canvas), 1500); // Simulate processing time for UX
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
async function analyzeImage(canvas){
  const ctx = canvas.getContext('2d');
  try {
    if(!state.faceDetectionModel){
      showToast('Loading AI model...',true);
      state.faceDetectionModel = await blazeface.load();
    }
    const predictions = await state.faceDetectionModel.estimateFaces(canvas, false);
    const faceCount = predictions.length;
    
    // Draw bounding boxes
    ctx.strokeStyle='#6c8fff'; ctx.lineWidth = Math.max(2, canvas.width/200); ctx.fillStyle='rgba(108,143,255,0.15)';
    predictions.forEach(p=>{
      const [x,y]=[p.topLeft[0],p.topLeft[1]];
      const w=p.bottomRight[0]-x, h=p.bottomRight[1]-y;
      ctx.fillRect(x,y,w,h); ctx.strokeRect(x,y,w,h);
      ctx.fillStyle='#6c8fff'; 
      ctx.font=`bold ${Math.max(12, canvas.width/40)}px sans-serif`; 
      ctx.fillText('👤',x+3,y-4);
      ctx.fillStyle='rgba(108,143,255,0.15)';
    });

    document.getElementById('camera-preview').classList.remove('scanning');
    document.getElementById('camera-status').textContent=`✓ Detected ${faceCount} face${faceCount!==1?'s':''}`;
    document.getElementById('camera-result').style.display='block';
    document.getElementById('camera-count-display').textContent=faceCount;
    document.getElementById('retake-btn').style.display='inline-flex';
    document.getElementById('save-count-btn').style.display='inline-flex';
    window._pendingCount = faceCount;
    showToast(`✓ Found ${faceCount} ${faceCount===1?'person':'people'}`,true);
  } catch(err){
    document.getElementById('camera-preview').classList.remove('scanning');
    document.getElementById('camera-status').textContent='Detection failed — set manually';
    document.getElementById('camera-result').style.display='block';
    document.getElementById('camera-count-display').textContent='0';
    document.getElementById('retake-btn').style.display='inline-flex';
    document.getElementById('save-count-btn').style.display='inline-flex';
    window._pendingCount=0;
    showToast('Use +/- buttons to set count',false);
  }
}
function adjustCount(d){
  window._pendingCount=Math.max(0,(window._pendingCount||0)+d);
  document.getElementById('camera-count-display').textContent=window._pendingCount;
}
function retakePhoto(){
  document.getElementById('camera-canvas').style.display='none';
  document.getElementById('camera-result').style.display='none';
  document.getElementById('retake-btn').style.display='none';
  document.getElementById('save-count-btn').style.display='none';
  document.getElementById('camera-placeholder-content').style.display='flex';
  document.getElementById('camera-status').textContent='Tap to Upload Class Photo';
}
function closeCamera(){
  document.getElementById('camera-modal').classList.remove('open');
}
function saveHeadcount(){
  const cls=document.getElementById('camera-class').value;
  const cnt=window._pendingCount||0;
  state.classData[cls]=cnt;
  const now=new Date();
  state.hcLog.unshift({cls,cnt,time:now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})});
  saveState();
  renderClassGrid('class-grid'); renderClassGrid('class-grid-a','a'); renderClassGrid('class-grid-b','b');
  updateTotals(); renderHCLog(); closeCamera();
  showToast(`${cls}: ${cnt} students saved ✓`,true);
}
function renderHCLog(){
  const el=document.getElementById('hc-log');if(!el)return;
  if(!state.hcLog.length){el.innerHTML='<div class="empty"><div class="empty-icon">📋</div><div class="empty-text">No captures yet</div></div>';return;}
  el.innerHTML=state.hcLog.map(l=>`<div class="result-row"><div><div class="result-name">Class ${l.cls}</div><div style="font-size:11px;color:var(--muted)">${l.time}</div></div><div class="result-score" style="color:var(--accent)">${l.cnt}</div></div>`).join('');
}
function renderHeadcountPage(){renderClassGrid('class-grid-a','a');renderClassGrid('class-grid-b','b');renderHCLog();updateTotals();}

// ==================== RESOURCES ====================
const resTypes={pdf:{icon:'📄',cls:'pdf',label:'PDF'},yt:{icon:'▶️',cls:'yt',label:'YouTube'},pyq:{icon:'📋',cls:'pyq',label:'PYQ'},bk:{icon:'📖',cls:'bk',label:'Book'}};
function renderTeacherResources(){
  const el=document.getElementById('t-resource-list');if(!el)return;
  el.innerHTML=state.resources.map(r=>`<div class="resource-item">
    <div class="resource-icon ${resTypes[r.type]?.cls||'pdf'}">${resTypes[r.type]?.icon||'📄'}</div>
    <div class="resource-meta"><div class="resource-name">${r.title}</div><div class="resource-sub">${r.subject} · ${resTypes[r.type]?.label} ${r.size?'· '+r.size:''}</div></div>
    <div class="resource-actions"><div class="icon-btn" onclick="deleteResource(${r.id})">🗑</div></div>
  </div>`).join('');
}
function teacherUploadResource(){
  const subj=document.getElementById('res-subject').value;
  const title=document.getElementById('res-title').value||'Untitled Resource';
  const typeMap={'PDF Notes':'pdf','YouTube Link':'yt','PYQ':'pyq','Assignment':'pdf'};
  const type=typeMap[document.getElementById('res-type').value]||'pdf';
  state.resources.unshift({id:Date.now(),subject:subj,title,type,size:'1.0 MB',bookmarked:false});
  saveState();
  renderTeacherResources(); renderStudentResources();
  showToast('Resource uploaded successfully ✓',true);
  document.getElementById('res-title').value='';
}
function deleteResource(id){state.resources=state.resources.filter(r=>r.id!==id);saveState();renderTeacherResources();showToast('Resource deleted',false);}
function renderStudentResources(filter=''){
  const subjects=['All',...new Set(state.resources.map(r=>r.subject))];
  const tabsEl=document.getElementById('s-subject-tabs');
  if(tabsEl)tabsEl.innerHTML=subjects.map(s=>`<div class="tab${s===activeSubject?' active':''}" onclick="setSubjectTab('${s}')">${s==='All'?'All':s.split(' ').map(w=>w[0]).join('')}</div>`).join('');
  const search=document.getElementById('s-search')?.value||filter;
  let list=state.resources;
  if(activeSubject!=='All')list=list.filter(r=>r.subject===activeSubject);
  if(search)list=list.filter(r=>r.title.toLowerCase().includes(search.toLowerCase())||r.subject.toLowerCase().includes(search.toLowerCase()));
  const el=document.getElementById('s-resource-list');if(!el)return;
  if(!list.length){el.innerHTML='<div class="empty"><div class="empty-icon">📚</div><div class="empty-text">No resources found</div></div>';return;}
  el.innerHTML=list.map(r=>`<div class="resource-item">
    <div class="resource-icon ${resTypes[r.type]?.cls||'pdf'}">${resTypes[r.type]?.icon||'📄'}</div>
    <div class="resource-meta"><div class="resource-name">${r.title}</div><div class="resource-sub">${r.subject} · ${resTypes[r.type]?.label||''} ${r.size?'· '+r.size:''}</div></div>
    <div class="resource-actions">
      <div class="icon-btn" onclick="toggleBookmark(${r.id})" title="Bookmark">${r.bookmarked?'🔖':'🤍'}</div>
      <div class="icon-btn" onclick="showToast('Opening…',true)" title="Open">↗</div>
    </div>
  </div>`).join('');
  updateStudentStats();
}
function setSubjectTab(s){activeSubject=s;renderStudentResources();}
function filterResources(v){renderStudentResources(v);}
function toggleBookmark(id){
  const r=state.resources.find(x=>x.id===id);if(!r)return;
  r.bookmarked=!r.bookmarked; saveState(); renderStudentResources();
  showToast(r.bookmarked?'Bookmarked!':'Removed bookmark',r.bookmarked);
}

// ==================== QUIZ BUILDER ====================
function initQuizBuilder(){builderQuestions=[{q:'',options:['','','',''],correct:0}];renderQuestionsList();}
function addQuestion(){builderQuestions.push({q:'',options:['','','',''],correct:0});renderQuestionsList();}
function renderQuestionsList(){
  const el=document.getElementById('questions-list');if(!el)return;
  el.innerHTML=builderQuestions.map((bq,qi)=>`<div class="question-builder">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px">
      <div style="font-size:11px;font-weight:600;color:var(--muted)">Q${qi+1}</div>
      ${builderQuestions.length>1?`<div class="icon-btn" onclick="removeQuestion(${qi})" style="color:var(--danger)">✕</div>`:''}
    </div>
    <input class="q-input" placeholder="Question text..." value="${bq.q}" oninput="updateBQ(${qi},'q',this.value)"/>
    ${bq.options.map((opt,oi)=>`<div class="option-row">
      <div class="correct-dot${bq.correct===oi?' selected':''}" onclick="setCorrect(${qi},${oi})"></div>
      <input class="q-input" style="margin:0;flex:1" placeholder="Option ${oi+1}" value="${opt}" oninput="updateBQOpt(${qi},${oi},this.value)"/>
    </div>`).join('')}
  </div>`).join('');
}
function updateBQ(qi,key,val){builderQuestions[qi][key]=val;}
function updateBQOpt(qi,oi,val){builderQuestions[qi].options[oi]=val;}
function setCorrect(qi,oi){builderQuestions[qi].correct=oi;renderQuestionsList();}
function removeQuestion(qi){builderQuestions.splice(qi,1);renderQuestionsList();}
function publishQuiz(){
  const title=document.getElementById('quiz-title-input').value||'Untitled Quiz';
  const subject=document.getElementById('quiz-subject').value;
  const qs=builderQuestions.filter(q=>q.q.trim());
  if(!qs.length){showToast('Add at least one question',false);return;}
  state.quizzes.push({id:Date.now(),title,subject,published:true,questions:qs});
  saveState();
  renderStudentQuizList(); renderStudentUpcoming(); renderTeacherResults();
  showToast(`Quiz "${title}" published!`,true);
  document.getElementById('quiz-title-input').value='';
  builderQuestions=[{q:'',options:['','','',''],correct:0}]; renderQuestionsList();
}
function renderTeacherResults(){
  const el=document.getElementById('t-results-list');if(!el)return;
  if(!state.studentResults.length){el.innerHTML='<div class="empty"><div class="empty-icon">📊</div><div class="empty-text">No quiz submissions yet</div></div>';return;}
  el.innerHTML=state.studentResults.map(r=>`<div class="result-row">
    <div><div class="result-name">${r.quizTitle}</div><div style="font-size:11px;color:var(--muted)">${r.time}</div></div>
    <div><div class="result-score" style="color:var(--accent)">${r.score}/${r.total}</div><div style="font-size:10px;color:var(--muted);text-align:right">${Math.round(r.score/r.total*100)}%</div></div>
  </div>`).join('');
}

// ==================== QUIZ STUDENT ====================
function renderStudentQuizList(){
  const el=document.getElementById('s-quiz-list');if(!el)return;
  const attempted=new Set(state.studentResults.map(r=>r.quizId));
  el.innerHTML=state.quizzes.filter(q=>q.published).map(q=>`<div class="quiz-card">
    <div class="quiz-title">${q.title}</div>
    <div class="quiz-meta">${q.subject} · ${q.questions.length} questions ${attempted.has(q.id)?'· <span style="color:var(--success)">✓ Attempted</span>':''}</div>
    <button class="btn-sm btn-accent-sm" onclick="startQuiz(${q.id})">${attempted.has(q.id)?'Retake Quiz':'Start Quiz →'}</button>
  </div>`).join('');
}
function renderStudentUpcoming(){
  const el=document.getElementById('s-upcoming-quizzes');if(!el)return;
  el.innerHTML=state.quizzes.filter(q=>q.published).slice(0,3).map(q=>`<div class="checklist-item">
    <div class="check-circle">→</div>
    <div><div style="font-size:13px;font-weight:500">${q.title}</div><div style="font-size:11px;color:var(--muted)">${q.subject} · ${q.questions.length}Q</div></div>
  </div>`).join('');
}
function startQuiz(id){
  const quiz=state.quizzes.find(q=>q.id===id);if(!quiz)return;
  state.currentQuiz=quiz; state.currentQIndex=0; state.currentAnswers=[];
  document.getElementById('s-quiz-list-view').style.display='none';
  document.getElementById('s-quiz-take-view').style.display='block';
  document.getElementById('s-quiz-result-view').style.display='none';
  document.getElementById('s-quiz-taking-title').textContent=quiz.title;
  renderQuestion();
}
function renderQuestion(){
  const quiz=state.currentQuiz; const qi=state.currentQIndex; const q=quiz.questions[qi];
  document.getElementById('s-q-counter').textContent=`${qi+1}/${quiz.questions.length}`;
  document.getElementById('s-progress-bar').style.width=`${(qi/quiz.questions.length)*100}%`;
  const nextBtn=document.getElementById('s-next-btn');
  nextBtn.disabled=true; nextBtn.textContent=qi===quiz.questions.length-1?'Submit ✓':'Next →';
  document.getElementById('s-quiz-question-area').innerHTML=`<div class="quiz-card">
    <div class="quiz-title" style="font-size:16px;margin-bottom:14px">${q.q}</div>
    <div class="quiz-options">${q.options.map((opt,oi)=>`<button class="quiz-option" onclick="selectOption(this,${oi})">${opt}</button>`).join('')}</div>
  </div>`;
}
function selectOption(el,oi){
  document.querySelectorAll('.quiz-option').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected'); state.currentAnswers[state.currentQIndex]=oi;
  document.getElementById('s-next-btn').disabled=false;
}
function nextQuestion(){
  if(state.currentQIndex<state.currentQuiz.questions.length-1){state.currentQIndex++;renderQuestion();}
  else showResults();
}
function showResults(){
  const quiz=state.currentQuiz; let score=0;
  quiz.questions.forEach((q,i)=>{if(state.currentAnswers[i]===q.correct)score++;});
  const total=quiz.questions.length; const acc=Math.round(score/total*100);
  const now=new Date();
  state.studentResults.push({quizId:quiz.id,quizTitle:quiz.title,score,total,accuracy:acc,time:now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}),subject:quiz.subject});
  saveState();
  document.getElementById('s-quiz-take-view').style.display='none';
  document.getElementById('s-quiz-result-view').style.display='block';
  document.getElementById('s-result-quiz-title').textContent=quiz.title;
  document.getElementById('s-score-display').textContent=`${score}/${total}`;
  const badge=document.getElementById('s-accuracy-badge');
  badge.textContent=`${acc}% Accuracy`;
  badge.style.cssText=acc>=80?'background:rgba(81,207,102,.15);color:var(--success)':acc>=50?'background:rgba(255,209,102,.15);color:var(--warn)':'background:rgba(255,107,107,.15);color:var(--danger)';
  document.getElementById('s-answer-review').innerHTML=quiz.questions.map((q,i)=>{
    const ua=state.currentAnswers[i]; const isRight=ua===q.correct;
    return `<div style="padding:10px 0;border-bottom:1px solid var(--border)">
      <div style="font-size:12px;font-weight:500;margin-bottom:5px">${i+1}. ${q.q}</div>
      <div style="font-size:11px;color:${isRight?'var(--success)':'var(--danger)'}">Your: ${q.options[ua]??'—'} ${isRight?'✓':'✗'}</div>
      ${!isRight?`<div style="font-size:11px;color:var(--muted)">Correct: ${q.options[q.correct]}</div>`:''}
    </div>`;
  }).join('');
  updateStudentStats(); renderTeacherResults();
}
function backToQuizList(){
  document.getElementById('s-quiz-list-view').style.display='block';
  document.getElementById('s-quiz-take-view').style.display='none';
  document.getElementById('s-quiz-result-view').style.display='none';
  renderStudentQuizList();
}

// ==================== ANALYTICS ====================
function renderAnalytics(){
  if(!state.studentResults.length){
    const empty='<div class="empty"><div class="empty-icon">📊</div><div class="empty-text">Take a quiz to see analytics</div></div>';
    ['an-subject-bars','an-history'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML=empty;});
    ['an-avg','an-best'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent='—';});
    return;
  }
  const accs=state.studentResults.map(r=>r.accuracy);
  const avg=Math.round(accs.reduce((a,b)=>a+b,0)/accs.length);
  document.getElementById('an-avg').textContent=avg+'%';
  document.getElementById('an-best').textContent=Math.max(...accs)+'%';
  document.getElementById('an-done').textContent=state.studentResults.length;
  const bySubject={};
  state.studentResults.forEach(r=>{if(!bySubject[r.subject])bySubject[r.subject]=[];bySubject[r.subject].push(r.accuracy);});
  const colors=['var(--accent)','var(--accent2)','var(--purple)','var(--warn)','var(--coral)'];
  document.getElementById('an-subject-bars').innerHTML=Object.entries(bySubject).map(([s,accs],i)=>{
    const avg=Math.round(accs.reduce((a,b)=>a+b,0)/accs.length);
    return `<div class="chart-bar-row">
      <div class="chart-label">${s.split(' ')[0]}</div>
      <div class="chart-bar-wrap"><div class="chart-bar" style="width:${avg}%;background:${colors[i%colors.length]}"></div></div>
      <div class="chart-val" style="color:${colors[i%colors.length]}">${avg}%</div>
    </div>`;
  }).join('');
  document.getElementById('an-history').innerHTML=state.studentResults.slice().reverse().map(r=>`<div class="result-row">
    <div><div class="result-name">${r.quizTitle}</div><div style="font-size:11px;color:var(--muted)">${r.time}</div></div>
    <div><div class="result-score" style="color:${r.accuracy>=80?'var(--success)':r.accuracy>=50?'var(--warn)':'var(--danger)'}">${r.score}/${r.total}</div></div>
  </div>`).join('');
}
function updateStudentStats(){
  const bk=state.resources.filter(r=>r.bookmarked).length;
  const done=state.studentResults.length;
  const avg=done?Math.round(state.studentResults.reduce((a,r)=>a+r.accuracy,0)/done)+'%':'—';
  ['s-avg-score','s-quizzes-done','s-bookmarks'].forEach((id,i)=>{const el=document.getElementById(id);if(el)el.textContent=[avg,done,bk][i];});
}

// ==================== PLACEMENT ====================
function setPlacementTab(tier, el){
  currentPlacementTier = tier;
  document.querySelectorAll('#placement-tabs .tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderStudentPlacements();
}
function renderStudentPlacements(search=''){
  const el=document.getElementById('s-placement-list');if(!el)return;
  let list=state.placements;
  if(currentPlacementTier!=='all')list=list.filter(p=>p.tier===currentPlacementTier);
  if(search)list=list.filter(p=>p.company.toLowerCase().includes(search.toLowerCase())||p.role.toLowerCase().includes(search.toLowerCase()));
  if(!list.length){el.innerHTML='<div class="empty"><div class="empty-icon">💼</div><div class="empty-text">No placements found</div></div>';return;}
  el.innerHTML=list.map(p=>placementCardHTML(p,true)).join('');
}
function filterPlacements(v){renderStudentPlacements(v);}
function renderTeacherPlacements(){
  const el=document.getElementById('t-placement-list');if(!el)return;
  el.innerHTML=state.placements.slice(0,6).map(p=>placementCardHTML(p,false)).join('');
}
function placementCardHTML(p,isStudent){
  const tierColor=p.tier==='high'?'var(--success)':p.tier==='avg'?'var(--warn)':'var(--accent)';
  const tierLabel=p.tier==='high'?'High Pkg':p.tier==='avg'?'Average':'Mass Hiring';
  return `<div class="placement-card">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px">
      <div style="display:flex;gap:10px;align-items:center">
        <div class="company-logo">${p.emoji}</div>
        <div><div class="company-name">${p.company}</div><div class="placement-role">${p.role}</div></div>
      </div>
      <div style="text-align:right">
        <div class="placement-package" style="font-size:17px">${p.package}</div>
        <div style="font-size:10px;color:var(--muted)">per annum</div>
      </div>
    </div>
    <div style="display:flex;gap:12px;font-size:11px;color:var(--muted);flex-wrap:wrap">
      <span>🎓 CGPA ≥ ${p.cgpa}</span>
      <span>📅 Batch ${p.batch}</span>
      <span class="tag" style="background:${p.type==='Mass Hiring'?'rgba(255,209,102,.15)':'rgba(81,207,102,.15)'};color:${p.type==='Mass Hiring'?'var(--warn)':'var(--success)'}">${p.type}</span>
      <span class="tag" style="background:rgba(108,143,255,.1);color:${tierColor}">${tierLabel}</span>
    </div>
    <div class="tags-row">${p.skills.map(s=>`<span class="tag tag-blue">${s}</span>`).join('')}</div>
    ${isStudent?`<button class="btn-sm btn-accent-sm" style="margin-top:10px" onclick="showToast('Application submitted for ${p.company}! ✓',true)">Apply Now →</button>`:`<div style="display:flex;gap:8px;margin-top:10px"><button class="btn-sm" onclick="editPlacement(${p.id})">Edit</button><button class="btn-sm btn-danger-sm" onclick="deletePlacement(${p.id})">Delete</button></div>`}
  </div>`;
}

let editingPlacementId = null;

function editPlacement(id) {
  const p = state.placements.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('p-company').value = p.company;
  document.getElementById('p-role').value = p.role;
  document.getElementById('p-package').value = p.pkgNum;
  document.getElementById('p-cgpa').value = p.cgpa;
  editingPlacementId = id;
  document.getElementById('post-placement-btn').textContent = 'Update Opportunity';
  document.getElementById('p-company').focus();
}

function deletePlacement(id) {
  state.placements = state.placements.filter(x=>x.id!==id);
  saveState(); renderTeacherPlacements();
  showToast('Opportunity deleted', false);
}

function postPlacement(){
  const company=document.getElementById('p-company').value;
  if(!company){showToast('Company name required',false);return;}
  const role=document.getElementById('p-role').value||'Engineer';
  const pkg=parseFloat(document.getElementById('p-package').value)||0;
  const cgpa=parseFloat(document.getElementById('p-cgpa').value)||7.0;
  const emojis=['🔵','🟩','🟠','🟣','🔴','🟡'];
  
  if (editingPlacementId) {
    const p = state.placements.find(x=>x.id===editingPlacementId);
    if(p) {
      p.company = company; p.role = role; p.package = `₹${pkg} LPA`; p.pkgNum = pkg; p.cgpa = cgpa;
    }
    editingPlacementId = null;
    document.getElementById('post-placement-btn').textContent = 'Post Opportunity';
    showToast(`${company} opportunity updated ✓`,true);
  } else {
    state.placements.unshift({id:Date.now(),company,emoji:emojis[Math.floor(Math.random()*emojis.length)],role,package:`₹${pkg} LPA`,pkgNum:pkg,skills:['Any Language'],cgpa,type:'New Posting',tier:'avg',batch:'2025'});
    showToast(`${company} opportunity posted ✓`,true);
  }
  
  saveState();
  renderTeacherPlacements();
  ['p-company','p-role','p-package','p-cgpa'].forEach(id=>document.getElementById(id).value='');
}

// ==================== BUS ROUTES ====================
function renderBusRoutes(){
  const html=BUS_ROUTES.map((route,ri)=>`
    <div class="bus-card">
      <div class="bus-header" onclick="toggleBusRoute(${ri})">
        <div class="bus-number">Route ${route.num}</div>
        <div class="bus-route-name">${route.name}${route.badge?` <span style="font-size:9px;background:rgba(78,205,196,.2);color:var(--accent2);padding:2px 7px;border-radius:10px;font-weight:700;vertical-align:middle">${route.badge}</span>`:''}</div>
        <div class="bus-collapse-btn" id="bus-arr-${ri}">▼</div>
      </div>
      <div class="bus-stops-wrap" id="bus-stops-${ri}">
        ${route.stops.map(s=>`<div class="bus-stop">
          <div class="bus-time">${s.time}</div>
          <div style="color:var(--muted);font-size:12px">●</div>
          <div class="bus-stop-name">${s.name}</div>
        </div>`).join('')}
      </div>
    </div>
  `).join('');
  
  const elS=document.getElementById('s-bus-routes-list');if(elS)elS.innerHTML=html;
  
  const elT=document.getElementById('t-bus-routes-list');
  if(elT) {
    elT.innerHTML=html.replace(/bus-stops-/g, 't-bus-stops-').replace(/bus-arr-/g, 't-bus-arr-').replace(/toggleBusRoute\(/g, 'toggleBusRouteT(');
  }
}
function toggleBusRoute(ri){
  const wrap=document.getElementById(`bus-stops-${ri}`);
  const arr=document.getElementById(`bus-arr-${ri}`);
  const isOpen=wrap.classList.contains('open');
  wrap.classList.toggle('open',!isOpen);
  arr.classList.toggle('open',!isOpen);
}
function toggleBusRouteT(ri){
  const wrap=document.getElementById(`t-bus-stops-${ri}`);
  const arr=document.getElementById(`t-bus-arr-${ri}`);
  const isOpen=wrap.classList.contains('open');
  wrap.classList.toggle('open',!isOpen);
  arr.classList.toggle('open',!isOpen);
}

// ==================== LIBRARY ====================
function renderLibrary(){
  const el=document.getElementById('lib-sem-selector');
  if(el && el.innerHTML===''){
    el.innerHTML=Object.keys(LIBRARY_BOOKS).map(sem=>`<button class="sem-btn${sem===currentLibSem?' active':''}" onclick="setLibSem('${sem}',this)">${sem}</button>`).join('');
  }
  renderBooks();
}
function setLibSem(sem, btn){
  currentLibSem=sem;
  document.querySelectorAll('.sem-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderBooks();
}
function renderBooks(){
  const data=LIBRARY_BOOKS[currentLibSem];
  const infoEl=document.getElementById('lib-sem-info');
  if(infoEl)infoEl.textContent=data.desc;
  const el=document.getElementById('book-grid');if(!el)return;
  el.innerHTML=data.books.map((b,i)=>{
    const isIssued=state.issuedBooks.includes(`${currentLibSem}-${i}`);
    const availColor=b.available===0?'var(--danger)':b.available<=1?'var(--warn)':'var(--success)';
    const tagColor=b.tag==='Must Read'?'rgba(108,143,255,.2)':b.tag==='High Demand'?'rgba(255,209,102,.2)':'';
    const tagTextColor=b.tag==='Must Read'?'var(--accent)':b.tag==='High Demand'?'var(--warn)':'';
    return `<div class="book-card">
      ${b.tag?`<div class="book-tag" style="background:${tagColor};color:${tagTextColor}">${b.tag}</div>`:''}
      <div class="book-cover">${b.icon}</div>
      <div class="book-title">${b.title}</div>
      <div class="book-author">by ${b.author}</div>
      <div class="book-subject" style="background:rgba(177,151,252,.15);color:var(--purple)">${b.subject}</div>
      <div class="book-available" style="color:${availColor}">
        ${b.available===0?'❌':'✓'} ${b.available}/${b.total} available
      </div>
      <button class="book-issue-btn" onclick="issueBook(${i},'${currentLibSem}')" ${b.available===0||isIssued?'disabled style="opacity:.4;cursor:not-allowed"':''}>
        ${isIssued?'✓ Issued':'Issue from Library'}
      </button>
    </div>`;
  }).join('');
}
function issueBook(i,sem){
  const key=`${sem}-${i}`;
  if(state.issuedBooks.includes(key))return;
  state.issuedBooks.push(key);
  const book=LIBRARY_BOOKS[sem].books[i];
  book.available=Math.max(0,book.available-1);
  saveState();
  renderBooks();
  showToast(`"${book.title}" issued ✓ Return in 14 days`,true);
}

// ==================== TOAST ====================
function showToast(msg,success=true){
  const t=document.getElementById('toast');
  t.textContent=msg; t.className=`toast ${success?'success':'error'} show`;
  clearTimeout(window._toastTimer);
  window._toastTimer=setTimeout(()=>t.classList.remove('show'),2800);
}

// ==================== BOOT ====================
document.addEventListener('DOMContentLoaded',()=>{
  // Initial demo data will be saved to local storage on first load via loadState() 
  // if no data is found.
});
