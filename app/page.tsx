import Image from "next/image";
import { classes } from '@/lib/theme';

export default function Home() {
  return (
    <main>
      <div className={classes.container}>
        <h1 className={classes.pageTitle}>Welcome to Laramie 24x7</h1>
        <div className="grid gap-8 text-text-primary">
          <section>
            <h2 className={classes.sectionTitle}>Latest Updates</h2>
            <p className="text-text-secondary">
              Stay tuned for the latest news and events from Laramie, Wyoming.
            </p>
          </section>

          <section>
            <h2 className={classes.sectionTitle}>Featured Content</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={classes.card}>
                <h3 className="text-xl font-medium mb-2">Live Broadcast</h3>
                <p className="text-text-secondary mb-4">
                  Watch our live broadcast for real-time coverage of local events.
                </p>
                <a href="/live" className={classes.link}>
                  Watch Now →
                </a>
              </div>
              <div className={classes.card}>
                <h3 className="text-xl font-medium mb-2">Community Support</h3>
                <p className="text-text-secondary mb-4">
                  Help us continue bringing you the latest from Laramie.
                </p>
                <a href="/donate" className={classes.link}>
                  Support Us →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
