import { useNavigate } from 'react-router-dom';


function ThankYou() {
  const navigate = useNavigate();

  return (
    <div 
      className="ThankYou-container"
      style={{
        height: '100vh',
        paddingTop: '10rem',
        textAlign: 'center',
        color: 'white',
        backgroundImage: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(26, 32, 44, 0.3)), url('/Blog_Mars_Header.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'contrast(1.2) brightness(1.05)',
      }}
    >
      <h1 className="ThankYou-heading" style={{fontSize: '3rem',fontWeight: '900',color: '#f97316',}}>
        Thank you for filling the Application
      </h1>

    </div>
  );
}

export default ThankYou;