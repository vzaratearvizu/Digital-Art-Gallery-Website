import './About.css';

function About() {
  return (
    <section id="About">
      <h2>About</h2>
      <div className="about-content">
        <div className="about-section">
          <h3>Yap Time</h3>
          <p>Hi. The center of all the platforms I post on, including a little more about my life outside my works.</p>
        </div>
        <div className="about-section">
          <h3>Art</h3>
          <p>Around sophomore of highschool, I was struggling to find anime with good animations or good opening/closing themes and took it upon myself to start creating my own. I tried making my first animation and then realized I couldn't draw. So I tried out pencil and paper, realism, anime, then finally settled with pixel art with anime inspiration. It wasn't until after 3 years that I was finally good at drawing and now I am able to create animations. I don't post my works too often but that's because I'm still learning new skills.</p>
        </div>
        <div className="about-section">
          <h3>Gaming</h3>
          <p>ARC Raiders is pulling all of my time in the realm of video games. The sound design, visuals, gameplay, mechanics, literally all of it is actually so good. I'm sure there are some other good games out there but ARC Raiders is just more in line with what I'm craving for right now. I'm so happy it exists. Then there's Minecraft, can't really go wrong with that. Minecraft is kind of my filler arc for video games. I'll get tired of the primary game (previously Fortnite) and stick with Minecraft until I find the next gaming highlight of my life (ARC Raiders).</p>

        </div>
        <div className="about-section">
          <h3>Life</h3>
          <p>I'm pursing a bachelor's computer science with a concentration in artificial intelligence. Since watching Sword Art Online at the ripe old age of 5, all I wanted to do was create using computers and I just happened to get lucky that we're in this era of AI. Since SAO, I've really wanted to create my own robot AI that's able to imitate a human. Actually insane that I'll one day be able to create a tiny robot that will be intelligent. Of course, it won't be easy and will be time consuming, but that's part of the fun.</p>
        </div>
        <div className="about-section">
          <h3>Contact</h3>
          <p>Reach out to me on instagram: <a href="https://www.instagram.com/awsomchry" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            AwsomChry
          </a></p>
        </div>
      </div>
    </section>
  );
}

export default About;