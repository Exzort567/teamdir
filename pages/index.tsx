import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <>
      <Header label="Home"/>
      <Form placeholder="Need 1 Gold to Platinum QTPIE21"/>
      <PostFeed/>
    </>
  )
}
