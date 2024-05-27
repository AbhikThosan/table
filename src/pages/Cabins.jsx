import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

function Cabins() {
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <div>
          <Input onChange={handleSearch} type="text" id="search" />
          <Button>
            <IoSearch />
          </Button>
        </div>
      </Row>
      <Row>
        <CabinTable searchTerm={searchTerm} />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
