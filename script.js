// ===== TOPIC DATA WITH IMAGES =====
const topics = [{
    num: 1,
    title: "Causes of Global Warming",
    icon: "🌡️",
    desc: "Explore the human activities and natural factors driving global temperatures to dangerous levels.",
    file: "topic1.html",
    color: "#dc2626",
    image: "https://images.unsplash.com/photo-1611080626919-7cf88ca77906?w=500&h=300&fit=crop"
}, {
    num: 2,
    title: "Climate Change & Its Impact",
    icon: "🌪️",
    desc: "Understand how shifting climate patterns affect ecosystems, weather, and human life worldwide.",
    file: "topic2.html",
    color: "#ea580c",
    image: "https://images.unsplash.com/photo-1559829007-40cb313be3b5?w=500&h=300&fit=crop"
}, {
    num: 3,
    title: "Effect of Biodiversity Loss",
    icon: "🦋",
    desc: "Learn why species extinction threatens food security, medicine, and ecological balance.",
    file: "topic3.html",
    color: "#16a34a",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f8f89cc3?w=500&h=300&fit=crop"
}, {
    num: 4,
    title: "Philippine Waste Management",
    icon: "🗑️",
    desc: "Examine the waste crisis in the Philippines and the laws designed to address it.",
    file: "topic4.html",
    color: "#0891b2",
    image: "https://images.unsplash.com/photo-1559834298-038196d6cb4d?w=500&h=300&fit=crop"
}, {
    num: 5,
    title: "Refuse, Reduce, Reuse, Repair & Recycle",
    icon: "♻️",
    desc: "Discover the 5R framework for sustainable living and minimizing waste.",
    file: "topic5.html",
    color: "#7c3aed",
    image: "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=500&h=300&fit=crop"
}, {
    num: 6,
    title: "Deforestation & Its Consequences",
    icon: "🌳",
    desc: "Investigate how forest destruction accelerates climate change and displaces wildlife.",
    file: "topic6.html",
    color: "#15803d",
    image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=500&h=300&fit=crop"
}, {
    num: 7,
    title: "Ocean Pollution",
    icon: "🌊",
    desc: "Dive into the causes and devastating effects of plastic and chemical pollution in our oceans.",
    file: "topic7.html",
    color: "#0369a1",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop"
}, {
    num: 8,
    title: "Air Quality & Health",
    icon: "💨",
    desc: "See how air pollution impacts respiratory health and contributes to global disease burden.",
    file: "topic8.html",
    color: "#6b7280",
    image: "https://images.unsplash.com/photo-1610857590941-e8e6a570f434?w=500&h=300&fit=crop"
}, {
    num: 9,
    title: "Renewable Energy Solutions",
    icon: "☀️",
    desc: "Explore solar, wind, and other clean energy sources powering a sustainable future.",
    file: "topic9.html",
    color: "#ca8a04",
    image: "https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=500&h=300&fit=crop"
}, {
    num: 10,
    title: "Environmental Laws in the Philippines",
    icon: "📜",
    desc: "Review key legislation protecting Philippine natural resources and communities.",
    file: "topic10.html",
    color: "#9333ea",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb313404?w=500&h=300&fit=crop"
}];

