import * as React from "react";

const PurchaseViewTable = ({formData}) => {
  const formDataDumy = [
    {
      itemName: 'joota',
      itemCode: 'ABCDE',
      category: 'shoes',
      size: '10',
      gstTax:'18',
      salesPrice: '1499',
      purchasePrice: '999'
    },
    {
      itemName: 'joota',
      itemCode: 'ABCDE',
      category: 'shoes',
      size: '10',
      gstTax:'18',
      salesPrice: '1499',
      purchasePrice: '999'
    },
    {
      itemName: 'joota',
      itemCode: 'ABCDE',
      category: 'shoes',
      size: '10',
      gstTax:'18',
      salesPrice: '1499',
      purchasePrice: '999'
    },
  ]
  return (
    <table className="table">
      <thead>
        <tr>
          <th>NO</th>
          <th>ITEM NAME</th>
          <th>Hsn Code</th>
          <th>QTY</th>
          <th>PRICE/ITEM</th>
          <th>DISCOUNT</th>
          <th>GST</th>
          <th>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((row, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{row.itemName}</td>
            <td>{row.itemCode}</td>
            <td>{row.category}</td>
            <td>{row.size}</td>
            <td>{row.gstTax}</td>
            <td>{row.salesPrice}</td>
            <td>{row.purchasePrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PurchaseViewTable;
