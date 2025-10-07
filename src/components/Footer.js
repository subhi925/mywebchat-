import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-2">
      <small>&copy; {new Date().getFullYear()} ChatZone</small>
    </footer>
  );
}
export default Footer;
