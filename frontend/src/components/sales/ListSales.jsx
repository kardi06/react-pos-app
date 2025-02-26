import { Container } from "react-bootstrap"
import NavbarComponent from "../NavbarComponent"
import ListCategory from "./ListCategory"
import ListProduct from "./ListProduct";
import ListOrder from "./ListOrder";


function ListSales() {
  return (
    <>
        <NavbarComponent/>
        <Container fluid>
            <ListCategory/>
            <ListProduct/>
            <ListOrder/>
        </Container>
    </>
  )
}

export default ListSales;