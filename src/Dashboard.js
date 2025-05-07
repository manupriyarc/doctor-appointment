import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const upcomingBooking = {
    number: 1,
    session: "Test Session",
    doctor: "Test Doctor",
    date: "2050-01-01",
    time: "18:00",
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar">👤</div>
          <div className="profile-info">
            <strong>Test Patient..</strong>
            <p>patient@edoc.com</p>
          </div>
          <button className="logout-button">Log out</button>
        </div>
        <nav>
          <ul>
            <li className="active">Home</li>
            <li>All Doctors</li>
            <li>Scheduled Sessions</li>
            <li>My Bookings</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <div className="header">
          <h2>Home</h2>
          <span className="date">Today's Date: 2022-06-03</span>
        </div>

        <section className="welcome-section">
          <h3>Welcome!</h3>
          <h1>Test Patient.</h1>
          <p>
            Haven’t any idea about doctors? No problem! Jump to “All Doctors” or “Sessions”.
            Track your appointments and see the expected arrival time of your doctor.
          </p>
          <div className="search">
            <input type="text" placeholder="Search Doctor and We will Find The Session Available" />
            <button>Search</button>
          </div>
        </section>

        <section className="status-section">
          <h3>Status</h3>
          <div className="status-boxes">
            <div className="status-box">1<br />All Doctors</div>
            <div className="status-box">2<br />All Patients</div>
            <div className="status-box">1<br />New Booking</div>
            <div className="status-box">0<br />Today Sessions</div>
          </div>
        </section>

        <section className="booking-section">
          <h3>Your Upcoming Booking</h3>
          <table>
            <thead>
              <tr>
                <th>Appoint. Number</th>
                <th>Session Title</th>
                <th>Doctor</th>
                <th>Scheduled Date & Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{upcomingBooking.number}</td>
                <td>{upcomingBooking.session}</td>
                <td>{upcomingBooking.doctor}</td>
                <td>{`${upcomingBooking.date} ${upcomingBooking.time}`}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
