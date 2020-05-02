import React from 'react';
import { Link } from 'gatsby';
import { Article, ActionPanel } from './';
import Layout from '../components/layout/index';

const AboutPage = () => (
	<Layout
		title="About Me"
		pageMask="About"
		description="A 2 year + Product Designer, Visual/Graphic Designer and Brand Analyst.
  Born in Lagos, Nigeria."
	>
		<div className="row">
			<div className="col-md-6">
				<Article>
					<h1>Projects</h1>
					<h5>View each projects with their documentation</h5>
					<article>
						<p></p>
					</article>
					<ActionPanel className="d-md-flex d-block">
						<Link
							className="btn btn-outline-black"
							aria-label="Go To Projects Page."
							role="button"
						>
							View Projects
						</Link>
						<Link
							className="btn btn-black"
							aria-label="View and download resume."
							role="button"
						>
							Download Resume
						</Link>
					</ActionPanel>
				</Article>
			</div>
		</div>
	</Layout>
);

export default AboutPage;
