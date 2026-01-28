import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-gradient-to-b from-blue-600 to-purple-700 text-white">
            <section id="home" className="min-h-screen flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome</h1>
                    <p className="text-xl md:text-2xl">Scroll down to see the navbar appear</p>
                </div>
            </section>

            <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
                <div className="text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">About Section</h2>
                    <p className="text-lg">The navbar is now visible with a white background</p>
                </div>
            </section>

            <section id="services" className="min-h-screen flex items-center justify-center bg-blue-50 text-gray-900">
                <div className="text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Services Section</h2>
                    <p className="text-lg">Try resizing the window to see the mobile menu</p>
                </div>
            </section>

            <section id="portfolio"
                     className="min-h-screen flex items-center justify-center bg-purple-50 text-gray-900">
                <div className="text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Section</h2>
                    <p className="text-lg">Continue scrolling for more content</p>
                </div>
            </section>

            <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
                <div className="text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Section</h2>
                    <p className="text-lg">Scroll back to the top to see the transparent navbar</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;