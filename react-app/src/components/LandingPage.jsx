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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white', // Makes text white for better contrast on the background
            }}
        >
            <div style={{ marginTop: '9%' }}>
                <h1 className="text-8xl mb-4 text-black font-light">desiclaim</h1>
                <p className="text-2xl mb-4 text-black font-light">make verfied claims but with proofs.</p>
                <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800">
                    Get Your Claims
                </button>
            </div>
        </div>
    );
}
