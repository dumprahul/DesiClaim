import bg from '../assets/desibg.jpg';
import { useEffect } from 'react';
import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  AnonAadhaarProof,
  useProver,
} from '@anon-aadhaar/react';

export default function AnonProof() {
    const [anonAadhaar] = useAnonAadhaar();
    const [, latestProof] = useProver();

    useEffect(() => {
        // Log Anon Aadhaar status whenever it changes
        console.log('Anon Aadhaar status: ', anonAadhaar.status);
    }, [anonAadhaar]);

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
                justifyContent: 'start',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
            }}
        >
            <div
                className="flex flex-col items-center text-center space-y-6"
                style={{ marginTop: '25%' }} // Adjust this value to lower the section further
            >
                <h1 className="text-5xl font-light text-black">Indian Identity Verification</h1>
                <p className="text-xl text-black font-light">
                    Verify your Indian identity by submitting an Aadhaar QR code.
                </p>
                <LogInWithAnonAadhaar
                    nullifierSeed={1234}
                    fieldsToReveal={["revealAgeAbove18", "revealPinCode"]}
                    _useTestAadhaar={true}
                    className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 cursor-pointer"
                />
                <p className="text-lg text-black">Status: {anonAadhaar?.status}</p>
                {/* <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800">
                    Generate Proofs
                </button> */}
                {/* Conditionally render proof if status is logged-in and proof is available */}
                {anonAadhaar?.status === 'logged-in' && latestProof && (
                    <div className="bg-white p-4 rounded-lg text-black w-3/4 mt-6">
                        <p className="text-green-500 font-bold mb-2">✅ Proof is valid</p>
                        <AnonAadhaarProof code={JSON.stringify(latestProof, null, 2)} />
                    </div>
                )}
            </div>
        </div>
    );
}
