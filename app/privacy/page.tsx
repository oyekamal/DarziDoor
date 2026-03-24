import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | DarziDoor",
  description: "DarziDoor privacy policy — how we use analytics on our website.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-playfair text-green text-4xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="font-inter text-text-primary text-base leading-relaxed space-y-6">
            <p>
              <strong>Last updated:</strong> {new Date().getFullYear()}
            </p>

            <p>
              DarziDoor (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the website darzidoor.com. This page
              explains how we collect and use information when you visit our site.
            </p>

            <h2 className="font-playfair text-green text-2xl font-semibold">Analytics</h2>
            <p>
              We use Google Analytics 4 to understand how visitors use our website. This
              service may set cookies on your device and collect anonymised data about your
              visit, including pages viewed and time on site. This data helps us improve our
              website and services.
            </p>
            <p>
              Google&apos;s privacy policy is available at{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-gold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              .
            </p>

            <h2 className="font-playfair text-green text-2xl font-semibold">WhatsApp</h2>
            <p>
              When you contact us via WhatsApp, your conversation is subject to WhatsApp&apos;s
              privacy policy. We only use information you provide to respond to your enquiry
              and fulfil your tailoring order.
            </p>

            <h2 className="font-playfair text-green text-2xl font-semibold">Contact</h2>
            <p>
              For any questions about this policy, message us on WhatsApp:{" "}
              <a href="tel:+923360506129" className="text-gold">
                0336-0506129
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
