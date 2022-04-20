import Head from "next/head";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
const speech =
  "Hi, I'm John! This year I'm trying to run for Vice President of United Computations. I have a few things to offer that will be useful for UC. For one, I am no stranger to CS. I have done many CS projects ranging from the Gunn Elimination app to an app for a better Schoology that even caught the attention of the school admins and district. I've had prior experience working well with upcoming UC president Saumya. Furthermore, being a rising senior, I will also have more time to dedicate to the club, as I don’t have any large, inflexible time commitments like GRT or lots of AP classes next year. Regardless of if I win or not, I wish you and UC all the best for the next school year!";
const formurl = `https://docs.google.com/forms/d/e/$1FAIpQLScUIfla_1vL6EplxlZykjjzDbMgIofQ2PcznmrDf0rMkIAScg/viewform?embedded=true&usp=pp_url&entry.1543329165=4th+pick&entry.333647976=2nd+pick&entry.907634041=1st+pick&entry.455228998=3rd+pick`;
export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push(formurl);
  });
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
