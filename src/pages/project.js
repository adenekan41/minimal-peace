import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Article, ActionPanel } from './';
import Layout from '../components/layout/index';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProjectsPage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "project-part.png" }) {
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
			title="Projects"
			pageMask="Projects"
			description="Brand Identity Design, Leadership, Communication, Team Integration,
    Empathy, Collaboration, Open-mindedness, Critical Thinking,
    Professionalism, Problem Solving, Adaptability, Accountability,
    Approachability."
		>
			<div className="row">
				<div className="col-md-6">
					<Article>
						<h1>Projects</h1>
						<h5>
							View each projects documented case studies on my notion page
						</h5>
						<p>
							Brand Identity Design, Leadership, Communication, Team
							Integration, Empathy, Collaboration, Open-mindedness, Critical
							Thinking, Professionalism, Problem Solving, Adaptability,
							Accountability, Approachability.{' '}
						</p>
						<article>
							<p>
								<a
									href="https://linkedin.com/in/peacevisuals"
									target="_blank"
									rel="noopener noreferrer"
								>
									Linkedin
								</a>{' '}
								|{'  '}
								<a
									href="https://behance.net/ifepeace828e"
									target="_blank"
									rel="noopener noreferrer"
								>
									Behance
								</a>{' '}
								|{'  '}
								<a
									href=" https://twitter.com/minimal_peace"
									target="_blank"
									rel="noopener noreferrer"
								>
									Twitter
								</a>{' '}
								|{'  '}
								<a
									href="https://dribbble.com/peace_visuals"
									target="_blank"
									rel="noopener noreferrer"
								>
									Dribbble
								</a>
							</p>
						</article>
						<ActionPanel className="d-md-flex d-block">
							<AniLink
								className="btn btn-outline-black"
								aria-label="Go To Projects Page."
								role="button"
								to="/contact"
								swipe
								duration={0.5}
								direction="left"
								top="entry"
								entryOffset={80}
							>
								Say Hi
							</AniLink>

							<a
								className="btn btn-black"
								aria-label="Go to notion page"
								role="button"
								href="https://www.notion.so/Adenekan-Peace-d3b46c20a1d548458a0b5a4ec831bc45"
								target="_blank"
								rel="noopener noreferrer"
							>
								Take Me To Projects
							</a>
						</ActionPanel>
					</Article>
				</div>
				<div className="col-md-6">
					<ProjectsWrapper>
						<Img
							fluid={data.placeholderImage.childImageSharp.fluid}
							className="d-none d-md-block"
						/>
					</ProjectsWrapper>
				</div>
			</div>
		</Layout>
	);
};

export const ProjectsWrapper = styled.div`
	.gatsby-image-wrapper {
		position: relative;
		overflow: hidden;
		width: 85%;
		margin: auto;
	}
`;

export default ProjectsPage;
