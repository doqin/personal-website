import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => (
    <Layout>
        <section className="dq-panel centered">
            <h1 className="dq-panel__title">Error 404</h1>
            <p>The page you were looking for could not be found on this system.</p>
            <div className="actions">
                <Link to="/" className="dq-btn dq-btn--primary">Back home</Link>
            </div>
        </section>
    </Layout>
);

export default NotFound;
