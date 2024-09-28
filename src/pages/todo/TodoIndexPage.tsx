import {Outlet} from "react-router-dom";
import Basiclayout from "../../layout/Basiclayout.tsx";

function TodoIndexPage() {
    return (
        <Basiclayout>
            <div> Todo Index Page</div>

            <div>
                <Outlet></Outlet>
            </div>

        </Basiclayout>


)
    ;
}

export default TodoIndexPage;
