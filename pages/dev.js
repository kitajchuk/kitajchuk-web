import Layout from '../src/components/layout';

export default function Dev() {
  return (
    <Layout>
      <div className="dev">
        <section className="dev__sites uwrap colf">
          <p className="pp m">Some sites I&apos;ve done more recently and even continue to work on. Most are personal to me, involving family or friends, or just hobby projects. Note that Brian&apos;s site is now maintained by <a href="https://github.com/kendallstrautman/bs.services" target="_blank" rel="noreferrer">@kendallstrautman</a>, however not much has changed overall from the original build I did and I still think it&apos;s a lovely portfolio site :)</p>
          <p className="pp m">
            <a href="https://jambonz.org" target="_blank" rel="noreferrer">jambonz.org</a> | <a href="https://github.com/jambonz/next-static-site" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://wordsup.press" target="_blank" rel="noreferrer">wordsup.press</a> | <a href="https://github.com/kitajchuk/wordsup.press" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://www.brianswarthout.com/" target="_blank" rel="noreferrer">brianswarthout.com</a> | <a href="https://github.com/kitajchuk/bs.services" target="_blank" rel="noreferrer">github</a>
          </p>
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
          <p className="pp m">The following are custom developer mode Squarespace sites. I have a unique developer history with Squarespace from the time I worked at <a href="https://www.instrument.com/" target="_blank" rel="noreferrer">Instrument</a> and developed the <a href="https://github.com/kitajchuk/node-squarespace-server" target="_blank" rel="noreferrer">first open-source tools for the platform</a>. I made a lot of sites with Squarespace, however I no longer do so because Squarespace is not a performant system for serving sites.</p>
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
        <section className="dev__legacy colf">
          <p className="pp m">These are a couple of older <a href="https://middlemanapp.com/" target="_blank" rel="noreferrer">middleman apps</a> I built while at <a href="https://www.instrument.com/" target="_blank" rel="noreferrer">Instrument</a>. For posterity I have maintained the static builds on Netlify. I think Rivals was a unique project and the original MAEKAN prototype was so much fun to jam on back in the day! Check out the original <a href="https://legacy-maekan-prototype.netlify.app/kit-of-parts/">Kit of Parts</a> for MAEKAN to see how we would visualize the design elements in action.</p>
          <p className="pp m">
            <a href="https://legacy-familiar-rivals.netlify.app" target="_blank" rel="noreferrer">familiar rivals</a> | <a href="https://github.com/kitajchuk/legacy-familiar-rivals" target="_blank" rel="noreferrer">github</a>
          </p>
          <p className="pp m">
            <a href="https://legacy-maekan-prototype.netlify.app" target="_blank" rel="noreferrer">maekan prototype</a> | <a href="https://github.com/kitajchuk/legacy-maekan-prototype" target="_blank" rel="noreferrer">github</a>
          </p>
        </section>
      </div>
    </Layout>
  );
}
