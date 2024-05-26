// Simulated data for demonstration purpose
const socialMediaData = {
    twitter: {
        followers: 1000,
        posts: [
            { id: 1, text: "Tweet 1", likes: 20, retweets: 10 },
            { id: 2, text: "Tweet 2", likes: 15, retweets: 5 }
        ]
    },
    facebook: {
        followers: 1500,
        posts: [
            { id: 1, image: "post 1",likes: 30, shares: 5 },
            { id: 2, image: "post 2" , likes: 25, shares: 10 }
        ]
    },
    instagram: {
        followers: 2000,
        posts: [
            { id: 1, image: "k7.jpg", likes: 40, comments: 8 },
            { id: 2, image: "k8.jpg", likes: 35, comments: 6  }
        ]
    }
};

// Function to render social media cards
function renderSocialMediaCards() {
    const app = document.getElementById('app');

    for (let platform in socialMediaData) {
        const platformData = socialMediaData[platform];

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${platform.toUpperCase()}</h2>
            <p>Followers: ${platformData.followers}</p>
            <h3>Recent Posts:</h3>
            <ul>
                ${platformData.posts.map(post => `
                    <li>${post.text || `<img src="${post.image}" alt="Post Image" width="300" height="auto">`} - Likes: ${post.likes}</li>
                `).join('')}
            </ul>
        `;

        app.appendChild(card);
    }
}

// Render social media cards when the page loads
window.onload = renderSocialMediaCards;
