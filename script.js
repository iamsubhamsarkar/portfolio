// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Function to show a specific tab
function showTab(tabName) {
    // Hide all tab contents
    tabContents.forEach(content => {
        content.classList.remove('active');
        content.setAttribute('hidden', '');
    });

    // Remove active class from all buttons
    tabButtons.forEach(button => {
        button.classList.remove('active');
        button.setAttribute('aria-selected', 'false');
    });

    // Show the selected tab content
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
        selectedContent.removeAttribute('hidden');
    }

    // Set the selected button as active
    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
        selectedButton.setAttribute('aria-selected', 'true');
    }
}

// Add click event listeners to all tab buttons
tabButtons.forEach(button => {
    button.addEventListener('click', function () {
        const tabName = this.getAttribute('data-tab');
        showTab(tabName);
    });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // close nav when a nav link is clicked (mobile)
    navList.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-link');
        if (!btn) return;
        if (navList.classList.contains('open')) {
            navList.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Keyboard navigation (optional: arrow keys support)
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const focusedButton = document.activeElement;
        if (focusedButton.classList.contains('tab-button')) {
            const buttons = Array.from(tabButtons);
            const currentIndex = buttons.indexOf(focusedButton);
            let nextIndex = currentIndex;

            if (e.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
            } else if (e.key === 'ArrowRight') {
                nextIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
            }

            buttons[nextIndex].focus();
            buttons[nextIndex].click();
        }
    }
});

// Log page load
console.log('Portfolio loaded successfully!');

// --- Content loading for Home (from a simple file) ---
async function loadHomeContent() {
    const contentPath = 'content/home.json';

    // centralize population logic so we can reuse for fallback
    function populateHome(data){
        if (!data) return;
        // Populate hero
        const titleEl = document.getElementById('hero-title');
        if (titleEl) titleEl.textContent = data.hero?.title || "Hello, I'm Your Name";
        const subEl = document.getElementById('hero-subtitle');
        if (subEl) subEl.textContent = data.hero?.subtitle || 'Full-stack developer.';
        const kickerEl = document.getElementById('hero-kicker');
        if (kickerEl) kickerEl.textContent = data.hero?.kicker || '';

        // Profile
        const profile = data.profile || {};
        const nameEl = document.getElementById('profile-name');
        if (nameEl && profile.name) nameEl.textContent = profile.name;
        const emailEl = document.getElementById('email-link');
        if (emailEl && profile.email) { emailEl.href = `mailto:${profile.email}`; emailEl.textContent = profile.email; }
        const linkedinEl = document.getElementById('linkedin-link');
        if (linkedinEl && profile.linkedin) { linkedinEl.href = profile.linkedin; linkedinEl.textContent = profile.linkedin; }
        const photoEl = document.getElementById('profile-photo');
        if (photoEl && profile.photo) photoEl.src = profile.photo;
        const headerEl = document.querySelector('.site-header');
        if (headerEl && profile.headerBg) headerEl.style.setProperty('--header-bg', `url('${profile.headerBg}')`);

        // Intro
        const introEl = document.getElementById('intro');
        if (introEl) introEl.textContent = data.intro || '';

        // Highlights
        const highlightsEl = document.getElementById('highlights');
        if (highlightsEl) {
            highlightsEl.innerHTML = '';
            if (Array.isArray(data.highlights)) {
                data.highlights.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    highlightsEl.appendChild(li);
                });
            }
        }

        // CTA buttons
        const ctaWork = document.getElementById('cta-work');
        const ctaContact = document.getElementById('cta-contact');
        if (ctaWork) ctaWork.addEventListener('click', () => showTab('projects'));
        if (ctaContact) ctaContact.addEventListener('click', () => showTab('chat'));
    }

    try {
        const res = await fetch(contentPath);
        if (!res.ok) throw new Error('Failed to fetch content');
        const data = await res.json();
        populateHome(data);
        return;
    } catch (err) {
        console.warn('Could not load content file:', err);
        // Fallback: try reading embedded JSON in the page (works with file://)
        try {
            const embedded = document.getElementById('home-content');
            if (embedded) {
                const data = JSON.parse(embedded.textContent || embedded.innerText || '{}');
                populateHome(data);
                console.info('Loaded home content from embedded JSON fallback.');
                return;
            }
        } catch (e) {
            console.warn('Embedded fallback failed:', e);
        }
        // If both fetch and embedded fallback fail, leave placeholders as-is and inform user.
    }
}

// Trigger content load when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHomeContent);
} else {
    loadHomeContent();
}

// --- Chat behavior (client-side only) ---
function initChat() {
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    if (!form || !input || !messages) return;

    function appendMessage(text, cls='user'){
        const li = document.createElement('li');
        li.className = `message ${cls}`;
        li.textContent = text;
        messages.appendChild(li);
        messages.scrollTop = messages.scrollHeight;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = input.value.trim();
        if (!val) return;
        appendMessage(val, 'user');
        input.value = '';

        // simple automated reply to acknowledge
        setTimeout(() => {
            appendMessage('Thanks — I received your message. I will reply shortly.', 'bot');
        }, 600);
    });

    // focus input when opening chat
    document.querySelectorAll('[data-tab="chat"]').forEach(btn => btn.addEventListener('click', () => {
        setTimeout(()=> input.focus(), 200);
    }));
}

// initialize chat after DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChat);
} else {
    initChat();
}
