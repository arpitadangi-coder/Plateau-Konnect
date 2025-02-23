import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Buying a Commercial Property", description: "Shops, offices, land, factories, warehouses, and more", image: "no-image.jpg" },
  { title: "Leasing a Commercial Property", description: "Shops, offices, land, factories, warehouses, and more", image: "no-image.jpg" },
  { title: "Buy Plots/Land", description: "Residential plots, agricultural farm lands, institutional lands, and more", image: "no-image.jpg" },
  { title: "Renting a Home", description: "Apartments, builder floors, villas, and more", image: "no-image.jpg" },
  { title: "PG and Co-Living", description: "Organized, owner and broker listed PGs", image: "no-image.jpg" },
];

const cities = [
  { name: "Delhi / NCR", properties: "143,000+ Properties", image: "delhi.jpg" },
  { name: "Mumbai", properties: "33,000+ Properties", image: "mumbai.jpg" },
  { name: "Bangalore", properties: "33,000+ Properties", image: "bangalore.jpg" },
  { name: "Pune", properties: "35,000+ Properties", image: "pune.jpg" },
  { name: "Chennai", properties: "28,000+ Properties", image: "chennai.jpg" },
  { name: "Hyderabad", properties: "19,000+ Properties", image: "hyderabad.jpg" },
  { name: "Kolkata", properties: "23,000+ Properties", image: "kolkata.jpg" },
  { name: "Ahmedabad", properties: "16,000+ Properties", image: "ahmedabad.jpg" },
];

const ContactUs = () => {
  return (
    <section className="bg-[rgb(241,245,241)] text-slate-700 p-3 py-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto flex-wrap gap-4 flex-col sm:flex-row">
        <div>
          <p className="font-bold text-lg sm:text-2xl md:text-4xl text-center sm:text-left">
            Do You Have Questions ?
          </p>
          <p className="text-base sm:text-lg md:text-xl text-slate-500">
            We will help you find a suitable property.
          </p>
        </div>
        <div>
          <button className="rounded-full bg-blue-500 hover:bg-green-600 px-4 sm:px-6 py-2 text-base sm:text-xl font-medium text-white">
            <a href="mailto:Arpitajain679@gmail.com">Contact Us Now</a>
          </button>
        </div>
      </div>
    </section>
  );
};



const ExploreServices = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ExploreCities = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">Explore Properties by City</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-800">{city.name}</h3>
            <p className="text-gray-600 mt-2">{city.properties}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const RegisterProperty = () => {
  return (
    <section className="bg-green-100 p-8 max-w-6xl mx-auto my-8 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-bold mb-4 text-green-700">Register to Post Your Property for <span className="bg-green-600 text-white px-3 py-1 rounded">FREE</span></h2>
      <p className="text-gray-700 mb-6">Post your residential / commercial property today!</p>
      <button className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800">Post Your Property for FREE</button>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How do I search for properties?", answer: "Use our search bar to filter properties by location, price, and other preferences." },
    { question: "What documents are required to buy a property?", answer: "You need identity proof, address proof, and financial documents as per local regulations." },
    { question: "Can I schedule a property visit?", answer: "Yes, you can schedule a visit by contacting the property owner or our support team." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-gray-700 p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <button className="flex justify-between items-center w-full text-left text-lg font-medium" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div>
      <RegisterProperty />
      <ExploreServices />
      <ExploreCities />
      <FAQSection />
      <ContactUs />
    </div>
  );
};

export default Page;
