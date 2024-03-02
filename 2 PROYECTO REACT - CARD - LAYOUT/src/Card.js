import { Link } from "react-router-dom";
import { SkillList } from "./SkillList";
import { Intro } from "./Intro";
import { Avatar } from "./Avatar";

function Card() {
  return (
    <>
      <div className="card">
        <Avatar rutaImagen="gatos.png" />
        <div className="data">
          <Intro
            titulo="CARD 1"
            descripcion="loreIn tempor duis ad proident excepteur. Adipisicing exercitation aliquip eiusmod ullamco voluptate. Proident enim tempor deserunt quis ullamco culpa esse eiusmod. Laboris minim dolore mollit aute aliqua culpa laborum est enim nostrud officia irure. "
          />
          <SkillList />
        </div>
      </div>
      <Link to="/probando">Página 2</Link>
    </>
  );
}

export default Card;
