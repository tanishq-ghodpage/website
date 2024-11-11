import React from "react";
const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        "Push harder than yesterday if you want a different tomorrow." Every rep, every set, every drop of sweat brings you one step closer to your goals. Join us for sessions that push your limits and transform your body and mind!

        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Our bootcamps are designed to help you achieve peak fitness. Discover classes that cater to every goal, from strength-building to cardio endurance, all guided by expert trainers dedicated to your progress.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
            Build a strong foundation with our strength and conditioning bootcamp. Improve muscle endurance, enhance core stability, and increase your power with this all-round strength training session. 
            </p>
          </div>
          <div>
            <h4>High-Intensity Interval Training (HIIT)</h4>
            <p>
            A fast-paced, calorie-burning workout designed to improve cardiovascular fitness and endurance. Feel the rush as you work through intervals that push your limits and deliver quick results.
            </p>
          </div>
          <div>
            <h4>Flexibility & Mobility</h4>
            <p>
            Improve your range of motion, reduce the risk of injuries, and relieve stress with our flexibility-focused sessions. Perfect for everyone looking to add balance and recovery to their routine.
            </p>
          </div>
          <div>
            <h4>Endurance & Cardio Blast</h4>
            <p>
            Challenge your stamina with cardio-based workouts that keep your heart healthy and energy high. Achieve lasting endurance and keep your body performing at its peak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkoutSessions;