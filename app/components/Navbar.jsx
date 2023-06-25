import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/" >Home</Link>
        <Link href="/about" >About</Link>
        <Link href="/profile" >Profile</Link>
        <Link href="/pokemons" >Pokemons</Link>
    </nav>
  )
}

export default Navbar