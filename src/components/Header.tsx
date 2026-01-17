import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="TaskFlow Logo" width={40} height={40} />
      <div>
        <h1>TaskFlow</h1>
        <p>Organize seu dia em segundos</p>
      </div>
    </header>
  );
}