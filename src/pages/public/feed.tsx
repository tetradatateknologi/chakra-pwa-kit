import { Heading } from "@chakra-ui/react";
import CardBlogPost from "../../components/other/card-blog-post";
import MobileLayout from "../../layout/mobile-layout";

export default function Feed() {
  return (
    <MobileLayout>
      <Heading>
        Feed
      </Heading>
      <CardBlogPost />
      <CardBlogPost />
      <CardBlogPost />
    </MobileLayout>
  )
}
