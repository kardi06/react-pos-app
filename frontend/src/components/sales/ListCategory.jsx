import { useSelector } from "react-redux"


function ListCategory() {
    const categorys = useSelector((state) => state.category.data);
    const loading = useSelector((state) => state.category.loading);
    return (
        <div>
            ListCategory
        </div>
    )
}

export default ListCategory