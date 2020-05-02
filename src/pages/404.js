import React from 'react';
import { Link } from 'gatsby';
import { Article, ActionPanel } from './';
import Layout from '../components/layout/index';

const NotFoundPage = () => (
	<Layout title="404" pageMask="404" description="Page Not Found.">
		<div className="row">
			<div className="col-md-6">
				<Article>
					<h1>404</h1>

					<p>PAGE NOT FOUND.</p>
					<ActionPanel className="d-md-flex d-block">
						<Link
							className="btn btn-outline-black"
							aria-label="Go To Projects Page."
							role="button"
							to="/"
						>
							Back To Home
						</Link>
					</ActionPanel>
				</Article>
			</div>
		</div>
	</Layout>
);

export default NotFoundPage;
