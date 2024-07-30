import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          <li>Warm-Up</li>
          <li>Strength Training</li>
          <li>Cardio</li>
          <li>Flexibility and Cool Down</li>
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          These bootcamps are typically structured in a way to cater to
          different fitness levels and goals, ensuring participants get a
          comprehensive workout that is both challenging and enjoyable.
        </p>
        <div className="bootcamps">
          <div>
            <h4>1. HIIT (High-Intensity Interval Training) Bootcamp</h4>
            <p>
              <li>
                Focus: Short bursts of intense exercise followed by rest or
                low-intensity periods.
              </li>
              <li>
                Benefits: Burns fat, boosts metabolism, improves cardiovascular
                health.
              </li>
              <li>
                Activities: Sprints, burpees, jump squats, and other dynamic
                exercises.
              </li>
            </p>
          </div>
          <div>
            <h4>2. Strength Training Bootcamp</h4>
            <p>
              <li>Focus: Building muscle and increasing strength.</li>
              <li>Focus: Building muscle and increasing strength.</li>
              <li>
                Activities: Weightlifting, resistance band exercises, bodyweight
                exercises.
              </li>
            </p>
          </div>
          <div>
            <h4>3. Bootcamp for Weight Loss</h4>
            <p>
              <li>
                Focus: High-energy workouts designed to burn calories and
                promote fat loss.
              </li>
              <li>
                Benefits: Weight reduction, improved fitness levels, increased
                energy.
              </li>
              <li>
                Activities: Combination of cardio and strength training
                exercises.
              </li>
            </p>
          </div>
          <div>
            <h4>4. Yoga Bootcamp</h4>
            <p>
              <li>
                Focus: Combining traditional yoga with bootcamp-style intensity.
              </li>
              <li>
                Benefits: Improved flexibility, strength, mental focus, and
                stress reduction.
              </li>
              <li>
                Activities: Power yoga, dynamic stretching, core exercises.
              </li>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
