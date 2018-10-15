import React from 'react';

const NoMatch = () => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="title">
                    YOU TRAIL BLAZER YOU! You're the first to search this location! If you've been here, add your trip so we can learn from your experience! If you haven't been here, go and experience it for yourself, then come back and share your trip with us!
    </p>

            </div>
            <footer className="card-footer">
                <p className="card-footer-item">
                    <span>
                        <a href="/trip">Add a Trip</a>
                    </span>
                </p>
            </footer>
        </div>
    );
}

export default NoMatch;