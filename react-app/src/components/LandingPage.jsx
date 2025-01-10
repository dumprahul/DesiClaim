import bg from '../assets/desibg.jpg'; // Replace with the correct path to your image

export default function LandingPage() {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
            }}
        >
        </div>
    );
}
