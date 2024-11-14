// components/Project.js

export default function StartUpAnimation() {
 

    return (
     
        <div className="animation-container">
            <video autoPlay muted loop className="intro-video">
                <source src="/video/hacking.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

    );
}
