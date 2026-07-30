/* ================================================================
   COMPLETE CONFIGURATION
=============================================================== */
// Telegram Bot
const TELEGRAM_BOT_TOKEN = "8654736990:AAFEfX9e1628ZhWezooC-W8J_zxMiGf_pNI";
const TELEGRAM_CHAT_ID = "7115460626";

// Your API Keys (for future use)
const OPENAI_API_KEY = "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";
const GEMINI_API_KEY = "AIzaSyCpnItK0k2M1rm1j-9Ah12L_uzEhS6bQTQ";
const HUGGINGFACE_API_KEY = "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";

let lastUpdateId = 0;

/* ================================================================
   YOUR INFORMATION FOR THE AI
=============================================================== */
const MY_INFO = `
Hayidar Taju is a Full-Stack Developer and AI enthusiast from Jimma, Oromia, Ethiopia.

PERSONAL:
- Name: Hayidar Taju
- Location: Jimma, Oromia, Ethiopia
- Title: Full-Stack Developer & AI Enthusiast
- Experience: Over 2 weeks of software development
- Motto: "Today a learner, tomorrow a solver"

SKILLS:
- Python: 85% (Expert)
- JavaScript: 35% (Intermediate)
- React/Next.js: 30% (Intermediate)
- UI/UX Design: 25% (Intermediate)
- Node.js: 20% (Beginner-Intermediate)

PROJECTS:
1. Neural Matrix AI - Full-stack generative AI dashboard built with React & Python
2. Quantum DEX - Decentralized Web3 exchange interface with real-time WebSockets
3. This Digital Portfolio - Built with HTML, CSS, JavaScript

SOCIAL MEDIA:
- YouTube: https://youtube.com/@hayidartaju-u4e7q
- TikTok: @hayidartaju106
- GitHub: hayidartaju-maker
- Facebook: Hayidar0011
- Telegram: @Hayidercommentbot

CERTIFICATIONS:
- AWS Certified Solutions Architect (2023)
- AI Fundamentals - Udacity (2026)
- Google Cybersecurity Professional (2024)

TIMELINE:
- 2026: First Line of Code
- 2026: Hackathon Champion
- 2026: School Hackathon Winner
- 2026: Developer Role
- 2026: AI Fundamentals - Udacity

Respond in a friendly, helpful way. Keep responses under 100 words.
`;

/* ================================================================
   DATA COLLECTION
=============================================================== */
const DATA = {
    timeline: [
        { year: "2026", title: "First Line of Code", desc: "Started self-taught programming journey with HTML, CSS, and JS.", icon: "fa-code" },
        { year: "2026", title: "Hackathon Champion", desc: "Won 1st Place at National Web Dev Hackathon.", icon: "fa-trophy" },
        { year: "2026", title: "School Hackathon Winner", desc: "Won the school hackathon competition with an innovative AI project.", icon: "fa-trophy" },
        { year: "2026", title: "Developer Role", desc: "Secured a developer position, building real-world applications.", icon: "fa-rocket" },
        { year: "2026", title: "AI Fundamentals - Udacity", desc: "Completed AI Fundamentals certification from Udacity.", icon: "fa-brain" }
    ],
    skills: [
        { name: "Python", level: 85, icon: "fab fa-python" },
        { name: "JavaScript", level: 35, icon: "fab fa-js" },
        { name: "React / Next", level: 30, icon: "fab fa-react" },
        { name: "UI/UX Design", level: 25, icon: "fas fa-paint-brush" },
        { name: "Node.js", level: 20, icon: "fab fa-node-js" }
    ]
};

/* ================================================================
   TOAST NOTIFICATION
=============================================================== */
function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    
    toast.textContent = msg;
    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);
}

/* ================================================================
   EASTER EGG - Hidden Feature
=============================================================== */
function initEasterEgg() {
    let clicks = 0;
    const trigger = document.getElementById("easter-trigger");
    
    if (!trigger) {
        console.log("⚠️ Easter egg trigger not found");
        return;
    }

    trigger.addEventListener("click", function(e) {
        e.preventDefault();
        clicks++;

        if (clicks === 5) {
            showToast("🎉 Easter Egg Unlocked: You found the secret Matrix Mode!");
            document.documentElement.style.setProperty('--cyan', '#00ff66');
            clicks = 0;
        }
    });
    
    console.log("✅ Easter egg initialized");
}

