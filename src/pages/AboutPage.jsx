import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This project</h1>
        <p>This is a project I built to learn React.</p>
        <p>Version 1.0.0</p>
        <p>
          <Link to="/">Go back</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
