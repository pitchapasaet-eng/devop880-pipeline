import './App.css';

function App() {
  return (
    <div className="container">
      <header className="hero">

        {/* โลโก้ */}
        <img
          src="smalllogo.png"
          alt="logo"
          className="logo"
        />

        <h1>Music Room KUSRC</h1>
        <p>Reserve your practice room easily </p>
      </header>

      <div className="card booking-card">
        <h2>Book a Room</h2>

        <form className="booking-form">
          <input type="text" placeholder="Your Name" />
          
          <select>
            <option>Select Room</option>
            <option>Piano Room</option>
            <option>Band Room</option>
            <option>Drum Studio</option>
            <option>Vocal Room</option>
          </select>

          <input type="date" />

          <select>
            <option>Select Time</option>
            <option>09:00 - 10:00</option>
            <option>10:00 - 11:00</option>
            <option>13:00 - 14:00</option>
            <option>15:00 - 16:00</option>
          </select>

          <button type="submit">Book Now</button>
        </form>
      </div>

      <div className="card info-card">
        <h2>Available Rooms</h2>
        <ul>
          <li>🎹 Piano Room</li>
          <li>🥁 Drum Studio</li>
          <li>🎤 Vocal Room</li>
          <li>🎸 Band Room</li>
        </ul>
      </div>

      <footer>
        <p>Developed by Pitchapa, Panisa</p>
      </footer>
    </div>
  );
}

export default App;