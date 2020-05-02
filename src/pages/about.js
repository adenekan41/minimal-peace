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
					<h1>About Me</h1>
					<h5>
						A 2 year + Product Designer, Visual/Graphic Designer and Brand
						Analyst. Born in Lagos, Nigeria.
					</h5>
					<p>
						Hi My name is Adenekan Peace, I am a lover of pure human design
						derieved from critical reasearch and detailed implementation of
						compiled result. With a hot cup of coffee every morning and a
						chilled pet bottle of soda by noon, I tackle my daily design
						challenge hoping one day the experince being implemented in my
						designs can change the world. Yeah I almost forgot my pack of
						maryland cookies and the soomth feel of soft jazz music that takes
						me to another planet and charge my brain to climax.
						<br />
						<br />
						Yes I am Peace, I am not wierd, I am just a creator, a firece
						creator of my own world of design I can interact with. I build User
						Interface Designs, Photomanipulations, Web banners, Graphics, Logos,
						Branding and many more, all to suit the visual of your user. A trial
						can be convincing enough.
					</p>
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
