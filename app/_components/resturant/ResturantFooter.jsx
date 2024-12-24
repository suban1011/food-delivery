import React from 'react'

const ResturantFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 my-10">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* <!-- Logo and About --> */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Foodie Restaurant</h1>
        <p className="text-gray-400">
          Serving delicious meals with the finest ingredients since 2000.  
          Experience taste and comfort in every bite.
        </p>
      </div>

      {/* <!-- Quick Links --> */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Menu</a></li>
          <li><a href="#" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>

      {/* <!-- Contact Info --> */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-400">123 Main Street, Foodie City</p>
        <p className="text-gray-400">Email: info@foodie.com</p>
        <p className="text-gray-400">Phone: (123) 456-7890</p>
        <div className="flex space-x-4 mt-4">
          {/* <!-- Social Media Icons --> */}
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    {/* <!-- Bottom Bar --> */}
    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
      &copy; 2024 Foodie Restaurant. All Rights Reserved.
    </div>
  </div>
</footer>

  )
}

export default ResturantFooter