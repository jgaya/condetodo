import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery,graphql } from "gatsby"

import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    PinterestShareButton,
    TelegramShareButton,
    FacebookShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    RedditShareCount,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    EmailIcon,
} from 'react-share';

class Share extends React.Component {
    render (){
        return (
            <StaticQuery
                query={footerQuery}
                render={data => {
                    const { socialConfig, tags } = this.props
                    return (
                        <div className="post-social">
                            <FacebookShareButton url={socialConfig.config.url} title={socialConfig.config.title} >
                                <FacebookIcon size={40} />
                                <FacebookShareCount url={socialConfig.config.url}>{count => count}</FacebookShareCount>
                            </FacebookShareButton>
                            <TwitterShareButton url={socialConfig.config.url} title={socialConfig.config.title} via={socialConfig.twitterHandle} hashtags={tags} >
                                <TwitterIcon size={40} />
                            </TwitterShareButton>
                            <LinkedinShareButton url={socialConfig.config.url}  title={socialConfig.config.title} >
                                <LinkedinIcon size={40} />
                            </LinkedinShareButton>
                            <RedditShareButton url={socialConfig.config.url}  title={socialConfig.config.title} >
                                <RedditIcon size={40} />
                            </RedditShareButton>
                            <WhatsappShareButton url={socialConfig.config.url}  title={socialConfig.config.title} >
                                <WhatsappIcon size={40} />
                            </WhatsappShareButton> 
                            <PinterestShareButton url={socialConfig.config.url} title={socialConfig.config.title}>
                                <PinterestIcon size={40} />
                            </PinterestShareButton>
                            <TelegramShareButton url={socialConfig.config.url} title={socialConfig.config.title}>
                                <TelegramIcon size={40} />
                            </TelegramShareButton>
                            <EmailShareButton url={socialConfig.config.url}>
                                <EmailIcon size={40} />
                            </EmailShareButton>
                        </div>
                    )
                }}
            />
        )
    }

}
Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

const footerQuery = graphql`
  query footerQuery2 {
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`


export default Share;
