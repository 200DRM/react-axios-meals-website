const NavLink = (
  { href, text }
) => (
  <a
    href={href} 
      style={{ 
        color: 'white',
        margin: '10px'
      }}
    >
    {text}
  </a>
);

const Navbar = () => (
    <div 
      style={{
        backgroundColor: 'brown'
      }
    }>
      <NavLink href='/' text='Home' />
      <NavLink href='/' text='Order' />
      <NavLink href='/' text='Contact Us' />
    </div>
);

export default Navbar;
