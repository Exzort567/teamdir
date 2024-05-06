import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getServerSideProps(context: NextPageContext) {
  let req: NextApiRequest = context.req as NextApiRequest;
  let res: NextApiResponse = context.res as NextApiResponse;
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Notifications = () => {
  return (
    <>
      <Header showBackArrow label="Notifications" />
      <NotificationsFeed />
    </>
  );
};

export default Notifications;
