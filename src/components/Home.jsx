import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Handle navigation to Daily Current Affairs
  const handleDailyAffairsClick = () => {
    navigate('/daily-current-affairs');
  };

  // Handle navigation to My Courses
  const handleExploreCourses = () => {
    navigate('/my-courses');
  };

  return (
    <div className="home-page">
      <div className="home-container">
        {/* Animated Header Section */}
        <div className="header-section">
          <div className="header-animated-bg"></div>
          <div className="header-content">
            <div className="header-badge">🔥 #1 Mock Test Platform</div>
            <h1>
              <span className="gradient-text">Master Your</span>
              <br />
              Competitive Exams
            </h1>
            <p>Practice with 800+ mock tests designed by experts. Track your progress and crack your dream exam!</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">18+</span>
                <span className="stat-label">📚 Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">800+</span>
                <span className="stat-label">📝 Mock Tests</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">👥 Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.8⭐</span>
                <span className="stat-label">⭐ Rating</span>
              </div>
            </div>
            <div className="header-actions">
              <button className="primary-btn" onClick={handleExploreCourses}>
                Explore Courses →
              </button>
              <button className="secondary-btn" onClick={handleDailyAffairsClick}>
                Daily Current Affairs
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar with Filter */}
        <div className="search-section">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search mock tests, categories, exams..." className="search-input" />
            <div className="filter-group">
              <select className="filter-select">
                <option>All Categories</option>
                <option>BPSC</option>
                <option>UPSC</option>
                <option>Bihar Police</option>
                <option>SSC GD</option>
              </select>
              <select className="filter-select">
                <option>All Levels</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Advanced</option>
                <option>Expert</option>
              </select>
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>

        {/* Daily Current Affairs - Main Feature Section */}
        <div className="daily-affairs-main">
          <div className="daily-affairs-hero">
            <div className="daily-affairs-content">
              <div className="daily-affairs-badge">📅 Daily Update</div>
              <h2>Daily Current Affairs</h2>
              <p>Stay ahead with today's most important news, events, and analysis curated specifically for competitive exams.</p>
              <div className="daily-affairs-stats">
                <div className="daily-stat">
                  <span className="daily-stat-number">365</span>
                  <span className="daily-stat-label">Daily Updates</span>
                </div>
                <div className="daily-stat">
                  <span className="daily-stat-number">50+</span>
                  <span className="daily-stat-label">Topics Covered</span>
                </div>
                <div className="daily-stat">
                  <span className="daily-stat-number">10K+</span>
                  <span className="daily-stat-label">Questions</span>
                </div>
              </div>
              <button className="daily-affairs-cta" onClick={handleDailyAffairsClick}>
                View Today's Digest →
              </button>
            </div>
            <div className="daily-affairs-visual">
              <div className="floating-cards">
                <div className="float-card card-1">📰</div>
                <div className="float-card card-2">🌍</div>
                <div className="float-card card-3">📊</div>
                <div className="float-card card-4">⚡</div>
              </div>
            </div>
          </div>

          <div className="daily-affairs-grid">
            <div className="daily-affairs-card featured">
              <span className="daily-affairs-tag">🔥 Top Story</span>
              <h4>Union Budget 2025-26 Highlights</h4>
              <p>Key announcements and policy changes for the fiscal year including tax reforms, infrastructure spending, and social welfare schemes.</p>
              <div className="daily-affairs-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 25 Questions</span>
              </div>
              <button className="daily-affairs-card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>

            <div className="daily-affairs-card">
              <span className="daily-affairs-tag" style={{ background: '#2ecc71' }}>📰 Important</span>
              <h4>New Education Policy Updates</h4>
              <p>Major reforms in higher education and research including new curriculum structure and digital learning initiatives.</p>
              <div className="daily-affairs-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 18 Questions</span>
              </div>
              <button className="daily-affairs-card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>

            <div className="daily-affairs-card">
              <span className="daily-affairs-tag" style={{ background: '#3498db' }}>🌍 Global</span>
              <h4>International Relations: India's New Initiatives</h4>
              <p>Diplomatic developments, trade agreements, and strategic partnerships shaping India's global standing.</p>
              <div className="daily-affairs-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 20 Questions</span>
              </div>
              <button className="daily-affairs-card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>

            <div className="daily-affairs-card">
              <span className="daily-affairs-tag" style={{ background: '#e67e22' }}>💼 Economy</span>
              <h4>GDP Growth & Economic Outlook 2025</h4>
              <p>Analysis of India's economic performance, growth projections, and key sectoral developments.</p>
              <div className="daily-affairs-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 22 Questions</span>
              </div>
              <button className="daily-affairs-card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>

            <div className="daily-affairs-card">
              <span className="daily-affairs-tag" style={{ background: '#9b59b6' }}>🔬 Science</span>
              <h4>ISRO's New Space Missions</h4>
              <p>Latest updates on India's space exploration programs, satellite launches, and scientific achievements.</p>
              <div className="daily-affairs-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 15 Questions</span>
              </div>
              <button className="daily-affairs-card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>

            <div className="daily-affairs-card">
              <span className="daily-affairs-tag" style={{ background: '#1abc9c' }}>🌿 Environment</span>
              <h4>Climate Action & Sustainability</h4>
              <p>Global climate initiatives, renewable energy targets, and environmental conservation efforts.</p>
              <div className="daily-affairs-meta">
                <span>📅 March 14, 2025</span>
                <span>📝 16 Questions</span>
              </div>
              <button className="daily-affairs-card-btn" onClick={handleDailyAffairsClick}>
                Start Practice →
              </button>
            </div>
          </div>
        </div>

        {/* Why Daily Current Affairs Section */}
        <div className="why-section">
          <h2>🎯 Why Daily Current Affairs Matters</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">📊</div>
              <h4>Exam Relevance</h4>
              <p>70% of competitive exams include current affairs questions. Stay updated to score high.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🧠</div>
              <h4>Boost General Knowledge</h4>
              <p>Develop a strong understanding of national and international events for better decision-making.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h4>Competitive Edge</h4>
              <p>Regular practice with daily current affairs gives you an edge over other aspirants.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⏰</div>
              <h4>Time Management</h4>
              <p>Learn to quickly analyze and answer current affairs questions within time constraints.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h2>💬 What Our Students Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The daily current affairs section is a game-changer! It helped me stay updated and ace my exams."</p>
              <div className="student-info">
                <span className="student-name">Amit Kumar</span>
                <span className="student-exam">BPSC Topper 2024</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Best platform for current affairs preparation. The questions are always relevant and up-to-date."</p>
              <div className="student-info">
                <span className="student-name">Priya Singh</span>
                <span className="student-exam">UPSC CSE 2024</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Daily practice with current affairs boosted my confidence. Highly recommended for all aspirants!"</p>
              <div className="student-info">
                <span className="student-name">Rahul Sharma</span>
                <span className="student-exam">Bank PO 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to Master Current Affairs?</h3>
            <p>Join thousands of aspirants who practice daily and achieve their dream careers.</p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={handleDailyAffairsClick}>
                Start Daily Practice →
              </button>
              <button className="cta-secondary" onClick={handleExploreCourses}>
                Explore All Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Reset & Base */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Segoe UI', 'Arial', sans-serif;
          padding-bottom: 40px;
        }

        .home-container {
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header-section {
          position: relative;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          border-radius: 0 0 40px 40px;
          padding: 60px 50px 50px;
          margin: 0 -20px 30px -20px;
          overflow: hidden;
        }

        .header-animated-bg {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(10deg); }
        }

        .header-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }

        .header-badge {
          display: inline-block;
          background: rgba(255, 215, 0, 0.2);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 6px 20px;
          border-radius: 50px;
          font-size: 0.85rem;
          color: #ffd700;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .header-content h1 {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 15px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-content p {
          font-size: 1.2rem;
          opacity: 0.85;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }

        .header-stats {
          display: flex;
          justify-content: center;
          gap: 50px;
          margin-bottom: 35px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffd700;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.7;
          margin-top: 2px;
        }

        .header-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .primary-btn {
          padding: 14px 40px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.5);
        }

        .secondary-btn {
          padding: 14px 35px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          color: white;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-3px);
        }

        /* Search */
        .search-section {
          margin-bottom: 35px;
        }

        .search-container {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 16px;
          padding: 8px 8px 8px 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          gap: 10px;
          flex-wrap: wrap;
        }

        .search-icon {
          font-size: 1.2rem;
        }

        .search-input {
          flex: 1;
          padding: 14px 0;
          border: none;
          outline: none;
          font-size: 1rem;
          background: transparent;
          min-width: 150px;
        }

        .filter-group {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-select {
          padding: 10px 15px;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          font-size: 0.9rem;
          background: #f8f9fa;
          cursor: pointer;
          outline: none;
          transition: all 0.3s ease;
        }

        .filter-select:hover {
          border-color: #667eea;
        }

        .search-btn {
          padding: 12px 30px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
        }

        /* Daily Current Affairs Main Section */
        .daily-affairs-main {
          margin-bottom: 40px;
        }

        .daily-affairs-hero {
          background: linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #1a1a2e 100%);
          border-radius: 24px;
          padding: 45px 50px;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
        }

        .daily-affairs-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -30%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }

        .daily-affairs-content {
          position: relative;
          z-index: 2;
          color: white;
        }

        .daily-affairs-badge {
          display: inline-block;
          background: rgba(255, 215, 0, 0.2);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 6px 20px;
          border-radius: 50px;
          font-size: 0.8rem;
          color: #ffd700;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .daily-affairs-content h2 {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #fff, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .daily-affairs-content p {
          font-size: 1.1rem;
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .daily-affairs-stats {
          display: flex;
          gap: 30px;
          margin-bottom: 25px;
        }

        .daily-stat {
          display: flex;
          flex-direction: column;
        }

        .daily-stat-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffd700;
        }

        .daily-stat-label {
          font-size: 0.85rem;
          opacity: 0.7;
        }

        .daily-affairs-cta {
          padding: 14px 40px;
          background: linear-gradient(135deg, #f093fb, #667eea);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 25px rgba(102, 126, 234, 0.4);
        }

        .daily-affairs-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 35px rgba(102, 126, 234, 0.5);
        }

        .daily-affairs-visual {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          position: relative;
        }

        .float-card {
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: floatCards 4s ease-in-out infinite;
        }

        .float-card.card-1 { animation-delay: 0s; }
        .float-card.card-2 { animation-delay: 0.5s; }
        .float-card.card-3 { animation-delay: 1s; }
        .float-card.card-4 { animation-delay: 1.5s; }

        @keyframes floatCards {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        /* Daily Affairs Grid */
        .daily-affairs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .daily-affairs-card {
          background: white;
          border-radius: 16px;
          padding: 22px 24px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          border-left: 4px solid #667eea;
        }

        .daily-affairs-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .daily-affairs-card.featured {
          border-left-color: #ffd700;
          background: linear-gradient(135deg, #fff, #fffbe6);
          grid-column: 1 / -1;
        }

        .daily-affairs-tag {
          display: inline-block;
          padding: 3px 14px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          background: #667eea;
          color: white;
          margin-bottom: 10px;
        }

        .daily-affairs-card h4 {
          font-size: 1.05rem;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .daily-affairs-card p {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .daily-affairs-meta {
          display: flex;
          gap: 15px;
          font-size: 0.8rem;
          color: #888;
          margin-bottom: 12px;
        }

        .daily-affairs-card-btn {
          padding: 8px 25px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 25px;
          color: white;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .daily-affairs-card-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
        }

        /* Why Section */
        .why-section {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          margin-bottom: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .why-section h2 {
          text-align: center;
          color: #1a1a2e;
          font-size: 1.8rem;
          margin-bottom: 25px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .why-card {
          text-align: center;
          padding: 20px 15px;
          background: #f8f9fa;
          border-radius: 14px;
          transition: all 0.3s ease;
        }

        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .why-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
          display: block;
        }

        .why-card h4 {
          color: #1a1a2e;
          font-size: 1rem;
          margin-bottom: 5px;
        }

        .why-card p {
          color: #888;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        /* Testimonials */
        .testimonials {
          margin-bottom: 40px;
        }

        .testimonials h2 {
          text-align: center;
          color: #1a1a2e;
          font-size: 1.8rem;
          margin-bottom: 25px;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .testimonial-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }

        .stars {
          color: #ffd700;
          font-size: 1.1rem;
          margin-bottom: 10px;
        }

        .testimonial-card p {
          color: #444;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 15px;
          font-style: italic;
        }

        .student-info {
          border-top: 1px solid #f0f0f0;
          padding-top: 12px;
        }

        .student-name {
          display: block;
          font-weight: 700;
          color: #1a1a2e;
          font-size: 0.95rem;
        }

        .student-exam {
          font-size: 0.8rem;
          color: #667eea;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 20px;
          padding: 45px 40px;
          text-align: center;
          color: white;
        }

        .cta-content h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .cta-content p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 25px;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary {
          padding: 14px 40px;
          background: white;
          border: none;
          border-radius: 50px;
          color: #667eea;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        }

        .cta-secondary {
          padding: 14px 35px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50px;
          color: white;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-3px);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .daily-affairs-hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 35px 30px;
          }

          .daily-affairs-stats {
            justify-content: center;
          }

          .daily-affairs-content h2 {
            font-size: 2.2rem;
          }

          .header-content h1 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .header-section {
            padding: 40px 25px 35px;
          }

          .header-content h1 {
            font-size: 2rem;
          }

          .header-stats {
            gap: 20px;
          }

          .stat-number {
            font-size: 1.6rem;
          }

          .header-actions {
            flex-direction: column;
            align-items: center;
          }

          .search-container {
            flex-direction: column;
            align-items: stretch;
            padding: 15px;
          }

          .filter-group {
            flex-direction: column;
          }

          .filter-select {
            width: 100%;
          }

          .search-btn {
            width: 100%;
          }

          .daily-affairs-hero {
            padding: 30px 20px;
          }

          .daily-affairs-content h2 {
            font-size: 1.8rem;
          }

          .daily-affairs-stats {
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }

          .daily-affairs-grid {
            grid-template-columns: 1fr;
          }

          .why-grid {
            grid-template-columns: 1fr 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary, .cta-secondary {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .header-content h1 {
            font-size: 1.6rem;
          }

          .daily-affairs-content h2 {
            font-size: 1.5rem;
          }

          .why-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .float-card {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .daily-affairs-card.featured {
            grid-column: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
