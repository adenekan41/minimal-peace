import React from 'react';
import { Article, ActionPanel } from './';
import Layout from '../components/layout/index';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const AboutPage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "wonderfu.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<Layout
			title="About Me"
			pageMask="About"
			description="A 2 year + Product Designer, Visual/Graphic Designer and Brand Analyst.
  Born in Lagos, Nigeria."
		>
			<div className="row align-items-center">
				<div className="col-md-6">
					<Article>
						<h1>About Me</h1>
						<h5>Product Designer, Visual Designer and Brand Analyst</h5>
						<p>
							Hi My name is Adenekan Peace, I am a lover of pure human design
							derived from critical research and detailed implementation of
							compiled results. With a hot cup of coffee every morning and a
							chilled pet bottle of soda by noon, I tackle my daily design
							challenges hoping one day the experience being implemented in my
							designs can change the world. Yeah, I almost forgot my pack of
							Maryland cookies and the smooth feel of soft jazz music that takes
							me to another planet which charges my brain to its climax.
							<br />
							<br />
							Yes I am Peace, I am not weird, I am just a creator, a fierce
							creator of my own world of designs I can interact with. I build
							User Interface Designs, Photo-manipulations, Web banners,
							Graphics, Logos, Branding and many more, all to suit the visual of
							your user. You can simply call me the <b>Minimal Enthusiast</b>.
						</p>
						<ActionPanel className="d-md-flex d-block">
							<AniLink
								className="btn btn-outline-black"
								aria-label="Go To Projects Page."
								role="button"
								to="/project"
								swipe
								duration={0.5}
								direction="left"
								top="entry"
								entryOffset={80}
							>
								View Projects
							</AniLink>
							<AniLink
								className="btn btn-black"
								aria-label="View and download resume."
								role="button"
								to="/resume"
								swipe
								duration={0.5}
								direction="left"
								top="entry"
								entryOffset={80}
							>
								Download Resume
							</AniLink>
						</ActionPanel>
					</Article>
				</div>
				<div className="col-md-6">
					<AboutWrapper>
						<Img
							fluid={data.placeholderImage.childImageSharp.fluid}
							className="d-none d-md-block"
						/>
					</AboutWrapper>
				</div>
			</div>
		</Layout>
	);
};

export const AboutWrapper = styled.div`
	.gatsby-image-wrapper {
		position: relative;
		overflow: hidden;
		width: 85%;
		margin: auto;
	}
`;
export default AboutPage;
