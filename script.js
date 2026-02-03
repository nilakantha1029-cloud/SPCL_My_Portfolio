  // Project details
        const projects = [
            {
                title: 'E-Commerce Site',
                desc: 'A complete online store with shopping cart, payment processing, order management, and admin panel. Built with modern web technologies for a smooth shopping experience.',
                tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
                features: [
                    'Shopping cart and wishlist',
                    'Secure payment with Stripe',
                    'Product search and filters',
                    'Order tracking',
                    'Admin dashboard',
                    'Mobile responsive'
                ]
            },
            {
                title: 'Task Manager',
                desc: 'Team collaboration tool for managing projects and tasks. Features real-time updates, file sharing, and team communication.',
                tech: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
                features: [
                    'Drag and drop tasks',
                    'Real-time collaboration',
                    'File attachments',
                    'Team chat',
                    'Progress tracking',
                    'Notifications'
                ]
            },
            {
                title: 'Weather App',
                desc: 'Beautiful weather application showing current conditions and forecasts. Uses weather APIs to provide accurate data.',
                tech: ['JavaScript', 'Weather API', 'CSS', 'Chart.js'],
                features: [
                    'Current weather',
                    'Weekly forecast',
                    'Interactive maps',
                    'Location search',
                    'Weather alerts',
                    'Clean interface'
                ]
            },
            {
                title: 'Portfolio Dashboard',
                desc: 'Investment tracking dashboard with charts and analytics. Helps users monitor their portfolio performance.',
                tech: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
                features: [
                    'Interactive charts',
                    'Portfolio analytics',
                    'Asset tracking',
                    'Performance reports',
                    'Data export',
                    'Real-time updates'
                ]
            },
            {
                title: 'Social Platform',
                desc: 'Social networking site with posts, messaging, and user profiles. Built for connecting people.',
                tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'AWS'],
                features: [
                    'User profiles',
                    'Real-time chat',
                    'Post sharing',
                    'Photo uploads',
                    'Friend system',
                    'Privacy controls'
                ]
            },
            {
                title: 'Blog CMS',
                desc: 'Content management system for bloggers. Features markdown editor, SEO tools, and analytics.',
                tech: ['Next.js', 'Contentful', 'Vercel', 'React'],
                features: [
                    'Markdown editor',
                    'SEO optimization',
                    'Analytics',
                    'Media library',
                    'Categories and tags',
                    'Fast performance'
                ]
            }
        ];

        // Show modal
        function showModal(index) {
            const project = projects[index];
            const modal = document.getElementById('modal');
            const body = document.getElementById('modal-body');
            
            body.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.desc}</p>
                <h4>Technologies</h4>
                <div class="tags">
                    ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <h4>Features</h4>
                <ul>
                    ${project.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <div style="margin-top: 30px;">
                    <a href="#" class="btn btn-primary">View Demo</a>
                    <a href="#" class="btn btn-secondary">GitHub</a>
                </div>
            `;
            
            modal.classList.add('show');
        }

        // Hide modal
        function hideModal() {
            document.getElementById('modal').classList.remove('show');
        }

        // Close modal on outside click
        document.getElementById('modal').onclick = function(e) {
            if (e.target == this) {
                hideModal();
            }
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.onclick = function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // Form submit
        document.querySelector('.contact-form').onsubmit = function(e) {
            e.preventDefault();
            alert('Thanks for your message! I will get back to you soon.');
            this.reset();
        }