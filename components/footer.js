function Footer() {
  /* I need using TAilwind CSS in combination with NextJS a return JSX code that creates a footer saying something like "Maikel OÜ Copyright XXX" being the XXX the current year. */
  return (
    <div className="bg-gray-800 text-white text-center p-4">
      <p>Maikel OÜ © 2020 - {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
