import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/index';
import Img from 'gatsby-image';

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
			title="Home"
			description="Product Designer, Visual Designer and Brand Analyst"
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
								be used to create stunning interfaces that user can easily
								interact with user no matter the Design Techniclaity. I call it{' '}
								<b>Conceptual Minimalism.</b>
							</p>

							<ActionPanel className="d-md-flex d-block">
								<Link
									className="btn btn-outline-black"
									aria-label="Go To Projects Page."
									role="button"
									to="/project"
								>
									View Projects
								</Link>
								<Link
									className="btn btn-black"
									aria-label="View and download resume."
									role="button"
									to="/resume"
								>
									Download Resume
								</Link>
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
		line-height: 1.4;
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
