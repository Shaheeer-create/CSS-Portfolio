import Link from "next/link";

// components/Hero.js
export default function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Website</h1>
          <p className="hero-subtitle">
            Discover amazing content and projects here.
          </p>
          <Link href={'/about'}>
          <button className="hero-button">Get Started</button>
          </Link>
        </div>
      </section>
    );
  }
  