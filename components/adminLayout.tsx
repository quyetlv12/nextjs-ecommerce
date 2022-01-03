import { ReactNode } from "react";

type Props = {
    chidren? : ReactNode
}
const AdminLayout = ({chidren}:Props) => {
    return (
        <div>
           {chidren}
        </div>
    );
}

export default AdminLayout;