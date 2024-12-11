import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Settings, BarChart, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-custom text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold mb-6">
                Next-Generation Conveyor Management System
              </h1>
              <p className="text-lg mb-8 text-gray-100">
                Streamline your operations with our advanced conveyor management solution. 
                Real-time monitoring, predictive maintenance, and intelligent automation.
              </p>
              <div className="space-x-4">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-custom">
                  Learn More
                </Button>
                <Link to="/login">
                  <Button size="lg">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
                alt="Industrial Conveyor System"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Industry
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to manage your conveyor systems efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Activity className="h-12 w-12 text-custom mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Monitor your conveyor systems in real-time with advanced analytics
              </p>
            </Card>

            <Card className="text-center p-6">
              <Settings className="h-12 w-12 text-custom mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Controls</h3>
              <p className="text-gray-600">
                Intelligent control systems for optimal performance
              </p>
            </Card>

            <Card className="text-center p-6">
              <BarChart className="h-12 w-12 text-custom mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">
                Data-driven insights for better decision making
              </p>
            </Card>

            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-custom mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Management</h3>
              <p className="text-gray-600">
                Collaborate effectively with your maintenance team
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of companies already using our solution
          </p>
          <Link to="/login">
            <Button size="lg">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;