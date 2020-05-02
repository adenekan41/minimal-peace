import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/index';

const IndexPage = () => (
	<Layout title="Home">
		<div className="row">
			<div className="col-md-6">
				<Article>
					<h1>
						Hi, I'm <br /> Adenekan Peace
					</h1>
					<p>
						Product Designer, Visual Designer and Brand Analyst, Lagos, Nigeria.
					</p>
					<h5>
						I believe design psychology and extensive/detailed research can be
						used to create stunning interfaces that user can easily interact
						with user no matter the Design Techniclaity. I call it{' '}
						<b>Conceptual Minimalism.</b>
					</h5>
					<ActionPanel className="d-md-flex d-block">
						<Link className="btn btn-outline-black">View Projects</Link>
						<Link className="btn btn-black">Download Resume</Link>
					</ActionPanel>
				</Article>
			</div>
		</div>
	</Layout>
);

const Article = styled.article`
	h1 {
		color: var(--cw);
		font-size: 54px;
		font-weight: 900;

		letter-spacing: -1.3px;
		line-height: 59px;
	}
	p {
		color: var(--gray);
		font-weight: 300;
		letter-spacing: 0;
		line-height: 16px;
		font-size: 14px;
		margin: 1.5rem 0;
	}
	h5 {
		opacity: 0.99;
		color: var(--article-color);

		font-size: 16px;
		font-weight: 500;
		letter-spacing: 0;
		line-height: 1.65;
	}
`;

const ActionPanel = styled.div`
	margin-top: 1.5rem;
	a {
		padding: 10px 25px;
		font-weight: 400;
		margin-right: 0.8rem;
	}
`;

export default IndexPage;
