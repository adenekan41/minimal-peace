import React from 'react';
import { Link } from 'gatsby';
import { Article, ActionPanel } from './';
import Layout from '../components/layout/index';

const ProjectsPage = () => (
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
						View each projects with their documentation on my notion document
					</h5>
					<p>
						Brand Identity Design, Leadership, Communication, Team Integration,
						Empathy, Collaboration, Open-mindedness, Critical Thinking,
						Professionalism, Problem Solving, Adaptability, Accountability,
						Approachability{' '}
					</p>
					<article>
						<p></p>
					</article>
					<ActionPanel className="d-md-flex d-block">
						<Link
							className="btn btn-outline-black"
							aria-label="Go To Projects Page."
							role="button"
							to="/contact"
						>
							Say Hi
						</Link>

						<a
							className="btn btn-black"
							aria-label="Go to notion page"
							role="button"
							href="https://www.notion.so/Adenekan-Peace-d3b46c20a1d548458a0b5a4ec831bc45"
							target="_blank"
							rel="noopener noreferrer"
						>
							Take Me to Your Projects
						</a>
					</ActionPanel>
				</Article>
			</div>
		</div>
	</Layout>
);

export default ProjectsPage;
