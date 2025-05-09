
import Layout from "@/components/layout/Layout";
import ConverterCard from "@/components/converter/ConverterCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Ruler, Weight, Thermometer, Clock, AreaChart, Volume2 } from "lucide-react";

const featuredConverters = [
  {
    title: "Length Converter",
    description: "Convert between meters, feet, inches, and more",
    icon: Ruler,
    href: "/length",
  },
  {
    title: "Weight Converter",
    description: "Convert between kilograms, pounds, ounces, and more",
    icon: Weight,
    href: "/weight",
  },
  {
    title: "Temperature Converter",
    description: "Convert between Celsius, Fahrenheit, and Kelvin",
    icon: Thermometer,
    href: "/temperature",
  },
  {
    title: "Time Converter",
    description: "Convert between seconds, minutes, hours, and more",
    icon: Clock,
    href: "/time",
  },
  {
    title: "Area Converter",
    description: "Convert between square meters, acres, and more",
    icon: AreaChart,
    href: "/area",
  },
  {
    title: "Volume Converter",
    description: "Convert between liters, gallons, cubic meters, and more",
    icon: Volume2,
    href: "/volume",
  }
];

const popularSearches = [
  "meters to feet",
  "kilograms to pounds",
  "celsius to fahrenheit",
  "miles to kilometers",
  "inches to centimeters",
  "pounds to kilograms",
  "liters to gallons",
  "hours to minutes",
  "square meters to square feet"
];

const Index = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Unit Converter
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Free online unit conversion tool. Quick and easy conversion between hundreds of units of measurement.
            </p>
          </div>
        </section>

        {/* Featured Converters */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-6">Featured Converters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 converter-grid">
            {featuredConverters.map((converter, index) => (
              <ConverterCard 
                key={index} 
                title={converter.title} 
                description={converter.description}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                    <converter.icon className="h-8 w-8 text-brand-600" />
                  </div>
                  <Button asChild className="w-full bg-brand-500 hover:bg-brand-600">
                    <Link to={converter.href}>
                      Open Converter <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ConverterCard>
            ))}
          </div>
        </section>

        {/* Popular Searches */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-6">Popular Conversions</h2>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((search, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {search}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
