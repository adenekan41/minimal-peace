import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Article, ActionPanel } from './';
import Layout from '../components/layout/index';
import styled from 'styled-components';

const ResumePage = () => {
	const resumeData =
		'https://docs.google.com/document/d/1dSTUT40jnJyPefQhraUyB9M0YQHueaYc7MpVKVx9IZs/preview';
	const previewData = `${resumeData.substr(
		0,
		resumeData.lastIndexOf('/') + 1
	)}view?usp=sharingC`;
	return (
		<Layout
			title="Resume"
			pageMask="Resume"
			description="I am a critical UX designer that uses design psychology and extensive/detailed research to create stunning interfaces that can easily be interacted with, at the lowest level of design by the user no matter the Technicality. I call it Conceptual Minimalism. "
		>
			<div className="row align-items-center">
				<div className="col-md-6">
					<Article>
						<h1>My Resume</h1>
						<h5>
							Product Designer | Critical UX Researcher | Growth Enthusiast
						</h5>
						<p>
							I am a critical UX designer that uses design psychology and
							extensive/detailed research to create stunning interfaces that can
							easily be interacted with, at the lowest level of design by the
							user no matter the Technicality. I call it Conceptual Minimalism.
						</p>
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
								Contact Me
							</AniLink>
							<a
								className="btn btn-black"
								aria-label="View and download resume."
								role="button"
								href={previewData}
								target="_blank"
								rel="noopener noreferrer"
							>
								Download Resume
							</a>
						</ActionPanel>
					</Article>
				</div>
				<div className="col-md-6">
					<Frame className="mt-4 mt-md-0">
						<iframe
							src={resumeData}
							width="640"
							height="550"
							scrolling="no"
							title="Adenekan Peace Resumé"
						/>
					</Frame>
				</div>
			</div>
		</Layout>
	);
};

const Frame = styled.aside`
	iframe {
		width: 100%;
		border: none;
	}
	.docs-gm #docs-editor,
	.docs-gm #docs-editor-container {
		background: white !important;
	}
`;

export default ResumePage;
