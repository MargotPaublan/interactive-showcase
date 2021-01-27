
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gear } from 'react-bootstrap-icons';

import {Link} from "react-router-dom";


const ShowcaseEditor = () => {
  return (
    <div className="ShowcaseEditor">
        <Link to="/"><Button variant="light"><Gear/></Button></Link>
        <h1>Showcase editor</h1>
    </div>
  );
}

export default ShowcaseEditor;
