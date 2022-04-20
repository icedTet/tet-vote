import Head from "next/head";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
const speech =
  "Hi, I'm John! This year I'm trying to run for Vice President of United Computations. I have a few things to offer that will be useful for UC. For one, I am no stranger to CS. I have done many CS projects ranging from the Gunn Elimination app to an app for a better Schoology that even caught the attention of the school admins and district. I've had prior experience working well with upcoming UC president Saumya. Furthermore, being a rising senior, I will also have more time to dedicate to the club, as I don’t have any large, inflexible time commitments like GRT or lots of AP classes next year. Regardless of if I win or not, I wish you and UC all the best for the next school year!";
export default function Home() {
  const iframeThing = useRef<HTMLIFrameElement>(null);
  const [hue, setHue] = useState(0);
  useEffect(() => {
    const int = setInterval(() => {
      setHue((h) => (h + 1) % 360);
    }, 20);
    return () => {
      clearInterval(int);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Disadus - The helpful tool students deserve</title>
        <link rel="icon" href="/logoold.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={speech} />
        <meta name="theme-color" content="#66ffe0" />
        {/* link preview */}
        <meta
          property="og:title"
          content="Vote For Tet, for a better UC 2022 experience!"
        />
        <meta property="og:description" content={speech} />
        <meta
          property="og:image"
          content="/embed.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://v.tet.moe" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vote For Tet!" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <div className={`dark:bg-zinc-900 w-full h-full`}>
        <div
          className={`w-full h-full pt-16 `}
          style={{
            filter: `hue-rotate(${hue}deg)`,
            // background:
          }}
        >
          <iframe
            // src="https://docs.google.com/forms/d/e/1FAIpQLScUIfla_1vL6EplxlZykjjzDbMgIofQ2PcznmrDf0rMkIAScg/viewform?embedded=true&usp=pp_url&entry.1543329165=4th+pick&entry.333647976=2nd+pick&entry.907634041=1st+pick&entry.455228998=3rd+pick"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfwTJjN6-1DRH4mpJoMLYJskqC7c1bqYbbhW4BW34mCT6RUrA/viewform?embedded=true&usp=pp_url&entry.1543329165=4th+pick&entry.333647976=2nd+pick&entry.907634041=1st+pick&entry.455228998=3rd+pick"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            className={`w-full h-full dark:invert-[0.88] `}
            onLoad={(e) => {
              console.log(Object.keys(document.getElementById("gform")));
            }}
            ref={iframeThing}
            id="gform"
          />
        </div>
      </div>
    </>
  );
}
