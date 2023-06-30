function Footer() {
  /* Take the code below and rewrite it in a way that sticks to the bottom of the browser page. 
  return (
    <div className="bg-gray-800 text-white text-center p-4">
      <p>Maikel OÜ © 2020 - {new Date().getFullYear()}</p>
    </div>
  );
  */
  return (
    <div className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
      <p>Maikel OÜ © 2020 - {new Date().getFullYear()}</p>
    </div>
  );
  
  
}

export default Footer;
