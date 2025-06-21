export default function Contact() {
  const containerStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1601281661047-c8913e7a6b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: '40px',
    textShadow: '1px 1px 3px black',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <p>phone: 123456789</p>
      <p>Email: agrozone@example.com</p>
    </div>
  );
}
