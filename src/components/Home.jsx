import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';

function Home() {
    // Placeholder data for recent tickets
    const recentTickets = [
        { id: 1, title: 'Login page error', status: 'Open' },
        { id: 2, title: 'Server downtime', status: 'Resolved' },
        // ... other tickets
    ];

    // Example function to handle the logout process
    const handleLogout = () => {
        // TODO: Implement logout functionality
        console.log('Logout');
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav>
                <Link to="/admin">Admin</Link>
                <Link to="/submit-ticket">Submit Ticket</Link>
                <Link to="/view-tickets">View Tickets</Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>

            {/* Welcome Section */}
            <header>
                <h1>Welcome to the Ticketing System, Admin!</h1>
            </header>

            {/* Quick Stats */}
            <section>
                <h2>Quick Stats</h2>
                <p>Open Tickets: 17</p>
                <p>Resolved Tickets this month: 25!</p>
            </section>

            {/* Recent Tickets */}
            <section>
                <h2>Recent Tickets</h2>
                <ul>
                    {recentTickets.map((ticket) => (
                        <li key={ticket.id}>{ticket.title} - {ticket.status}</li>
                    ))}
                </ul>
            </section>

            {/* Call to Action */}
            <section>
                <Link to="/submit-ticket">
                    <button>Submit a New Ticket</button>
                </Link>
            </section>

            {/* Footer */}
            <footer>
                <p>© 2023 Ticketing System</p>
            </footer>
        </div>
    );
}

export default Home;
