import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Swal from 'sweetalert2'

const Contact: React.FC = () => {
  //const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "7f1b5733-2cef-47b3-acbc-9a3a30c77c34");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        type: 'certification'
      });
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent. We will contact you shortly!",
        icon: "success"
      });
       // Show success message (in a real app)
     // alert('Your message has been sent. We will contact you shortly!');
     //setResult("Form Submitted Successfully");
      //(event.currentTarget as HTMLFormElement).reset();
    } 
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    type: 'certification'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   

  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Have questions about Volove Kashrus certification? Reach out to our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gold/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  {/* <p className="text-gray-300">(800) 555-KOSHER</p> */}
                  <p className="text-gray-300">(845) 799-1525</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  {/* <p className="text-gray-300">info@koshertrust.com</p> */}
                  <p className="text-gray-300">Rbtoffice@vkkosher.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gold/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                  {/* <p className="text-gray-300">
                    123 Kosher Way<br />
                    Brooklyn, NY 11223<br />
                    United States
                  </p> */}
                  <p className="text-gray-300">
                    5808 11th Ave.<br />
                    Brooklyn, NY 11219<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            {/* <div className="mt-12">
              <h3 className="font-serif text-2xl font-bold mb-4">Certification Hours</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>Closed</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div> */}
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-navy-800 border border-gray-600 text-white focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-navy-800 border border-gray-600 text-white focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-medium">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-navy-800 border border-gray-600 text-white focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-navy-800 border border-gray-600 text-white focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="type" className="block mb-2 text-sm font-medium">Inquiry Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-navy-800 border border-gray-600 text-white focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="Certification Inquiry">Certification Inquiry</option>
                  <option value="General Information">General Information</option>
                  <option value="Certification Renewal">Certification Renewal</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-navy-800 border border-gray-600 text-white focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center bg-gold text-navy font-bold py-3 px-6 rounded-md transition-transform hover:scale-105"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;