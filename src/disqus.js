import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ post }) => {
  const disqusShortname = "chatting"
  const disqusConfig = {
    url: "https://eagles-dream.github.io/chatting//post-slug",
    //identifier: post.id, // Single post id
    //title: post.title // Single post title
  }
  return (
    <div style={{paddingTop: '48px'}}>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;