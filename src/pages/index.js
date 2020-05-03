import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/index';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "sticky-note.png" }) {
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
			title="Home | Minimalist Peace"
			description="I believe design psychology and extensive/detailed research can be used to create stunning interfaces that users can easily interact with no matter the Design Technicality. I call it Conceptual Minimalism."
		>
			<HomeWrapper>
				<div className="row align-items-center">
					<div className="col-md-6 order-md-1 order-2">
						<Article>
							<h1>
								Hi, I'm <br /> Adenekan Peace
							</h1>
							<h5>
								Product Designer, Visual Designer and Brand Analyst, Lagos,
								Nigeria.
							</h5>
							<p>
								I believe design psychology and extensive/detailed research can
								be used to create stunning interfaces that users can easily
								interact with no matter the Design Technicality. I call it{' '}
								<b>Conceptual Minimalism</b>.
							</p>

							<ActionPanel className="d-md-flex d-block">
								<AniLink
									className="btn btn-outline-black"
									aria-label="Go To Projects Page."
									role="button"
									swipe
									duration={0.5}
									direction="left"
									to="/project"
									top="entry"
									entryOffset={80}
								>
									View Projects
								</AniLink>
								<AniLink
									className="btn btn-black"
									aria-label="View and learn more about me"
									role="button"
									to="/about"
									swipe
									duration={0.5}
									direction="left"
									top="entry"
									entryOffset={80}
								>
									Learn More
								</AniLink>
							</ActionPanel>
						</Article>
					</div>
					<div className="col-md-6 order-md-2 order-1">
						<Img
							fluid={data.placeholderImage.childImageSharp.fluid}
							className="d-none d-md-block"
						/>
					</div>
				</div>
			</HomeWrapper>
		</Layout>
	);
};

export const Article = styled.article`
	h1 {
		color: var(--cw);
		font-size: 50px;
		font-weight: 900;
		margin: 0;

		letter-spacing: -1.3px;
		line-height: 59px;
	}
	h5 {
		color: var(--token);
		font-weight: 500;
		letter-spacing: 0;
		line-height: 1.6;
		font-size: 13px;
		margin: 1.3rem 0;
	}
	p {
		opacity: 0.99;
		color: var(--article-color);

		font-size: 0.83em;
		font-weight: 500;
		letter-spacing: 0;
		line-height: 1.65;
		a {
			font-weight: 900;
			color: var(--token);
		}
	}
`;

export const ActionPanel = styled.div`
	margin-top: 1.5rem;
	a,
	button {
		padding: 10px 25px;
		font-weight: 500;
		font-size: 14px;
		margin-right: 0.8rem;

		&:hover {
			opacity: 0.8;
		}
	}
`;

export const HomeWrapper = styled.div`
	.gatsby-image-wrapper {
		position: relative;
		overflow: hidden;
		width: 85%;
		margin: auto;
	}
`;

export default IndexPage;
