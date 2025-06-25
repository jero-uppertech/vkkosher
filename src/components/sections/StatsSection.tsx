import { useEffect, useState } from 'react';
import { Clock, Users, Award, Shield, Globe, Calendar, Box, ThumbsUp} from 'lucide-react';
 
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
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className="text-4xl font-bold text-blue-600">
      {count}{suffix}
    </span>
  );
};

const StatsStrip = () => {
  const stats = [
    { value: 5000, suffix: '+', label: 'Products Certified Worldwide', desc: '', icon: Box }, // Assign the icon component
    { value: 7, suffix: '+', label: 'Years of Experience', desc: '', icon: ThumbsUp }, // Assign the icon component
    { value: 4, suffix: '', label: 'Generations of Trusted Leadership', desc: '', icon: Award }, // Assign the icon component
    { value: 6, suffix: '+', label: 'Continents Served', desc: '', icon: Globe }, // Assign the icon component
  ];
  // const stats = [
  //   { value: 5000, suffix: '+', label: 'Products Certified Worldwide', desc: '' },
  //   { value: 4, suffix: '', label: 'Generations of Trusted Leadership', desc: '' },
  //   { value: 6, suffix: '+', label: 'Continents Served', desc: '' },
  // ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 ">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4 text-center">Our Achievements Through Numbers</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-6 "></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon; // Get the icon component from the stat object
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md  text-center "
              >
                {/* Render the icon dynamically */}
                {IconComponent && (
                  <div className="bg-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="h-6 w-6 text-gold" />
                  </div>
                )}

                {stat.value > 0 ? (
                 
                  <span className="text-4xl font-bold text-navy">
                    {stat.value}{stat.suffix}
                  </span>
        
                ) : (
                  <span className="text-4xl font-bold text-gray-300 ">{stat.label}</span>
                )}
                <p className="mt-2 text-lg font-medium text-gray-800">
                  {stat.value > 0 ? stat.label : stat.desc}
                </p>
                {stat.desc && stat.value === 0 && (
                  <p className="mt-1 text-sm text-gray-600">{stat.desc}</p>
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