// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add loading animation to quick links
document.querySelectorAll('.quick-link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Add a loading state (you can customize this)
        const icon = this.querySelector('.quick-link-icon');
        const originalContent = icon.innerHTML;
        
        icon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Simulate loading (remove this in production)
        setTimeout(() => {
            icon.innerHTML = originalContent;
        }, 1000);
    });
});

// Simulate API data loading for feeds
function loadSocialFeed() {
    const socialFeed = document.getElementById('social-feed');
    const placeholder = socialFeed.querySelector('.feed-placeholder');
    
    // Simulate API call delay
    setTimeout(() => {
        // Add more sample posts
        const samplePosts = [
            {
                user: '@empresa_oficial',
                time: '4h atrás',
                content: 'Confira nossos novos recursos de relatórios! 📊'
            },
            {
                user: '@suporte_tecnico',
                time: '6h atrás',
                content: 'Manutenção programada concluída com sucesso ✅'
            },
            {
                user: '@marketing_team',
                time: '1 dia atrás',
                content: 'Webinar sobre otimização de processos amanhã às 14h 🎯'
            }
        ];

        samplePosts.forEach(post => {
            const feedItem = document.createElement('div');
            feedItem.className = 'feed-item';
            feedItem.innerHTML = `
                <div class="feed-item-header">
                    <div class="feed-avatar"></div>
                    <div class="feed-info">
                        <strong>${post.user}</strong>
                        <span>${post.time}</span>
                    </div>
                </div>
                <div class="feed-item-content">
                    <p>${post.content}</p>
                </div>
            `;
            socialFeed.appendChild(feedItem);
        });
    }, 2000);
}

function loadContentFeed() {
    const contentFeed = document.getElementById('content-feed');
    const placeholder = contentFeed.querySelector('.feed-placeholder');
    
    // Simulate API call delay
    setTimeout(() => {
        // Add more sample content
        const sampleContent = [
            {
                source: 'YouTube Channel',
                time: '2 dias atrás',
                content: 'Tutorial: Configuração avançada do sistema'
            },
            {
                source: 'Blog Técnico',
                time: '3 dias atrás',
                content: 'Melhores práticas para gestão de estoque'
            },
            {
                source: 'Newsletter',
                time: '1 semana atrás',
                content: 'Novidades da versão 2.5 do sistema'
            }
        ];

        sampleContent.forEach(content => {
            const feedItem = document.createElement('div');
            feedItem.className = 'feed-item';
            feedItem.innerHTML = `
                <div class="feed-item-header">
                    <div class="feed-avatar"></div>
                    <div class="feed-info">
                        <strong>${content.source}</strong>
                        <span>${content.time}</span>
                    </div>
                </div>
                <div class="feed-item-content">
                    <p>${content.content}</p>
                </div>
            `;
            contentFeed.appendChild(feedItem);
        });
    }, 3000);
}

// Initialize feeds when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSocialFeed();
    loadContentFeed();
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.category-card, .quick-link-card, .feed-grid').forEach(el => {
    observer.observe(el);
});

// Add click tracking for analytics (placeholder)
function trackClick(element, category) {
    console.log(`Click tracked: ${category} - ${element}`);
    // Here you would integrate with your analytics service
    // Example: gtag('event', 'click', { category: category, label: element });
}

// Add click tracking to category links
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const category = this.closest('.category-card').querySelector('.category-title').textContent.trim();
        trackClick(this.textContent, category);
    });
});

// Add click tracking to quick links
document.querySelectorAll('.quick-link-card').forEach(link => {
    link.addEventListener('click', function(e) {
        const label = this.querySelector('.quick-link-label').textContent;
        trackClick(label, 'Quick Links');
    });
});

// Simple search functionality (can be enhanced)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar links...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 12px 16px;
        border: 1px solid #ced4da;
        border-radius: 8px;
        background: #ffffff;
        font-size: 16px;
        margin: 20px auto;
        display: block;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    `;

    // Insert search input before categories section
    const categoriesSection = document.getElementById('categorias');
    categoriesSection.parentNode.insertBefore(searchInput, categoriesSection);

    // Add search functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const categoryCards = document.querySelectorAll('.category-card');
        
        categoryCards.forEach(card => {
            const title = card.querySelector('.category-title').textContent.toLowerCase();
            const links = Array.from(card.querySelectorAll('.category-link'))
                .map(link => link.textContent.toLowerCase());
            
            const matches = title.includes(searchTerm) || 
                          links.some(link => link.includes(searchTerm));
            
            card.style.display = matches ? 'block' : 'none';
        });
    });
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    addSearchFunctionality();
});

// API Integration Helper Functions
window.APIHelpers = {
    // Function to integrate Instagram API
    loadInstagramFeed: function(accessToken, userId) {
        // Placeholder for Instagram API integration
        console.log('Instagram API integration placeholder');
        // Example implementation:
        /*
        fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=${accessToken}`)
            .then(response => response.json())
            .then(data => {
                // Process and display Instagram posts
                this.displaySocialPosts(data.data, 'instagram');
            })
            .catch(error => console.error('Instagram API error:', error));
        */
    },

    // Function to integrate YouTube API
    loadYouTubeFeed: function(apiKey, channelId) {
        // Placeholder for YouTube API integration
        console.log('YouTube API integration placeholder');
        // Example implementation:
        /*
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`)
            .then(response => response.json())
            .then(data => {
                // Process and display YouTube videos
                this.displayContentPosts(data.items, 'youtube');
            })
            .catch(error => console.error('YouTube API error:', error));
        */
    },

    // Helper function to display social media posts
    displaySocialPosts: function(posts, platform) {
        const socialFeed = document.getElementById('social-feed');
        const placeholder = socialFeed.querySelector('.feed-placeholder');
        
        if (placeholder) {
            placeholder.style.display = 'none';
        }

        posts.forEach(post => {
            const feedItem = document.createElement('div');
            feedItem.className = 'feed-item';
            // Customize based on platform and post data
            socialFeed.appendChild(feedItem);
        });
    },

    // Helper function to display content posts
    displayContentPosts: function(posts, platform) {
        const contentFeed = document.getElementById('content-feed');
        const placeholder = contentFeed.querySelector('.feed-placeholder');
        
        if (placeholder) {
            placeholder.style.display = 'none';
        }

        posts.forEach(post => {
            const feedItem = document.createElement('div');
            feedItem.className = 'feed-item';
            // Customize based on platform and post data
            contentFeed.appendChild(feedItem);
        });
    }
};

// Example usage (uncomment and configure when ready to use):
// APIHelpers.loadInstagramFeed('YOUR_ACCESS_TOKEN', 'YOUR_USER_ID');
// APIHelpers.loadYouTubeFeed('YOUR_API_KEY', 'YOUR_CHANNEL_ID');

