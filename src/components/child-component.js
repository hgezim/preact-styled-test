import { Fragment, h } from 'preact';

const ChildComponent = () => (
    <Fragment>
        <h1>I'm the child header</h1>
        <style jsx>{`
            h1 {
                color: green;
            }`
        }</style>
    </Fragment>
);

export default ChildComponent;