/* ================================================================
   DOCUMENT READY
=============================================================== */
document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    initCursor();
    initScrollTracking();
    initHeroTyping();
    initCanvasParticles();
    renderTimeline();
    renderSkills();
    initRadarChart();
    initCounters();
    initTheme();
    initChatbot();
    initEasterEgg();
    initContactForm();
    initMobileMenu();
    initActiveNav();
    initSmoothScroll();
    
    setTimeout(function() {
        testTelegramConnection();
    }, 3000);
    
    setInterval(checkTelegramMessages, 30000);
});

/* ================================================================
   CURSOR
=============================================================== */
function initCursor() {
    const dot = document.getElementById("cursor-dot");
    const trail = document.getElementById("cursor-trail");
    
    if (!dot || !trail) return;

    window.addEventListener("mousemove", function(e) {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
        trail.animate(
            { left: e.clientX + "px", top: e.clientY + "px" },
            { duration: 200, fill: "forwards" }
        );
    });
}

/* ================================================================
   SCROLL TRACKING
=============================================================== */
function initScrollTracking() {
    const progress = document.getElementById("scroll-progress");
    const nav = document.getElementById("navbar");
    
    if (!progress || !nav) return;

    window.addEventListener("scroll", function() {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const percentage = (currentScroll / totalHeight) * 100;

        progress.style.width = percentage + "%";

        if (currentScroll > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
}

/* ================================================================
   TYPING EFFECT
=============================================================== */
function initHeroTyping() {
    const target = document.getElementById("typed-target");
    if (!target) return;
    
    const phrases = ["Full-Stack Developer.", "AI Enthusiast.", "Lifelong Learner."];
    let i = 0, j = 0, isDeleting = false;

    function type() {
        const current = phrases[i];
        target.textContent = current.substring(0, j);

        if (!isDeleting && j < current.length) {
            j++;
        } else if (isDeleting && j > 0) {
            j--;
        } else if (!isDeleting && j === current.length) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % phrases.length;
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }
    type();
}

/* ================================================================
   PARTICLE CANVAS
=============================================================== */
function initCanvasParticles() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 70 }, function() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            radius: Math.random() * 2 + 1
        };
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "rgba(0, 240, 255, 0.5)";
        ctx.strokeStyle = "rgba(0, 240, 255, 0.08)";

        particles.forEach(function(p, index) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            for (let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", function() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* ================================================================
   RENDER TIMELINE
=============================================================== */
function renderTimeline() {
    const container = document.getElementById("timeline-container");
    if (!container) return;
    
    let html = "";

    DATA.timeline.forEach(function(item) {
        html += `
            <div class="timeline-node">
                <div class="timeline-icon"><i class="fas ${item.icon}"></i></div>
                <div class="glass-card">
                    <span>${item.year}</span>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

/* ================================================================
   RENDER SKILLS
=============================================================== */
function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;
    
    let html = "";

    DATA.skills.forEach(function(s) {
        html += `
            <div class="glass-card skill-card">
                <i class="${s.icon}"></i>
                <h4>${s.name}</h4>
                <p style="color: var(--cyan); font-weight: 600;">${s.level}%</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

/* ================================================================
   RADAR CHART
=============================================================== */
function initRadarChart() {
    const canvas = document.getElementById("radar-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const cx = 200, cy = 200, radius = 120;
    const total = DATA.skills.length;

    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.fillStyle = "rgba(0, 240, 255, 0.25)";

    for (let r = 0.2; r <= 1; r += 0.2) {
        ctx.beginPath();
        for (let i = 0; i < total; i++) {
            const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
            const x = cx + Math.cos(angle) * radius * r;
            const y = cy + Math.sin(angle) * radius * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }

    ctx.beginPath();
    DATA.skills.forEach(function(s, i) {
        const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
        const x = cx + Math.cos(angle) * radius * (s.level / 100);
        const y = cy + Math.sin(angle) * radius * (s.level / 100);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

/* ================================================================
   COUNTERS
=============================================================== */
function initCounters() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(function(c) {
        const target = parseFloat(c.dataset.target);
        let count = 0;

        function update() {
            count += Math.ceil(target / 40);
            if (count > target) count = target;
            c.textContent = count;
            if (count < target) setTimeout(update, 40);
        }
        update();
    });
}

/* ================================================================
   THEME
=============================================================== */
function initTheme() {
    const btn = document.getElementById("theme-btn");
    if (!btn) return;

    btn.addEventListener("click", function() {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", next);
        btn.innerHTML = next === "dark" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
}

/* ================================================================
   CHATBOT
=============================================================== */
function initChatbot() {
    const fab = document.getElementById("chat-fab");
    const win = document.getElementById("chat-window");
    const close = document.getElementById("chat-close");
    const form = document.getElementById("chat-form");
    const field = document.getElementById("chat-input-field");
    const messages = document.getElementById("chat-messages");
    
    if (!fab || !win || !close || !form || !field || !messages) return;
    
    let isProcessing = false;

    fab.addEventListener("click", function() {
        win.classList.toggle("open");

        if (messages.children.length === 0) {
            appendMsg("👋 Hello! I'm Chronos, Hayidar's AI assistant. Ask me anything!", "bot");
        }
    });

    close.addEventListener("click", function() {
        win.classList.remove("open");
    });

    form.addEventListener("submit", async function(e) {
        e.preventDefault();
        const query = field.value.trim();
        
        if (!query || isProcessing) return;

        appendMsg(query, "user");
        field.value = "";
        
        const typingId = showWebTypingIndicator();
        isProcessing = true;

        try {
            const reply = await getAIResponse(query);
            removeWebTypingIndicator(typingId);
            appendMsg(reply, "bot");
        } catch (error) {
            console.error("Error:", error);
            removeWebTypingIndicator(typingId);
            appendMsg("Sorry, I'm having trouble right now. Please try again.", "bot");
        }
        
        isProcessing = false;
    });

    function appendMsg(text, sender) {
        const div = document.createElement("div");
        div.className = "msg " + sender;
        div.textContent = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function showWebTypingIndicator() {
        const div = document.createElement("div");
        div.className = "msg bot typing-indicator";
        div.innerHTML = "Typing<span>.</span><span>.</span><span>.</span>";
        div.id = "typing-" + Date.now();
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
        return div.id;
    }

    function removeWebTypingIndicator(id) {
        const element = document.getElementById(id);
        if (element) element.remove();
    }
}

/* ================================================================
   AI RESPONSE - WORKING VERSION (No Keys Needed)
=============================================================== */
async function getAIResponse(userMessage) {
    try {
        console.log("🤖 Generating response...");
        
        // Check for specific questions first
        const q = userMessage.toLowerCase();
        
        // Quick answers for common questions
        const quickAnswers = [
            {
                keywords: ["who", "name", "about", "yourself", "introduce"],
                response: "👋 I'm Chronos, Hayidar Taju's AI assistant. Hayidar is a Full-Stack Developer and AI enthusiast from Jimma, Oromia, Ethiopia!"
            },
            {
                keywords: ["skill", "tech", "stack", "language", "know", "can"],
                response: "💻 Hayidar specializes in Python (85%), JavaScript (35%), React/Next.js (30%), UI/UX Design (25%), and Node.js (20%)."
            },
            {
                keywords: ["project", "build", "made", "create", "work", "portfolio"],
                response: "🚀 Hayidar's featured projects include Neural Matrix AI (generative AI dashboard) and Quantum DEX (Web3 exchange interface)."
            },
            {
                keywords: ["location", "where", "from", "ethiopia", "jimma", "oromia"],
                response: "📍 Hayidar is from Jimma, Oromia, Ethiopia! He's proud of his heritage."
            },
            {
                keywords: ["contact", "email", "reach", "message", "connect", "telegram"],
                response: "📧 You can connect with Hayidar through Telegram (@Hayidercommentbot), GitHub (hayidartaju-maker), or the contact form on his portfolio!"
            },
            {
                keywords: ["hello", "hi", "hey", "greetings", "good morning", "good evening"],
                response: "👋 Hello! I'm Chronos, your AI assistant. How can I help you today? Ask me about Hayidar's skills, projects, or experience!"
            },
            {
                keywords: ["experience", "years", "time", "how long", "since"],
                response: "📅 Hayidar has been developing software for over 2 weeks and is constantly learning new technologies!"
            },
            {
                keywords: ["help", "question", "what", "how", "tell", "explain"],
                response: "🤔 I'd love to help! I can tell you about Hayidar's skills, projects, experience, or anything else you'd like to know."
            },
            {
                keywords: ["thanks", "thank you", "appreciate", "good"],
                response: "😊 You're welcome! Feel free to ask if you have more questions about Hayidar or his work."
            }
        ];
        
        // Check for quick answers
        for (let item of quickAnswers) {
            if (item.keywords.some(keyword => q.includes(keyword))) {
                return item.response;
            }
        }
        
        // Try free API for other questions
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            if (response.ok) {
                const data = await response.json();
                if (data && data.slip && data.slip.advice) {
                    return `💡 Here's some advice: ${data.slip.advice}`;
                }
            }
        } catch (e) {
            console.log("API error, using default response");
        }
        
        // Default response
        return "🤔 That's an interesting question! I can tell you about Hayidar's skills, projects, experience, or contact information. What would you like to know?";
        
    } catch (error) {
        console.error("❌ AI Error:", error);
        return "🤔 I can tell you about Hayidar's skills, projects, experience, or how to contact him. What would you like to know?";
    }
}

/* ================================================================
   CONTACT FORM - Send to Telegram
=============================================================== */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const btn = document.getElementById("send-btn");
    
    if (!form) return;
    
    form.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("contact-subject").value.trim();
        const message = document.getElementById("contact-message").value.trim();
        
        if (!name || !email || !subject || !message) {
            showToast("⚠️ Please fill all fields!");
            return;
        }
        
        if (!email.includes("@") || !email.includes(".")) {
            showToast("⚠️ Please enter a valid email!");
            return;
        }
        
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        try {
            const success = await sendToTelegram(name, email, subject, message);
            
            if (success) {
                showToast("✅ Message sent successfully! I'll respond soon.");
                form.reset();
            } else {
                showToast("❌ Failed to send. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            showToast("❌ An error occurred. Please try again.");
        } finally {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
    });
}

/* ================================================================
   SEND TO TELEGRAM
=============================================================== */
async function sendToTelegram(name, email, subject, message) {
    const telegramMessage = `
📩 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
📋 *Subject:* ${subject}

💬 *Message:*
${message}

---
Sent from Hayidar's Portfolio
    `;
    
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: "Markdown",
                disable_web_page_preview: true
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            console.log("✅ Contact form sent to Telegram");
            return true;
        } else {
            console.error("❌ Telegram API error:", data);
            return false;
        }
    } catch (error) {
        console.error("❌ Network error:", error);
        return false;
    }
}

/* ================================================================
   TELEGRAM BOT FUNCTIONS
=============================================================== */
async function testTelegramConnection() {
    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.ok) {
            console.log("✅ Bot connected:", data.result);
            showToast("✅ Telegram Bot is online!");
            return true;
        } else {
            console.error("❌ Bot error:", data);
            showToast("❌ Bot error: " + data.description);
            return false;
        }
    } catch (error) {
        console.error("Connection error:", error);
        showToast("❌ Cannot connect to Telegram API");
        return false;
    }
}

async function checkTelegramMessages() {
    try {
        let url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`;
        if (lastUpdateId > 0) {
            url += `?offset=${lastUpdateId + 1}`;
        }
        
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        const data = await response.json();
        
        if (!data.ok) {
            console.error("❌ Telegram API Error:", data.description);
            return;
        }
        
        if (data.result && data.result.length > 0) {
            console.log(`📨 Found ${data.result.length} new messages`);
            
            for (let update of data.result) {
                if (update.update_id > lastUpdateId) {
                    lastUpdateId = update.update_id;
                }
                
                if (update.message && update.message.text) {
                    const chatId = update.message.chat.id;
                    const userMessage = update.message.text;
                    const username = update.message.from.first_name || "User";
                    
                    console.log(`💬 From ${username}: ${userMessage}`);
                    
                    await sendTelegramAction(chatId, 'typing');
                    
                    if (userMessage.startsWith('/')) {
                        const reply = await handleTelegramCommand(userMessage);
                        await sendTelegramMessage(chatId, reply);
                        continue;
                    }
                    
                    const reply = await getAIResponse(userMessage);
                    await sendTelegramMessage(chatId, reply);
                }
            }
        }
    } catch (error) {
        console.error("Error checking Telegram messages:", error);
    }
}

async function sendTelegramMessage(chatId, message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown"
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            console.log("✅ Message sent to Telegram");
        } else {
            console.error("❌ Send failed:", data.description);
        }
        
        return data;
    } catch (error) {
        console.error("Error sending message:", error);
        return null;
    }
}

async function sendTelegramAction(chatId, action) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendChatAction`;
    
    try {
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                action: action
            })
        });
    } catch (error) {
        console.error("Error sending action:", error);
    }
}

async function handleTelegramCommand(command) {
    switch(command.toLowerCase()) {
        case '/start':
            return "👋 *Welcome to Hayidar Taju's AI Assistant!*\n\nI'm Chronos, your AI assistant. Ask me about:\n• 🤖 *Skills & Experience*\n• 📂 *Projects & Portfolio*\n• 💼 *Contact Information*\n\nSend /help to see all commands.";
        
        case '/help':
            return "💡 *Available Commands:*\n\n/start - Welcome message\n/help - Show this help\n/skills - Hayidar's skills\n/projects - Featured projects\n/contact - Contact information\n\nOr just ask me anything!";
        
        case '/skills':
            return "🚀 *Hayidar's Skills:*\n\n• *Python* — 85%\n• *JavaScript* — 35%\n• *React/Next.js* — 30%\n• *UI/UX Design* — 25%\n• *Node.js* — 20%";
        
        case '/projects':
            return "📂 *Featured Projects:*\n\n1. *Neural Matrix AI* — Generative AI dashboard\n2. *Quantum DEX* — Web3 exchange interface";
        
        case '/contact':
            return "📧 *Contact Hayidar:*\n\n• *Telegram:* @Hayidercommentbot\n• *GitHub:* hayidartaju-maker\n\nOr use the contact form on the portfolio!";
        
        default:
            return "🤖 I don't recognize that command. Send /help to see available commands.";
    }
}

/* ================================================================
   MOBILE MENU
=============================================================== */
function initMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("mobileOverlay");
    const closeBtn = document.getElementById("closeMenu");
    
    if (!hamburger || !mobileMenu || !overlay || !closeBtn) {
        console.log("⚠️ Mobile menu elements not found");
        return;
    }
    
    const menuLinks = mobileMenu.querySelectorAll("a");

    function toggleMenu() {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("open");
        overlay.classList.toggle("active");
        document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("open");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);
    closeBtn.addEventListener("click", closeMenu);
    
    menuLinks.forEach(function(link) {
        link.addEventListener("click", closeMenu);
    });
    
    console.log("✅ Mobile menu initialized");
}

/* ================================================================
   NAVIGATION ACTIVE LINK
=============================================================== */
function initActiveNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");

    if (navLinks.length === 0) return;

    window.addEventListener("scroll", function() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

/* ================================================================
   SMOOTH SCROLL
=============================================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ================================================================
   PDF GENERATOR
=============================================================== */
function generatePDF() {
    showToast("Preparing Portfolio PDF...");
    const element = document.body;
    const opt = {
        margin: 0.5,
        filename: 'Hayidar_Taju_Digital_Story.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// Make functions globally accessible
window.generatePDF = generatePDF;