// ===== RENDER TOPIC CARDS =====
function renderTopics() {
    const grid = document.getElementById('topics-grid');
    grid.innerHTML = '';
    topics.forEach((t) => {
        const card = document.createElement('a');
        card.href = t.file;
        card.className = 'topic-card fade-up rounded-2xl overflow-hidden block';
        card.style.setProperty('--card-color', t.color);
        card.innerHTML = `
            <div style="position:relative;height:200px;overflow:hidden;">
                <img src="${t.image}" alt="Topic ${t.num}: ${t.title}" class="topic-card-image" loading="lazy" onerror="this.style.background='linear-gradient(135deg, ${t.color}22, ${t.color}11)'; this.style.display='none';">
                <div style="position:absolute;inset:0;background:linear-gradient(135deg, ${t.color}00, ${t.color}33);"></div>
                <div class="topic-card-overlay"></div>
                <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(180deg,transparent,rgba(0,0,0,0.4));padding:1rem;display:flex;justify-content:space-between;align-items:flex-end;height:100%;">
                <span style="font-size:2rem;">${t.icon}</span>
                <span style="font-weight:600;font-size:0.875rem;color:white;background:${t.color};padding:0.25rem 0.75rem;border-radius:9999px;">Topic ${t.num}</span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-heading text-xl mb-2" style="color:#0f172a;line-height:1.3;">${t.title}</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-4 h-12">${t.desc}</p>
                <div class="flex items-center gap-2 text-sm font-semibold" style="color:${t.color};">
                Read Article 
                <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
                </div>
            </div>
            `;
        grid.appendChild(card);
    });
    lucide.createIcons();
}

// ===== MOBILE MENU =====
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// ===== ELEMENT SDK =====
const defaultConfig = {
    blog_title: "Our Green Earth",
    intro_text: "Welcome to Our Green Earth — a blog dedicated to exploring the most pressing environmental issues of our time. From global warming and climate change to biodiversity loss and waste management, this blog aims to inform, inspire, and empower readers to take meaningful action toward protecting our planet.",
    conclusion_text: "Environmental protection is not just a responsibility of governments and organizations — it begins with each one of us. By understanding the causes and effects of environmental issues like global warming, biodiversity loss, and improper waste management, we can make informed decisions that benefit both our communities and the planet. Let us commit to refusing, reducing, reusing, repairing, and recycling as part of our daily lives. Together, small actions can lead to a greener, healthier future for all.",
    background_color: "#f0fdf4",
    surface_color: "#ffffff",
    text_color: "#0f172a",
    primary_action_color: "#22c55e",
    secondary_action_color: "#10b981",
    font_family: "DM Serif Display",
    font_size: 16
};

async function onConfigChange(config) {
    const c = key => config[key] || defaultConfig[key];

    document.getElementById('blog-title').textContent = c('blog_title');
    document.getElementById('nav-title').textContent = c('blog_title');
    document.getElementById('intro-text').textContent = c('intro_text');
    document.getElementById('conclusion-text').textContent = c('conclusion_text');

    document.getElementById('app').style.backgroundColor = c('background_color');
    document.querySelectorAll('.topic-card').forEach(card => {
        card.style.backgroundColor = c('surface_color');
    });

    const font = c('font_family');
    document.querySelectorAll('.font-heading').forEach(el => {
        el.style.fontFamily = `${font}, serif`;
    });

    const size = c('font_size');
    document.getElementById('intro-text').style.fontSize = `${size * 1.15}px`;
    document.getElementById('conclusion-text').style.fontSize = `${size * 1.1}px`;
}

function mapToCapabilities(config) {
    const c = key => config[key] || defaultConfig[key];

    function mut(key) {
        return {
            get: () => c(key),
            set: (v) => {
                config[key] = v;
                window.elementSdk.setConfig({
                    [key]: v
                });
            }
        };
    }
    return {
        recolorables: [mut('background_color'), mut('surface_color'), mut('text_color'), mut('primary_action_color'), mut('secondary_action_color')],
        borderables: [],
        fontEditable: mut('font_family'),
        fontSizeable: mut('font_size')
    };
}

function mapToEditPanelValues(config) {
    const c = key => config[key] || defaultConfig[key];
    return new Map([
        ["blog_title", c('blog_title')],
        ["intro_text", c('intro_text')],
        ["conclusion_text", c('conclusion_text')]
    ]);
}

renderTopics();
lucide.createIcons();

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}
(function() {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'9e31d08a1739b9ff',t:'MTc3NDY1MDM2NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d)
        }
    }
    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
            var e = document.onreadystatechange || function() {};
            document.onreadystatechange = function(b) {
                e(b);
                'loading' !== document.readyState && (document.onreadystatechange = e, c())
            }
        }
    }
})();