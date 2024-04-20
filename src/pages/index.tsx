import { CardList } from "@/components/CardList";
import { TimeData } from "@/schemas/times.schema";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { Rubik } from "next/font/google";

interface HomeProps {
  times: TimeData[];
}
const rubik = Rubik({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const Home: NextPage<HomeProps> = ({ times }) => {
  return (
    <main className={rubik.className}>
      <CardList times={times} />
    </main>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response: TimeData[] = [
//     {
//       title: "Work",
//       timeframes: {
//         daily: {
//           current: 5,
//           previous: 7,
//         },
//         weekly: {
//           current: 32,
//           previous: 36,
//         },
//         monthly: {
//           current: 103,
//           previous: 128,
//         },
//       },
//     },
//     {
//       title: "Play",
//       timeframes: {
//         daily: {
//           current: 1,
//           previous: 2,
//         },
//         weekly: {
//           current: 10,
//           previous: 8,
//         },
//         monthly: {
//           current: 23,
//           previous: 29,
//         },
//       },
//     },
//     {
//       title: "Study",
//       timeframes: {
//         daily: {
//           current: 0,
//           previous: 1,
//         },
//         weekly: {
//           current: 4,
//           previous: 7,
//         },
//         monthly: {
//           current: 13,
//           previous: 19,
//         },
//       },
//     },
//     {
//       title: "Exercise",
//       timeframes: {
//         daily: {
//           current: 1,
//           previous: 1,
//         },
//         weekly: {
//           current: 4,
//           previous: 5,
//         },
//         monthly: {
//           current: 11,
//           previous: 18,
//         },
//       },
//     },
//     {
//       title: "Social",
//       timeframes: {
//         daily: {
//           current: 1,
//           previous: 3,
//         },
//         weekly: {
//           current: 5,
//           previous: 10,
//         },
//         monthly: {
//           current: 21,
//           previous: 23,
//         },
//       },
//     },
//     {
//       title:"Self",
//       timeframes: {
//         daily: {
//           current: 0,
//           previous: 1,
//         },
//         weekly: {
//           current: 2,
//           previous: 2,
//         },
//         monthly: {
//           current: 7,
//           previous: 11,
//         },
//       },
//     },
//   ];
//   return {
//     props: { times: response },
//   };
// };

export const getStaticProps:GetStaticProps= async()=>{
  const response: TimeData[] = [
        {
          title: "Work",
          timeframes: {
            daily: {
              current: 5,
              previous: 7,
            },
            weekly: {
              current: 32,
              previous: 36,
            },
            monthly: {
              current: 103,
              previous: 128,
            },
          },
        },
        {
          title: "Play",
          timeframes: {
            daily: {
              current: 1,
              previous: 2,
            },
            weekly: {
              current: 10,
              previous: 8,
            },
            monthly: {
              current: 23,
              previous: 29,
            },
          },
        },
        {
          title: "Study",
          timeframes: {
            daily: {
              current: 0,
              previous: 1,
            },
            weekly: {
              current: 4,
              previous: 7,
            },
            monthly: {
              current: 13,
              previous: 19,
            },
          },
        },
        {
          title: "Exercise",
          timeframes: {
            daily: {
              current: 1,
              previous: 1,
            },
            weekly: {
              current: 4,
              previous: 5,
            },
            monthly: {
              current: 11,
              previous: 18,
            },
          },
        },
        {
          title: "Social",
          timeframes: {
            daily: {
              current: 1,
              previous: 3,
            },
            weekly: {
              current: 5,
              previous: 10,
            },
            monthly: {
              current: 21,
              previous: 23,
            },
          },
        },
        {
          title:"Self",
          timeframes: {
            daily: {
              current: 0,
              previous: 1,
            },
            weekly: {
              current: 2,
              previous: 2,
            },
            monthly: {
              current: 7,
              previous: 11,
            },
          },
        },
      ];
  return {
    props:{times:response },revalidate:60}
  
}

export default Home