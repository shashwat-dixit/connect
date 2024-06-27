import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />  {/* Add the Navbar component here */}

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4">A collaborative chat app</h2>
          <p className="text-xl text-gray-300 mb-8">Connect is a full-featured real-time chat application built with React, Node.js, and Tailwind CSS.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>

        <div id="features" className="grid md:grid-cols-3 gap-8">
          {['Text Chat', 'Video Calls', 'Screen Sharing'].map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{feature}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Experience seamless {feature.toLowerCase()} with our cutting-edge technology.
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="container mx-auto py-8 text-center text-gray-400">
        <p>&copy; 2024 Connect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;