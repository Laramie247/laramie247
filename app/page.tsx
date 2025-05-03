import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Politically Neutral</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our members come from all walks of life. At Laramie247, our goal is to be an impartial voice of reason. We focus on fair and balanced programming created by our diverse membership.
            </p>
            <p className="text-lg text-gray-700">
              We don't play favorites, and we don't take sides in political debates. Instead, we are committed to delivering informative content that encourages dialogue across different viewpoints and beliefs. No matter where you stand politically or spiritually, there's a place for your voice here.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Citizen Grounded</h2>
            <p className="text-lg text-gray-700 mb-4">
              We work to promote the needs of everyday citizens in our community, not the interests of big business. Our focus is on bringing people together through conversations about the topics that matter most to them.
            </p>
            <p className="text-lg text-gray-700">
              By telling local stories and encouraging community-driven content, we hope to build stronger connections that support small businesses, create opportunities, and strengthen Laramie as a whole. Everything we broadcast is made for our community, by our community.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
