import { Fragment, h } from 'preact';
import ChildComponent from '../../components/child-component';
import style from './style.css';

const Home = () => (
	<Fragment>
	<div class={style.home}>
		<h1 class='home'>Home</h1>
		<ChildComponent />
		<p>This is the Home component.</p>
	</div>
	<style jsx>{`
	h1 {
		color: blue;
	}
	.home {
		color: yellow;
	}
	`}</style>
	</Fragment>
);

export default Home;
