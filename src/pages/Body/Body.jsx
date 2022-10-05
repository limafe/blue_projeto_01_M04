import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Characters } from "../Characters/Characters";

export function Body({ page }) {
  function changePage() {
    switch (page) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "characters":
        return <Characters />;
    }
  }

  return <div className="Body">{changePage()}</div>;
}
