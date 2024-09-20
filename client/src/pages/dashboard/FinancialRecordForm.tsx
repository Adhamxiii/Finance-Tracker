import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useFinancialRecords } from "../../contexts/financialRecordContext";

const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const { addRecord } = useFinancialRecords();

  const { user } = useUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description,
      amount,
      category,
      paymentMethod,
    };

    addRecord(newRecord);

    setDescription("");
    setAmount(0);
    setCategory("");
    setPaymentMethod("");
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="">Description:</label>
          <input
            type="text"
            id=""
            name=""
            required
            className="input"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="form-field">
          <label htmlFor="">Amount:</label>
          <input
            type="number"
            id=""
            name=""
            required
            className="input"
            onChange={(e) => setAmount(Number(e.target.value))}
            value={amount}
          />
        </div>
        <div className="form-field">
          <label htmlFor="">Category:</label>
          <select
            id=""
            name=""
            required
            className="input"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="salary">Salary</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="">Payment Method:</label>
          <select
            id=""
            name=""
            required
            className="input"
            onChange={(e) => setPaymentMethod(e.target.value)}
            value={paymentMethod}
          >
            <option value="">Select Payment Method</option>
            <option value="cash">Cash</option>
            <option value="credit-card">Credit Card</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="button">
          Add Record
        </button>
      </form>
    </div>
  );
};

export default FinancialRecordForm;
