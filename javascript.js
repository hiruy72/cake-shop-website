
document.addEventListener('DOMContentLoaded', function() {
        const scrollContainer = document.querySelector('.testimonial-scroll');
        const leftArrow = document.querySelector('.testimonial-arrow-left');
        const rightArrow = document.querySelector('.testimonial-arrow-right');
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const cardWidth = testimonialCards[0].offsetWidth + 
                         parseInt(window.getComputedStyle(testimonialCards[0]).marginLeft) + 
                         parseInt(window.getComputedStyle(testimonialCards[0]).marginRight);
        let currentPosition = 0;
        const maxPosition = -((testimonialCards.length - 3) * cardWidth);

        // Hide left arrow initially
        if (currentPosition === 0) {
            leftArrow.style.opacity = '0.5';
            leftArrow.style.cursor = 'not-allowed';
        }

        rightArrow.addEventListener('click', function() {
            if (currentPosition > maxPosition) {
                currentPosition -= cardWidth;
                scrollContainer.style.transform = `translateX(${currentPosition}px)`;
                
                // Update arrow states
                rightArrow.style.opacity = currentPosition <= maxPosition ? '0.5' : '1';
                rightArrow.style.cursor = currentPosition <= maxPosition ? 'not-allowed' : 'pointer';
                leftArrow.style.opacity = '1';
                leftArrow.style.cursor = 'pointer';
            }
        });

        leftArrow.addEventListener('click', function() {
            if (currentPosition < 0) {
                currentPosition += cardWidth;
                scrollContainer.style.transform = `translateX(${currentPosition}px)`;
                
                // Update arrow states
                leftArrow.style.opacity = currentPosition >= 0 ? '0.5' : '1';
                leftArrow.style.cursor = currentPosition >= 0 ? 'not-allowed' : 'pointer';
                rightArrow.style.opacity = '1';
                rightArrow.style.cursor = 'pointer';
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            const newCardWidth = testimonialCards[0].offsetWidth + 
                                parseInt(window.getComputedStyle(testimonialCards[0]).marginLeft) + 
                                parseInt(window.getComputedStyle(testimonialCards[0]).marginRight);
            const newMaxPosition = -((testimonialCards.length - 3) * newCardWidth);
            
            // Adjust current position proportionally
            if (cardWidth !== newCardWidth) {
                currentPosition = (currentPosition / cardWidth) * newCardWidth;
                scrollContainer.style.transform = `translateX(${currentPosition}px)`;
            }
            
            cardWidth = newCardWidth;
            maxPosition = newMaxPosition;
        });
    });
      // Add simple animation when team members come into view
    document.addEventListener('DOMContentLoaded', function() {
        const teamCards = document.querySelectorAll('.team-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {threshold: 0.1});
        
        teamCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            observer.observe(card);
        });
    });
    // Animate timeline items as they come into view
    document.addEventListener('DOMContentLoaded', function() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 200);
                }
            });
        }, {threshold: 0.1});
        
        timelineItems.forEach(item => observer.observe(item));
        
        // Make floating cakes interactive
        const cakes = document.querySelectorAll('.floating-cake');
        cakes.forEach(cake => {
            cake.addEventListener('mouseenter', () => {
                cake.style.animationPlayState = 'paused';
            });
            cake.addEventListener('mouseleave', () => {
                cake.style.animationPlayState = 'running';
            });
        });
    });