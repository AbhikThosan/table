import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { IoSearch } from "react-icons/io5";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <div>
          <Input type="text" id="search" />
          <Button>
            <IoSearch />
          </Button>
        </div>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
