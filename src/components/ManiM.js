import React from 'react';

function ManiM() {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to SocialSphere</h1>
        <p className="lead">
          Discover the power of social media in connecting the world. Whether you're a brand, a creator, or a casual user, social media transforms the way we communicate.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button className="btn btn-primary">Join Now</button>
          <button className="btn btn-outline-info">Explore Features</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Connect Instantly</h5>
              <p className="card-text">
                Stay in touch with friends and family through instant messaging, live video, and group chats.
              </p>
              <button className="btn btn-outline-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Build Your Brand</h5>
              <p className="card-text">
                Use social platforms to grow your business, engage with your audience, and increase visibility.
              </p>
              <button className="btn btn-outline-success">Start Building</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Stay Informed</h5>
              <p className="card-text">
                Get real-time news, trending topics, and updates from around the world directly in your feed.
              </p>
              <button className="btn btn-outline-warning">Read News</button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-light p-5 rounded text-center">
        <h2>Ready to Dive In?</h2>
        <p>
          Social media is more than just likes and shares. It's a community, a marketplace, and a stage. Start your journey today!
        </p>
        <button className="btn btn-lg btn-danger me-3">Sign Up</button>
        <button className="btn btn-lg btn-outline-dark">Contact Support</button>
      </div>
    </div>
  );
}

export default ManiM;
