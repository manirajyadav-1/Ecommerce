import "./NewsLetter.css";
export default function NewLetter(){
    return <div className="newsletter">
        <h1>Get Exlusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type='email' placeholder="Your Email id" />
            <button>Subscribe</button>
        </div>
    </div>
}