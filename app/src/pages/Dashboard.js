import React from "react";

const Dashboard = () => {
  const handleCallDoctor = () => {
    window.location.href = "tel:+917222804545"; // Replace with the doctor's actual phone number
  };
  const handleCallTrainer = () => {
    window.location.href = "tel:+919828353417"; // Replace with the trainer's actual phone number
  };

  return (
    <div className="container">
      <h2>User Dashboard</h2>
      <p>Access your health records and personalized fitness plans.</p>
      <button onClick={handleCallDoctor} className="call-doctor">Call Doctor</button>
      <button onClick={handleCallTrainer} className="call-trainer">Call Trainer</button>
    </div>
  );
};

export default Dashboard;
