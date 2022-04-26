import Layout from '../src/components/layout';

export default function Dev() {
  return (
    <Layout>
      <div className="dev">
        <section className="dev__sites uwrap colf">
          <p className="pp m">
            Some sites I&apos;ve done more recently and even continue to work on. 
            Most are personal to me, involving family or friends, or just hobby projects. <a href="https://2dk.kitajchuk.com" target="_blank" rel="noreferrer">2dk</a> is the jam, tho ;)
          </p>
          <p className="pp m">
            <a href="https://jambonz.org" target="_blank" rel="noreferrer">jambonz.org</a> | <a href="https://github.com/jambonz/next-static-site" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://wordsup.press" target="_blank" rel="noreferrer">wordsup.press</a> | <a href="https://github.com/kitajchuk/wordsup.press" target="_blank" rel="noreferrer">github</a>
          </p>
          {/* <p className="pp m">
            <a href="https://www.brianswarthout.com/" target="_blank" rel="noreferrer">brianswarthout.com</a> | <a href="https://github.com/kitajchuk/bs.services" target="_blank" rel="noreferrer">github</a>
          </p> */}
          <p className="pp m">
            <a href="https://letters.kitajchuk.com" target="_blank" rel="noreferrer">letters.kitajchuk.com</a> | <a href="https://github.com/kitajchuk/uncle-toms-letters" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://punxy.kitajchuk.com" target="_blank" rel="noreferrer">punxy.kitajchuk.com</a> | <a href="https://github.com/kitajchuk/punxy" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://2dk.kitajchuk.com" target="_blank" rel="noreferrer">2dk.kitajchuk.com</a> | <a href="https://github.com/kitajchuk/2dk" target="_blank" rel="noreferrer">github</a>
          </p>
        </section>
        <section className="dev__sqs uwrap colf">
          <p className="pp m">At <a href="https://www.instrument.com/" target="_blank" rel="noreferrer">Instrument</a> I developed the first <a href="https://github.com/kitajchuk/node-squarespace-server" target="_blank" rel="noreferrer">open-source dev tools for Squarespace</a>. I made a lot of sqs sites, however I no longer do so because I prefer the JAMstack these days.</p>
          <p className="pp m">
            <a href="https://www.struck.com" target="_blank" rel="noreferrer">struck.com</a> | <a href="https://github.com/kitajchuk/struck-sqs" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://www.garberco.com" target="_blank" rel="noreferrer">garberco.com</a> | <a href="https://github.com/kitajchuk/garberco-sqs" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="http://www.papermakestack.com" target="_blank" rel="noreferrer">papermakestack.com</a> | <a href="https://github.com/kitajchuk/pms-sqs" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://www.thecircuitgym.com" target="_blank" rel="noreferrer">thecircuitgym.com</a> | <a href="https://github.com/kitajchuk/thecircuitgym-sqs-boxen" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://www.deemjournal.com" target="_blank" rel="noreferrer">deemjournal.com</a> | <a href="https://github.com/deemjournal/deemjournal-sqs" target="_blank" rel="noreferrer">github</a>
          </p>
        </section>
        <section className="dev__twitch uwrap colf">
          <p className="pp m">I developed some bespoke Twitch apps to gameify the stream for my <a href="https://www.twitch.tv/kitajchuk" target="_blank" rel="noreferrer">old affiliate channel</a> and for <a href="https://www.twitch.tv/brucecooper" target="_blank" rel="noreferrer">@BruceCooper</a>. The former is a zelda inspired game HUD and the latter was zelda/pokemon themed maze generated with cellular automata.</p>
          <p className="pp m">
            <a href="https://github.com/kitajchuk/twitch-hud" target="_blank" rel="noreferrer">twitch-hud</a>
          </p>
          <p className="pp m">
            <a href="https://github.com/kitajchuk/twitch-labyrinth" target="_blank" rel="noreferrer">twitch-labyrinth</a>
          </p>
        </section>
        <section className="dev__tools uwrap colf">
          <p className="pp m">I&apos;ve always been interested in &quot;rolling your own&quot; as they say. Over the years I&apos;ve built, maintained and deprecated a number of custom projects, libraries and frameworks.</p>
          <p className="pp m">
            <a href="https://github.com/kitajchuk/hobo" target="_blank" rel="noreferrer">hobo</a>
          </p>
          <p className="pp m">
            <a href="https://github.com/kitajchuk/clutch" target="_blank" rel="noreferrer">clutch</a>
          </p>
          <p className="pp m">
            <a href="https://github.com/kitajchuk/boxen" target="_blank" rel="noreferrer">boxen</a>
          </p>
        </section>
        <section className="dev__legacy uwrap colf">
          <p className="pp m">These are some older <a href="https://middlemanapp.com/" target="_blank" rel="noreferrer">middleman app</a> projects I built while at <a href="https://www.instrument.com/" target="_blank" rel="noreferrer">Instrument</a>. For posterity I have kept the static builds on Netlify.</p>
          <p className="pp m">
            <a href="https://legacy-familiar-rivals.netlify.app" target="_blank" rel="noreferrer">familiar rivals</a> | <a href="https://github.com/kitajchuk/legacy-familiar-rivals" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://legacy-maekan-prototype.netlify.app/kit-of-parts/" target="_blank" rel="noreferrer">maekan prototype</a> | <a href="https://github.com/kitajchuk/legacy-maekan-prototype" target="_blank" rel="noreferrer">github</a>
          </p>
        </section>
        <section className="dev__nodesqs uwrap colf">
          <p className="pp m">I built the first open-source Squarespace dev tools with nodejs. A sqs engineer flew from New York to Portland to interview me about it and ultimately they developed <a href="https://developers.squarespace.com/tools" target="_blank" rel="noreferrer">official sqs dev tools</a> which I did some consulting on.</p>
          <p className="pp m">
            <a href="https://github.com/kitajchuk/node-squarespace-server" target="_blank" rel="noreferrer">node-squarespace-server</a>
          </p>
          <p className="pp m">
            <a href="https://github.com/kitajchuk/node-squarespace-middleware" target="_blank" rel="noreferrer">node-squarespace-middleware</a>
          </p>
          <p className="pp m">
            <a href="https://github.com/kitajchuk/node-squarespace-jsont" target="_blank" rel="noreferrer">node-squarespace-jsont</a>
          </p>
        </section>
      </div>
    </Layout>
  );
}
