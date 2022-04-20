import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
const speech =
  "Hi, I'm John! This year I'm trying to run for Vice President of United Computations. I have a few things to offer that will be useful for UC. For one, I am no stranger to CS. I have done many CS projects ranging from the Gunn Elimination app to an app for a better Schoology that even caught the attention of the school admins and district. I've had prior experience working well with upcoming UC president Saumya. Furthermore, being a rising senior, I will also have more time to dedicate to the club, as I don’t have any large, inflexible time commitments like GRT or lots of AP classes next year. Regardless of if I win or not, I wish you and UC all the best for the next school year!";
const formurl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfwTJjN6-1DRH4mpJoMLYJskqC7c1bqYbbhW4BW34mCT6RUrA/viewform?embedded=true&usp=pp_url&entry.1543329165=4th+pick&entry.333647976=2nd+pick&entry.907634041=1st+pick&entry.455228998=3rd+pick";
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
        <title>Vote For Tet, for a better UC 2022 experience!</title>
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
        <meta property="og:image" content="/embed.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://v.tet.moe" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vote For Tet!" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <div className={`dark:bg-zinc-900 w-full h-full`}>
        <div
          className={`absolute top-0 left-0 w-full h-full dark:brightness-[0.2] opacity-30 dark:opacity-80 `}
        >
          <div
            className={`w-full h-full`}
            style={{
              backgroundColor: `hsla(0,100%,50%,1)`,
              backgroundImage: `
          radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
          radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
          radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)`,
              filter: `hue-rotate(${hue}deg)`,
            }}
          />
        </div>
        <div
          className={`w-full h-full `}
          style={{
            filter: `hue-rotate(${hue}deg)`,
          }}
        >
          <iframe
            // src="https://docs.google.com/forms/d/e/1FAIpQLScUIfla_1vL6EplxlZykjjzDbMgIofQ2PcznmrDf0rMkIAScg/viewform?embedded=true&usp=pp_url&entry.1543329165=4th+pick&entry.333647976=2nd+pick&entry.907634041=1st+pick&entry.455228998=3rd+pick"
            src={formurl}
            // src={'https://docs.google.com/forms/d/e/1FAIpQLSeiyQ9lhTdUZk0f9ST-0K9XxdAtP32nUhDF82GfL3bueRXyfQ/viewform'}

            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; form-submit"
            className={`w-full h-full dark:invert-[0.88] `}
            ref={iframeThing}
            id="gform"
          >
            <p>Lemonthink</p>
          </iframe>
        </div>
      </div>
      <Link href={formurl}>
        <div
          className={`bg-zinc-900 absolute bottom-0 left-0 z-20 p-2 m-4 rounded-lg text-white flex flex-row gap-8 pl-6 items-center cursor-pointer hover:bg-zinc-800`}
        >
          Form not loading? Click here to vote the old fashioned way!
          <div
            className={`font text-emerald-700 font-bold p-2 px-4 hover:bg-emerald-700/20 rounded-lg transition-all hover:text-emerald-300`}
            style={{
              filter: `hue-rotate(${hue}deg)`,
            }}
          >
            VOTE
          </div>
        </div>
      </Link>
    </>
  );
}
// get server side props
// https://youtu.be/botIM4EDnOQ
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { query, req } = context;
//   console.log(req.headers);
//   delete req.headers.referer;
//   delete req.headers.host;
//   const youtubeData = await fetch(
//     `https://www.youtube.com/watch?v=botIM4EDnOQ`,
//     {
//       //@ts-ignore
//       headers: {
//         ...req.headers,
//       },
//     }
//   ).then((res) => res.text());
//   const matches = youtubeData.match(
//     /"[^"]+q=https%3A%2F%2Fv.tet.moe%3Fa%3D1"/g
//   );
//   console.log(
//     decodeURIComponent(
//       matches[0].substring(1, matches[0].length - 1).replace(/\\u0026/g, "&")
//     )
//   );
//   // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTJVaXFycHhMbHNMdm9OdlBrSncxNkg2VERoUXxBQ3Jtc0tuS19PeFZrb1dBY0o0b1owQzVwMDhpVHdqSVJpQkNiNzRqLWtqMkVXQTNrQkwwVk84aGJTQWFDck0yVExUbTNreTdGYkh3dWk4Vk1adEQ5SDhwR3FQMnl2bzhaZ1NDQXBfLWwyU2JHRXhrVXBrdlNidw&q=https%3A%2F%2Fv.tet.moe%3Fa%3D1
//   if (!query.a) {
//     const redir = encodeURIComponent(
//       matches[0]
//         .substring(1, matches[0].length - 1)
//         .replace(/\\u0026/g, "&").concat('&v=botIM4EDnOQ')
//     )
//     return {
//       redirect: {
//         destination: `https://accounts.google.com/ServiceLogin?service=youtube&passive=true&continue=${redir}&followup=${redir}`,
//       },
//     };
//   }
// }
