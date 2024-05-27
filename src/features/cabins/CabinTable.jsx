import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import { FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  justify-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const TableHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center align the content */
`;

const HeaderSpan = styled.span`
  padding-right: 0.5rem; /* Adjust padding as needed */
`;

function CabinTable({ searchTerm }) {
  const { isLoading, cabins = [] } = useCabins();
  const [sortedCabins, setSortedCabins] = useState([]);
  const [capacityLowtoHigh, setCapacityLowtoHigh] = useState(true);
  const [priceLowtoHigh, setPriceLowtoHigh] = useState(true);
  const [discountLowtoHigh, setDiscountLowtoHigh] = useState(true);

  console.log(searchTerm);

  useEffect(() => {
    setSortedCabins(cabins);
  }, [cabins]);

  function sort(cabins, sortBy, lowToHigh) {
    function compare(a, b) {
      if (a[sortBy] === undefined) return 1;
      if (b[sortBy] === undefined) return -1;
      if (lowToHigh) {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    }
    const sortedCabins = [...cabins].sort(compare);
    return sortedCabins;
  }

  function handleCapacitySort() {
    const order = !capacityLowtoHigh;
    setCapacityLowtoHigh(order);
    const sorted = sort(cabins, "maxCapacity", order);
    setSortedCabins(sorted);
    console.log(sorted);
  }

  function handlePriceSort() {
    const order = !priceLowtoHigh;
    setPriceLowtoHigh(order);
    const sorted = sort(cabins, "regularPrice", order);
    setSortedCabins(sorted);
    console.log(sorted);
  }

  function handleDiscountSort() {
    const order = !discountLowtoHigh;
    setDiscountLowtoHigh(order);
    const sorted = sort(cabins, "discount", order);
    setSortedCabins(sorted);
    console.log(sorted);
  }

  useEffect(() => {
    const searchReasults = cabins.filter((sinlgeData) =>
      sinlgeData.name.includes(searchTerm)
    );
    console.log(searchReasults);
    setSortedCabins(searchReasults);
  }, [searchTerm]);

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <TableHeaderItem>
          <HeaderSpan>Capacity</HeaderSpan>
          <Button onClick={handleCapacitySort}>
            {capacityLowtoHigh ? <FaSortAmountDownAlt /> : <FaSortAmountDown />}
          </Button>
        </TableHeaderItem>
        <TableHeaderItem>
          <HeaderSpan>Price</HeaderSpan>
          <Button onClick={handlePriceSort}>
            {priceLowtoHigh ? <FaSortAmountDownAlt /> : <FaSortAmountDown />}
          </Button>
        </TableHeaderItem>
        <TableHeaderItem>
          <HeaderSpan>Discount</HeaderSpan>
          <Button onClick={handleDiscountSort}>
            {discountLowtoHigh ? <FaSortAmountDownAlt /> : <FaSortAmountDown />}
          </Button>
        </TableHeaderItem>
        <div></div>
      </TableHeader>
      {sortedCabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
