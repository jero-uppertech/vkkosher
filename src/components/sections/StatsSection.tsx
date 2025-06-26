import { useEffect, useState } from 'react';
import { Award, Globe, Box, ThumbsUp} from 'lucide-react';
 
// Define the prop types for NumberCounter
interface NumberCounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const NumberCounter = ({ end, duration, suffix = '' }: NumberCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // Calculate increment based on duration to complete animation smoothly
    const increment = end / (duration / 50); // 50ms interval for updates

    const timer = setInterval(() => {
      start += increment;
      // Stop the counter once it reaches or exceeds the end value
      if (start >= end) {
        start = end;
        clearInterval(timer); // Clear the interval when done
      }
      setCount(Math.floor(start)); // Update the state with the floored value
    }, 50); // Update every 50 milliseconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [end, duration]); // Re-run effect if end or duration props change

  return (
    // The text color for the counter is set to 'text-navy' to match the overall design
    <span className="text-4xl font-bold text-navy">
      {count}{suffix}
    </span>
  );
};

const StatsStrip = () => {
  // Define the statistics data, including value, suffix, label, description, and icon component
  const stats = [
    { value: 5000, suffix: '+', label: 'Products Certified Worldwide', desc: '', icon: Box },
    { value: 70, suffix: '+', label: 'Years of Experience', desc: '', icon: ThumbsUp },
    { value: 4, suffix: '', label: 'Generations of Trusted Leadership', desc: '', icon: Award },
    { value: 6, suffix: '+', label: 'Continents Served', desc: '', icon: Globe },
  ];

  return (
    <section className="py-16 bg-gray-100 font-sans"> {/* Added font-sans for consistency */}
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Our Achievements Through Numbers</h2>
        {/* Decorative divider line */}
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-10 rounded-full"></div> {/* Adjusted color to amber-500 for gold, added mb-10 and rounded-full */}
        
        {/* Grid container for statistics cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted grid for better responsiveness and increased gap */}
          {stats.map((stat, index) => {
            const IconComponent = stat.icon; // Get the icon component from the stat object
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center" // Enhanced styling
              >
                {/* Icon rendering */}
                {IconComponent && (
                  <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6"> {/* Adjusted color, size, and margin */}
                    <IconComponent className="h-8 w-8 text-amber-500" /> {/* Adjusted icon size and color */}
                  </div>
                )}

                {/* Conditional rendering for value: uses NumberCounter if value > 0 */}
                {stat.value > 0 ? (
                  // Pass the stat value, a duration (e.g., 2000ms), and suffix to NumberCounter
                  <NumberCounter end={stat.value} duration={2000} suffix={stat.suffix} />
                ) : (
                  // Fallback if value is 0 or less (not typically animated)
                  <span className="text-4xl font-bold text-gray-300">{stat.label}</span>
                )}
                
                {/* Statistic label */}
                <p className="mt-4 text-xl font-semibold text-gray-700"> {/* Adjusted font size and weight */}
                  {stat.label}
                </p>
                {/* Statistic description (rendered only if value is 0 and desc exists) */}
                {stat.desc && stat.value === 0 && (
                  <p className="mt-2 text-base text-gray-500">{stat.desc}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
