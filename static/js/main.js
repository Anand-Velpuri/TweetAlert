document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyze-btn');
    const tweetInput = document.getElementById('tweet-input');
    const resultDiv = document.getElementById('result');
    const statusIcon = document.getElementById('status-icon');
    const statusText = document.getElementById('status-text');

    analyzeBtn.addEventListener('click', async () => {
        const text = tweetInput.value.trim();
        
        if (!text) {
            alert('Please enter some text to analyze');
            return;
        }

        // Show loading state
        analyzeBtn.classList.add('loading');
        analyzeBtn.disabled = true;

        try {
            const response = await fetch('/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            const data = await response.json();
            
            // Update UI with results
            resultDiv.classList.remove('hidden');
            statusIcon.className = `w-8 h-8 rounded-full mr-3 ${data.is_disaster ? 'bg-red-500' : 'bg-green-500'}`;
            statusText.textContent = data.is_disaster ? 'Disaster Detected' : 'No Disaster Detected';
            statusText.className = `text-lg font-medium ${data.is_disaster ? 'text-red-600' : 'text-green-600'}`;
            
            // Add animation
            resultDiv.classList.add('animate-fade-in');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while analyzing the tweet');
        } finally {
            // Remove loading state
            analyzeBtn.classList.remove('loading');
            analyzeBtn.disabled = false;
        }
    });
}); 