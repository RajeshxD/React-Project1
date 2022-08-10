import logo from "./logo.png";
function Nav() {
  return (
    <nav className="flex items-center px-5 py-3 bg-gray-900">
      <img src={logo} alt="logo" className="pl-5 w-16 mr-2" />
      <h3 className="text-cyan-400 mr-auto font-bold text-2xl">ReactFacts</h3>
      <h4 className="text-gray-50 font-semibold">React Course - Project 1</h4>
    </nav>
  );
}

export default Nav;
